import urllib2

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
	reference_name = display_name.replace(',','').split()
	if len(reference_name) == 1:
		reference_name = ''.join(reference_name).lower()
	else:
		first_word = reference_name[0].lower()
		other_words = ''.join(reference_name[1:])
		reference_name = first_word + other_words
	page = page[display_name_end:]

	page = page[page.find('<tr>', display_name_end):]
	return reference_name, display_name, page

def get_some_feats(page, n):
	feats = []
	i = 0
	while i < n:
		reference_name, display_name, page = get_next_feat(page)
		new_feat = Feat(reference_name, display_name)
		feats.append(new_feat)
		i += 1
	return feats

def print_feats(feats):
	for feat in feats:
		print feat.reference_name, feat.display_name, feat.benefits_short

core_feats_url = "http://paizo.com/pathfinderRPG/prd/coreRulebook/feats.html"
core_feats_page = get_page(core_feats_url)

print_feats(get_some_feats(core_feats_page, 10))





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