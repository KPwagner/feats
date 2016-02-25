import urllib2
import re

bad_feats = ['Armor Proficiency, Light', 'Armor Proficiency, Medium']

class Feat:
	def __init__(self,
		reference_name='',
		display_name='',
		feat_prerequisites=[],
		non_feat_prerequisites=[],
		builds_into=[],
		benefits_short=''):
		self.reference_name = reference_name
		self.display_name = display_name
		self.feat_prerequisites = feat_prerequisites
		self.non_feat_prerequisites = non_feat_prerequisites
		self.builds_into = builds_into
		self.benefits_short = benefits_short

def get_page(url):
	req = urllib2.Request(url)
	response = urllib2.urlopen(req)
	page = response.read()
	start = page.find('</thead>')
	page = page[start:]
	print 'Response Status Code for ' + str(url) + ': ' + str(response.getcode())
	return page

def get_next_feat(page):
	display_name_start = page.find('>', page.find('<td'))+1
	display_name_end = page.find('</t', display_name_start)
	display_name = page[display_name_start:display_name_end]
	# print display_name_start, display_name_end, display_name
	display_name = re.sub(r'<a.*?>|</a>|\*','',display_name)
	display_name = display_name.lstrip('&nbsp;')
	# display_name_start > 200 or display_name_end - display_name_start > 100 or
	if (display_name_start > 200 or display_name_end == -1 or len(display_name) > 50):
		return None
	reference_name = ''
	reference_name = display_name.replace(',','').split()
	if len(reference_name) == 1:
		reference_name = ''.join(reference_name).lower()
	else:
		first_word = reference_name[0].lower()
		other_words = ''.join(reference_name[1:])
		reference_name = first_word + other_words
	page = page[display_name_end:]

	feat_prerequisites = []
	non_feat_prerequisites = []
	prerequisites_data_start = page.find('>', page.find('<td'))+1
	prerequisites_data_end = page.find('</t', prerequisites_data_start)
	prerequisites_data_all = page[prerequisites_data_start:prerequisites_data_end]
	if prerequisites_data_all == '&mdash;':
		# no prerequisites
		pass
	else:
		non_feat_prerequisites.append(prerequisites_data_all)

	page = page[prerequisites_data_end:]

	benefits_short_start = page.find('>',page.find('<td')+3)+1
	benefits_short_end = page.find('</td>',benefits_short_start)
	benefits_short = page[benefits_short_start:benefits_short_end]
	benefits_short = re.sub(r'<a.*?>|</a>|<i>|</i>','',benefits_short)
	page = page[benefits_short_end:]
	return reference_name, display_name, feat_prerequisites, non_feat_prerequisites, benefits_short, page

def get_some_feats(page, max_iterations=1000):
	feats = []
	i = 0
	while i < max_iterations:
		next_feat = get_next_feat(page)
		if next_feat == None:
			break
		reference_name, display_name, feat_prerequisites, non_feat_prerequisites, benefits_short, page = next_feat
		new_feat = Feat(reference_name=reference_name,
			display_name=display_name,
			feat_prerequisites=feat_prerequisites,
			non_feat_prerequisites=non_feat_prerequisites,
			benefits_short=benefits_short)
		feats.append(new_feat)
		i += 1
	return feats

def get_all_feats(url_list):
	feats = []
	feat_names = []
	for url in url_list:
		page = get_page(url)
		feats_list = get_some_feats(page)
		for feat in feats_list:
			feats.append(feat)
	for feat in feats:
		feat_names.append(feat.display_name)
	for feat_index, feat in enumerate(feats):
		prerequisites = []
		feat_prerequisites = []
		non_feat_prerequisites = []
		if feat.non_feat_prerequisites:
			#removing <a> tags
			all_prerequisites = re.sub(r'<a.*?>|</a>|\*','',feat.non_feat_prerequisites[0])
			for bad_feat_index, bad_feat in enumerate(bad_feats):
				#check if all_prerequisites contains a "bad feat"
				if all_prerequisites.find(bad_feats[bad_feat_index]) == -1:
					pass
				else:
					#adds proper "bad feat" to list and removes from all_prereq string
					prerequisites.append(bad_feats[bad_feat_index])
					all_prerequisites = all_prerequisites.replace(bad_feats[bad_feat_index], '')
			if all_prerequisites:
				all_prerequisites_list = all_prerequisites.split(', ')
				for pre in all_prerequisites_list:
					if pre:
						prerequisites.append(pre)
		for pre in prerequisites:
			if pre in feat_names:
				feat_prerequisites.append(pre)
			else:
				non_feat_prerequisites.append(pre)

		feats[feat_index].feat_prerequisites = feat_prerequisites
		feats[feat_index].non_feat_prerequisites = non_feat_prerequisites

	for i, feat in enumerate(feats):
		builds_into = []
		feat_display_name = feat.display_name
		for feat in feats:
			if feat_display_name in feat.feat_prerequisites:
				builds_into.append(feat.reference_name)
		feats[i].builds_into = builds_into

	return feats

def print_feats(feats):
	for feat in feats:
		print feat.reference_name, feat.display_name, feat.feat_prerequisites, feat.non_feat_prerequisites, feat.builds_into, feat.benefits_short

def write_feats(feats):
	file = open("feats.txt", 'w')
	for feat in feats:
		# feat_text = feat.reference_name, feat.display_name, feat.feat_prerequisites, feat.non_feat_prerequisites, feat.builds_into, feat.benefits_short
		file.write((feat.non_feat_prerequisites[0] if feat.non_feat_prerequisites  else "No Prerequisites") + '\n')
	file.close()

core_feats_url = "http://paizo.com/pathfinderRPG/prd/coreRulebook/feats"
# core_feats_page = get_page(core_feats_url)

apg_feats_url = "http://paizo.com/pathfinderRPG/prd/advancedPlayersGuide/advancedFeats"
# apg_feats_page = get_page(apg_feats_url)

acg_feats_url = "http://paizo.com/pathfinderRPG/prd/advancedClassGuide/feats"
# acg_feats_page = get_page(acg_feats_url)

# feats = get_some_feats(core_feats_page)

urls = [core_feats_url, apg_feats_url, acg_feats_url]
feats = get_all_feats(urls)
# feats[5].non_feat_prerequisites = ['test']
print_feats(feats)
# write_feats(feats)

feat_template = """
	"%feat%" : {
		"name": "%name%",
		"featPrerequisites": %featPrerequisites%,
		"nonFeatPrerequisites": %nonFeatPrerequisites%,
		"buildsInto": %buildsInto%,
		"benefitsShort": "%buildsInto%"
	},
"""
feats_json = "var feats = {" + feat_template + "}"


