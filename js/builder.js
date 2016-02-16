$(function(){
	var featDiv = "<div class='feat' id='%id%'><h2>%name%</h2><p>%nonFeatPrerequisites%</p><p>%benefitsShort%</p></div>"
	var buildLink = '<a href="">See Build Path</a>'



	for (feat in feats) {
		if (feats[feat]["featPrerequisites"] == false) {
			var id, name, nonFeatPrerequisites, benefitsShort, formattedFeat;
			id = feat;
			name = feats[feat]["name"];
			nonFeatPrerequisites = feats[feat]["nonFeatPrerequisites"][0];
			benefitsShort = feats[feat]["benefitsShort"];

			formattedFeat = featDiv
			.replace("%id%", id)
			.replace("%name%", name)
			.replace("%nonFeatPrerequisites%", nonFeatPrerequisites)
			.replace("%benefitsShort%", benefitsShort);

			$("#main").append(formattedFeat);

			if (feats[feat]["buildsInto"][0]) {
				$("#"+id).append(buildLink);
			}
		}
	}
});