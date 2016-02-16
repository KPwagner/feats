$(function(){
	var featDiv = "<div class='feat'><h2>%name%</h2><p>%prerequisites%</p><p>%benefitsShort%</p></div>"

	for (feat in feats) {
		var name, prerequisites, benefitsShort, formattedFeat;
		name = feats[feat]["name"];
		prerequisites = feats[feat]["prerequisites"];
		benefitsShort = feats[feat]["benefitsShort"];

		formattedFeat = featDiv
		.replace("%name%", feats[feat]["name"])
		.replace("%prerequisites%", feats[feat]["prerequisites"])
		.replace("%benefitsShort%", feats[feat]["benefitsShort"]);

		$("#main").append(formattedFeat);
	}
});