import json

feat_data = {
	"arcaneArmorTraining" : {
		"displayName": "Arcane Armor Training",
		"featPrerequisites": ['Armor Proficiency, Light'],
		"nonFeatPrerequisites": ['caster level 3rd'],
		"buildsInto": ['arcaneArmorMastery'],
		"benefitsShort": "Reduce your arcane spell failure chance by 10%"
	},
	"arcaneArmorMastery" : {
		"displayName": "Arcane Armor Mastery",
		"featPrerequisites": ['Armor Proficiency, Medium', 'Arcane Armor Training'],
		"nonFeatPrerequisites": ['caster level 7th'],
		"buildsInto": [],
		"benefitsShort": "Reduce your arcane spell failure chance by 20%"
	}
}

print json.dumps(feat_data)