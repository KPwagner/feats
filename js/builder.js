$(function(){
	var featDiv = "<div class='feat' id='%id%'><h2>%name%</h2><p>%nonFeatPrerequisites%</p><p>%benefitsShort%</p></div>"
	var buildIntoFeatDiv = "<div class='build-into-feat' id='%id%'><h2>%name%</h2><p>%nonFeatPrerequisites%</p><p>%benefitsShort%</p></div>"
	var buildLink = '<a href="">See Build Path</a>'



	for (feat in feats) {
		if (feats[feat]["featPrerequisites"] == false) {
			var id, name, nonFeatPrerequisites, benefitsShort, formattedFeat;
			id = feat;
			name = feats[feat]["name"];
			nonFeatPrerequisites = feats[feat]["nonFeatPrerequisites"];
			if (nonFeatPrerequisites == false) {
				nonFeatPrerequisites = "No Prerequisites";
			}
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
			for (buildIntoFeat in feats[feat]["buildsInto"]){
				var buildIntoId, name, nonFeatPrerequisites, benefitsShort;

				buildIntoId = feats[feat]["buildsInto"][buildIntoFeat];
				name = feats[buildIntoId]["name"];
				nonFeatPrerequisites = feats[buildIntoId]["nonFeatPrerequisites"];
				if (nonFeatPrerequisites == false) {
					nonFeatPrerequisites = "No Prerequisites";
				}
				benefitsShort = feats[buildIntoId]["benefitsShort"];

				formattedFeat = buildIntoFeatDiv
				.replace("%id%", buildIntoId)
				.replace("%name%", name)
				.replace("%nonFeatPrerequisites%", nonFeatPrerequisites)
				.replace("%benefitsShort%", benefitsShort);

				$("#" + id).append(formattedFeat);
				if (feats[buildIntoId]["buildsInto"][0]) {
					$("#"+buildIntoId).append(buildLink);
				}
				for (i in feats[buildIntoId]["buildsInto"]){
					console.log(feats[buildIntoId]["buildsInto"]);
				}
			}
		}
	}
});