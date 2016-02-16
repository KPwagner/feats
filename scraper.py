import urllib2

def get_page(url):
	req = urllib2.Request(url)
	response = urllib2.urlopen(req)
	page = response.read()
	start = page.find('Table: Feats')
	page = page[start:]
	# print 'Response Status Code for ' + str(url) + ': ' + str(response.getcode())
	return page

core_feats_url = "http://paizo.com/pathfinderRPG/prd/coreRulebook/feats.html"

print get_page(core_feats_url)