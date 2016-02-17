import urllib2
import re

class Feat:
	def __init__(self,
		reference_name='',
		display_name='',
		feat_prerequisites='',
		non_feat_prerequisites='',
		benefits_short=''):
		self.reference_name = reference_name
		self.display_name = display_name
		self.feat_prerequisites = feat_prerequisites
		self.non_feat_prerequisites = non_feat_prerequisites
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
	display_name_start = page.find('>', page.find('<td><a')+8)+1
	display_name_end = page.find('<', display_name_start)
	display_name = page[display_name_start:display_name_end].lstrip('&nbsp;')
	print display_name

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
	prerequisites_data_end = page.find('</td>', prerequisites_data_start)
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
					#prerequisite is a feat
					feat_prerequisites.append(prereq_all)
					next_prerequisite = prerequisites_data_all.find(',', prereq_end)
					if next_prerequisite == -1:
						#this was the last prerequisite
						prerequisites_data_all = ''
					else:
						#there is at least one more prerequisite
						prerequisites_data_all = prerequisites_data_all[next_prerequisite:]
				else:
					#prerequisite is an ability
					next_prerequisite = prerequisites_data_all.find(',')
					if next_prerequisite == -1:
						#prerequisite is the only one
						prereq_all = prerequisites_data_all[prereq_start:]
						prereq_all = prereq_all.replace('</a>','')
						non_feat_prerequisites.append(prereq_all)
						prerequisites_data_all = ''
					else:
						#there is at least on more prerequisite
						prereq_all = prerequisites_data_all[prereq_start:prerequisites_data_all.find(',')]
						prereq_all = prereq_all.replace('</a>','')
						non_feat_prerequisites.append(prereq_all)
						prerequisites_data_all = prerequisites_data_all[next_prerequisite:]
			else:
				# prerequisites do not contain a link; something other than a feat or ability score
				prerequisites_data_all = re.sub(r'<a.*?>|</a>','',prerequisites_data_all)
				non_feat_prerequisites.append(prerequisites_data_all)
				prerequisites_data_all = ''

	benefits_short = ''
	page = page[page.find('<tr>', display_name_end):]
	return reference_name, display_name, feat_prerequisites, non_feat_prerequisites, page

def get_some_feats(page, n):
	feats = []
	i = 0
	while i < n:
		reference_name, display_name, feat_prerequisites, non_feat_prerequisites, page = get_next_feat(page)
		new_feat = Feat(reference_name, display_name, feat_prerequisites, non_feat_prerequisites)
		feats.append(new_feat)
		i += 1
	return feats

def print_feats(feats):
	for feat in feats:
		print feat.reference_name, feat.display_name, feat.feat_prerequisites, feat.non_feat_prerequisites

core_feats_url = "http://paizo.com/pathfinderRPG/prd/coreRulebook/feats.html"
core_feats_page = get_page(core_feats_url)

print_feats(get_some_feats(core_feats_page, 200))





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