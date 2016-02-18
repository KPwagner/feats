import urllib2
import re

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
	# print 'Response Status Code for ' + str(url) + ': ' + str(response.getcode())
	return page

def get_next_feat(page):
	display_name_start = page.find('>', page.find('<td'))+1
	display_name_end = page.find('</t', display_name_start)
	display_name = page[display_name_start:display_name_end]
	display_name = re.sub(r'<a.*?>|</a>|\*','',display_name)
	display_name = display_name.lstrip('&nbsp;')
	print display_name_start, display_name_end
	if display_name_start > 200:
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
		while prerequisites_data_all:
			prerequisites_data_all = prerequisites_data_all.lstrip(', ')
			if prerequisites_data_all.find('<a', 0, 3) != -1:
				# prerequisites contain a link; either another feat or an ability score
				prereq_start = prerequisites_data_all.find('>')+1
				prereq_end = prerequisites_data_all.find('</a>',prereq_start)
				prereq_all = prerequisites_data_all[prereq_start:prereq_end]
				if len(prereq_all) > 3:
					# prerequisite is a feat
					feat_prerequisites.append(prereq_all)
					next_prerequisite = prerequisites_data_all.find(',', prereq_end)
					if next_prerequisite == -1:
						# this was the last prerequisite
						prerequisites_data_all = ''
					else:
						# there is at least one more prerequisite
						prerequisites_data_all = prerequisites_data_all[next_prerequisite:]
				else:
					# prerequisite is an ability
					next_prerequisite = prerequisites_data_all.find(',')
					if next_prerequisite == -1:
						# prerequisite is the only one
						prereq_all = prerequisites_data_all[prereq_start:]
						prereq_all = prereq_all.replace('</a>','')
						non_feat_prerequisites.append(prereq_all)
						prerequisites_data_all = ''
					else:
						# there is at least on more prerequisite
						prereq_all = prerequisites_data_all[prereq_start:prerequisites_data_all.find(',')]
						prereq_all = prereq_all.replace('</a>','')
						non_feat_prerequisites.append(prereq_all)
						prerequisites_data_all = prerequisites_data_all[next_prerequisite:]
			else:
				# prerequisites do not contain a link; something other than a feat or ability score
				prerequisites_data_all = re.sub(r'<a.*?>|</a>','',prerequisites_data_all)
				non_feat_prerequisites.append(prerequisites_data_all)
				prerequisites_data_all = ''
	page = page[prerequisites_data_end:]

	benefits_short_start = page.find('>',page.find('<td')+3)+1
	benefits_short_end = page.find('</td>',benefits_short_start)
	benefits_short = page[benefits_short_start:benefits_short_end]
	benefits_short = re.sub(r'<a.*?>|</a>','',benefits_short)
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
	# adds proper 'builds_into' list
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

core_feats_url = "http://paizo.com/pathfinderRPG/prd/coreRulebook/feats.html"
core_feats_page = get_page(core_feats_url)

apg_feats_url = "http://paizo.com/pathfinderRPG/prd/advancedClassGuide/feats.html"
apg_feats_page = get_page(apg_feats_url)

feats = get_some_feats(core_feats_page, 10)
print_feats(feats)


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

# file = open("feats.txt", 'w')
# file.write(feats_json)
# file.close()