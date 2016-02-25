var feats = {
"acrobatic" : {
    "benefitsShort": "+2 bonus on Acrobatics and Fly checks",
    "buildsInto": [
        "kickUp"
    ],
    "featPrerequisites": [],
    "name": "Acrobatic",
    "nonFeatPrerequisites": []
},
"agileManeuvers" : {
    "benefitsShort": "Use your Dex bonus when calculating your CMB",
    "buildsInto": [
        "underandOver"
    ],
    "featPrerequisites": [],
    "name": "Agile Maneuvers",
    "nonFeatPrerequisites": []
},
"alertness" : {
    "benefitsShort": "+2 bonus on Perception and Sense Motive checks",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Alertness",
    "nonFeatPrerequisites": []
},
"alignmentChannel" : {
    "benefitsShort": "Channel energy can heal or harm outsiders",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Alignment Channel",
    "nonFeatPrerequisites": [
        "Channel energy class feature"
    ]
},
"animalAffinity" : {
    "benefitsShort": "+2 bonus on Handle Animal and Ride checks",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Animal Affinity",
    "nonFeatPrerequisites": []
},
"arcaneArmorTraining" : {
    "benefitsShort": "Reduce your arcane spell failure chance by 10%",
    "buildsInto": [
        "arcaneArmorMastery"
    ],
    "featPrerequisites": [
        "Armor Proficiency, Light"
    ],
    "name": "Arcane Armor Training",
    "nonFeatPrerequisites": [
        "caster level 3rd"
    ]
},
"arcaneArmorMastery" : {
    "benefitsShort": "Reduce your arcane spell failure chance by 20%",
    "buildsInto": [],
    "featPrerequisites": [
        "Armor Proficiency, Medium",
        "Arcane Armor Training"
    ],
    "name": "Arcane Armor Mastery",
    "nonFeatPrerequisites": [
        "caster level 7th"
    ]
},
"arcaneStrike" : {
    "benefitsShort": "+1 damage and weapons are considered magic",
    "buildsInto": [
        "bloodedArcaneStrike",
        "rivingStrike"
    ],
    "featPrerequisites": [],
    "name": "Arcane Strike",
    "nonFeatPrerequisites": [
        "Ability to cast arcane spells"
    ]
},
"armorProficiencyLight" : {
    "benefitsShort": "No penalties on attack rolls while wearing light armor",
    "buildsInto": [
        "arcaneArmorTraining",
        "armorProficiencyMedium"
    ],
    "featPrerequisites": [],
    "name": "Armor Proficiency, Light",
    "nonFeatPrerequisites": []
},
"armorProficiencyMedium" : {
    "benefitsShort": "No penalties on attack rolls while wearing medium armor",
    "buildsInto": [
        "arcaneArmorMastery",
        "armorProficiencyHeavy"
    ],
    "featPrerequisites": [
        "Armor Proficiency, Light"
    ],
    "name": "Armor Proficiency, Medium",
    "nonFeatPrerequisites": []
},
"armorProficiencyHeavy" : {
    "benefitsShort": "No penalties on attack rolls while wearing heavy armor",
    "buildsInto": [],
    "featPrerequisites": [
        "Armor Proficiency, Medium"
    ],
    "name": "Armor Proficiency, Heavy",
    "nonFeatPrerequisites": []
},
"athletic" : {
    "benefitsShort": "+2 bonus on Climb and Swim checks",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Athletic",
    "nonFeatPrerequisites": []
},
"augmentSummoning" : {
    "benefitsShort": "Summoned creatures gain +4 Str and Con",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Augment Summoning",
    "nonFeatPrerequisites": [
        "Spell Focus (conjuration)"
    ]
},
"blind-fight" : {
    "benefitsShort": "Reroll miss chances for concealment",
    "buildsInto": [
        "improvedBlind-Fight"
    ],
    "featPrerequisites": [],
    "name": "Blind-Fight",
    "nonFeatPrerequisites": []
},
"catchOff-Guard" : {
    "benefitsShort": "No penalties for improvised melee weapons",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Catch Off-Guard",
    "nonFeatPrerequisites": []
},
"channelSmite" : {
    "benefitsShort": "Channel energy through your attack",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Channel Smite",
    "nonFeatPrerequisites": [
        "Channel energy class feature"
    ]
},
"combatCasting" : {
    "benefitsShort": "+4 bonus on concentration checks for casting defensively",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Combat Casting",
    "nonFeatPrerequisites": []
},
"combatExpertise" : {
    "benefitsShort": "Trade attack bonus for AC bonus",
    "buildsInto": [
        "improvedDisarm",
        "improvedFeint",
        "improvedTrip",
        "whirlwindAttack",
        "gangUp",
        "improvedDirtyTrick",
        "improvedReposition",
        "improvedSteal",
        "secondChance",
        "swiftAid",
        "slayer'sFeint",
        "packFlanking"
    ],
    "featPrerequisites": [],
    "name": "Combat Expertise",
    "nonFeatPrerequisites": [
        "Int 13"
    ]
},
"improvedDisarm" : {
    "benefitsShort": "+2 bonus on disarm attempts, no attack of opportunity",
    "buildsInto": [
        "greaterDisarm",
        "disarmingStrike"
    ],
    "featPrerequisites": [
        "Combat Expertise"
    ],
    "name": "Improved Disarm",
    "nonFeatPrerequisites": []
},
"greaterDisarm" : {
    "benefitsShort": "Disarmed weapons are knocked away from your enemy",
    "buildsInto": [],
    "featPrerequisites": [
        "Improved Disarm"
    ],
    "name": "Greater Disarm",
    "nonFeatPrerequisites": [
        "base attack bonus +6"
    ]
},
"improvedFeint" : {
    "benefitsShort": "Feint as a move action",
    "buildsInto": [
        "greaterFeint"
    ],
    "featPrerequisites": [
        "Combat Expertise"
    ],
    "name": "Improved Feint",
    "nonFeatPrerequisites": []
},
"greaterFeint" : {
    "benefitsShort": "Enemies you feint lose their Dex bonus for 1 round",
    "buildsInto": [],
    "featPrerequisites": [
        "Improved Feint"
    ],
    "name": "Greater Feint",
    "nonFeatPrerequisites": [
        "base attack bonus +6"
    ]
},
"improvedTrip" : {
    "benefitsShort": "+2 bonus on trip attempts, no attack of opportunity",
    "buildsInto": [
        "greaterTrip",
        "<i>ki</i>Throw",
        "trippingStrike",
        "pummelingBully"
    ],
    "featPrerequisites": [
        "Combat Expertise"
    ],
    "name": "Improved Trip",
    "nonFeatPrerequisites": []
},
"greaterTrip" : {
    "benefitsShort": "Enemies you trip provoke attacks of opportunity",
    "buildsInto": [],
    "featPrerequisites": [
        "Improved Trip"
    ],
    "name": "Greater Trip",
    "nonFeatPrerequisites": [
        "base attack bonus +6"
    ]
},
"whirlwindAttack" : {
    "benefitsShort": "Make one melee attack against all foes within reach",
    "buildsInto": [],
    "featPrerequisites": [
        "Combat Expertise",
        "Spring Attack"
    ],
    "name": "Whirlwind Attack",
    "nonFeatPrerequisites": [
        "Dex 13",
        "base attack bonus +4"
    ]
},
"combatReflexes" : {
    "benefitsShort": "Make additional attacks of opportunity",
    "buildsInto": [
        "standStill",
        "bodyguard",
        "combatPatrol",
        "teleportTactician",
        "counterpunch"
    ],
    "featPrerequisites": [],
    "name": "Combat Reflexes",
    "nonFeatPrerequisites": []
},
"standStill" : {
    "benefitsShort": "Stop enemies from moving past you",
    "buildsInto": [],
    "featPrerequisites": [
        "Combat Reflexes"
    ],
    "name": "Stand Still",
    "nonFeatPrerequisites": []
},
"commandUndead" : {
    "benefitsShort": "Channel energy can be used to control undead",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Command Undead",
    "nonFeatPrerequisites": [
        "Channel negative energy class feature"
    ]
},
"criticalFocus" : {
    "benefitsShort": "+4 bonus on attack rolls made to confirm critical hits",
    "buildsInto": [
        "bleedingCritical",
        "blindingCritical",
        "deafeningCritical",
        "sickeningCritical",
        "staggeringCritical",
        "tiringCritical",
        "cripplingCritical"
    ],
    "featPrerequisites": [],
    "name": "Critical Focus",
    "nonFeatPrerequisites": [
        "Base attack bonus +9"
    ]
},
"bleedingCritical" : {
    "benefitsShort": "Whenever you score a critical hit, the target takes 2d6 bleed",
    "buildsInto": [],
    "featPrerequisites": [
        "Critical Focus"
    ],
    "name": "Bleeding Critical",
    "nonFeatPrerequisites": [
        "base attack bonus +11"
    ]
},
"blindingCritical" : {
    "benefitsShort": "Whenever you score a critical hit, the target is blinded",
    "buildsInto": [],
    "featPrerequisites": [
        "Critical Focus"
    ],
    "name": "Blinding Critical",
    "nonFeatPrerequisites": [
        "base attack bonus +15"
    ]
},
"criticalMastery" : {
    "benefitsShort": "Apply two effects to your critical hits",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Critical Mastery",
    "nonFeatPrerequisites": [
        "Any two critical feats",
        "14th-level fighter"
    ]
},
"deafeningCritical" : {
    "benefitsShort": "Whenever you score a critical hit, the target is deafened",
    "buildsInto": [],
    "featPrerequisites": [
        "Critical Focus"
    ],
    "name": "Deafening Critical",
    "nonFeatPrerequisites": [
        "base attack bonus +13"
    ]
},
"sickeningCritical" : {
    "benefitsShort": "Whenever you score a critical hit, the target is sickened",
    "buildsInto": [],
    "featPrerequisites": [
        "Critical Focus"
    ],
    "name": "Sickening Critical",
    "nonFeatPrerequisites": [
        "base attack bonus +11"
    ]
},
"staggeringCritical" : {
    "benefitsShort": "Whenever you score a critical hit, the target is staggered",
    "buildsInto": [
        "stunningCritical"
    ],
    "featPrerequisites": [
        "Critical Focus"
    ],
    "name": "Staggering Critical",
    "nonFeatPrerequisites": [
        "base attack bonus +13"
    ]
},
"stunningCritical" : {
    "benefitsShort": "Whenever you score a critical hit, the target is stunned",
    "buildsInto": [],
    "featPrerequisites": [
        "Staggering Critical"
    ],
    "name": "Stunning Critical",
    "nonFeatPrerequisites": [
        "base attack bonus +17"
    ]
},
"tiringCritical" : {
    "benefitsShort": "Whenever you score a critical hit, the target is fatigued",
    "buildsInto": [
        "exhaustingCritical"
    ],
    "featPrerequisites": [
        "Critical Focus"
    ],
    "name": "Tiring Critical",
    "nonFeatPrerequisites": [
        "base attack bonus +13"
    ]
},
"exhaustingCritical" : {
    "benefitsShort": "Whenever you score a critical hit, the target is exhausted",
    "buildsInto": [],
    "featPrerequisites": [
        "Tiring Critical"
    ],
    "name": "Exhausting Critical",
    "nonFeatPrerequisites": [
        "base attack bonus +15"
    ]
},
"deadlyAim" : {
    "benefitsShort": "Trade ranged attack bonus for damage",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Deadly Aim",
    "nonFeatPrerequisites": [
        "Dex 13",
        "base attack bonus +1"
    ]
},
"deceitful" : {
    "benefitsShort": "+2 bonus on Bluff and Disguise checks",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Deceitful",
    "nonFeatPrerequisites": []
},
"defensiveCombatTraining" : {
    "benefitsShort": "Use your total Hit Dice as your base attack bonus for CMD",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Defensive Combat Training",
    "nonFeatPrerequisites": []
},
"deftHands" : {
    "benefitsShort": "+2 bonus on Disable Device and Sleight of Hand checks",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Deft Hands",
    "nonFeatPrerequisites": []
},
"disruptive" : {
    "benefitsShort": "Increases the DC to cast spells adjacent to you",
    "buildsInto": [
        "spellbreaker",
        "teleportTactician"
    ],
    "featPrerequisites": [],
    "name": "Disruptive",
    "nonFeatPrerequisites": [
        "6th-level fighter"
    ]
},
"spellbreaker" : {
    "benefitsShort": "Enemies provoke attacks if their spells fail",
    "buildsInto": [
        "rayShield",
        "teleportTactician"
    ],
    "featPrerequisites": [
        "Disruptive"
    ],
    "name": "Spellbreaker",
    "nonFeatPrerequisites": [
        "10th-level fighter"
    ]
},
"dodge" : {
    "benefitsShort": "+1 dodge bonus to AC",
    "buildsInto": [
        "mobility",
        "windStance",
        "sidestep",
        "underfoot",
        "anticipateDodge",
        "cannyTumble",
        "jabbingDancer"
    ],
    "featPrerequisites": [],
    "name": "Dodge",
    "nonFeatPrerequisites": [
        "Dex 13"
    ]
},
"mobility" : {
    "benefitsShort": "+4 AC against attacks of opportunity from movement",
    "buildsInto": [
        "springAttack",
        "shotontheRun",
        "combatPatrol",
        "sidestep",
        "underfoot",
        "cannyTumble"
    ],
    "featPrerequisites": [
        "Dodge"
    ],
    "name": "Mobility",
    "nonFeatPrerequisites": []
},
"springAttack" : {
    "benefitsShort": "Move before and after melee attack",
    "buildsInto": [
        "whirlwindAttack"
    ],
    "featPrerequisites": [
        "Mobility"
    ],
    "name": "Spring Attack",
    "nonFeatPrerequisites": [
        "base attack bonus +4"
    ]
},
"windStance" : {
    "benefitsShort": "Gain 20% concealment if you move",
    "buildsInto": [
        "lightningStance"
    ],
    "featPrerequisites": [
        "Dodge"
    ],
    "name": "Wind Stance",
    "nonFeatPrerequisites": [
        "Dex 15",
        "base attack bonus +6"
    ]
},
"lightningStance" : {
    "benefitsShort": "Gain 50% concealment if you move",
    "buildsInto": [],
    "featPrerequisites": [
        "Wind Stance"
    ],
    "name": "Lightning Stance",
    "nonFeatPrerequisites": [
        "Dex 17",
        "base attack bonus +11"
    ]
},
"elementalChannel" : {
    "benefitsShort": "Channel energy can harm or heal elementals",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Elemental Channel",
    "nonFeatPrerequisites": [
        "Channel energy class feature"
    ]
},
"endurance" : {
    "benefitsShort": "+4 bonus on checks to avoid nonlethal damage",
    "buildsInto": [
        "diehard",
        "fastHealer"
    ],
    "featPrerequisites": [],
    "name": "Endurance",
    "nonFeatPrerequisites": []
},
"diehard" : {
    "benefitsShort": "Automatically stabilize and remain conscious below 0 hp",
    "buildsInto": [
        "fastHealer",
        "heroicDefiance",
        "heroicRecovery"
    ],
    "featPrerequisites": [
        "Endurance"
    ],
    "name": "Diehard",
    "nonFeatPrerequisites": []
},
"eschewMaterials" : {
    "benefitsShort": "Cast spells without material components",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Eschew Materials",
    "nonFeatPrerequisites": []
},
"exoticWeaponProficiency" : {
    "benefitsShort": "No penalty on attacks made with one exotic weapon",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Exotic Weapon Proficiency",
    "nonFeatPrerequisites": [
        "Base attack bonus +1"
    ]
},
"extraChannel" : {
    "benefitsShort": "Channel energy two additional times per day",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Extra Channel",
    "nonFeatPrerequisites": [
        "Channel energy class feature"
    ]
},
"extra<i>Ki</i>" : {
    "benefitsShort": "Increase your ki pool by 2 points",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Extra <i>Ki</i>",
    "nonFeatPrerequisites": [
        "Ki pool class feature"
    ]
},
"extraLayOnHands" : {
    "benefitsShort": "Use lay on hands two additional times per day",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Extra Lay On Hands",
    "nonFeatPrerequisites": [
        "Lay on hands class feature"
    ]
},
"extraMercy" : {
    "benefitsShort": "Your lay on hands benefits from one additional mercy",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Extra Mercy",
    "nonFeatPrerequisites": [
        "Mercy class feature"
    ]
},
"extraPerformance" : {
    "benefitsShort": "Use bardic performance for 6 additional rounds per day",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Extra Performance",
    "nonFeatPrerequisites": [
        "Bardic performance class feature"
    ]
},
"extraRage" : {
    "benefitsShort": "Use rage for 6 additional rounds per day",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Extra Rage",
    "nonFeatPrerequisites": [
        "Rage class feature"
    ]
},
"fleet" : {
    "benefitsShort": "Your base speed increases by 5 feet",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Fleet",
    "nonFeatPrerequisites": []
},
"greatFortitude" : {
    "benefitsShort": "+2 on Fortitude saves",
    "buildsInto": [
        "improvedGreatFortitude"
    ],
    "featPrerequisites": [],
    "name": "Great Fortitude",
    "nonFeatPrerequisites": []
},
"improvedGreatFortitude" : {
    "benefitsShort": "Once per day, you may reroll a Fortitude save",
    "buildsInto": [],
    "featPrerequisites": [
        "Great Fortitude"
    ],
    "name": "Improved Great Fortitude",
    "nonFeatPrerequisites": []
},
"improvedChannel" : {
    "benefitsShort": "+2 bonus on channel energy DC",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Improved Channel",
    "nonFeatPrerequisites": [
        "Channel energy class feature"
    ]
},
"improvedCounterspell" : {
    "benefitsShort": "Counterspell with spell of the same school",
    "buildsInto": [
        "parrySpell"
    ],
    "featPrerequisites": [],
    "name": "Improved Counterspell",
    "nonFeatPrerequisites": []
},
"improvedCritical" : {
    "benefitsShort": "Double the threat range of one weapon",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Improved Critical",
    "nonFeatPrerequisites": [
        "Proficiency with weapon",
        "base attack bonus +8"
    ]
},
"improvedFamiliar" : {
    "benefitsShort": "Gain a more powerful familiar",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Improved Familiar",
    "nonFeatPrerequisites": [
        "Ability to acquire a familiar",
        "see feat"
    ]
},
"improvedInitiative" : {
    "benefitsShort": "+4 bonus on initiative checks",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Improved Initiative",
    "nonFeatPrerequisites": []
},
"improvedUnarmedStrike" : {
    "benefitsShort": "Always considered armed",
    "buildsInto": [
        "deflectArrows",
        "improvedGrapple",
        "scorpionStyle",
        "stunningFist",
        "elementalFist",
        "<i>ki</i>Throw",
        "perfectStrike",
        "punishingKick",
        "touchofSerenity",
        "befuddlingStrike",
        "counterpunch",
        "dazingFist",
        "drainingStrike",
        "paralyzingStrike",
        "staggeringFist",
        "pummelingStyle"
    ],
    "featPrerequisites": [],
    "name": "Improved Unarmed Strike",
    "nonFeatPrerequisites": []
},
"deflectArrows" : {
    "benefitsShort": "Avoid one ranged attack per round",
    "buildsInto": [
        "snatchArrows"
    ],
    "featPrerequisites": [
        "Improved Unarmed Strike"
    ],
    "name": "Deflect Arrows",
    "nonFeatPrerequisites": [
        "Dex 13"
    ]
},
"snatchArrows" : {
    "benefitsShort": "Catch one ranged attack per round",
    "buildsInto": [],
    "featPrerequisites": [
        "Deflect Arrows"
    ],
    "name": "Snatch Arrows",
    "nonFeatPrerequisites": [
        "Dex 15"
    ]
},
"improvedGrapple" : {
    "benefitsShort": "+2 bonus on grapple attempts, no attack of opportunity",
    "buildsInto": [
        "greaterGrapple"
    ],
    "featPrerequisites": [
        "Improved Unarmed Strike"
    ],
    "name": "Improved Grapple",
    "nonFeatPrerequisites": [
        "Dex 13"
    ]
},
"greaterGrapple" : {
    "benefitsShort": "Maintain your grapple as a move action",
    "buildsInto": [],
    "featPrerequisites": [
        "Improved Grapple"
    ],
    "name": "Greater Grapple",
    "nonFeatPrerequisites": [
        "base attack bonus +6"
    ]
},
"scorpionStyle" : {
    "benefitsShort": "Reduce target's speed to 5 ft.",
    "buildsInto": [
        "gorgon'sFist"
    ],
    "featPrerequisites": [
        "Improved Unarmed Strike"
    ],
    "name": "Scorpion Style",
    "nonFeatPrerequisites": []
},
"gorgon'sFist" : {
    "benefitsShort": "Stagger a foe whose speed is reduced",
    "buildsInto": [
        "medusa'sWrath"
    ],
    "featPrerequisites": [
        "Scorpion Style"
    ],
    "name": "Gorgon's Fist",
    "nonFeatPrerequisites": [
        "base attack bonus +6"
    ]
},
"medusa'sWrath" : {
    "benefitsShort": "Make 2 extra attacks against a hindered foe",
    "buildsInto": [
        "cockatriceStrike"
    ],
    "featPrerequisites": [
        "Gorgon's Fist"
    ],
    "name": "Medusa's Wrath",
    "nonFeatPrerequisites": [
        "base attack bonus +11"
    ]
},
"stunningFist" : {
    "benefitsShort": "Stun opponent with an unarmed strike",
    "buildsInto": [],
    "featPrerequisites": [
        "Improved Unarmed Strike"
    ],
    "name": "Stunning Fist",
    "nonFeatPrerequisites": [
        "Dex 13",
        "Wis 13",
        "base attack bonus +8"
    ]
},
"improvisedWeaponMastery" : {
    "benefitsShort": "Make an improvised weapon deadly",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Improvised Weapon Mastery",
    "nonFeatPrerequisites": [
        "Catch Off-Guard or Throw Anything",
        "base attack bonus +8"
    ]
},
"intimidatingProwess" : {
    "benefitsShort": "Add Str to Intimidate in addition to Cha",
    "buildsInto": [
        "gruesomeSlaughter",
        "killingFlourish"
    ],
    "featPrerequisites": [],
    "name": "Intimidating Prowess",
    "nonFeatPrerequisites": []
},
"ironWill" : {
    "benefitsShort": "+2 bonus on Will saves",
    "buildsInto": [
        "improvedIronWill"
    ],
    "featPrerequisites": [],
    "name": "Iron Will",
    "nonFeatPrerequisites": []
},
"improvedIronWill" : {
    "benefitsShort": "Once per day, you may reroll a Will save",
    "buildsInto": [],
    "featPrerequisites": [
        "Iron Will"
    ],
    "name": "Improved Iron Will",
    "nonFeatPrerequisites": []
},
"leadership" : {
    "benefitsShort": "Gain a cohort and followers",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Leadership",
    "nonFeatPrerequisites": [
        "Character level 7th"
    ]
},
"lightningReflexes" : {
    "benefitsShort": "+2 bonus on Reflex saves",
    "buildsInto": [
        "improvedLightningReflexes"
    ],
    "featPrerequisites": [],
    "name": "Lightning Reflexes",
    "nonFeatPrerequisites": []
},
"improvedLightningReflexes" : {
    "benefitsShort": "Once per day, you may reroll a Reflex save",
    "buildsInto": [],
    "featPrerequisites": [
        "Lightning Reflexes"
    ],
    "name": "Improved Lightning Reflexes",
    "nonFeatPrerequisites": []
},
"lunge" : {
    "benefitsShort": "Take a &ndash;2 penalty to your AC to attack with reach",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Lunge",
    "nonFeatPrerequisites": [
        "Base attack bonus +6"
    ]
},
"magicalAptitude" : {
    "benefitsShort": "+2 bonus on Spellcraft and Use Magic Device checks",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Magical Aptitude",
    "nonFeatPrerequisites": []
},
"martialWeaponProficiency" : {
    "benefitsShort": "No penalty on attacks made with one martial weapon",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Martial Weapon Proficiency",
    "nonFeatPrerequisites": []
},
"masterCraftsman" : {
    "benefitsShort": "You can craft magic items without being a spellcaster",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Master Craftsman",
    "nonFeatPrerequisites": [
        "5 ranks in any Craft or Profession skill"
    ]
},
"mountedCombat" : {
    "benefitsShort": "Avoid attacks on mount with Ride check",
    "buildsInto": [
        "mountedArchery",
        "ride-byAttack",
        "trample",
        "unseat",
        "mountedShield",
        "trickRiding"
    ],
    "featPrerequisites": [],
    "name": "Mounted Combat",
    "nonFeatPrerequisites": [
        "Ride 1 rank"
    ]
},
"mountedArchery" : {
    "benefitsShort": "Halve the penalty for ranged attacks while mounted",
    "buildsInto": [],
    "featPrerequisites": [
        "Mounted Combat"
    ],
    "name": "Mounted Archery",
    "nonFeatPrerequisites": []
},
"ride-byAttack" : {
    "benefitsShort": "Move before and after a charge attack while mounted",
    "buildsInto": [
        "spiritedCharge"
    ],
    "featPrerequisites": [
        "Mounted Combat"
    ],
    "name": "Ride-By Attack",
    "nonFeatPrerequisites": []
},
"spiritedCharge" : {
    "benefitsShort": "Double damage on a mounted charge",
    "buildsInto": [],
    "featPrerequisites": [
        "Ride-By Attack"
    ],
    "name": "Spirited Charge",
    "nonFeatPrerequisites": []
},
"trample" : {
    "benefitsShort": "Overrun targets while mounted",
    "buildsInto": [],
    "featPrerequisites": [
        "Mounted Combat"
    ],
    "name": "Trample",
    "nonFeatPrerequisites": []
},
"unseat" : {
    "benefitsShort": "Knock opponents from their mounts",
    "buildsInto": [],
    "featPrerequisites": [
        "Improved Bull Rush",
        "Mounted Combat"
    ],
    "name": "Unseat",
    "nonFeatPrerequisites": []
},
"naturalSpell" : {
    "benefitsShort": "Cast spells while using wild shape",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Natural Spell",
    "nonFeatPrerequisites": [
        "Wis 13",
        "wild shape class feature"
    ]
},
"nimbleMoves" : {
    "benefitsShort": "Ignore 5 feet of difficult terrain when you move",
    "buildsInto": [
        "acrobaticSteps",
        "lightStep"
    ],
    "featPrerequisites": [],
    "name": "Nimble Moves",
    "nonFeatPrerequisites": [
        "Dex 13"
    ]
},
"acrobaticSteps" : {
    "benefitsShort": "Ignore 20 feet of difficult terrain when you move",
    "buildsInto": [
        "lightStep"
    ],
    "featPrerequisites": [
        "Nimble Moves"
    ],
    "name": "Acrobatic Steps",
    "nonFeatPrerequisites": [
        "Dex 15"
    ]
},
"persuasive" : {
    "benefitsShort": " +2 bonus on Diplomacy and Intimidate checks",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Persuasive",
    "nonFeatPrerequisites": []
},
"point-blankShot" : {
    "benefitsShort": "+1 attack and damage on targets within 30 feet",
    "buildsInto": [
        "farShot",
        "preciseShot",
        "shotontheRun",
        "rapidShot",
        "disruptingShot",
        "coordinatedShot"
    ],
    "featPrerequisites": [],
    "name": "Point-Blank Shot",
    "nonFeatPrerequisites": []
},
"farShot" : {
    "benefitsShort": "Decrease ranged penalties by half",
    "buildsInto": [],
    "featPrerequisites": [
        "Point-Blank Shot"
    ],
    "name": "Far Shot",
    "nonFeatPrerequisites": []
},
"preciseShot" : {
    "benefitsShort": "No penalty for shooting into melee",
    "buildsInto": [
        "improvedPreciseShot",
        "focusedShot"
    ],
    "featPrerequisites": [
        "Point-Blank Shot"
    ],
    "name": "Precise Shot",
    "nonFeatPrerequisites": []
},
"improvedPreciseShot" : {
    "benefitsShort": "No cover or concealment chance on ranged attacks",
    "buildsInto": [],
    "featPrerequisites": [
        "Precise Shot"
    ],
    "name": "Improved PreciseShot",
    "nonFeatPrerequisites": [
        "Dex 19",
        "base attack bonus +11"
    ]
},
"pinpointTargeting" : {
    "benefitsShort": "No armor or shield bonus on one ranged attack",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": " Pinpoint Targeting",
    "nonFeatPrerequisites": [
        "Improved Precise Shot",
        "base attack bonus +16"
    ]
},
"shotontheRun" : {
    "benefitsShort": "Make ranged attack at any point during movement",
    "buildsInto": [
        "partingShot"
    ],
    "featPrerequisites": [
        "Mobility",
        "Point-Blank Shot"
    ],
    "name": "Shot on the Run",
    "nonFeatPrerequisites": [
        "Dex 13",
        "base attack bonus +4"
    ]
},
"rapidShot" : {
    "benefitsShort": "Make one extra ranged attack",
    "buildsInto": [
        "manyshot",
        "crossbowMastery",
        "stabbingShot"
    ],
    "featPrerequisites": [
        "Point-Blank Shot"
    ],
    "name": "Rapid Shot",
    "nonFeatPrerequisites": [
        "Dex 13"
    ]
},
"manyshot" : {
    "benefitsShort": "Shoot two arrows simultaneously",
    "buildsInto": [],
    "featPrerequisites": [
        "Rapid Shot"
    ],
    "name": "Manyshot",
    "nonFeatPrerequisites": [
        "Dex 17",
        "base attack bonus +6"
    ]
},
"powerAttack" : {
    "benefitsShort": "Trade melee attack bonus for damage",
    "buildsInto": [
        "cleave",
        "improvedBullRush",
        "improvedOverrun",
        "improvedSunder",
        "bloodyAssault",
        "dazingAssault",
        "furiousFocus",
        "improvedDrag",
        "pushingAssault",
        "shieldofSwings",
        "smash",
        "stunningAssault",
        "jabbingMaster"
    ],
    "featPrerequisites": [],
    "name": "Power Attack",
    "nonFeatPrerequisites": [
        "Str 13",
        "base attack bonus +1"
    ]
},
"cleave" : {
    "benefitsShort": "Make an additional attack if the first one hits",
    "buildsInto": [
        "greatCleave"
    ],
    "featPrerequisites": [
        "Power Attack"
    ],
    "name": "Cleave",
    "nonFeatPrerequisites": []
},
"greatCleave" : {
    "benefitsShort": "Make an additional attack after each attack hits",
    "buildsInto": [],
    "featPrerequisites": [
        "Cleave"
    ],
    "name": "Great Cleave",
    "nonFeatPrerequisites": [
        "base attack bonus +4"
    ]
},
"improvedBullRush" : {
    "benefitsShort": "+2 bonus on bull rush attempts, no attack of opportunity",
    "buildsInto": [
        "unseat",
        "greaterBullRush",
        "bullRushStrike",
        "improved<i>Ki</i>Throw"
    ],
    "featPrerequisites": [
        "Power Attack"
    ],
    "name": "Improved Bull Rush",
    "nonFeatPrerequisites": []
},
"greaterBullRush" : {
    "benefitsShort": "Enemies you bull rush provoke attacks of opportunity",
    "buildsInto": [],
    "featPrerequisites": [
        "Improved Bull Rush"
    ],
    "name": "Greater Bull Rush",
    "nonFeatPrerequisites": [
        "base attack bonus +6"
    ]
},
"improvedOverrun" : {
    "benefitsShort": "+2 bonus on overrun attempts, no attack of opportunity",
    "buildsInto": [
        "greaterOverrun",
        "chargeThrough"
    ],
    "featPrerequisites": [
        "Power Attack"
    ],
    "name": "Improved Overrun",
    "nonFeatPrerequisites": []
},
"greaterOverrun" : {
    "benefitsShort": "Enemies you overrun provoke attacks of opportunity",
    "buildsInto": [],
    "featPrerequisites": [
        "Improved Overrun"
    ],
    "name": "Greater Overrun",
    "nonFeatPrerequisites": [
        "base attack bonus +6"
    ]
},
"improvedSunder" : {
    "benefitsShort": "+2 bonus on sunder attempts, no attack of opportunity",
    "buildsInto": [
        "greaterSunder",
        "sunderingStrike"
    ],
    "featPrerequisites": [
        "Power Attack"
    ],
    "name": "Improved Sunder",
    "nonFeatPrerequisites": []
},
"greaterSunder" : {
    "benefitsShort": "Damage from sunder attempts transfers to your enemy",
    "buildsInto": [],
    "featPrerequisites": [
        "Improved Sunder"
    ],
    "name": "Greater Sunder",
    "nonFeatPrerequisites": [
        "base attack bonus +6"
    ]
},
"quickDraw" : {
    "benefitsShort": "Draw weapon as a free action",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Quick Draw",
    "nonFeatPrerequisites": [
        "Base attack bonus +1"
    ]
},
"rapidReload" : {
    "benefitsShort": "Reload crossbow quickly",
    "buildsInto": [
        "crossbowMastery"
    ],
    "featPrerequisites": [],
    "name": "Rapid Reload",
    "nonFeatPrerequisites": [
        "Weapon proficiency (crossbow)"
    ]
},
"run" : {
    "benefitsShort": "Run at 5 times your normal speed",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Run",
    "nonFeatPrerequisites": []
},
"selectiveChanneling" : {
    "benefitsShort": "Choose whom to affect with channel energy",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Selective Channeling",
    "nonFeatPrerequisites": [
        "Cha 13",
        "channel energy class feature"
    ]
},
"self-sufficient" : {
    "benefitsShort": "+2 bonus on Heal and Survival checks",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Self-Sufficient",
    "nonFeatPrerequisites": []
},
"shieldProficiency" : {
    "benefitsShort": "No penalties on attack rolls when using a shield",
    "buildsInto": [
        "improvedShieldBash",
        "shieldFocus",
        "towerShieldProficiency",
        "savingShield",
        "shieldWall"
    ],
    "featPrerequisites": [],
    "name": "Shield Proficiency",
    "nonFeatPrerequisites": []
},
"improvedShieldBash" : {
    "benefitsShort": "Keep your shield bonus when shield bashing",
    "buildsInto": [
        "shieldSlam"
    ],
    "featPrerequisites": [
        "Shield Proficiency"
    ],
    "name": "Improved Shield Bash",
    "nonFeatPrerequisites": []
},
"shieldSlam" : {
    "benefitsShort": "Free bull rush with a bash attack",
    "buildsInto": [
        "shieldMaster"
    ],
    "featPrerequisites": [
        "Improved Shield Bash",
        "Two-Weapon Fighting"
    ],
    "name": "Shield Slam",
    "nonFeatPrerequisites": [
        "base attack bonus +6"
    ]
},
"shieldMaster" : {
    "benefitsShort": "No two-weapon penalties when attacking with a shield",
    "buildsInto": [
        "bashingFinish"
    ],
    "featPrerequisites": [
        "Shield Slam"
    ],
    "name": "Shield Master",
    "nonFeatPrerequisites": [
        "base attack bonus +11"
    ]
},
"shieldFocus" : {
    "benefitsShort": "Gain a +1 bonus to your AC when using a shield",
    "buildsInto": [
        "greaterShieldFocus",
        "coveringDefense",
        "missileShield",
        "mountedShield",
        "shieldSpecialization"
    ],
    "featPrerequisites": [
        "Shield Proficiency"
    ],
    "name": "Shield Focus",
    "nonFeatPrerequisites": [
        "base attack bonus +1"
    ]
},
"greaterShieldFocus" : {
    "benefitsShort": "Gain a +1 bonus to your AC when using a shield",
    "buildsInto": [
        "greaterShieldSpecialization"
    ],
    "featPrerequisites": [
        "Shield Focus"
    ],
    "name": "Greater Shield Focus",
    "nonFeatPrerequisites": [
        "8th-level fighter"
    ]
},
"towerShieldProficiency" : {
    "benefitsShort": "No penalties on attack rolls when using a tower shield",
    "buildsInto": [],
    "featPrerequisites": [
        "Shield Proficiency"
    ],
    "name": "Tower Shield Proficiency",
    "nonFeatPrerequisites": []
},
"simpleWeaponProficiency" : {
    "benefitsShort": "No penalty on attacks made with simple weapons",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Simple Weapon Proficiency",
    "nonFeatPrerequisites": []
},
"skillFocus" : {
    "benefitsShort": "+3 bonus on one skill (+6 at 10 ranks)",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Skill Focus",
    "nonFeatPrerequisites": []
},
"spellFocus" : {
    "benefitsShort": "+1 bonus on save DCs for one school",
    "buildsInto": [
        "greaterSpellFocus"
    ],
    "featPrerequisites": [],
    "name": "Spell Focus",
    "nonFeatPrerequisites": []
},
"greaterSpellFocus" : {
    "benefitsShort": "+1 bonus on save DCs for one school",
    "buildsInto": [],
    "featPrerequisites": [
        "Spell Focus"
    ],
    "name": "Greater Spell Focus",
    "nonFeatPrerequisites": []
},
"spellMastery" : {
    "benefitsShort": "Prepare some spells without a spellbook",
    "buildsInto": [
        "flexibleWizardry"
    ],
    "featPrerequisites": [],
    "name": "Spell Mastery",
    "nonFeatPrerequisites": [
        "1st-level Wizard"
    ]
},
"spellPenetration" : {
    "benefitsShort": "+2 bonus on level checks to beat spell resistance",
    "buildsInto": [
        "greaterSpellPenetration"
    ],
    "featPrerequisites": [],
    "name": "Spell Penetration",
    "nonFeatPrerequisites": []
},
"greaterSpellPenetration" : {
    "benefitsShort": "+2 bonus on level checks to beat spell resistance",
    "buildsInto": [],
    "featPrerequisites": [
        "Spell Penetration"
    ],
    "name": "Greater Spell Penetration",
    "nonFeatPrerequisites": []
},
"stealthy" : {
    "benefitsShort": "+2 bonus on Escape Artist and Stealth checks",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Stealthy",
    "nonFeatPrerequisites": []
},
"stepUp" : {
    "benefitsShort": "Take a 5-foot step as an immediate action",
    "buildsInto": [
        "followingStep"
    ],
    "featPrerequisites": [],
    "name": "Step Up",
    "nonFeatPrerequisites": [
        "Base attack bonus +1"
    ]
},
"strikeBack" : {
    "benefitsShort": "Attack foes that strike you while using reach",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Strike Back",
    "nonFeatPrerequisites": [
        "Base attack bonus +11"
    ]
},
"throwAnything" : {
    "benefitsShort": "No penalties for improvised ranged weapons",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Throw Anything",
    "nonFeatPrerequisites": []
},
"toughness" : {
    "benefitsShort": "+3 hit points, +1 per Hit Die beyond 3",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Toughness",
    "nonFeatPrerequisites": []
},
"turnUndead" : {
    "benefitsShort": "Channel energy can be used to make undead flee",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Turn Undead",
    "nonFeatPrerequisites": [
        "Channel positive energy class feature"
    ]
},
"two-weaponFighting" : {
    "benefitsShort": "Reduce two-weapon fighting penalties",
    "buildsInto": [
        "shieldSlam",
        "doubleSlice",
        "improvedTwo-WeaponFighting",
        "two-weaponDefense",
        "bashingFinish"
    ],
    "featPrerequisites": [],
    "name": "Two-Weapon Fighting",
    "nonFeatPrerequisites": [
        "Dex 15"
    ]
},
"doubleSlice" : {
    "benefitsShort": "Add your Str bonus to off-hand damage rolls",
    "buildsInto": [
        "two-weaponRend"
    ],
    "featPrerequisites": [
        "Two-Weapon Fighting"
    ],
    "name": "Double Slice",
    "nonFeatPrerequisites": []
},
"two-weaponRend" : {
    "benefitsShort": "Rend a foe hit by both your weapons",
    "buildsInto": [],
    "featPrerequisites": [
        "Double Slice",
        "Improved Two-Weapon Fighting"
    ],
    "name": "Two-Weapon Rend",
    "nonFeatPrerequisites": [
        "base attack bonus +11"
    ]
},
"improvedTwo-WeaponFighting" : {
    "benefitsShort": "Gain additional off-hand attack",
    "buildsInto": [
        "two-weaponRend",
        "greaterTwo-WeaponFighting"
    ],
    "featPrerequisites": [
        "Two-Weapon Fighting"
    ],
    "name": "Improved Two-Weapon Fighting",
    "nonFeatPrerequisites": [
        "Dex 17",
        "base attack bonus +6"
    ]
},
"greaterTwo-WeaponFighting" : {
    "benefitsShort": "Gain a third off-hand attack",
    "buildsInto": [],
    "featPrerequisites": [
        "Improved Two-Weapon Fighting"
    ],
    "name": "Greater Two-Weapon Fighting",
    "nonFeatPrerequisites": [
        "Dex 19",
        "base attack bonus +11"
    ]
},
"two-weaponDefense" : {
    "benefitsShort": "Gain +1 shield bonus when fighting with two weapons",
    "buildsInto": [],
    "featPrerequisites": [
        "Two-Weapon Fighting"
    ],
    "name": "Two-Weapon Defense",
    "nonFeatPrerequisites": []
},
"vitalStrike" : {
    "benefitsShort": "Deal twice the normal damage on a single attack",
    "buildsInto": [
        "improvedVitalStrike"
    ],
    "featPrerequisites": [],
    "name": "Vital Strike",
    "nonFeatPrerequisites": [
        "Base attack bonus +6"
    ]
},
"improvedVitalStrike" : {
    "benefitsShort": "Deal three times the normal damage on a single attack",
    "buildsInto": [
        "greaterVitalStrike"
    ],
    "featPrerequisites": [
        "Vital Strike"
    ],
    "name": "Improved Vital Strike",
    "nonFeatPrerequisites": [
        "base attack bonus +11"
    ]
},
"greaterVitalStrike" : {
    "benefitsShort": "Deal four times the normal damage on a single attack",
    "buildsInto": [],
    "featPrerequisites": [
        "Improved Vital Strike"
    ],
    "name": "Greater Vital Strike",
    "nonFeatPrerequisites": [
        "base attack bonus +16"
    ]
},
"weaponFinesse" : {
    "benefitsShort": "Use Dex instead of Str on attack rolls with light weapons",
    "buildsInto": [
        "slashingGrace"
    ],
    "featPrerequisites": [],
    "name": "Weapon Finesse",
    "nonFeatPrerequisites": []
},
"weaponFocus" : {
    "benefitsShort": "+1 bonus on attack rolls with one weapon",
    "buildsInto": [
        "dazzlingDisplay",
        "greaterWeaponFocus",
        "penetratingStrike",
        "weaponSpecialization",
        "dishearteningDisplay"
    ],
    "featPrerequisites": [],
    "name": "Weapon Focus",
    "nonFeatPrerequisites": [
        "Proficiency with weapon",
        "base attack bonus +1"
    ]
},
"dazzlingDisplay" : {
    "benefitsShort": "Intimidate all foes within 30 feet",
    "buildsInto": [
        "shatterDefenses",
        "dishearteningDisplay"
    ],
    "featPrerequisites": [
        "Weapon Focus"
    ],
    "name": "Dazzling Display",
    "nonFeatPrerequisites": []
},
"shatterDefenses" : {
    "benefitsShort": "Hindered foes are flat-footed",
    "buildsInto": [
        "deadlyStroke"
    ],
    "featPrerequisites": [
        "Dazzling Display"
    ],
    "name": "Shatter Defenses",
    "nonFeatPrerequisites": [
        "base attack bonus +6"
    ]
},
"deadlyStroke" : {
    "benefitsShort": "Deal double damage plus 1 Con bleed",
    "buildsInto": [],
    "featPrerequisites": [
        "Greater Weapon Focus",
        "Shatter Defenses"
    ],
    "name": "Deadly Stroke",
    "nonFeatPrerequisites": [
        "base attack bonus +11"
    ]
},
"greaterWeaponFocus" : {
    "benefitsShort": "+1 bonus on attack rolls with one weapon",
    "buildsInto": [
        "deadlyStroke"
    ],
    "featPrerequisites": [
        "Weapon Focus"
    ],
    "name": "Greater Weapon Focus",
    "nonFeatPrerequisites": [
        "8th-level fighter"
    ]
},
"penetratingStrike" : {
    "benefitsShort": "Your attacks ignore 5 points of damage reduction",
    "buildsInto": [
        "greaterPenetratingStrike"
    ],
    "featPrerequisites": [
        "Weapon Focus"
    ],
    "name": "Penetrating Strike",
    "nonFeatPrerequisites": [
        "12th-level fighter"
    ]
},
"greaterPenetratingStrike" : {
    "benefitsShort": "Your attacks ignore 10 points of damage reduction",
    "buildsInto": [],
    "featPrerequisites": [
        "Penetrating Strike"
    ],
    "name": "Greater Penetrating Strike",
    "nonFeatPrerequisites": [
        "16th-level fighter"
    ]
},
"weaponSpecialization" : {
    "benefitsShort": "+2 bonus on damage rolls with one weapon",
    "buildsInto": [
        "greaterWeaponSpecialization"
    ],
    "featPrerequisites": [
        "Weapon Focus"
    ],
    "name": "Weapon Specialization",
    "nonFeatPrerequisites": [
        "4th-level fighter"
    ]
},
"greaterWeaponSpecialization" : {
    "benefitsShort": "+2 bonus on damage rolls with one weapon",
    "buildsInto": [],
    "featPrerequisites": [
        "Weapon Specialization"
    ],
    "name": "Greater Weapon Specialization",
    "nonFeatPrerequisites": [
        "12th-level fighter"
    ]
},
"brewPotion" : {
    "benefitsShort": "Create magic potions",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Brew Potion",
    "nonFeatPrerequisites": [
        "Caster level 3rd"
    ]
},
"craftMagicArmsandArmor" : {
    "benefitsShort": "Create magic armors, shields, and weapons",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Craft Magic Arms and Armor",
    "nonFeatPrerequisites": [
        "Caster level 5th"
    ]
},
"craftRod" : {
    "benefitsShort": "Create magic rods",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Craft Rod",
    "nonFeatPrerequisites": [
        "Caster level 9th"
    ]
},
"craftStaff" : {
    "benefitsShort": "Create magic staves",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Craft Staff",
    "nonFeatPrerequisites": [
        "Caster level 11th"
    ]
},
"craftWand" : {
    "benefitsShort": "Create magic wands",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Craft Wand",
    "nonFeatPrerequisites": [
        "Caster level 5th"
    ]
},
"craftWondrousItem" : {
    "benefitsShort": "Create magic wondrous items",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Craft Wondrous Item",
    "nonFeatPrerequisites": [
        "Caster level 3rd"
    ]
},
"forgeRing" : {
    "benefitsShort": "Create magic rings",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Forge Ring",
    "nonFeatPrerequisites": [
        "Caster level 7th"
    ]
},
"scribeScroll" : {
    "benefitsShort": "Create magic scrolls",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Scribe Scroll",
    "nonFeatPrerequisites": [
        "Caster level 1st"
    ]
},
"empowerSpell" : {
    "benefitsShort": "Increase spell variables by 50%",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Empower Spell",
    "nonFeatPrerequisites": []
},
"enlargeSpell" : {
    "benefitsShort": "Double spell range",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Enlarge Spell",
    "nonFeatPrerequisites": []
},
"extendSpell" : {
    "benefitsShort": "Double spell duration",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Extend Spell",
    "nonFeatPrerequisites": []
},
"heightenSpell" : {
    "benefitsShort": "Treat spell as a higher level",
    "buildsInto": [
        "preferredSpell"
    ],
    "featPrerequisites": [],
    "name": "Heighten Spell",
    "nonFeatPrerequisites": []
},
"maximizeSpell" : {
    "benefitsShort": "Maximize spell variables",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Maximize Spell",
    "nonFeatPrerequisites": []
},
"quickenSpell" : {
    "benefitsShort": "Cast spell as a swift action",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Quicken Spell",
    "nonFeatPrerequisites": []
},
"silentSpell" : {
    "benefitsShort": "Cast spell without verbal components",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Silent Spell",
    "nonFeatPrerequisites": []
},
"stillSpell" : {
    "benefitsShort": "Cast spell without somatic components",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Still Spell",
    "nonFeatPrerequisites": []
},
"widenSpell" : {
    "benefitsShort": "Double spell area",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Widen Spell",
    "nonFeatPrerequisites": []
},
"additionalTraits" : {
    "benefitsShort": "Gain two additional character traits",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Additional Traits",
    "nonFeatPrerequisites": []
},
"arcaneBlast" : {
    "benefitsShort": "Sacrifice a spell to make a ray attack",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Arcane Blast",
    "nonFeatPrerequisites": [
        "Arcane spellcaster",
        "caster level 10th"
    ]
},
"arcaneShield" : {
    "benefitsShort": "Sacrifice a spell to gain deflection bonus to AC",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Arcane Shield",
    "nonFeatPrerequisites": [
        "Arcane spellcaster",
        "caster level 10th"
    ]
},
"arcaneTalent" : {
    "benefitsShort": "Cast a 0-level spell 3 times per day as a spell-like ability",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Arcane Talent",
    "nonFeatPrerequisites": [
        "Cha 10; elf",
        "half-elf",
        "or gnome"
    ]
},
"aspectoftheBeast" : {
    "benefitsShort": "Gain one of four bestial advantages",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Aspect of the Beast",
    "nonFeatPrerequisites": [
        "Wild shape class feature"
    ]
},
"bashingFinish" : {
    "benefitsShort": "Make a free shield bash after a critical hit",
    "buildsInto": [],
    "featPrerequisites": [
        "Shield Master",
        "Two-Weapon Fighting"
    ],
    "name": "Bashing Finish",
    "nonFeatPrerequisites": [
        " base attack bonus +11"
    ]
},
"bloodyAssault" : {
    "benefitsShort": "Trade melee attack bonus for bleed damage",
    "buildsInto": [],
    "featPrerequisites": [
        "Power Attack"
    ],
    "name": "Bloody Assault",
    "nonFeatPrerequisites": [
        "base attack bonus +6"
    ]
},
"bodyguard" : {
    "benefitsShort": "Use attack of opportunity to add a bonus to adjacent ally's AC",
    "buildsInto": [
        "inHarm'sWay"
    ],
    "featPrerequisites": [
        "Combat Reflexes"
    ],
    "name": "Bodyguard",
    "nonFeatPrerequisites": []
},
"inHarm'sWay" : {
    "benefitsShort": "Take the damage of a successful attack upon an adjacent ally",
    "buildsInto": [],
    "featPrerequisites": [
        "Bodyguard"
    ],
    "name": "In Harm's Way",
    "nonFeatPrerequisites": []
},
"breadthofExperience" : {
    "benefitsShort": "+2 bonus on all Knowledge and Profession checks",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Breadth of Experience",
    "nonFeatPrerequisites": [
        "Dwarf",
        "elf",
        "or gnome; 100+ years old"
    ]
},
"bullRushStrike" : {
    "benefitsShort": "Attempt a bull rush on a successful critical hit",
    "buildsInto": [],
    "featPrerequisites": [
        "Improved Bull Rush"
    ],
    "name": "Bull Rush Strike",
    "nonFeatPrerequisites": [
        "base attack bonus +9"
    ]
},
"chargeThrough" : {
    "benefitsShort": "Make overrun as free action while charging",
    "buildsInto": [],
    "featPrerequisites": [
        "Improved Overrun"
    ],
    "name": "Charge Through",
    "nonFeatPrerequisites": [
        "base attack bonus +1"
    ]
},
"childlike" : {
    "benefitsShort": "+2 on Disguise checks to look like human child, take 10 on Bluff checks",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Childlike",
    "nonFeatPrerequisites": [
        "Cha 13",
        "halfling"
    ]
},
"cockatriceStrike" : {
    "benefitsShort": "Turn a target to stone with a critical hit",
    "buildsInto": [],
    "featPrerequisites": [
        "Medusa's Wrath"
    ],
    "name": "Cockatrice Strike",
    "nonFeatPrerequisites": [
        "base attack bonus +14"
    ]
},
"combatPatrol" : {
    "benefitsShort": "Increase threatened area for attack of opportunity",
    "buildsInto": [],
    "featPrerequisites": [
        "Combat Reflexes",
        "Mobility"
    ],
    "name": "Combat Patrol",
    "nonFeatPrerequisites": [
        " base attack bonus +5"
    ]
},
"cooperativeCrafting" : {
    "benefitsShort": "+2 bonus on Craft or Spellcraft checks while workingtogether",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Cooperative Crafting",
    "nonFeatPrerequisites": [
        "1 rank in any Craft skill",
        "any item creation feat "
    ]
},
"cosmopolitan" : {
    "benefitsShort": "Read and speak two additional languages",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Cosmopolitan",
    "nonFeatPrerequisites": []
},
"coveringDefense" : {
    "benefitsShort": "Provide cover to an ally with total defense",
    "buildsInto": [],
    "featPrerequisites": [
        "Shield Focus"
    ],
    "name": "Covering Defense",
    "nonFeatPrerequisites": [
        "base attack bonus +6"
    ]
},
"cripplingCritical" : {
    "benefitsShort": "Whenever you score a critical hit, the target's  speed is halved",
    "buildsInto": [],
    "featPrerequisites": [
        "Critical Focus"
    ],
    "name": "Crippling Critical",
    "nonFeatPrerequisites": [
        "base attack bonus +13"
    ]
},
"crossbowMastery" : {
    "benefitsShort": "Reload crossbow as free action and make full attacks",
    "buildsInto": [],
    "featPrerequisites": [
        "Rapid Reload",
        "Rapid Shot"
    ],
    "name": "Crossbow Mastery",
    "nonFeatPrerequisites": [
        "Dex 15"
    ]
},
"dastardlyFinish" : {
    "benefitsShort": "Deliver coup de grace to cowering or stunned target",
    "buildsInto": [
        "mercilessButchery"
    ],
    "featPrerequisites": [],
    "name": "Dastardly Finish",
    "nonFeatPrerequisites": [
        "Sneak attack +5d6"
    ]
},
"dazingAssault" : {
    "benefitsShort": "Trade melee attack bonus to daze opponents",
    "buildsInto": [],
    "featPrerequisites": [
        "Power Attack"
    ],
    "name": "Dazing Assault",
    "nonFeatPrerequisites": [
        "base attack bonus +11"
    ]
},
"deepDrinker" : {
    "benefitsShort": "Gain 2 temporary ki from drunken ki",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Deep Drinker",
    "nonFeatPrerequisites": [
        "Con 13",
        "monk level 11",
        "drunken <i>ki</i> class feature"
    ]
},
"deepsight" : {
    "benefitsShort": "Your darkvision has a range of 120 feet",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Deepsight",
    "nonFeatPrerequisites": [
        "Darkvision 60 feet"
    ]
},
"disarmingStrike" : {
    "benefitsShort": "Attempt a disarm on a successful critical hit",
    "buildsInto": [],
    "featPrerequisites": [
        "Improved Disarm"
    ],
    "name": "Disarming Strike",
    "nonFeatPrerequisites": [
        "base attack bonus +9"
    ]
},
"disruptingShot" : {
    "benefitsShort": "Ranged attacks increase enemy's DC to cast spells",
    "buildsInto": [],
    "featPrerequisites": [
        "Point-Blank Shot"
    ],
    "name": "Disrupting Shot",
    "nonFeatPrerequisites": [
        "Dex 13",
        "6th-level fighter"
    ]
},
"diviner'sDelving" : {
    "benefitsShort": "+2 bonus on caster level checks with divinations",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Diviner's Delving",
    "nonFeatPrerequisites": [
        "Spell Focus (divination)"
    ]
},
"eagleEyes" : {
    "benefitsShort": "Ignore up to &ndash;5 due to distance on visual Perception checks",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Eagle Eyes",
    "nonFeatPrerequisites": [
        "Wis 13",
        "keen senses racial trait"
    ]
},
"eclectic" : {
    "benefitsShort": "Gain an additional favored class",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Eclectic",
    "nonFeatPrerequisites": [
        "Human"
    ]
},
"eldritchClaws" : {
    "benefitsShort": "Natural weapons treated as magic and silver",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Eldritch Claws",
    "nonFeatPrerequisites": [
        "Str 15",
        "natural weapons",
        "base attack bonus +6"
    ]
},
"elementalFist" : {
    "benefitsShort": "Deal 1d6 energy damage with an unarmed strike",
    "buildsInto": [],
    "featPrerequisites": [
        "Improved Unarmed Strike"
    ],
    "name": "Elemental Fist",
    "nonFeatPrerequisites": [
        "Con 13",
        "Wis 13",
        " base attack bonus +8"
    ]
},
"elementalFocus" : {
    "benefitsShort": "+1 bonus on save DCs for one energy type",
    "buildsInto": [
        "greaterElementalFocus"
    ],
    "featPrerequisites": [],
    "name": "Elemental Focus",
    "nonFeatPrerequisites": []
},
"greaterElementalFocus" : {
    "benefitsShort": "+1 bonus on save DCs for one energy type",
    "buildsInto": [],
    "featPrerequisites": [
        "Elemental Focus"
    ],
    "name": "Greater Elemental Focus",
    "nonFeatPrerequisites": []
},
"elvenAccuracy" : {
    "benefitsShort": "Reroll miss chance due to concealment when using a bow",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Elven Accuracy",
    "nonFeatPrerequisites": [
        "Elf"
    ]
},
"enforcer" : {
    "benefitsShort": "Demoralize opponent as free action when you inflict nonlethal damage",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Enforcer",
    "nonFeatPrerequisites": [
        "Intimidate 1 rank"
    ]
},
"expandedArcana" : {
    "benefitsShort": "Add one or two spells to list of spells known",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Expanded Arcana",
    "nonFeatPrerequisites": [
        "Caster level 1st",
        "see feat"
    ]
},
"extraBombs" : {
    "benefitsShort": "Throw two additional bombs per day",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Extra Bombs",
    "nonFeatPrerequisites": [
        "Bomb class feature"
    ]
},
"extraDiscovery" : {
    "benefitsShort": "Gain one additional discovery",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Extra Discovery",
    "nonFeatPrerequisites": [
        "Discovery class feature"
    ]
},
"extraHex" : {
    "benefitsShort": "Gain one additional hex",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Extra Hex",
    "nonFeatPrerequisites": [
        "Hex class feature"
    ]
},
"extraRagePower" : {
    "benefitsShort": "Gain one additional rage power",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Extra Rage Power",
    "nonFeatPrerequisites": [
        "Rage power class feature"
    ]
},
"extraRevelation" : {
    "benefitsShort": "Gain one additional revelation",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Extra Revelation",
    "nonFeatPrerequisites": [
        "Revelation class feature"
    ]
},
"extraRogueTalent" : {
    "benefitsShort": "Gain one additional rogue talent",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Extra Rogue Talent",
    "nonFeatPrerequisites": [
        "Rogue talent class feature"
    ]
},
"fastDrinker" : {
    "benefitsShort": "Drink as a swift action",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Fast Drinker",
    "nonFeatPrerequisites": [
        "Con 18",
        "drunken <i>ki</i> class feature"
    ]
},
"fastHealer" : {
    "benefitsShort": "Regain additional hit points when healing",
    "buildsInto": [],
    "featPrerequisites": [
        "Diehard",
        "Endurance"
    ],
    "name": "Fast Healer",
    "nonFeatPrerequisites": [
        "Con 13"
    ]
},
"favoredDefense" : {
    "benefitsShort": "Bonus to CMD and AC when attacked by favored enemy",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Favored Defense",
    "nonFeatPrerequisites": [
        "Favored enemy class feature"
    ]
},
"fightOn" : {
    "benefitsShort": "Gain temporary hit points when reduced to 0",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Fight On",
    "nonFeatPrerequisites": [
        "Con 13; dwarf",
        "half-orc",
        "or orc"
    ]
},
"focusedShot" : {
    "benefitsShort": "Add Int modifier on damage rolls with bows or crossbows",
    "buildsInto": [],
    "featPrerequisites": [
        "Precise Shot"
    ],
    "name": "Focused Shot",
    "nonFeatPrerequisites": [
        "Int 13"
    ]
},
"followingStep" : {
    "benefitsShort": "Move up to 10 feet as an immediate action",
    "buildsInto": [
        "stepUpandStrike"
    ],
    "featPrerequisites": [
        "Step Up"
    ],
    "name": "Following Step",
    "nonFeatPrerequisites": [
        "Dex 13"
    ]
},
"stepUpandStrike" : {
    "benefitsShort": "Follow adjacent creature and attack as an immediate action",
    "buildsInto": [],
    "featPrerequisites": [
        "Following Step"
    ],
    "name": "Step Up and Strike",
    "nonFeatPrerequisites": [
        "base attack bonus +6"
    ]
},
"furiousFocus" : {
    "benefitsShort": "Do not take the Power Attack penalty on the first attack each round",
    "buildsInto": [
        "dreadfulCarnage"
    ],
    "featPrerequisites": [
        "Power Attack"
    ],
    "name": "Furious Focus",
    "nonFeatPrerequisites": [
        "Str 13",
        "base attack bonus +1"
    ]
},
"dreadfulCarnage" : {
    "benefitsShort": "Make a free Intimidate check when you knock down a foe",
    "buildsInto": [],
    "featPrerequisites": [
        "Furious Focus"
    ],
    "name": "Dreadful Carnage",
    "nonFeatPrerequisites": [
        "Str 15",
        "base attack bonus +11"
    ]
},
"gangUp" : {
    "benefitsShort": "Flank an opponent if at least two allies are adjacent to it",
    "buildsInto": [],
    "featPrerequisites": [
        "Combat Expertise"
    ],
    "name": "Gang Up",
    "nonFeatPrerequisites": []
},
"teamUp" : {
    "benefitsShort": "Aid another as a move action with two adjacent allies ",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Team Up",
    "nonFeatPrerequisites": [
        "Gang-Up",
        "base attack bonus +6"
    ]
},
"gnomeTrickster" : {
    "benefitsShort": "Use mage hand and prestidigitation once per day",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Gnome Trickster",
    "nonFeatPrerequisites": [
        "Cha 13",
        "gnome",
        "gnome magic racial trait"
    ]
},
"goUnnoticed" : {
    "benefitsShort": "Make Stealth check against flat-footed opponents during first round of combat",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Go Unnoticed",
    "nonFeatPrerequisites": [
        "Dex 13",
        "Small size or smaller"
    ]
},
"groundling" : {
    "benefitsShort": "Speak with burrowing animals as spell-like ability",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Groundling",
    "nonFeatPrerequisites": [
        "Cha 13",
        "gnome",
        "gnome magic racial trait"
    ]
},
"heroicDefiance" : {
    "benefitsShort": "Once per day, delay onset of harmful condition for 1 round",
    "buildsInto": [],
    "featPrerequisites": [
        "Diehard"
    ],
    "name": "Heroic Defiance",
    "nonFeatPrerequisites": [
        "base Fortitude save +8"
    ]
},
"heroicRecovery" : {
    "benefitsShort": "Once per day, gain new saving throw against harmful condition requiring Fort save",
    "buildsInto": [],
    "featPrerequisites": [
        "Diehard"
    ],
    "name": "Heroic Recovery",
    "nonFeatPrerequisites": [
        "base Fortitude save +4"
    ]
},
"improvedBlind-Fight" : {
    "benefitsShort": "Ignore miss chance for less than total concealment",
    "buildsInto": [
        "greaterBlind-Fight"
    ],
    "featPrerequisites": [
        "Blind-Fight"
    ],
    "name": "Improved Blind-Fight",
    "nonFeatPrerequisites": [
        "Perception 10 ranks"
    ]
},
"greaterBlind-Fight" : {
    "benefitsShort": "Total concealment is considered normal concealment",
    "buildsInto": [],
    "featPrerequisites": [
        "Improved Blind-Fight"
    ],
    "name": "Greater Blind-Fight",
    "nonFeatPrerequisites": [
        "Perception 15 ranks"
    ]
},
"improvedDirtyTrick" : {
    "benefitsShort": "+2 bonus on dirty trick attempts, no attack of opportunity",
    "buildsInto": [
        "greaterDirtyTrick"
    ],
    "featPrerequisites": [
        "Combat Expertise"
    ],
    "name": "Improved Dirty Trick",
    "nonFeatPrerequisites": []
},
"greaterDirtyTrick" : {
    "benefitsShort": "Dirty trick penalty lasts 1d4 rounds",
    "buildsInto": [],
    "featPrerequisites": [
        "Improved Dirty Trick"
    ],
    "name": "Greater Dirty Trick",
    "nonFeatPrerequisites": [
        "base attack bonus +6"
    ]
},
"improvedDrag" : {
    "benefitsShort": "+2 bonus on drag attempts, no attack of opportunity",
    "buildsInto": [
        "greaterDrag"
    ],
    "featPrerequisites": [
        "Power Attack"
    ],
    "name": "Improved Drag",
    "nonFeatPrerequisites": []
},
"greaterDrag" : {
    "benefitsShort": "Enemies you drag provoke attacks of opportunity",
    "buildsInto": [],
    "featPrerequisites": [
        "Improved Drag"
    ],
    "name": "Greater Drag",
    "nonFeatPrerequisites": [
        "base attack bonus +6"
    ]
},
"improvedReposition" : {
    "benefitsShort": "+2 bonus on reposition attempts, no attack of opportunity",
    "buildsInto": [
        "greaterReposition",
        "pummelingBully"
    ],
    "featPrerequisites": [
        "Combat Expertise"
    ],
    "name": "Improved Reposition",
    "nonFeatPrerequisites": []
},
"greaterReposition" : {
    "benefitsShort": "Enemies you reposition provoke attacks of opportunity",
    "buildsInto": [],
    "featPrerequisites": [
        "Improved Reposition"
    ],
    "name": "Greater Reposition",
    "nonFeatPrerequisites": [
        "base attack bonus +6"
    ]
},
"improvedShareSpells" : {
    "benefitsShort": "Spells affect both you and your bonded creature",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Improved Share Spells",
    "nonFeatPrerequisites": [
        "Spellcraft 10 ranks",
        "see feat"
    ]
},
"improvedSteal" : {
    "benefitsShort": "+2 bonus on steal attempts, no attack of opportunity",
    "buildsInto": [
        "greaterSteal"
    ],
    "featPrerequisites": [
        "Combat Expertise"
    ],
    "name": "Improved Steal",
    "nonFeatPrerequisites": []
},
"greaterSteal" : {
    "benefitsShort": "Enemies don't notice theft until after combat",
    "buildsInto": [],
    "featPrerequisites": [
        "Improved Steal"
    ],
    "name": "Greater Steal",
    "nonFeatPrerequisites": [
        "base attack bonus +6"
    ]
},
"improvedStonecunning" : {
    "benefitsShort": "+4 bonus on Perception checks to notice unusual stonework",
    "buildsInto": [
        "stoneSense"
    ],
    "featPrerequisites": [],
    "name": "Improved Stonecunning",
    "nonFeatPrerequisites": [
        "Wis 13",
        "dwarf",
        "stonecunning racial trait"
    ]
},
"stoneSense" : {
    "benefitsShort": "Gain tremorsense 10 ft.",
    "buildsInto": [],
    "featPrerequisites": [
        "Improved Stonecunning"
    ],
    "name": "Stone Sense",
    "nonFeatPrerequisites": [
        "Perception 10 ranks"
    ]
},
"ironguts" : {
    "benefitsShort": "+2 on saves against nausea, sickening, and ingested poisons",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Ironguts",
    "nonFeatPrerequisites": [
        "Con 13; dwarf",
        "half-orc",
        "or orc"
    ]
},
"ironhide" : {
    "benefitsShort": "+1 natural armor bonus to AC",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Ironhide",
    "nonFeatPrerequisites": [
        "Con 13; dwarf",
        "half-orc",
        "or orc"
    ]
},
"keenScent" : {
    "benefitsShort": "Gain the scent special ability",
    "buildsInto": [
        "smellFear"
    ],
    "featPrerequisites": [],
    "name": "Keen Scent",
    "nonFeatPrerequisites": [
        "Wis 13",
        "half-orc or orc"
    ]
},
"smellFear" : {
    "benefitsShort": "+4 on Perception checks to detect frightened creatures",
    "buildsInto": [],
    "featPrerequisites": [
        "Keen Scent"
    ],
    "name": "Smell Fear",
    "nonFeatPrerequisites": [
        "half-orc or orc"
    ]
},
"<i>ki</i>Throw" : {
    "benefitsShort": "Throw opponent into adjacent square with a trip attack",
    "buildsInto": [],
    "featPrerequisites": [
        "Improved Trip",
        "Improved Unarmed Strike"
    ],
    "name": "<i>Ki</i> Throw",
    "nonFeatPrerequisites": []
},
"improved<i>Ki</i>Throw" : {
    "benefitsShort": "Throw opponent into occupied square as a bull rush",
    "buildsInto": [],
    "featPrerequisites": [
        "Improved Bull Rush"
    ],
    "name": "Improved <i>Ki</i> Throw",
    "nonFeatPrerequisites": [
        "Ki Throw"
    ]
},
"leafSinger" : {
    "benefitsShort": "Gain benefits to bardic performance in forests and against fey",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Leaf Singer",
    "nonFeatPrerequisites": [
        "Cha 13",
        "bardic performance",
        "elf or half-elf"
    ]
},
"lightStep" : {
    "benefitsShort": "Move normal speed in difficult terrain",
    "buildsInto": [],
    "featPrerequisites": [
        "Acrobatic Steps",
        "Nimble Moves"
    ],
    "name": "Light Step",
    "nonFeatPrerequisites": [
        "elf"
    ]
},
"lingeringPerformance" : {
    "benefitsShort": "Bardic performance continues for 2 rounds after you stop performing",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Lingering Performance",
    "nonFeatPrerequisites": [
        "Bardic performance class ability"
    ]
},
"lowProfile" : {
    "benefitsShort": "+1 dodge bonus to AC against ranged attacks",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Low Profile",
    "nonFeatPrerequisites": [
        "Dex 13",
        "Small size or smaller"
    ]
},
"luckyHalfling" : {
    "benefitsShort": "You may roll saving throw for an ally once per day",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Lucky Halfling",
    "nonFeatPrerequisites": [
        "Halfling"
    ]
},
"masterAlchemist" : {
    "benefitsShort": "+2 on Craft (alchemy) checks, and you can create alchemical items and poisons faster",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Master Alchemist",
    "nonFeatPrerequisites": [
        "Craft (alchemy) 5 ranks"
    ]
},
"minorSpellExpertise" : {
    "benefitsShort": "Cast 1st-level spell as spell-like ability 2/day",
    "buildsInto": [
        "majorSpellExpertise"
    ],
    "featPrerequisites": [],
    "name": "Minor Spell Expertise",
    "nonFeatPrerequisites": [
        "Cast 4th-level spells"
    ]
},
"majorSpellExpertise" : {
    "benefitsShort": "Cast 5th-level or lower spell as spell-like ability 2/day",
    "buildsInto": [],
    "featPrerequisites": [
        "Minor Spell Expertise"
    ],
    "name": "Major Spell Expertise",
    "nonFeatPrerequisites": [
        "cast 9th-level spells"
    ]
},
"missileShield" : {
    "benefitsShort": "Deflect one ranged attack per round with shield",
    "buildsInto": [
        "rayShield"
    ],
    "featPrerequisites": [
        "Shield Focus"
    ],
    "name": "Missile Shield",
    "nonFeatPrerequisites": [
        "Dex 13"
    ]
},
"rayShield" : {
    "benefitsShort": "Deflect one ranged touch attack per round with shield",
    "buildsInto": [],
    "featPrerequisites": [
        "Missile Shield",
        "Spellbreaker"
    ],
    "name": "Ray Shield",
    "nonFeatPrerequisites": [
        "Dex 15"
    ]
},
"mountedShield" : {
    "benefitsShort": "Apply shield bonus to mount's AC",
    "buildsInto": [],
    "featPrerequisites": [
        "Mounted Combat",
        "Shield Focus"
    ],
    "name": "Mounted Shield",
    "nonFeatPrerequisites": []
},
"parrySpell" : {
    "benefitsShort": "Reflect a counterspelled spell back on its caster",
    "buildsInto": [],
    "featPrerequisites": [
        "Improved Counterspell"
    ],
    "name": "Parry Spell",
    "nonFeatPrerequisites": [
        "Spellcraft 15 ranks"
    ]
},
"partingShot" : {
    "benefitsShort": "Make a ranged attack when withdrawing",
    "buildsInto": [],
    "featPrerequisites": [
        "Shot on the Run"
    ],
    "name": "Parting Shot",
    "nonFeatPrerequisites": [
        "base attack bonus +6"
    ]
},
"passforHuman" : {
    "benefitsShort": "+10 on Disguise checks to look like a human",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Pass for Human",
    "nonFeatPrerequisites": [
        "Half-elf",
        "half-orc",
        "or halfling"
    ]
},
"perfectStrike" : {
    "benefitsShort": "Roll twice for attacks with monk weapons and take the better roll",
    "buildsInto": [],
    "featPrerequisites": [
        "Improved Unarmed Strike"
    ],
    "name": "Perfect Strike",
    "nonFeatPrerequisites": [
        "Dex 13",
        "Wis 13",
        " base attack bonus +8"
    ]
},
"point-blankMaster" : {
    "benefitsShort": "Do not provoke attacks of opportunity while firing one  ranged weapon",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Point-Blank Master",
    "nonFeatPrerequisites": [
        "Weapon Specialization with a ranged weapon"
    ]
},
"practicedTactician" : {
    "benefitsShort": "Use tactician ability one additional time per day",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Practiced Tactician",
    "nonFeatPrerequisites": [
        "Tactician class feature"
    ]
},
"preferredSpell" : {
    "benefitsShort": "Spontaneously cast a specific spell",
    "buildsInto": [],
    "featPrerequisites": [
        "Heighten Spell"
    ],
    "name": "Preferred Spell",
    "nonFeatPrerequisites": [
        "Spellcraft 5 ranks"
    ]
},
"punishingKick" : {
    "benefitsShort": "Knock down or push back foes with unarmed strikes",
    "buildsInto": [],
    "featPrerequisites": [
        "Improved Unarmed Strike"
    ],
    "name": "Punishing Kick",
    "nonFeatPrerequisites": [
        "Con 13",
        "Wis 13",
        "base attack bonus +8"
    ]
},
"pushingAssault" : {
    "benefitsShort": "Push a foe back with a two-handed weapon",
    "buildsInto": [],
    "featPrerequisites": [
        "Power Attack"
    ],
    "name": "Pushing Assault",
    "nonFeatPrerequisites": [
        "Str 15",
        "base attack bonus +1"
    ]
},
"racialHeritage" : {
    "benefitsShort": "Affected as though both human and another race",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Racial Heritage",
    "nonFeatPrerequisites": [
        "Human"
    ]
},
"ragingVitality" : {
    "benefitsShort": "+2 bonus to Con when raging, and continue raging if unconscious",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Raging Vitality",
    "nonFeatPrerequisites": [
        "Con 15",
        "rage class feature"
    ]
},
"razortusk" : {
    "benefitsShort": "Gain bite attack",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Razortusk",
    "nonFeatPrerequisites": [
        "Half-orc"
    ]
},
"rendingClaws" : {
    "benefitsShort": "Deal 1d6 extra damage if both claws hit",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Rending Claws",
    "nonFeatPrerequisites": [
        "Str 13",
        "two claw attacks",
        "base attack bonus +6"
    ]
},
"repositioningStrike" : {
    "benefitsShort": "Attempt a reposition attack on a successful critical hit",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Repositioning Strike",
    "nonFeatPrerequisites": [
        "Improved Repostion",
        "base attack bonus +9"
    ]
},
"savingShield" : {
    "benefitsShort": "Grant shield bonus to an adjacent ally",
    "buildsInto": [],
    "featPrerequisites": [
        "Shield Proficiency"
    ],
    "name": "Saving Shield",
    "nonFeatPrerequisites": []
},
"secondChance" : {
    "benefitsShort": "Exchange later attacks to reroll missed first attack",
    "buildsInto": [
        "improvedSecondChance"
    ],
    "featPrerequisites": [
        "Combat Expertise"
    ],
    "name": "Second Chance",
    "nonFeatPrerequisites": [
        "base attack bonus +6"
    ]
},
"improvedSecondChance" : {
    "benefitsShort": "Take a &ndash;5 penalty on later attacks to reroll missed attack",
    "buildsInto": [],
    "featPrerequisites": [
        "Second Chance"
    ],
    "name": "Improved Second Chance",
    "nonFeatPrerequisites": [
        "base attack bonus +11"
    ]
},
"shadowStrike" : {
    "benefitsShort": "Deal precision damage against targets with concealment",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Shadow Strike",
    "nonFeatPrerequisites": [
        "Base attack bonus +1"
    ]
},
"sharedInsight" : {
    "benefitsShort": "Grant friendly creatures a +2 bonus on Perception checks",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Shared Insight",
    "nonFeatPrerequisites": [
        "Wis 13",
        "half-elf"
    ]
},
"sharpSenses" : {
    "benefitsShort": "+4 racial bonus on Perception checks",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Sharp Senses",
    "nonFeatPrerequisites": [
        "Keen senses racial trait"
    ]
},
"shieldofSwings" : {
    "benefitsShort": "Reduce damage with a two handed weapon to gain a +4  shield bonus",
    "buildsInto": [],
    "featPrerequisites": [
        "Power Attack"
    ],
    "name": "Shield of Swings",
    "nonFeatPrerequisites": [
        "Str 13",
        "base attack bonus +1"
    ]
},
"shieldSpecialization" : {
    "benefitsShort": "+2 bonus to AC against criticals with one type of shield",
    "buildsInto": [
        "greaterShieldSpecialization"
    ],
    "featPrerequisites": [
        "Shield Focus"
    ],
    "name": "Shield Specialization",
    "nonFeatPrerequisites": [
        "4th-level fighter"
    ]
},
"greaterShieldSpecialization" : {
    "benefitsShort": "+2 bonus to AC against criticals, and negate critical hit  once per day",
    "buildsInto": [],
    "featPrerequisites": [
        "Greater Shield Focus",
        "Shield Specialization"
    ],
    "name": "Greater Shield Specialization",
    "nonFeatPrerequisites": [
        " 12th-level fighter"
    ]
},
"sidestep" : {
    "benefitsShort": "Make 5-foot step immediately after an opponent misses",
    "buildsInto": [
        "improvedSidestep"
    ],
    "featPrerequisites": [
        "Dodge",
        "Mobility"
    ],
    "name": "Sidestep",
    "nonFeatPrerequisites": [
        "Dex 13"
    ]
},
"improvedSidestep" : {
    "benefitsShort": "Sidestep without using your 5-foot step on your next turn",
    "buildsInto": [],
    "featPrerequisites": [
        "Sidestep"
    ],
    "name": "Improved Sidestep",
    "nonFeatPrerequisites": [
        "Dex 15"
    ]
},
"smash" : {
    "benefitsShort": "Ignore 5 points of hardness when breaking an object",
    "buildsInto": [],
    "featPrerequisites": [
        "Power Attack"
    ],
    "name": "Smash",
    "nonFeatPrerequisites": [
        "half-orc"
    ]
},
"sociable" : {
    "benefitsShort": "Grant friendly creatures a +2 bonus on Diplomacy checks",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Sociable",
    "nonFeatPrerequisites": [
        "Cha 13",
        "half-elf"
    ]
},
"spellPerfection" : {
    "benefitsShort": "Apply any metamagic feat to one spell without penalty, up to 9th level",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Spell Perfection",
    "nonFeatPrerequisites": [
        "Spellcraft 15 ranks",
        "3 metamagic feats"
    ]
},
"spiderStep" : {
    "benefitsShort": "Walk on walls or ceilings for half your slow fall distance",
    "buildsInto": [
        "cloudStep"
    ],
    "featPrerequisites": [],
    "name": "Spider Step",
    "nonFeatPrerequisites": [
        "Acrobatics 6 ranks",
        "Climb 6 ranks",
        " 6th-level monk"
    ]
},
"cloudStep" : {
    "benefitsShort": "Air walk for half your slow fall distance",
    "buildsInto": [],
    "featPrerequisites": [
        "Spider Step"
    ],
    "name": "Cloud Step",
    "nonFeatPrerequisites": [
        "12th-level monk"
    ]
},
"stabbingShot" : {
    "benefitsShort": "Use arrow as a melee attack to push enemies back",
    "buildsInto": [],
    "featPrerequisites": [
        "Rapid Shot"
    ],
    "name": "Stabbing Shot",
    "nonFeatPrerequisites": [
        "elf"
    ]
},
"steelSoul" : {
    "benefitsShort": "+4 racial bonus on saves against spells and spell-like abilities",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Steel Soul",
    "nonFeatPrerequisites": [
        "Dwarf",
        "hardy racial trait"
    ]
},
"stone-faced" : {
    "benefitsShort": "+4 bonus on Bluff checks to lie or conceal motives",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Stone-Faced",
    "nonFeatPrerequisites": [
        "Dwarf"
    ]
},
"stoneSinger" : {
    "benefitsShort": "Gain benefits to bardic performance underground and  against earth creatures",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Stone Singer",
    "nonFeatPrerequisites": [
        "Cha 13",
        "bardic performance",
        "dwarf"
    ]
},
"stunningAssault" : {
    "benefitsShort": "Trade melee attack bonus to stun opponents",
    "buildsInto": [],
    "featPrerequisites": [
        "Power Attack"
    ],
    "name": "Stunning Assault",
    "nonFeatPrerequisites": [
        "base attack bonus +16"
    ]
},
"summoner'sCall" : {
    "benefitsShort": "Your eidolon gets a bonus when summoned",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Summoner's Call",
    "nonFeatPrerequisites": [
        "Eidolon class feature"
    ]
},
"sunderingStrike" : {
    "benefitsShort": "Attempt a sunder attack on a successful critical hit",
    "buildsInto": [],
    "featPrerequisites": [
        "Improved Sunder"
    ],
    "name": "Sundering Strike",
    "nonFeatPrerequisites": [
        "base attack bonus +9"
    ]
},
"swiftAid" : {
    "benefitsShort": "Attempt to aid another as a swift action",
    "buildsInto": [],
    "featPrerequisites": [
        "Combat Expertise"
    ],
    "name": "Swift Aid",
    "nonFeatPrerequisites": [
        "base attack bonus +6"
    ]
},
"taunt" : {
    "benefitsShort": "Demoralize opponents with Bluff instead of Intimidate",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Taunt",
    "nonFeatPrerequisites": [
        "Cha 13",
        "Small size or smaller"
    ]
},
"teleportTactician" : {
    "benefitsShort": "Teleporting creatures provoke attacks of opportunity",
    "buildsInto": [],
    "featPrerequisites": [
        "Combat Reflexes",
        "Disruptive",
        "Spellbreaker"
    ],
    "name": "Teleport Tactician",
    "nonFeatPrerequisites": []
},
"tenaciousTransmutation" : {
    "benefitsShort": "+2 to DC to dispel your transmutations",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Tenacious Transmutation",
    "nonFeatPrerequisites": [
        "Spell Focus (transmutation)"
    ]
},
"touchofSerenity" : {
    "benefitsShort": "Foes hit by unarmed strikes cannot attack or cast spells",
    "buildsInto": [],
    "featPrerequisites": [
        "Improved Unarmed Strike"
    ],
    "name": "Touch of Serenity",
    "nonFeatPrerequisites": [
        "Wis 18",
        "base attack bonus +8"
    ]
},
"trickRiding" : {
    "benefitsShort": "Automatically pass simple Ride skill checks",
    "buildsInto": [
        "mountedSkirmisher"
    ],
    "featPrerequisites": [
        "Mounted Combat"
    ],
    "name": "Trick Riding",
    "nonFeatPrerequisites": [
        "Ride rank 9"
    ]
},
"mountedSkirmisher" : {
    "benefitsShort": "Make a full attack if mount moves its speed or less",
    "buildsInto": [],
    "featPrerequisites": [
        "Trick Riding"
    ],
    "name": "Mounted Skirmisher",
    "nonFeatPrerequisites": [
        "Ride rank 14"
    ]
},
"trippingStrike" : {
    "benefitsShort": "Attempt a trip attack on a successful critical hit",
    "buildsInto": [],
    "featPrerequisites": [
        "Improved Trip"
    ],
    "name": "Tripping Strike",
    "nonFeatPrerequisites": [
        "base attack bonus +9"
    ]
},
"underandOver" : {
    "benefitsShort": "Failed grapples against you cause attacker to fall prone",
    "buildsInto": [],
    "featPrerequisites": [
        "Agile Maneuvers"
    ],
    "name": "Under and Over",
    "nonFeatPrerequisites": [
        "Small size or smaller"
    ]
},
"underfoot" : {
    "benefitsShort": "+4 on Acrobatics checks to move past larger opponents",
    "buildsInto": [],
    "featPrerequisites": [
        "Dodge",
        "Mobility"
    ],
    "name": "Underfoot",
    "nonFeatPrerequisites": [
        "Small size or smaller"
    ]
},
"verminHeart" : {
    "benefitsShort": "Target vermin with spells as if they were animals",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Vermin Heart",
    "nonFeatPrerequisites": [
        "Wild empathy class feature"
    ]
},
"warSinger" : {
    "benefitsShort": "Gain benefits to bardic performance on battlefields and against orcs",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "War Singer",
    "nonFeatPrerequisites": [
        "Cha 13",
        "bardic performance",
        "half-orc or orc"
    ]
},
"well-prepared" : {
    "benefitsShort": "Retrieve a specific mundane item from your person",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Well-Prepared",
    "nonFeatPrerequisites": [
        "Halfling"
    ]
},
"bouncingSpell" : {
    "benefitsShort": "Redirect a spell that had no effect on initial target",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Bouncing Spell",
    "nonFeatPrerequisites": []
},
"dazingSpell" : {
    "benefitsShort": "Daze creature with spell damage",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Dazing Spell",
    "nonFeatPrerequisites": []
},
"disruptiveSpell" : {
    "benefitsShort": "Target of spell must make concentration check to cast a spell in the next round",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Disruptive Spell",
    "nonFeatPrerequisites": []
},
"ectoplasmicSpell" : {
    "benefitsShort": "Spell fully affects incorporeal and ethereal creatures",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Ectoplasmic Spell",
    "nonFeatPrerequisites": []
},
"elementalSpell" : {
    "benefitsShort": "Inflict energy damage instead of regular spell damage",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Elemental Spell",
    "nonFeatPrerequisites": []
},
"focusedSpell" : {
    "benefitsShort": "Increase save DC of spell for one target in a group",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Focused Spell",
    "nonFeatPrerequisites": []
},
"intensifiedSpell" : {
    "benefitsShort": "Increase maximum damage dice by 5 levels",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Intensified Spell",
    "nonFeatPrerequisites": []
},
"lingeringSpell" : {
    "benefitsShort": "Instantaneous area effect spell lasts for 1 round",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Lingering Spell",
    "nonFeatPrerequisites": []
},
"mercifulSpell" : {
    "benefitsShort": "Spell inflicts nonlethal damage instead of lethal",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Merciful Spell",
    "nonFeatPrerequisites": []
},
"persistentSpell" : {
    "benefitsShort": "Creatures who saved against a spell must save again",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Persistent Spell",
    "nonFeatPrerequisites": []
},
"reachSpell" : {
    "benefitsShort": "Increase spell range to higher range category",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Reach Spell",
    "nonFeatPrerequisites": []
},
"selectiveSpell" : {
    "benefitsShort": "Exclude targets from an area effect spell",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Selective Spell",
    "nonFeatPrerequisites": [
        "Spellcraft 10 ranks"
    ]
},
"sickeningSpell" : {
    "benefitsShort": "Sicken creature with spell damage",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Sickening Spell",
    "nonFeatPrerequisites": []
},
"thunderingSpell" : {
    "benefitsShort": "Deafen creature with spell damage",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Thundering Spell",
    "nonFeatPrerequisites": []
},
"alliedSpellcaster" : {
    "benefitsShort": "+2 bonus on level checks to overcome spell resistance",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Allied Spellcaster",
    "nonFeatPrerequisites": [
        "Caster level 1st"
    ]
},
"coordinatedDefense" : {
    "benefitsShort": "+2 bonus to CMD",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Coordinated Defense",
    "nonFeatPrerequisites": []
},
"coordinatedManeuvers" : {
    "benefitsShort": "+2 bonus on combat maneuver checks",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Coordinated Maneuvers",
    "nonFeatPrerequisites": []
},
"duckandCover" : {
    "benefitsShort": "Take ally's result on Reflex saving throw",
    "buildsInto": [
        "improvedDuckandCover"
    ],
    "featPrerequisites": [],
    "name": "Duck and Cover",
    "nonFeatPrerequisites": []
},
"lookout" : {
    "benefitsShort": "Act in surprise round if ally can act",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Lookout",
    "nonFeatPrerequisites": []
},
"outflank" : {
    "benefitsShort": "Gain +4 bonus on attack rolls when flanking",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Outflank",
    "nonFeatPrerequisites": [
        "Base attack bonus +4"
    ]
},
"pairedOpportunists" : {
    "benefitsShort": "+4 bonus on attacks of opportunity",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Paired Opportunists",
    "nonFeatPrerequisites": []
},
"preciseStrike" : {
    "benefitsShort": "Deal +1d6 points of precision damage with melee attacks",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Precise Strike",
    "nonFeatPrerequisites": [
        "Dex 13",
        "base attack bonus +1"
    ]
},
"shieldWall" : {
    "benefitsShort": "Increase your shield bonus to AC",
    "buildsInto": [],
    "featPrerequisites": [
        "Shield Proficiency"
    ],
    "name": "Shield Wall",
    "nonFeatPrerequisites": []
},
"shieldedCaster" : {
    "benefitsShort": "+4 bonus on concentration checks",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Shielded Caster",
    "nonFeatPrerequisites": []
},
"swapPlaces" : {
    "benefitsShort": "Switch places with an adjacent ally",
    "buildsInto": [
        "improvedSwapPlaces"
    ],
    "featPrerequisites": [],
    "name": "Swap Places",
    "nonFeatPrerequisites": []
},
"aberrantTumor" : {
    "benefitsShort": "Gain a tumor familiar",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Aberrant Tumor",
    "nonFeatPrerequisites": [
        "Aberrant bloodline"
    ]
},
"amateurInvestigator" : {
    "benefitsShort": "Gain a minor pool of inspiration for use with Knowledge, Linguistics, or Spellcraft checks",
    "buildsInto": [
        "studiedCombatant"
    ],
    "featPrerequisites": [],
    "name": "Amateur Investigator",
    "nonFeatPrerequisites": [
        "Int 13",
        "1 rank in at least one Knowledge skill",
        "no levels in a class that has inspiration"
    ]
},
"studiedCombatant" : {
    "benefitsShort": "Expend inspiration to gain a limited version of studied combat",
    "buildsInto": [
        "improvedStudiedCombatant"
    ],
    "featPrerequisites": [
        "Amateur Investigator"
    ],
    "name": "Studied Combatant",
    "nonFeatPrerequisites": [
        "base attack bonus +6"
    ]
},
"improvedStudiedCombatant" : {
    "benefitsShort": "Studied strike grants a +4 bonus on attack rolls and damage rolls",
    "buildsInto": [],
    "featPrerequisites": [
        "Studied Combatant"
    ],
    "name": "Improved Studied Combatant",
    "nonFeatPrerequisites": [
        "Int 14",
        "base attack bonus +8"
    ]
},
"amateurSwashbuckler" : {
    "benefitsShort": "Gain a minor pool of panache to use with a 1st-level swashbuckler deed of your choice ",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Amateur Swashbuckler",
    "nonFeatPrerequisites": [
        "No levels in a class that has panache"
    ]
},
"animalSoul" : {
    "benefitsShort": "You can shrug off spells that don't work on animals",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Animal Soul",
    "nonFeatPrerequisites": [
        "Animal companion or mount class feature"
    ]
},
"anticipateDodge" : {
    "benefitsShort": "Gain up to a +2 bonus on attack rolls against creatures with a dodge bonus ",
    "buildsInto": [
        "counterReflexes"
    ],
    "featPrerequisites": [
        "Dodge"
    ],
    "name": "Anticipate Dodge",
    "nonFeatPrerequisites": [
        "Mobility; base attack bonus +7",
        "brawler level 4th",
        "or monk level 4th"
    ]
},
"counterReflexes" : {
    "benefitsShort": "Opponents with Mobility do not gain a bonus when they provoke attacks of opportunity from you",
    "buildsInto": [],
    "featPrerequisites": [
        "Anticipate Dodge"
    ],
    "name": "Counter Reflexes",
    "nonFeatPrerequisites": []
},
"barroomBrawler" : {
    "benefitsShort": "Once per day, gain the use of a combat feat you don't possess for 1 minute",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Barroom Brawler",
    "nonFeatPrerequisites": [
        "Base attack bonus +4"
    ]
},
"battleCry" : {
    "benefitsShort": "Let out a cry that grants allies a +1 bonus on attack rolls and +4 bonus on saves against fear",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Battle Cry",
    "nonFeatPrerequisites": [
        "Cha 13; base attack bonus +5 or Perform (act",
        "oratory",
        "or sing) 5 ranks"
    ]
},
"befuddlingStrike" : {
    "benefitsShort": "Confuse opponent with unarmed strike",
    "buildsInto": [],
    "featPrerequisites": [
        "Improved Unarmed Strike"
    ],
    "name": "Befuddling Strike",
    "nonFeatPrerequisites": [
        "Dex 13",
        "Wis 13",
        "base attack bonus +8"
    ]
},
"believer'sBoon" : {
    "benefitsShort": "Gain the use of a 1st-level cleric domain ability",
    "buildsInto": [
        "believer'sHands"
    ],
    "featPrerequisites": [],
    "name": "Believer's Boon",
    "nonFeatPrerequisites": [
        "Wis 13",
        "alignment must be within one step of your deity's"
    ]
},
"believer'sHands" : {
    "benefitsShort": "Use lay on hands once per day",
    "buildsInto": [],
    "featPrerequisites": [
        "Believer's Boon"
    ],
    "name": "Believer's Hands",
    "nonFeatPrerequisites": [
        "must be lawful good"
    ]
},
"blastingCharge" : {
    "benefitsShort": "Expend a bloodrager spell slot while bloodraging to add force damage to your charge attack",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Blasting Charge",
    "nonFeatPrerequisites": [
        "Base attack bonus +7",
        "ability to cast 2nd-level bloodrager spells",
        "bloodrage class feature"
    ]
},
"blessedStriker" : {
    "benefitsShort": "Your attacks are considered to have the alignments you share with your deity",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Blessed Striker",
    "nonFeatPrerequisites": [
        "Base attack bonus +11",
        "ability to cast divine spells",
        "alignment must be within one step of your deity's"
    ]
},
"bloodedArcaneStrike" : {
    "benefitsShort": "Gain the benefits of Arcane Strike while bloodraging",
    "buildsInto": [],
    "featPrerequisites": [
        "Arcane Strike"
    ],
    "name": "Blooded Arcane Strike",
    "nonFeatPrerequisites": [
        "bloodrage class feature"
    ]
},
"bookishRogue" : {
    "benefitsShort": "Change your rogue talent spell-like abilities with study",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Bookish Rogue",
    "nonFeatPrerequisites": [
        "Minor magic rogue talent"
    ]
},
"cannyTumble" : {
    "benefitsShort": "Gain a bonus on melee attack rolls when you use Acrobatics to avoid attacks of opportunity",
    "buildsInto": [],
    "featPrerequisites": [
        "Dodge",
        "Mobility"
    ],
    "name": "Canny Tumble",
    "nonFeatPrerequisites": [
        "Acrobatics 5 ranks"
    ]
},
"channeledBlessing" : {
    "benefitsShort": "Bestow a blessing on an ally when you channel energy",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Channeled Blessing",
    "nonFeatPrerequisites": [
        "Blessings class feature",
        "channel energy class feature"
    ]
},
"channelingForce" : {
    "benefitsShort": "Spend channel energy to deal extra force damage with weapon attacks",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Channeling Force",
    "nonFeatPrerequisites": [
        "Ability to cast one force spell",
        "channel energy class feature"
    ]
},
"counterpunch" : {
    "benefitsShort": "When you fight unarmed and a foe misses with all melee attacks, it provokes attacks of opportunity from you",
    "buildsInto": [],
    "featPrerequisites": [
        "Combat Reflexes",
        "Improved Unarmed Strike"
    ],
    "name": "Counterpunch ",
    "nonFeatPrerequisites": [
        "Dex 18",
        "Weapon Focus (unarmed strike)",
        "base attack bonus +16 or brawler level 12th"
    ]
},
"dazingFist" : {
    "benefitsShort": "Daze with unarmed strikes",
    "buildsInto": [],
    "featPrerequisites": [
        "Improved Unarmed Strike"
    ],
    "name": "Dazing Fist",
    "nonFeatPrerequisites": [
        "Dex 13",
        "Wis 13",
        "base attack bonus +4"
    ]
},
"disableDweomer" : {
    "benefitsShort": "Use Disable Device to suppress magic items",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Disable Dweomer",
    "nonFeatPrerequisites": [
        "Disable Device 5 ranks",
        "Use Magic Device 5 ranks",
        "trapfinding"
    ]
},
"dishearteningDisplay" : {
    "benefitsShort": "Use Dazzling Display to increase a fear effect",
    "buildsInto": [],
    "featPrerequisites": [
        "Dazzling Display",
        "Weapon Focus"
    ],
    "name": "Disheartening Display",
    "nonFeatPrerequisites": [
        "base attack bonus +6",
        "proficiency with selected weapon"
    ]
},
"divineProtection" : {
    "benefitsShort": "Gain a bonus equal to your Charisma bonus on a saving throw",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Divine Protection",
    "nonFeatPrerequisites": [
        "Cha 13",
        "Knowledge (religion) 5 ranks"
    ]
},
"drainingStrike" : {
    "benefitsShort": "Cause fatigue with unarmed strikes",
    "buildsInto": [],
    "featPrerequisites": [
        "Improved Unarmed Strike"
    ],
    "name": "Draining Strike",
    "nonFeatPrerequisites": [
        "Dex 13",
        "Wis 13",
        "base attack bonus +8"
    ]
},
"dualEnhancement" : {
    "benefitsShort": "Imbue two weapons with divine bond or sacred weapon instead of just one",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Dual Enhancement",
    "nonFeatPrerequisites": [
        "Two-Weapon Fighting; divine bond (weapon) or sacred weapon class feature"
    ]
},
"energyChannel" : {
    "benefitsShort": "Spend channel energy to deal extra energy damage with weapon attacks",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Energy Channel",
    "nonFeatPrerequisites": [
        "Channel energy class feature; Air",
        "Earth",
        "Fire",
        "or Water domain or blessing"
    ]
},
"esotericLinguistics" : {
    "benefitsShort": "Use Linguistics in place of some Use Magic Device and Spellcraft checks",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Esoteric Linguistics",
    "nonFeatPrerequisites": [
        "Skill Focus (Linguistics)"
    ]
},
"evolvedCompanion" : {
    "benefitsShort": "Companion gains a 1-point eidolon evolution",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Evolved Companion",
    "nonFeatPrerequisites": [
        "Cha 13",
        "animal companion class feature"
    ]
},
"evolvedSummonedMonster" : {
    "benefitsShort": "Summoned monster gains a 1-point eidolon evolution",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Evolved Summoned Monster",
    "nonFeatPrerequisites": [
        "Augmented Summoning",
        "Spell Focus (conjuration)",
        "ability to cast <em>summon monster I</em>"
    ]
},
"expandedPreparation" : {
    "benefitsShort": "Gain extra spell slots",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Expanded Preparation",
    "nonFeatPrerequisites": [
        "Arcanist level 1st"
    ]
},
"extendedAnimalFocus" : {
    "benefitsShort": "Add your Wisdom modifier to the number of minutes per day you can use animal focus",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Extended Animal Focus",
    "nonFeatPrerequisites": [
        "Animal focus class feature"
    ]
},
"extraArcanistExploit" : {
    "benefitsShort": "Gain an additional arcanist exploit",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Extra Arcanist Exploit",
    "nonFeatPrerequisites": [
        "Arcanist exploit class feature"
    ]
},
"extraChannel" : {
    "benefitsShort": "Channel energy two additional times per day",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Extra Channel",
    "nonFeatPrerequisites": [
        "Channel energy class feature"
    ]
},
"extraHex" : {
    "benefitsShort": "Gain one additional hex",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Extra Hex",
    "nonFeatPrerequisites": [
        "Hex class feature"
    ]
},
"extraInspiration" : {
    "benefitsShort": "Gain three uses of inspiration",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Extra Inspiration",
    "nonFeatPrerequisites": [
        "Amateur Investigator or inspiration class feature"
    ]
},
"extraInvestigatorTalent" : {
    "benefitsShort": "Gain an additional investigator talent",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Extra Investigator Talent",
    "nonFeatPrerequisites": [
        "Investigator talent class feature"
    ]
},
"extraMartialFlexibility" : {
    "benefitsShort": "Gain three uses of martial flexibility",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Extra Martial Flexibility",
    "nonFeatPrerequisites": [
        "Martial flexibility class feature"
    ]
},
"extraReservoir" : {
    "benefitsShort": "Gain 3 more points in your arcane reservoir",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Extra Reservoir",
    "nonFeatPrerequisites": [
        "Arcane reservoir class feature"
    ]
},
"extraSlayerTalent" : {
    "benefitsShort": "Gain an additional slayer talent",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Extra Slayer Talent",
    "nonFeatPrerequisites": [
        "Slayer talent class feature"
    ]
},
"favoredEnemySpellcasting" : {
    "benefitsShort": "Spell DCs are 1 higher for your chosen enemy",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Favored Enemy Spellcasting",
    "nonFeatPrerequisites": [
        "Ability to cast spells"
    ]
},
"faerie'sStrike" : {
    "benefitsShort": "Illuminate foes with Vital Strike",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Faerie's Strike",
    "nonFeatPrerequisites": [
        "Nature Magic or the ability to cast druid or ranger spells; Vital Strike",
        "Knowledge (nature) 5 ranks"
    ]
},
"flexibleHex" : {
    "benefitsShort": "Change wandering hex with a swift action",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Flexible Hex",
    "nonFeatPrerequisites": [
        "Wandering hex class feature"
    ]
},
"flexibleWizardry" : {
    "benefitsShort": "Prepare some spells flexibly",
    "buildsInto": [
        "improvedFlexibleWizardry"
    ],
    "featPrerequisites": [
        "Spell Mastery"
    ],
    "name": "Flexible Wizardry",
    "nonFeatPrerequisites": [
        "wizard level 1st"
    ]
},
"improvedFlexibleWizardry" : {
    "benefitsShort": "Flexibly prepare more spells",
    "buildsInto": [],
    "featPrerequisites": [
        "Flexible Wizardry"
    ],
    "name": "Improved Flexible Wizardry",
    "nonFeatPrerequisites": [
        "wizard level 8th"
    ]
},
"focusedInspiration" : {
    "benefitsShort": "Roll d8s or higher when you use inspiration on chosen skills",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Focused Inspiration",
    "nonFeatPrerequisites": [
        "Inspiration class feature",
        "keen recollection class feature"
    ]
},
"forceDash" : {
    "benefitsShort": "Lose a prepared spell or a spell slot to increase your speed",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Force Dash",
    "nonFeatPrerequisites": [
        "Base attack bonus +3",
        "ability to cast 2nd-level arcane spells",
        "ability to cast at least one arcane force spell"
    ]
},
"formulaRecollection" : {
    "benefitsShort": "When a spell is cast, record its formula later",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Formula Recollection",
    "nonFeatPrerequisites": [
        "Spellcraft 5 ranks",
        "keen recollection class feature"
    ]
},
"graspingStrike" : {
    "benefitsShort": "Entangle those you hit with Vital Strike",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Grasping Strike",
    "nonFeatPrerequisites": [
        "Nature Magic or the ability to cast druid or ranger spells; Vital Strike"
    ]
},
"gruesomeSlaughter" : {
    "benefitsShort": "Creatures demoralized by Killing Flourish could become sickened",
    "buildsInto": [],
    "featPrerequisites": [
        "Intimidating Prowess",
        "Killing Flourish"
    ],
    "name": "Gruesome Slaughter",
    "nonFeatPrerequisites": [
        "Intimidate 11 ranks",
        "slayer level 11th"
    ]
},
"improvedAwesomeBlow" : {
    "benefitsShort": "+2 on awesome blow combat maneuver checks and to CMD against such attacks, and movement due to awesome blow provokes from allies",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Improved Awesome Blow",
    "nonFeatPrerequisites": [
        "Str 13; Awesome Blow or awesome blow class feature; Power Attack"
    ]
},
"improvedDirgeofDoom" : {
    "benefitsShort": "Dirge of doom expands to 60 feet and can cause fear up to frightened",
    "buildsInto": [
        "greaterDirgeofDoom"
    ],
    "featPrerequisites": [],
    "name": "Improved Dirge of Doom",
    "nonFeatPrerequisites": [
        "Ability to perform dirge of doom"
    ]
},
"greaterDirgeofDoom" : {
    "benefitsShort": "Your dirge effects linger and can cause fear up to panicked",
    "buildsInto": [],
    "featPrerequisites": [
        "Improved Dirge of Doom"
    ],
    "name": "Greater Dirge of Doom",
    "nonFeatPrerequisites": [
        "ability to perform dirge of doom"
    ]
},
"insightfulDelivery" : {
    "benefitsShort": "Increase the DC of poison delivered with studied strike",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Insightful Delivery",
    "nonFeatPrerequisites": [
        "Poison use class feature",
        "studied strike +4d6"
    ]
},
"inspiredAlchemy" : {
    "benefitsShort": "Spend time and inspiration to recreate a consumed extract",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Inspired Alchemy",
    "nonFeatPrerequisites": [
        "Ability to create 2nd-level extracts",
        "alchemy class feature",
        "inspiration class feature"
    ]
},
"inspiredbyFear" : {
    "benefitsShort": "You and allies in your dirge of doom effect gain a +4 bonus against fear",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Inspired by Fear",
    "nonFeatPrerequisites": [
        "Ability to perform dirge of doom"
    ]
},
"inspiredStrike" : {
    "benefitsShort": "Expend inspiration to increase the damage dealt with the studied combat",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Inspired Strike",
    "nonFeatPrerequisites": [
        "Inspiration and studied combat class features"
    ]
},
"intimidatingPerformance" : {
    "benefitsShort": "Demoralize foes with a successful Perform check",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Intimidating Performance",
    "nonFeatPrerequisites": [
        "Ability to start performances or raging song as move action",
        "bardic performance or raging song class feature"
    ]
},
"kickUp" : {
    "benefitsShort": "Retrieve an unattended item as a swift action",
    "buildsInto": [],
    "featPrerequisites": [
        "Acrobatic"
    ],
    "name": "Kick Up",
    "nonFeatPrerequisites": [
        "Dex 12",
        "Acrobatics 1 rank",
        "slayer level 1st or swashbuckler level 1st"
    ]
},
"killingFlourish" : {
    "benefitsShort": "When melee attacks reduce a foe to fewer than 0 hit points, demoralize those around you",
    "buildsInto": [
        "gruesomeSlaughter"
    ],
    "featPrerequisites": [
        "Intimidating Prowess"
    ],
    "name": "Killing Flourish",
    "nonFeatPrerequisites": [
        "Intimidate 4 ranks",
        "slayer level 4th"
    ]
},
"layoftheLand" : {
    "benefitsShort": "Gain lesser version of favored terrain class feature",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Lay of the Land",
    "nonFeatPrerequisites": [
        "Animal focus class feature",
        "wild empathy class feature"
    ]
},
"lungingSpellTouch" : {
    "benefitsShort": "Increase reach of spell's touch attack by 5 feet",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Lunging Spell Touch",
    "nonFeatPrerequisites": [
        "Spellcraft 6 ranks"
    ]
},
"manifestedBlood" : {
    "benefitsShort": "Surround yourself with an element associated with your bloodline to gain resistance against its energy and deal damage to attackers",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Manifested Blood",
    "nonFeatPrerequisites": [
        "Cha 13; draconic or elemental bloodline"
    ]
},
"mercilessButchery" : {
    "benefitsShort": "Attempt a coup de grace against a cowering, helpless, or stunned studied target as a standard action",
    "buildsInto": [],
    "featPrerequisites": [
        "Dastardly Finish"
    ],
    "name": "Merciless Butchery",
    "nonFeatPrerequisites": [
        "sneak attack +5d6",
        "studied target class feature"
    ]
},
"natureMagic" : {
    "benefitsShort": "Gain <em>know direction</em> as a constant spell-like ability and use one other druid orison once per day",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Nature Magic",
    "nonFeatPrerequisites": [
        "Knowledge (nature) 1 rank"
    ]
},
"orator" : {
    "benefitsShort": "Use Linguistics instead of Bluff, Diplomacy, and Intimidate in some instances",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Orator",
    "nonFeatPrerequisites": [
        "Skill Focus (Linguistics)"
    ]
},
"paralyzingStrike" : {
    "benefitsShort": "Paralyze with unarmed strikes",
    "buildsInto": [],
    "featPrerequisites": [
        "Improved Unarmed Strike"
    ],
    "name": "Paralyzing Strike",
    "nonFeatPrerequisites": [
        "Dex 13",
        "Wis 13",
        "base attack bonus +14"
    ]
},
"quickenBlessing" : {
    "benefitsShort": "Choose a blessing and spend two uses to call upon it as a swift action",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Quicken Blessing",
    "nonFeatPrerequisites": [
        "Access to blessing's major power",
        "blessings class feature"
    ]
},
"rageCasting" : {
    "benefitsShort": "Sacrifice hit points for bloodrager spell potency",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Rage Casting",
    "nonFeatPrerequisites": [
        "Blood casting class feature"
    ]
},
"ragingAbsorption" : {
    "benefitsShort": "Absorb arcane energy from damaging spells to refuel bloodrage",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Raging Absorption",
    "nonFeatPrerequisites": [
        "Ability to cast 4th-level bloodrager spells",
        "bloodrage class feature"
    ]
},
"ragingBlood" : {
    "benefitsShort": "Enter a lesser bloodrage",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Raging Blood",
    "nonFeatPrerequisites": [
        "Eldritch Heritage or sorcerer bloodline class feature"
    ]
},
"ragingConcentration" : {
    "benefitsShort": "While bloodraging, add your morale bonus to Constitution to concentration checks",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Raging Concentration",
    "nonFeatPrerequisites": [
        "Blood casting class feature"
    ]
},
"rangedStudy" : {
    "benefitsShort": "Choose a ranged weapon and use studied combat with that weapon",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Ranged Study",
    "nonFeatPrerequisites": [
        "Weapon Focus with chosen weapon",
        "studied combat class feature"
    ]
},
"reactiveHealing" : {
    "benefitsShort": "When reduced to 0 hp or fewer, use channel energy or lay on hands to heal yourself as immediate action",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Reactive Healing",
    "nonFeatPrerequisites": [
        "Quick Channel or Quicken Spell; channel energy or lay on hands class feature"
    ]
},
"recklessRage" : {
    "benefitsShort": "Take a penalty on attack rolls to deal more damage while raging",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Reckless Rage",
    "nonFeatPrerequisites": [
        "Power Attack; rage or raging song class feature"
    ]
},
"recoveredRage" : {
    "benefitsShort": "Regain rage or raging song with each foe you reduce to 0 or fewer hit points",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Recovered Rage",
    "nonFeatPrerequisites": [
        "Rage or raging song class feature"
    ]
},
"resilientArmor" : {
    "benefitsShort": "Gain DR against some attacks",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Resilient Armor",
    "nonFeatPrerequisites": [
        "Divine bond (armor or shield) or sacred armor class feature"
    ]
},
"rivingStrike" : {
    "benefitsShort": "Those damaged by your Arcane Strike take a penalty on saves against spells and spell-like abilities",
    "buildsInto": [],
    "featPrerequisites": [
        "Arcane Strike"
    ],
    "name": "Riving Strike",
    "nonFeatPrerequisites": []
},
"seethingHatred" : {
    "benefitsShort": "Select a favored enemy and gain greater benefits when such a creature is your studied target",
    "buildsInto": [
        "extremePrejudice"
    ],
    "featPrerequisites": [],
    "name": "Seething Hatred",
    "nonFeatPrerequisites": [
        "Studied target class feature"
    ]
},
"extremePrejudice" : {
    "benefitsShort": "When you succeed at a sneak attack with Seething Hatred, roll d8s for damage instead of d6s",
    "buildsInto": [],
    "featPrerequisites": [
        "Seething Hatred"
    ],
    "name": "Extreme Prejudice",
    "nonFeatPrerequisites": [
        "sneak attack +3d6",
        "studied target class feature"
    ]
},
"seizeAdvantage" : {
    "benefitsShort": "Add foe's Power Attack damage to your riposte",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Seize Advantage",
    "nonFeatPrerequisites": [
        "Opportune parry and riposte deed"
    ]
},
"silentKill" : {
    "benefitsShort": "Kill during the surprise round and slip back into shadows",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Silent Kill",
    "nonFeatPrerequisites": [
        "Stealth 12 ranks",
        "assassinate advanced slayer talent or ninja master trick"
    ]
},
"skald'sVigor" : {
    "benefitsShort": "Gain fast healing while raging and performing or performing raging song",
    "buildsInto": [
        "greaterSkald'sVigor"
    ],
    "featPrerequisites": [],
    "name": "Skald's Vigor",
    "nonFeatPrerequisites": [
        "Raging song class feature"
    ]
},
"greaterSkald'sVigor" : {
    "benefitsShort": "Allies share the fast healing of Skald's Vigor",
    "buildsInto": [],
    "featPrerequisites": [
        "Skald's Vigor"
    ],
    "name": "Greater Skald's Vigor",
    "nonFeatPrerequisites": [
        "Perform (sing) 10 ranks"
    ]
},
"skilledRager" : {
    "benefitsShort": "Pick a skill and use it while raging",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Skilled Rager",
    "nonFeatPrerequisites": [
        "Rage class feature"
    ]
},
"slashingGrace" : {
    "benefitsShort": "Treat a slashing weapon as a piercing melee weapon",
    "buildsInto": [],
    "featPrerequisites": [
        "Weapon Finesse"
    ],
    "name": "Slashing Grace",
    "nonFeatPrerequisites": [
        "Dex 13",
        "Weapon Focus with selected weapon"
    ]
},
"slayer'sFeint" : {
    "benefitsShort": "Use Acrobatics instead of Bluff to feint",
    "buildsInto": [],
    "featPrerequisites": [
        "Combat Expertise"
    ],
    "name": "Slayer's Feint",
    "nonFeatPrerequisites": [
        "Dex 15",
        "Acrobatic or slayer level 1st",
        "Acrobatics 1 rank"
    ]
},
"slowFaller" : {
    "benefitsShort": "Gain or improve the slow fall ability",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Slow Faller",
    "nonFeatPrerequisites": [
        "Acrobatics 5 ranks or slow fall class feature"
    ]
},
"spiritTalker" : {
    "benefitsShort": "Commune with a spirit to gain temporary use of one of its hexes",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Spirit Talker",
    "nonFeatPrerequisites": [
        "Hex class feature; shaman level 6th or witch level 6th"
    ]
},
"spirit'sGift" : {
    "benefitsShort": "Commune with a spirit to grant your animal companion or familiar a shaman spirit augmentation",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Spirit's Gift",
    "nonFeatPrerequisites": [
        "Ability to acquire an animal companion or a familiar"
    ]
},
"spiritualGuardian" : {
    "benefitsShort": "Increase the attack power of your spirit spells",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Spiritual Guardian",
    "nonFeatPrerequisites": [
        "Ability to cast <em>spiritual weapon</em> or <em>spiritual ally</em>",
        "spirit magic class feature"
    ]
},
"spontaneousNature'sAlly" : {
    "benefitsShort": "Lose a spell slot to spontaneously cast a <em>summon nature's ally</em> spell of the same level",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Spontaneous Nature's Ally",
    "nonFeatPrerequisites": [
        "Knowledge (nature) 5 ranks",
        "ability to spontaneously cast cure or inflict spells",
        "Animal or Plant domain"
    ]
},
"staggeringFist" : {
    "benefitsShort": "Stagger foes with unarmed strikes",
    "buildsInto": [],
    "featPrerequisites": [
        "Improved Unarmed Strike"
    ],
    "name": "Staggering Fist",
    "nonFeatPrerequisites": [
        "Dex 13",
        "Wis 13",
        "base attack bonus +2"
    ]
},
"stalker'sFocus" : {
    "benefitsShort": "Gain an animal focus for you or your animal companion",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Stalker's Focus",
    "nonFeatPrerequisites": [
        "Knowledge (nature) 3 ranks",
        "Survival 3 ranks",
        "no levels in a class that has the animal focus class feature"
    ]
},
"steadfastPersonality" : {
    "benefitsShort": "Use your Charisma modifier on saves against mind-affecting effects",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Steadfast Personality",
    "nonFeatPrerequisites": []
},
"stouthearted" : {
    "benefitsShort": "Use raging song to reroll failed saves against fear effects",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Stouthearted",
    "nonFeatPrerequisites": [
        "Raging song class feature"
    ]
},
"surpriseManeuver" : {
    "benefitsShort": "Gain a bonus on combat maneuver checks against flanked foes and those denied their Dex bonus to AC",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Surprise Maneuver",
    "nonFeatPrerequisites": [
        "Combat Expertise; sneak attack +3d6 or studied strike +3d6"
    ]
},
"talentedMagician" : {
    "benefitsShort": "Gain additional uses of spell-like abilities",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Talented Magician",
    "nonFeatPrerequisites": [
        "Major magic rogue talent",
        "minor magic rogue talent"
    ]
},
"twinnedFeint" : {
    "benefitsShort": "After succeeding at a feint, you can attempt a feint against a second target",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Twinned Feint",
    "nonFeatPrerequisites": [
        "Cha 13"
    ]
},
"twistAway" : {
    "benefitsShort": "Use Reflex in place of Fortitude as an immediate action",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Twist Away",
    "nonFeatPrerequisites": [
        "Evasion"
    ]
},
"undersizedMount" : {
    "benefitsShort": "Ride creatures of your size",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Undersized Mount",
    "nonFeatPrerequisites": [
        "Ride 1 rank"
    ]
},
"unfetteredFamiliar" : {
    "benefitsShort": "Bestow touch spells on your familiar from a distance",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Unfettered Familiar",
    "nonFeatPrerequisites": [
        "Caster level 5th",
        "ability to acquire a familiar"
    ]
},
"warBlessing" : {
    "benefitsShort": "Gain a lesser use of the blessings class feature",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "War Blessing",
    "nonFeatPrerequisites": [
        "Mystery or domain class feature"
    ]
},
"weaponoftheChosen" : {
    "benefitsShort": "As a swift action, your first attack with weapon counts as magical",
    "buildsInto": [
        "improvedWeaponoftheChosen"
    ],
    "featPrerequisites": [],
    "name": "Weapon of the Chosen",
    "nonFeatPrerequisites": [
        "Weapon Focus with deity's favored weapon",
        "worship and receive spells from a deity"
    ]
},
"improvedWeaponoftheChosen" : {
    "benefitsShort": "Gain the benefits of Weapon of the Chosen until the start of your next turn",
    "buildsInto": [
        "greaterWeaponoftheChosen"
    ],
    "featPrerequisites": [
        "Weapon of the Chosen"
    ],
    "name": "Improved Weapon of the Chosen",
    "nonFeatPrerequisites": []
},
"greaterWeaponoftheChosen" : {
    "benefitsShort": "Roll twice with your favored weapon and take the better roll",
    "buildsInto": [],
    "featPrerequisites": [
        "Improved Weapon of the Chosen"
    ],
    "name": "Greater Weapon of the Chosen",
    "nonFeatPrerequisites": []
},
"winter'sStrike" : {
    "benefitsShort": "Target of your Vital Strike must successfully save or become fatigued ",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Winter's Strike",
    "nonFeatPrerequisites": [
        "Nature Magic or the ability to cast druid or ranger spells; Vital Strike",
        "Knowledge (nature) 5 ranks"
    ]
},
"confoundingTumbleDeed" : {
    "benefitsShort": "When you avoid attacks of opportunity and hit a foe, you can deny it its Dex bonus to AC for 1 round",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Confounding Tumble Deed",
    "nonFeatPrerequisites": [
        "Amateur Swashbuckler or panache class feature; Canny Tumble",
        "Acrobatics 7 ranks"
    ]
},
"disarmingThreatDeed" : {
    "benefitsShort": "Use Intimidate without making the target unfriendly",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Disarming Threat Deed",
    "nonFeatPrerequisites": [
        "Amateur Swashbuckler or panache class feature; Diplomacy 2 ranks",
        "Intimidate 2 ranks"
    ]
},
"duelingCapeDeed" : {
    "benefitsShort": "Use your cape as a snaring buckler",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Dueling Cape Deed",
    "nonFeatPrerequisites": [
        "Amateur Swashbuckler or panache class feature; Dodge",
        "Sleight of Hand 1 rank"
    ]
},
"extraPanache" : {
    "benefitsShort": "Gain 2 extra panache points",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Extra Panache",
    "nonFeatPrerequisites": [
        "Amateur Swashbuckler or panache class feature"
    ]
},
"pommelStrikeDeed" : {
    "benefitsShort": "Attack with a light or one-handed piercing weapon's pommel and knock down foes",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Pommel Strike Deed",
    "nonFeatPrerequisites": [
        "Amateur Swashbuckler or panache class feature; base attack bonus +3"
    ]
},
"grabbingStyle" : {
    "benefitsShort": "Take no penalty for grabbing a foe one-handed, retain your Dex bonus to AC when pinning",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Grabbing Style",
    "nonFeatPrerequisites": [
        "Improved Grapple; base attack bonus +6",
        "brawler's flurry",
        "or flurry of blows"
    ]
},
"grabbingDrag" : {
    "benefitsShort": "Move farther with dragged foes",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Grabbing Drag",
    "nonFeatPrerequisites": [
        "Grabbing Style; base attack bonus +8",
        "brawler level 4th",
        "or monk level 4th"
    ]
},
"grabbingMaster" : {
    "benefitsShort": "Grab two foes instead of just one",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Grabbing Master",
    "nonFeatPrerequisites": [
        "Grabbing Drag; base attack bonus +12",
        "brawler level 8th",
        "or monk level 8th"
    ]
},
"jabbingStyle" : {
    "benefitsShort": "Gain bonus damage when two or more unarmed strikes hit the same opponent during your turn",
    "buildsInto": [
        "jabbingDancer"
    ],
    "featPrerequisites": [],
    "name": "Jabbing Style",
    "nonFeatPrerequisites": [
        "Improved Unarmed Strike; base attack bonus +6",
        "brawler's flurry class feature or flurry of blows class feature"
    ]
},
"jabbingDancer" : {
    "benefitsShort": "Move 5 feet without provoking attacks of opportunity whenever you hit with an unarmed strike.",
    "buildsInto": [],
    "featPrerequisites": [
        "Dodge",
        "Jabbing Style"
    ],
    "name": "Jabbing Dancer",
    "nonFeatPrerequisites": [
        "Mobility; base attack bonus +9",
        "monk level 5th",
        "or brawler level 5th"
    ]
},
"jabbingMaster" : {
    "benefitsShort": "Increase the damage dealt with Jabbing Style",
    "buildsInto": [],
    "featPrerequisites": [
        "Power Attack"
    ],
    "name": "Jabbing Master",
    "nonFeatPrerequisites": [
        "Jabbing Dancer; base attack bonus +12",
        "monk level 8th",
        "or brawler level 8th"
    ]
},
"pummelingStyle" : {
    "benefitsShort": "Combine your unarmed strikes together",
    "buildsInto": [],
    "featPrerequisites": [
        "Improved Unarmed Strike"
    ],
    "name": "Pummeling Style",
    "nonFeatPrerequisites": [
        "base attack bonus +6",
        "brawler's flurry",
        "or flurry of blows"
    ]
},
"pummelingBully" : {
    "benefitsShort": "When using Pummeling Style, attempt a reposition or trip combat maneuver as a free action",
    "buildsInto": [],
    "featPrerequisites": [
        "Improved Reposition",
        "Improved Trip"
    ],
    "name": "Pummeling Bully",
    "nonFeatPrerequisites": [
        "Pummeling Style; base attack bonus +9",
        "brawler level 5th",
        "or monk level 5th"
    ]
},
"pummelingCharge" : {
    "benefitsShort": "Pummel after a charge",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Pummeling Charge",
    "nonFeatPrerequisites": [
        "Pummeling Style; base attack bonus +12",
        "brawler level 8th",
        "or monk level 8th"
    ]
},
"coordinatedShot" : {
    "benefitsShort": "When an ally with this feat threatens a foe, gain a +1 bonus on ranged attack rolls, or +2 if that ally is flanking the foe",
    "buildsInto": [],
    "featPrerequisites": [
        "Point-Blank Shot"
    ],
    "name": "Coordinated Shot",
    "nonFeatPrerequisites": []
},
"distractingCharge" : {
    "benefitsShort": "When an ally with this feat charges, you gain a +2 bonus on attack rolls against the creature charged",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Distracting Charge",
    "nonFeatPrerequisites": []
},
"improvedDuckandCover" : {
    "benefitsShort": "When you use Duck and Cover, an ally with evasion or improved evasion takes some of the damage ",
    "buildsInto": [],
    "featPrerequisites": [
        "Duck and Cover"
    ],
    "name": "Improved Duck and Cover",
    "nonFeatPrerequisites": []
},
"improvedSpellSharing" : {
    "benefitsShort": "Divide spell duration with the companion creature",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Improved Spell Sharing",
    "nonFeatPrerequisites": [
        "Ability to acquire an animal companion",
        "an eidolon",
        "a familiar",
        "or a special mount"
    ]
},
"improvedSwapPlaces" : {
    "benefitsShort": "When you use Swap Places, your ally can be smaller or larger and your movement does not provoke attacks of opportunity",
    "buildsInto": [],
    "featPrerequisites": [
        "Swap Places"
    ],
    "name": "Improved Swap Places",
    "nonFeatPrerequisites": []
},
"interceptCharge" : {
    "benefitsShort": "Move up to your speed to intercept charging foe as an immediate action",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Intercept Charge",
    "nonFeatPrerequisites": []
},
"packFlanking" : {
    "benefitsShort": "You and your companion creature flank regardless of position",
    "buildsInto": [],
    "featPrerequisites": [
        "Combat Expertise"
    ],
    "name": "Pack Flanking",
    "nonFeatPrerequisites": [
        "Int 13",
        "ability to acquire an animal companion"
    ]
},
"shareHealing" : {
    "benefitsShort": "Share healing with your companion creature",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Share Healing",
    "nonFeatPrerequisites": [
        "Ability to acquire an animal companion",
        "an eidolon",
        "a familiar",
        "or a special mount"
    ]
},
"woundedPawGambit" : {
    "benefitsShort": "When you use Broken Wing Gambit, nearby allies can attempt a ranged attack against the attacker",
    "buildsInto": [],
    "featPrerequisites": [],
    "name": "Wounded Paw Gambit",
    "nonFeatPrerequisites": [
        "Broken Wing Gambit",
        "Bluff 5 ranks"
    ]
}}