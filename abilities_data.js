const abilitiesData = [
  {
    "name": "Stench",
    "description": "May cause a foe to flinch.",
    "pokemon": [
      "Gloom",
      "Grimer",
      "Muk",
      "Koffing",
      "Weezing",
      "Stunky",
      "Skuntank",
      "Trubbish",
      "Garbodor"
    ]
  },
  {
    "name": "Drizzle",
    "description": "Summons rain in battle.",
    "pokemon": [
      "Politoed",
      "Wingull",
      "Pelipper",
      "Kyogre"
    ]
  },
  {
    "name": "Speed Boost",
    "description": "Gradually boosts Speed.",
    "pokemon": [
      "Yanma",
      "Yanmega",
      "Torchic",
      "Combusken",
      "Blaziken",
      "Ninjask",
      "Carvanha",
      "Sharpedo",
      "Venipede",
      "Whirlipede",
      "Scolipede",
      "Flittle",
      "Espathra"
    ]
  },
  {
    "name": "Battle Armor",
    "description": "Blocks critical hits.",
    "pokemon": [
      "Galarian Meowth",
      "Perrserker",
      "Cubone",
      "Marowak",
      "Kabuto",
      "Kabutops",
      "Anorith",
      "Armaldo",
      "Skorupi",
      "Drapion",
      "Type: Null",
      "Falinks"
    ]
  },
  {
    "name": "Sturdy",
    "description": "Negates 1-hit KO attacks.",
    "pokemon": [
      "Geodude",
      "Graveler",
      "Golem",
      "Alolan Geodude",
      "Alolan Graveler",
      "Alolan Golem",
      "Magnemite",
      "Magneton",
      "Magnezone",
      "Onix",
      "Steelix",
      "Bonsly",
      "Sudowoodo",
      "Pineco",
      "Forretress",
      "Shuckle",
      "Skarmory",
      "Phanpy",
      "Donphan",
      "Nosepass",
      "Probopass",
      "Aron",
      "Lairon",
      "Aggron",
      "Relicanth",
      "Regirock",
      "Shieldon",
      "Bastiodon",
      "Roggenrola",
      "Boldore",
      "Gigalith",
      "Sawk",
      "Dwebble",
      "Crustle",
      "Tirtouga",
      "Carracosta",
      "Tyrunt",
      "Carbink",
      "Bergmite",
      "Avalugg",
      "Hisuian Avalugg",
      "Togedemaru",
      "Cosmoem",
      "Archaludon",
      "Nacli",
      "Naclstack",
      "Garganacl"
    ]
  },
  {
    "name": "Damp",
    "description": "Prevents self-destruction.",
    "pokemon": [
      "Golduck",
      "Poliwag",
      "Poliwhirl",
      "Poliwrath",
      "Politoed",
      "Horsea",
      "Seadra",
      "Kingdra",
      "Wooper",
      "Quagsire",
      "Mudkip",
      "Marshtomp",
      "Swampert",
      "Frillish",
      "Jellicent"
    ]
  },
  {
    "name": "Limber",
    "description": "Prevents paralysis.",
    "pokemon": [
      "Persian",
      "Hitmonlee",
      "Ditto",
      "Buneary",
      "Lopunny",
      "Glameow",
      "Purrloin",
      "Liepard",
      "Stunfisk",
      "Hawlucha",
      "Mareanie",
      "Toxapex",
      "Clobbopus",
      "Grapploct"
    ]
  },
  {
    "name": "Sand Veil",
    "description": "Ups evasion in a sandstorm.",
    "pokemon": [
      "Sandshrew",
      "Sandslash",
      "Diglett",
      "Dugtrio",
      "Alolan Diglett",
      "Alolan Dugtrio",
      "Geodude",
      "Graveler",
      "Golem",
      "Gligar",
      "Gliscor",
      "Phanpy",
      "Donphan",
      "Larvitar",
      "Cacnea",
      "Cacturne",
      "Gible",
      "Gabite",
      "Garchomp",
      "Stunfisk",
      "Helioptile",
      "Heliolisk",
      "Sandygast",
      "Palossand",
      "Silicobra",
      "Sandaconda",
      "Wiglett",
      "Wugtrio",
      "Orthworm"
    ]
  },
  {
    "name": "Static",
    "description": "Paralyzes on contact.",
    "pokemon": [
      "Pichu",
      "Pikachu",
      "Raichu",
      "Voltorb",
      "Electrode",
      "Hisuian Voltorb",
      "Hisuian Electrode",
      "Elekid",
      "Electabuzz",
      "Zapdos",
      "Mareep",
      "Flaaffy",
      "Ampharos",
      "Electrike",
      "Manectric",
      "Emolga",
      "Stunfisk",
      "Toxel",
      "Arctozolt",
      "Pawmi",
      "Tadbulb"
    ]
  },
  {
    "name": "Volt Absorb",
    "description": "Turns electricity into HP.",
    "pokemon": [
      "Jolteon",
      "Chinchou",
      "Lanturn",
      "Minun",
      "Pachirisu",
      "Thundurus",
      "Zeraora",
      "Dracozolt",
      "Arctozolt",
      "Pawmo",
      "Pawmot",
      "Wattrel",
      "Kilowattrel"
    ]
  },
  {
    "name": "Water Absorb",
    "description": "Changes water into HP.",
    "pokemon": [
      "Poliwag",
      "Poliwhirl",
      "Poliwrath",
      "Politoed",
      "Lapras",
      "Vaporeon",
      "Chinchou",
      "Lanturn",
      "Wooper",
      "Quagsire",
      "Paldean Wooper",
      "Clodsire",
      "Mantyke",
      "Mantine",
      "Cacnea",
      "Cacturne",
      "Tympole",
      "Palpitoad",
      "Seismitoad",
      "Maractus",
      "Frillish",
      "Jellicent",
      "Volcanion",
      "Dewpider",
      "Araquanid",
      "Dracovish",
      "Arctovish"
    ]
  },
  {
    "name": "Oblivious",
    "description": "Prevents attraction.",
    "pokemon": [
      "Slowpoke",
      "Slowbro",
      "Slowking",
      "Lickitung",
      "Lickilicky",
      "Smoochum",
      "Jynx",
      "Illumise",
      "Wailmer",
      "Wailord",
      "Numel",
      "Barboach",
      "Whiscash",
      "Feebas",
      "Spheal",
      "Sealeo",
      "Walrein",
      "Salandit",
      "Salazzle",
      "Bounsweet",
      "Steenee",
      "Dondozo"
    ]
  },
  {
    "name": "Cloud Nine",
    "description": "Negates weather effects.",
    "pokemon": [
      "Golduck",
      "Lickitung",
      "Lickilicky",
      "Swablu",
      "Altaria",
      "Drampa"
    ]
  },
  {
    "name": "Compound Eyes",
    "description": "Raises accuracy.",
    "pokemon": [
      "Venonat",
      "Yanma",
      "Dustox",
      "Nincada",
      "Joltik",
      "Galvantula",
      "Blipbug",
      "Dottler",
      "Rellor"
    ]
  },
  {
    "name": "Insomnia",
    "description": "Prevents sleep.",
    "pokemon": [
      "Drowzee",
      "Hypno",
      "Spinarak",
      "Ariados",
      "Murkrow",
      "Honchkrow",
      "Delibird",
      "Shuppet",
      "Banette",
      "Pumpkaboo",
      "Gourgeist",
      "Tarountula",
      "Spidops",
      "Capsakid",
      "Scovillain"
    ]
  },
  {
    "name": "Color Change",
    "description": "Changes type to foe's move.",
    "pokemon": [
      "Kecleon"
    ]
  },
  {
    "name": "Immunity",
    "description": "Prevents poisoning.",
    "pokemon": [
      "Snorlax",
      "Gligar",
      "Zangoose"
    ]
  },
  {
    "name": "Flash Fire",
    "description": "Powers up if hit by fire.",
    "pokemon": [
      "Growlithe",
      "Arcanine",
      "Hisuian Growlithe",
      "Hisuian Arcanine",
      "Ponyta",
      "Rapidash",
      "Flareon",
      "Cyndaquil",
      "Quilava",
      "Typhlosion",
      "Houndour",
      "Houndoom",
      "Heatran",
      "Litwick",
      "Lampent",
      "Chandelure",
      "Heatmor",
      "Rolycoly",
      "Carkol",
      "Coalossal",
      "Sizzlipede",
      "Centiskorch",
      "Charcadet",
      "Armarouge",
      "Ceruledge"
    ]
  },
  {
    "name": "Shield Dust",
    "description": "Prevents added effects.",
    "pokemon": [
      "Caterpie",
      "Butterfree",
      "Weedle",
      "Venomoth",
      "Wurmple",
      "Dustox",
      "Cutiefly",
      "Ribombee",
      "Snom",
      "Frosmoth"
    ]
  },
  {
    "name": "Own Tempo",
    "description": "Prevents confusion.",
    "pokemon": [
      "Slowpoke",
      "Slowbro",
      "Slowking",
      "Galarian Slowpoke",
      "Galarian Slowbro",
      "Galarian Slowking",
      "Lickitung",
      "Lickilicky",
      "Smeargle",
      "Lotad",
      "Lombre",
      "Ludicolo",
      "Numel",
      "Spoink",
      "Grumpig",
      "Spinda",
      "Glameow",
      "Purugly",
      "Petilil",
      "Lilligant",
      "Espurr",
      "Bergmite",
      "Avalugg",
      "Rockruff",
      "Mudbray",
      "Mudsdale",
      "Indeedee",
      "Tandemaus",
      "Fidough",
      "Tinkatink",
      "Tinkatuff",
      "Tinkaton"
    ]
  },
  {
    "name": "Suction Cups",
    "description": "Firmly anchors the body.",
    "pokemon": [
      "Octillery",
      "Lileep",
      "Cradily",
      "Inkay",
      "Malamar"
    ]
  },
  {
    "name": "Intimidate",
    "description": "Lowers the foe's Attack.",
    "pokemon": [
      "Ekans",
      "Arbok",
      "Growlithe",
      "Arcanine",
      "Hisuian Growlithe",
      "Hisuian Arcanine",
      "Hitmontop",
      "Tauros",
      "Paldean Tauros",
      "Gyarados",
      "Snubbull",
      "Granbull",
      "Qwilfish",
      "Hisuian Qwilfish",
      "Overqwil",
      "Stantler",
      "Wyrdeer",
      "Poochyena",
      "Mightyena",
      "Masquerain",
      "Mawile",
      "Salamence",
      "Staravia",
      "Staraptor",
      "Shinx",
      "Luxio",
      "Luxray",
      "Herdier",
      "Stoutland",
      "Sandile",
      "Krokorok",
      "Krookodile",
      "Scraggy",
      "Scrafty",
      "Landorus",
      "Litten",
      "Torracat",
      "Incineroar",
      "Squawkabilly",
      "Maschiff",
      "Mabosstiff"
    ]
  },
  {
    "name": "Shadow Tag",
    "description": "Prevents the foe's escape.",
    "pokemon": [
      "Wynaut",
      "Wobbuffet",
      "Gothita",
      "Gothorita",
      "Gothitelle"
    ]
  },
  {
    "name": "Rough Skin",
    "description": "Hurts to touch.",
    "pokemon": [
      "Carvanha",
      "Sharpedo",
      "Gible",
      "Gabite",
      "Garchomp",
      "Druddigon"
    ]
  },
  {
    "name": "Wonder Guard",
    "description": "Only \u201cSupereffective\u201d hits.",
    "pokemon": [
      "Shedinja"
    ]
  },
  {
    "name": "Levitate",
    "description": "Not hit by Ground attacks.",
    "pokemon": [
      "Gastly",
      "Haunter",
      "Koffing",
      "Weezing",
      "Galarian Weezing",
      "Misdreavus",
      "Mismagius",
      "Vibrava",
      "Flygon",
      "Lunatone",
      "Solrock",
      "Baltoy",
      "Claydol",
      "Duskull",
      "Chingling",
      "Chimecho",
      "Latias",
      "Latios",
      "Bronzor",
      "Bronzong",
      "Carnivine",
      "Rotom",
      "Uxie",
      "Mesprit",
      "Azelf",
      "Giratina",
      "Cresselia",
      "Tynamo",
      "Eelektrik",
      "Eelektross",
      "Cryogonal",
      "Hydreigon",
      "Vikavolt"
    ]
  },
  {
    "name": "Effect Spore",
    "description": "Leaves spores on contact.",
    "pokemon": [
      "Vileplume",
      "Paras",
      "Parasect",
      "Shroomish",
      "Breloom",
      "Foongus",
      "Amoonguss",
      "Morelull",
      "Shiinotic"
    ]
  },
  {
    "name": "Synchronize",
    "description": "Passes on status problems.",
    "pokemon": [
      "Abra",
      "Kadabra",
      "Alakazam",
      "Espeon",
      "Umbreon",
      "Mew",
      "Natu",
      "Xatu",
      "Ralts",
      "Kirlia",
      "Gardevoir",
      "Munna",
      "Musharna",
      "Elgyem",
      "Beheeyem",
      "Indeedee",
      "Rabsca"
    ]
  },
  {
    "name": "Clear Body",
    "description": "Prevents ability reduction.",
    "pokemon": [
      "Tentacool",
      "Tentacruel",
      "Beldum",
      "Metang",
      "Metagross",
      "Regirock",
      "Regice",
      "Registeel",
      "Klink",
      "Klang",
      "Klinklang",
      "Carbink",
      "Diancie",
      "Dreepy",
      "Drakloak",
      "Dragapult",
      "Nacli",
      "Naclstack",
      "Garganacl"
    ]
  },
  {
    "name": "Natural Cure",
    "description": "Heals upon switching out.",
    "pokemon": [
      "Happiny",
      "Chansey",
      "Blissey",
      "Staryu",
      "Starmie",
      "Corsola",
      "Celebi",
      "Budew",
      "Roselia",
      "Roserade",
      "Swablu",
      "Altaria",
      "Shaymin",
      "Phantump",
      "Trevenant",
      "Comfey",
      "Pawmi",
      "Pawmo",
      "Pawmot"
    ]
  },
  {
    "name": "Lightning Rod",
    "description": "Draws electrical moves.",
    "pokemon": [
      "Pichu",
      "Pikachu",
      "Raichu",
      "Cubone",
      "Marowak",
      "Alolan Marowak",
      "Rhyhorn",
      "Rhydon",
      "Rhyperior",
      "Goldeen",
      "Seaking",
      "Plusle",
      "Blitzle",
      "Zebstrika",
      "Togedemaru",
      "Pincurchin"
    ]
  },
  {
    "name": "Serene Grace",
    "description": "Promotes added effects.",
    "pokemon": [
      "Happiny",
      "Chansey",
      "Blissey",
      "Togepi",
      "Togetic",
      "Togekiss",
      "Dunsparce",
      "Dudunsparce",
      "Jirachi",
      "Shaymin",
      "Deerling",
      "Sawsbuck",
      "Meloetta"
    ]
  },
  {
    "name": "Swift Swim",
    "description": "Raises Speed in rain.",
    "pokemon": [
      "Psyduck",
      "Golduck",
      "Poliwag",
      "Poliwhirl",
      "Poliwrath",
      "Horsea",
      "Seadra",
      "Kingdra",
      "Goldeen",
      "Seaking",
      "Magikarp",
      "Omanyte",
      "Omastar",
      "Kabuto",
      "Kabutops",
      "Qwilfish",
      "Hisuian Qwilfish",
      "Overqwil",
      "Mantyke",
      "Mantine",
      "Lotad",
      "Lombre",
      "Ludicolo",
      "Surskit",
      "Anorith",
      "Armaldo",
      "Feebas",
      "Huntail",
      "Gorebyss",
      "Relicanth",
      "Luvdisc",
      "Buizel",
      "Floatzel",
      "Finneon",
      "Lumineon",
      "Tympole",
      "Palpitoad",
      "Seismitoad",
      "Basculegion",
      "Tirtouga",
      "Carracosta",
      "Beartic",
      "Chewtle",
      "Drednaw",
      "Arrokuda",
      "Barraskewda"
    ]
  },
  {
    "name": "Chlorophyll",
    "description": "Raises Speed in sunshine.",
    "pokemon": [
      "Bulbasaur",
      "Ivysaur",
      "Venusaur",
      "Oddish",
      "Gloom",
      "Vileplume",
      "Bellossom",
      "Bellsprout",
      "Weepinbell",
      "Victreebel",
      "Exeggcute",
      "Exeggutor",
      "Tangela",
      "Tangrowth",
      "Leafeon",
      "Hoppip",
      "Skiploom",
      "Jumpluff",
      "Sunkern",
      "Sunflora",
      "Seedot",
      "Nuzleaf",
      "Shiftry",
      "Tropius",
      "Cherubi",
      "Sewaddle",
      "Swadloon",
      "Leavanny",
      "Cottonee",
      "Whimsicott",
      "Petilil",
      "Lilligant",
      "Hisuian Lilligant",
      "Maractus",
      "Deerling",
      "Sawsbuck",
      "Capsakid",
      "Scovillain"
    ]
  },
  {
    "name": "Illuminate",
    "description": "Encounter rate increases.",
    "pokemon": [
      "Staryu",
      "Starmie",
      "Chinchou",
      "Lanturn",
      "Volbeat",
      "Watchog",
      "Morelull",
      "Shiinotic"
    ]
  },
  {
    "name": "Trace",
    "description": "Copies special ability.",
    "pokemon": [
      "Porygon",
      "Porygon2",
      "Ralts",
      "Kirlia",
      "Gardevoir"
    ]
  },
  {
    "name": "Huge Power",
    "description": "Raises Attack.",
    "pokemon": [
      "Azurill",
      "Marill",
      "Azumarill",
      "Bunnelby",
      "Diggersby"
    ]
  },
  {
    "name": "Poison Point",
    "description": "Poisons foe on contact.",
    "pokemon": [
      "Nidoran\u2640",
      "Nidorina",
      "Nidoqueen",
      "Nidoran\u2642",
      "Nidorino",
      "Nidoking",
      "Paldean Wooper",
      "Clodsire",
      "Overqwil",
      "Budew",
      "Roselia",
      "Roserade",
      "Venipede",
      "Whirlipede",
      "Scolipede",
      "Skrelp",
      "Dragalge"
    ]
  },
  {
    "name": "Inner Focus",
    "description": "Prevents flinching.",
    "pokemon": [
      "Zubat",
      "Golbat",
      "Crobat",
      "Abra",
      "Kadabra",
      "Alakazam",
      "Farfetch'd",
      "Drowzee",
      "Hypno",
      "Hitmonchan",
      "Kangaskhan",
      "Umbreon",
      "Dragonite",
      "Girafarig",
      "Sneasel",
      "Weavile",
      "Hisuian Sneasel",
      "Raikou",
      "Entei",
      "Suicune",
      "Snorunt",
      "Glalie",
      "Riolu",
      "Lucario",
      "Throh",
      "Sawk",
      "Darumaka",
      "Galarian Darumaka",
      "Mienfoo",
      "Mienshao",
      "Pawniard",
      "Bisharp",
      "Mudbray",
      "Mudsdale",
      "Oranguru",
      "Indeedee",
      "Kubfu"
    ]
  },
  {
    "name": "Magma Armor",
    "description": "Prevents freezing.",
    "pokemon": [
      "Slugma",
      "Magcargo",
      "Camerupt"
    ]
  },
  {
    "name": "Water Veil",
    "description": "Prevents burns.",
    "pokemon": [
      "Mantyke",
      "Mantine",
      "Wailmer",
      "Wailord",
      "Huntail",
      "Buizel",
      "Floatzel",
      "Finizen",
      "Dondozo"
    ]
  },
  {
    "name": "Magnet Pull",
    "description": "Traps Steel-type Pok\u00e9mon.",
    "pokemon": [
      "Nosepass",
      "Probopass",
      "Meltan"
    ]
  },
  {
    "name": "Soundproof",
    "description": "Avoids sound-based moves.",
    "pokemon": [
      "Voltorb",
      "Electrode",
      "Hisuian Voltorb",
      "Hisuian Electrode",
      "Mime Jr.",
      "Mr. Mime",
      "Whismur",
      "Loudred",
      "Exploud",
      "Shieldon",
      "Bastiodon",
      "Snover",
      "Abomasnow",
      "Bouffalant",
      "Jangmo-o",
      "Hakamo-o",
      "Kommo-o"
    ]
  },
  {
    "name": "Rain Dish",
    "description": "Slight HP recovery in rain.",
    "pokemon": [
      "Squirtle",
      "Wartortle",
      "Blastoise",
      "Tentacool",
      "Tentacruel",
      "Lotad",
      "Lombre",
      "Ludicolo",
      "Wingull",
      "Pelipper",
      "Surskit",
      "Morelull",
      "Shiinotic"
    ]
  },
  {
    "name": "Sand Stream",
    "description": "Summons a sandstorm.",
    "pokemon": [
      "Tyranitar",
      "Hippopotas",
      "Hippowdon"
    ]
  },
  {
    "name": "Pressure",
    "description": "Raises foe's PP usage.",
    "pokemon": [
      "Aerodactyl",
      "Articuno",
      "Zapdos",
      "Moltres",
      "Mewtwo",
      "Sneasler",
      "Raikou",
      "Entei",
      "Suicune",
      "Lugia",
      "Ho-Oh",
      "Wailmer",
      "Wailord",
      "Dusclops",
      "Dusknoir",
      "Absol",
      "Deoxys",
      "Vespiquen",
      "Spiritomb",
      "Dialga",
      "Palkia",
      "Giratina",
      "Pawniard",
      "Bisharp",
      "Kingambit",
      "Kyurem",
      "Eternatus"
    ]
  },
  {
    "name": "Thick Fat",
    "description": "Heat-and-cold protection.",
    "pokemon": [
      "Alolan Rattata",
      "Alolan Raticate",
      "Seel",
      "Dewgong",
      "Munchlax",
      "Snorlax",
      "Azurill",
      "Swinub",
      "Piloswine",
      "Mamoswine",
      "Miltank",
      "Makuhita",
      "Hariyama",
      "Spoink",
      "Grumpig",
      "Spheal",
      "Sealeo",
      "Walrein",
      "Purugly",
      "Tepig",
      "Pignite",
      "Appletun",
      "Lechonk",
      "Oinkologne",
      "Cetoddle",
      "Cetitan"
    ]
  },
  {
    "name": "Early Bird",
    "description": "Awakens quickly from sleep.",
    "pokemon": [
      "Doduo",
      "Dodrio",
      "Kangaskhan",
      "Ledyba",
      "Ledian",
      "Natu",
      "Xatu",
      "Sunkern",
      "Sunflora",
      "Girafarig",
      "Seedot",
      "Nuzleaf",
      "Smoliv",
      "Dolliv"
    ]
  },
  {
    "name": "Flame Body",
    "description": "Burns the foe on contact.",
    "pokemon": [
      "Ponyta",
      "Rapidash",
      "Magby",
      "Magmar",
      "Magmortar",
      "Moltres",
      "Slugma",
      "Magcargo",
      "Heatran",
      "Litwick",
      "Lampent",
      "Chandelure",
      "Larvesta",
      "Volcarona",
      "Fletchinder",
      "Talonflame",
      "Carkol",
      "Coalossal",
      "Sizzlipede",
      "Centiskorch",
      "Charcadet"
    ]
  },
  {
    "name": "Run Away",
    "description": "Makes escaping easier.",
    "pokemon": [
      "Caterpie",
      "Weedle",
      "Rattata",
      "Raticate",
      "Oddish",
      "Venonat",
      "Galarian Ponyta",
      "Galarian Rapidash",
      "Doduo",
      "Dodrio",
      "Eevee",
      "Aipom",
      "Dunsparce",
      "Dudunsparce",
      "Wurmple",
      "Nincada",
      "Kricketot",
      "Pachirisu",
      "Patrat",
      "Nickit",
      "Thievul",
      "Wooloo",
      "Tandemaus",
      "Maschiff",
      "Gimmighoul"
    ]
  },
  {
    "name": "Keen Eye",
    "description": "Prevents loss of accuracy.",
    "pokemon": [
      "Pidgey",
      "Pidgeotto",
      "Pidgeot",
      "Spearow",
      "Fearow",
      "Farfetch'd",
      "Hitmonchan",
      "Hoothoot",
      "Noctowl",
      "Hisuian Sneasel",
      "Skarmory",
      "Sableye",
      "Starly",
      "Glameow",
      "Stunky",
      "Skuntank",
      "Chatot",
      "Skorupi",
      "Drapion",
      "Patrat",
      "Watchog",
      "Ducklett",
      "Swanna",
      "Rufflet",
      "Braviary",
      "Hisuian Braviary",
      "Espurr",
      "Meowstic",
      "Rockruff",
      "Lycanroc",
      "Bombirdier"
    ]
  },
  {
    "name": "Hyper Cutter",
    "description": "Prevents Attack reduction.",
    "pokemon": [
      "Krabby",
      "Kingler",
      "Pinsir",
      "Gligar",
      "Gliscor",
      "Mawile",
      "Trapinch",
      "Crabrawler",
      "Crabominable"
    ]
  },
  {
    "name": "Pickup",
    "description": "May pick up items.",
    "pokemon": [
      "Alolan Meowth",
      "Munchlax",
      "Aipom",
      "Ambipom",
      "Teddiursa",
      "Pachirisu",
      "Bunnelby",
      "Diggersby",
      "Dedenne",
      "Pumpkaboo",
      "Gourgeist",
      "Tandemaus",
      "Greavard"
    ]
  },
  {
    "name": "Truant",
    "description": "Moves only every two turns.",
    "pokemon": [
      "Slakoth",
      "Slaking",
      "Durant"
    ]
  },
  {
    "name": "Hustle",
    "description": "Trades accuracy for power.",
    "pokemon": [
      "Rattata",
      "Raticate",
      "Nidoran\u2640",
      "Nidorina",
      "Nidoran\u2642",
      "Nidorino",
      "Togepi",
      "Togetic",
      "Togekiss",
      "Corsola",
      "Remoraid",
      "Delibird",
      "Combee",
      "Hisuian Lilligant",
      "Darumaka",
      "Galarian Darumaka",
      "Rufflet",
      "Durant",
      "Deino",
      "Zweilous",
      "Flapple",
      "Dracozolt",
      "Squawkabilly"
    ]
  },
  {
    "name": "Cute Charm",
    "description": "Infatuates on contact.",
    "pokemon": [
      "Cleffa",
      "Clefairy",
      "Clefable",
      "Igglybuff",
      "Jigglypuff",
      "Wigglytuff",
      "Sylveon",
      "Skitty",
      "Delcatty",
      "Milotic",
      "Buneary",
      "Lopunny",
      "Minccino",
      "Cinccino",
      "Stufful",
      "Enamorus"
    ]
  },
  {
    "name": "Plus",
    "description": "Powers up with Minus.",
    "pokemon": [
      "Mareep",
      "Flaaffy",
      "Ampharos",
      "Plusle",
      "Dedenne",
      "Toxtricity"
    ]
  },
  {
    "name": "Minus",
    "description": "Powers up with Plus.",
    "pokemon": [
      "Electrike",
      "Manectric",
      "Minun",
      "Klink",
      "Klang",
      "Klinklang",
      "Toxtricity"
    ]
  },
  {
    "name": "Forecast",
    "description": "Changes with the weather.",
    "pokemon": [
      "Castform"
    ]
  },
  {
    "name": "Sticky Hold",
    "description": "Prevents item theft.",
    "pokemon": [
      "Grimer",
      "Muk",
      "Gulpin",
      "Swalot",
      "Shellos",
      "Gastrodon",
      "Trubbish",
      "Accelgor",
      "Dipplin",
      "Hydrapple"
    ]
  },
  {
    "name": "Shed Skin",
    "description": "Heals the body by shedding.",
    "pokemon": [
      "Metapod",
      "Kakuna",
      "Dratini",
      "Dragonair",
      "Pupitar",
      "Silcoon",
      "Cascoon",
      "Seviper",
      "Kricketot",
      "Burmy",
      "Scraggy",
      "Scrafty",
      "Karrablast",
      "Silicobra",
      "Sandaconda",
      "Rellor",
      "Cyclizar"
    ]
  },
  {
    "name": "Guts",
    "description": "Ups Attack if suffering.",
    "pokemon": [
      "Rattata",
      "Raticate",
      "Machop",
      "Machoke",
      "Machamp",
      "Tyrogue",
      "Flareon",
      "Heracross",
      "Ursaring",
      "Ursaluna",
      "Larvitar",
      "Obstagoon",
      "Taillow",
      "Swellow",
      "Makuhita",
      "Hariyama",
      "Shinx",
      "Luxio",
      "Luxray",
      "Timburr",
      "Gurdurr",
      "Conkeldurr",
      "Throh",
      "Squawkabilly"
    ]
  },
  {
    "name": "Marvel Scale",
    "description": "Ups Defense if suffering.",
    "pokemon": [
      "Dratini",
      "Dragonair",
      "Milotic"
    ]
  },
  {
    "name": "Liquid Ooze",
    "description": "Draining causes injury.",
    "pokemon": [
      "Tentacool",
      "Tentacruel",
      "Gulpin",
      "Swalot"
    ]
  },
  {
    "name": "Overgrow",
    "description": "Ups Grass moves in a pinch.",
    "pokemon": [
      "Bulbasaur",
      "Ivysaur",
      "Venusaur",
      "Chikorita",
      "Bayleef",
      "Treecko",
      "Grovyle",
      "Sceptile",
      "Turtwig",
      "Grotle",
      "Torterra",
      "Snivy",
      "Servine",
      "Serperior",
      "Chespin",
      "Quilladin",
      "Chesnaught",
      "Rowlet",
      "Dartrix",
      "Decidueye",
      "Hisuian Decidueye",
      "Grookey",
      "Thwackey",
      "Rillaboom",
      "Sprigatito",
      "Floragato",
      "Meowscarada"
    ]
  },
  {
    "name": "Blaze",
    "description": "Ups Fire moves in a pinch.",
    "pokemon": [
      "Charmander",
      "Charmeleon",
      "Charizard",
      "Cyndaquil",
      "Quilava",
      "Typhlosion",
      "Hisuian Typhlosion",
      "Torchic",
      "Combusken",
      "Blaziken",
      "Chimchar",
      "Monferno",
      "Infernape",
      "Tepig",
      "Pignite",
      "Emboar",
      "Fennekin",
      "Braixen",
      "Delphox",
      "Litten",
      "Torracat",
      "Incineroar",
      "Scorbunny",
      "Raboot",
      "Cinderace",
      "Fuecoco",
      "Crocalor",
      "Skeledirge"
    ]
  },
  {
    "name": "Torrent",
    "description": "Ups Water moves in a pinch.",
    "pokemon": [
      "Squirtle",
      "Wartortle",
      "Blastoise",
      "Totodile",
      "Croconaw",
      "Feraligatr",
      "Mudkip",
      "Marshtomp",
      "Swampert",
      "Piplup",
      "Prinplup",
      "Empoleon",
      "Oshawott",
      "Dewott",
      "Samurott",
      "Hisuian Samurott",
      "Froakie",
      "Frogadier",
      "Greninja",
      "Popplio",
      "Brionne",
      "Primarina",
      "Sobble",
      "Drizzile",
      "Inteleon",
      "Quaxly",
      "Quaxwell",
      "Quaquaval"
    ]
  },
  {
    "name": "Swarm",
    "description": "Ups Bug moves in a pinch.",
    "pokemon": [
      "Beedrill",
      "Scyther",
      "Scizor",
      "Kleavor",
      "Ledyba",
      "Ledian",
      "Spinarak",
      "Ariados",
      "Heracross",
      "Beautifly",
      "Volbeat",
      "Kricketune",
      "Sewaddle",
      "Leavanny",
      "Venipede",
      "Whirlipede",
      "Scolipede",
      "Karrablast",
      "Escavalier",
      "Joltik",
      "Galvantula",
      "Durant",
      "Larvesta",
      "Volcarona",
      "Grubbin",
      "Blipbug",
      "Dottler",
      "Orbeetle",
      "Nymble",
      "Lokix"
    ]
  },
  {
    "name": "Rock Head",
    "description": "Prevents recoil damage.",
    "pokemon": [
      "Hisuian Growlithe",
      "Hisuian Arcanine",
      "Geodude",
      "Graveler",
      "Golem",
      "Onix",
      "Steelix",
      "Alolan Marowak",
      "Rhyhorn",
      "Rhydon",
      "Aerodactyl",
      "Bonsly",
      "Sudowoodo",
      "Aron",
      "Lairon",
      "Aggron",
      "Relicanth",
      "Bagon",
      "Shelgon",
      "Basculin",
      "Tyrantrum"
    ]
  },
  {
    "name": "Drought",
    "description": "Summons sunlight in battle.",
    "pokemon": [
      "Vulpix",
      "Ninetales",
      "Torkoal",
      "Groudon"
    ]
  },
  {
    "name": "Arena Trap",
    "description": "Prevents fleeing.",
    "pokemon": [
      "Diglett",
      "Dugtrio",
      "Trapinch"
    ]
  },
  {
    "name": "Vital Spirit",
    "description": "Prevents sleep.",
    "pokemon": [
      "Mankey",
      "Primeape",
      "Annihilape",
      "Tyrogue",
      "Galarian Mr. Mime",
      "Elekid",
      "Electabuzz",
      "Electivire",
      "Magby",
      "Magmar",
      "Magmortar",
      "Delibird",
      "Vigoroth",
      "Rockruff",
      "Lycanroc"
    ]
  },
  {
    "name": "White Smoke",
    "description": "Prevents ability reduction.",
    "pokemon": [
      "Torkoal",
      "Heatmor",
      "Sizzlipede",
      "Centiskorch"
    ]
  },
  {
    "name": "Pure Power",
    "description": "Raises Attack.",
    "pokemon": [
      "Meditite",
      "Medicham"
    ]
  },
  {
    "name": "Shell Armor",
    "description": "Blocks critical hits.",
    "pokemon": [
      "Shellder",
      "Cloyster",
      "Krabby",
      "Kingler",
      "Lapras",
      "Omanyte",
      "Omastar",
      "Torkoal",
      "Corphish",
      "Crawdaunt",
      "Clamperl",
      "Turtwig",
      "Grotle",
      "Torterra",
      "Oshawott",
      "Dewott",
      "Samurott",
      "Dwebble",
      "Crustle",
      "Escavalier",
      "Shelmet",
      "Hisuian Sliggoo",
      "Hisuian Goodra",
      "Turtonator",
      "Chewtle",
      "Drednaw",
      "Klawf"
    ]
  },
  {
    "name": "Air Lock",
    "description": "Negates weather effects.",
    "pokemon": [
      "Rayquaza"
    ]
  },
  {
    "name": "Tangled Feet",
    "description": "Ups evasion if confused.",
    "pokemon": [
      "Pidgey",
      "Pidgeotto",
      "Pidgeot",
      "Doduo",
      "Dodrio",
      "Mr. Rime",
      "Spinda",
      "Chatot",
      "Flamigo"
    ]
  },
  {
    "name": "Motor Drive",
    "description": "Electricity raises Speed.",
    "pokemon": [
      "Electivire",
      "Blitzle",
      "Zebstrika",
      "Emolga"
    ]
  },
  {
    "name": "Rivalry",
    "description": "Powers up against rivals.",
    "pokemon": [
      "Nidoran\u2640",
      "Nidorina",
      "Nidoqueen",
      "Nidoran\u2642",
      "Nidorino",
      "Nidoking",
      "Beautifly",
      "Shinx",
      "Luxio",
      "Luxray",
      "Pidove",
      "Tranquill",
      "Unfezant",
      "Axew",
      "Fraxure",
      "Haxorus"
    ]
  },
  {
    "name": "Steadfast",
    "description": "Flinching raises Speed.",
    "pokemon": [
      "Machop",
      "Machoke",
      "Machamp",
      "Galarian Farfetch'd",
      "Sirfetch'd",
      "Tyrogue",
      "Hitmontop",
      "Scyther",
      "Gallade",
      "Riolu",
      "Lucario",
      "Rockruff",
      "Lycanroc",
      "Dubwool"
    ]
  },
  {
    "name": "Snow Cloak",
    "description": "Ups evasion in Hail or Snow.",
    "pokemon": [
      "Alolan Sandshrew",
      "Alolan Sandslash",
      "Alolan Vulpix",
      "Alolan Ninetales",
      "Glaceon",
      "Articuno",
      "Swinub",
      "Piloswine",
      "Mamoswine",
      "Froslass",
      "Vanillite",
      "Vanillish",
      "Cubchoo",
      "Beartic",
      "Cetoddle"
    ]
  },
  {
    "name": "Gluttony",
    "description": "Eats Berries early.",
    "pokemon": [
      "Alolan Rattata",
      "Bellsprout",
      "Weepinbell",
      "Victreebel",
      "Galarian Slowpoke",
      "Alolan Grimer",
      "Alolan Muk",
      "Munchlax",
      "Snorlax",
      "Shuckle",
      "Zigzagoon",
      "Linoone",
      "Galarian Zigzagoon",
      "Galarian Linoone",
      "Gulpin",
      "Swalot",
      "Spoink",
      "Grumpig",
      "Pansage",
      "Simisage",
      "Pansear",
      "Simisear",
      "Panpour",
      "Simipour",
      "Heatmor",
      "Skwovet",
      "Greedent",
      "Applin",
      "Flapple",
      "Appletun",
      "Dipplin",
      "Lechonk",
      "Oinkologne"
    ]
  },
  {
    "name": "Anger Point",
    "description": "Critical hits raise Attack.",
    "pokemon": [
      "Tauros",
      "Paldean Tauros",
      "Camerupt",
      "Sandile",
      "Krokorok",
      "Krookodile",
      "Crabrawler",
      "Crabominable"
    ]
  },
  {
    "name": "Unburden",
    "description": "Using a hold item ups Speed.",
    "pokemon": [
      "Hitmonlee",
      "Sneasler",
      "Treecko",
      "Grovyle",
      "Sceptile",
      "Drifloon",
      "Drifblim",
      "Purrloin",
      "Liepard",
      "Accelgor",
      "Swirlix",
      "Slurpuff",
      "Hawlucha",
      "Nickit",
      "Thievul",
      "Shroodle",
      "Grafaiai"
    ]
  },
  {
    "name": "Heatproof",
    "description": "Heat and burn protection.",
    "pokemon": [
      "Bronzor",
      "Bronzong",
      "Rolycoly",
      "Poltchageist",
      "Sinistcha"
    ]
  },
  {
    "name": "Simple",
    "description": "Prone to wild stat changes.",
    "pokemon": [
      "Numel",
      "Bidoof",
      "Bibarel",
      "Woobat",
      "Swoobat"
    ]
  },
  {
    "name": "Dry Skin",
    "description": "Prefers moisture to heat.",
    "pokemon": [
      "Paras",
      "Parasect",
      "Jynx",
      "Croagunk",
      "Toxicroak",
      "Helioptile",
      "Heliolisk"
    ]
  },
  {
    "name": "Download",
    "description": "Adjusts power favorably.",
    "pokemon": [
      "Porygon",
      "Porygon2",
      "Porygon-Z"
    ]
  },
  {
    "name": "Iron Fist",
    "description": "Boosts punching moves.",
    "pokemon": [
      "Hitmonchan",
      "Ledian",
      "Chimchar",
      "Monferno",
      "Infernape",
      "Timburr",
      "Gurdurr",
      "Conkeldurr",
      "Golett",
      "Golurk",
      "Pancham",
      "Pangoro",
      "Crabrawler",
      "Crabominable",
      "Melmetal",
      "Pawmi",
      "Pawmo",
      "Pawmot"
    ]
  },
  {
    "name": "Poison Heal",
    "description": "Restores HP if poisoned.",
    "pokemon": [
      "Gliscor",
      "Shroomish",
      "Breloom"
    ]
  },
  {
    "name": "Adaptability",
    "description": "Boosts same type attacks.",
    "pokemon": [
      "Eevee",
      "Porygon-Z",
      "Qwilfish",
      "Hisuian Qwilfish",
      "Zigzagoon",
      "Linoone",
      "Corphish",
      "Crawdaunt",
      "Feebas",
      "Pansage",
      "Simisage",
      "Pansear",
      "Simisear",
      "Panpour",
      "Simipour",
      "Basculin",
      "Basculegion",
      "Skrelp",
      "Dragalge"
    ]
  },
  {
    "name": "Skill Link",
    "description": "Multi-hit moves hit 5 times.",
    "pokemon": [
      "Shellder",
      "Cloyster",
      "Aipom",
      "Ambipom",
      "Minccino",
      "Cinccino",
      "Pikipek",
      "Trumbeak",
      "Toucannon"
    ]
  },
  {
    "name": "Hydration",
    "description": "Cures status in rain.",
    "pokemon": [
      "Seel",
      "Dewgong",
      "Smoochum",
      "Lapras",
      "Vaporeon",
      "Barboach",
      "Whiscash",
      "Gorebyss",
      "Luvdisc",
      "Phione",
      "Manaphy",
      "Tympole",
      "Palpitoad",
      "Ducklett",
      "Swanna",
      "Alomomola",
      "Shelmet",
      "Accelgor",
      "Goomy",
      "Sliggoo",
      "Goodra"
    ]
  },
  {
    "name": "Solar Power",
    "description": "Powers up in sunshine.",
    "pokemon": [
      "Charmander",
      "Charmeleon",
      "Charizard",
      "Sunkern",
      "Sunflora",
      "Tropius",
      "Helioptile",
      "Heliolisk"
    ]
  },
  {
    "name": "Quick Feet",
    "description": "Ups Speed if suffering.",
    "pokemon": [
      "Jolteon",
      "Sentret",
      "Furret",
      "Snubbull",
      "Granbull",
      "Teddiursa",
      "Ursaring",
      "Poochyena",
      "Mightyena",
      "Galarian Zigzagoon",
      "Galarian Linoone",
      "Shroomish",
      "Pidove",
      "Tranquill"
    ]
  },
  {
    "name": "Normalize",
    "description": "Moves become Normal-type.",
    "pokemon": [
      "Skitty",
      "Delcatty"
    ]
  },
  {
    "name": "Sniper",
    "description": "Boosts critical hits.",
    "pokemon": [
      "Beedrill",
      "Spearow",
      "Fearow",
      "Horsea",
      "Seadra",
      "Kingdra",
      "Spinarak",
      "Ariados",
      "Remoraid",
      "Octillery",
      "Skorupi",
      "Drapion",
      "Binacle",
      "Barbaracle",
      "Sobble",
      "Drizzile",
      "Inteleon"
    ]
  },
  {
    "name": "Magic Guard",
    "description": "Only damaged by attacks.",
    "pokemon": [
      "Cleffa",
      "Clefairy",
      "Clefable",
      "Abra",
      "Kadabra",
      "Alakazam",
      "Sigilyph",
      "Solosis",
      "Duosion",
      "Reuniclus"
    ]
  },
  {
    "name": "No Guard",
    "description": "Ensures that all moves hit.",
    "pokemon": [
      "Machop",
      "Machoke",
      "Machamp",
      "Hoothoot",
      "Noctowl",
      "Karrablast",
      "Golett",
      "Golurk",
      "Honedge",
      "Doublade",
      "Lycanroc"
    ]
  },
  {
    "name": "Stall",
    "description": "Always moves last.",
    "pokemon": [
      "Sableye"
    ]
  },
  {
    "name": "Technician",
    "description": "Boosts weaker moves.",
    "pokemon": [
      "Persian",
      "Alolan Meowth",
      "Alolan Persian",
      "Hitmontop",
      "Mime Jr.",
      "Mr. Mime",
      "Scyther",
      "Scizor",
      "Ambipom",
      "Smeargle",
      "Breloom",
      "Roserade",
      "Kricketune",
      "Minccino",
      "Cinccino",
      "Marshadow",
      "Toxtricity",
      "Clobbopus",
      "Grapploct",
      "Maushold",
      "Fezandipiti"
    ]
  },
  {
    "name": "Leaf Guard",
    "description": "Blocks status in sunshine.",
    "pokemon": [
      "Tangela",
      "Tangrowth",
      "Leafeon",
      "Chikorita",
      "Bayleef",
      "Hoppip",
      "Skiploom",
      "Jumpluff",
      "Budew",
      "Roselia",
      "Swadloon",
      "Petilil",
      "Lilligant",
      "Hisuian Lilligant",
      "Fomantis",
      "Lurantis",
      "Bounsweet",
      "Steenee",
      "Tsareena",
      "Zarude"
    ]
  },
  {
    "name": "Klutz",
    "description": "Can't use hold items.",
    "pokemon": [
      "Woobat",
      "Swoobat",
      "Audino",
      "Golett",
      "Golurk",
      "Toxel",
      "Fidough",
      "Capsakid"
    ]
  },
  {
    "name": "Mold Breaker",
    "description": "Moves hit through abilities.",
    "pokemon": [
      "Pinsir",
      "Cranidos",
      "Rampardos",
      "Drilbur",
      "Excadrill",
      "Throh",
      "Sawk",
      "Basculin",
      "Basculegion",
      "Axew",
      "Fraxure",
      "Haxorus",
      "Druddigon",
      "Pancham",
      "Pangoro",
      "Hawlucha",
      "Tinkatink",
      "Tinkatuff",
      "Tinkaton",
      "Veluza"
    ]
  },
  {
    "name": "Super Luck",
    "description": "Critical hits land often.",
    "pokemon": [
      "Togepi",
      "Togetic",
      "Togekiss",
      "Murkrow",
      "Honchkrow",
      "Absol",
      "Unfezant"
    ]
  },
  {
    "name": "Aftermath",
    "description": "Fainting damages the foe.",
    "pokemon": [
      "Voltorb",
      "Electrode",
      "Hisuian Voltorb",
      "Hisuian Electrode",
      "Drifloon",
      "Drifblim",
      "Stunky",
      "Skuntank",
      "Trubbish",
      "Garbodor"
    ]
  },
  {
    "name": "Anticipation",
    "description": "Senses dangerous moves.",
    "pokemon": [
      "Galarian Ponyta",
      "Galarian Rapidash",
      "Eevee",
      "Barboach",
      "Whiscash",
      "Wormadam",
      "Croagunk",
      "Toxicroak",
      "Ferrothorn",
      "Hatenna",
      "Hattrem",
      "Hatterene",
      "Flittle"
    ]
  },
  {
    "name": "Forewarn",
    "description": "Determines a foe's move.",
    "pokemon": [
      "Drowzee",
      "Hypno",
      "Smoochum",
      "Jynx",
      "Munna",
      "Musharna"
    ]
  },
  {
    "name": "Unaware",
    "description": "Ignores stat changes.",
    "pokemon": [
      "Clefable",
      "Wooper",
      "Quagsire",
      "Paldean Wooper",
      "Clodsire",
      "Bidoof",
      "Bibarel",
      "Woobat",
      "Swoobat",
      "Pyukumuku",
      "Cosmog",
      "Fuecoco",
      "Crocalor",
      "Skeledirge",
      "Dondozo"
    ]
  },
  {
    "name": "Tinted Lens",
    "description": "Ups \u201cnot very effective\u201d.",
    "pokemon": [
      "Butterfree",
      "Venonat",
      "Venomoth",
      "Hoothoot",
      "Noctowl",
      "Yanmega",
      "Illumise",
      "Sigilyph",
      "Hisuian Braviary",
      "Nymble",
      "Lokix"
    ]
  },
  {
    "name": "Filter",
    "description": "Weakens \u201csupereffective\u201d.",
    "pokemon": [
      "Mime Jr.",
      "Mr. Mime",
      "Revavroom"
    ]
  },
  {
    "name": "Slow Start",
    "description": "Takes a while to get going.",
    "pokemon": [
      "Regigigas",
      "Varoom"
    ]
  },
  {
    "name": "Scrappy",
    "description": "Hits Ghost-type Pok\u00e9mon.",
    "pokemon": [
      "Galarian Farfetch'd",
      "Sirfetch'd",
      "Kangaskhan",
      "Miltank",
      "Taillow",
      "Swellow",
      "Loudred",
      "Exploud",
      "Lillipup",
      "Herdier",
      "Stoutland",
      "Hisuian Decidueye",
      "Flamigo"
    ]
  },
  {
    "name": "Storm Drain",
    "description": "Draws in Water moves.",
    "pokemon": [
      "Lileep",
      "Cradily",
      "Shellos",
      "Gastrodon",
      "Finneon",
      "Lumineon",
      "Maractus",
      "Tatsugiri"
    ]
  },
  {
    "name": "Ice Body",
    "description": "HP recovery in Hail or Snow.",
    "pokemon": [
      "Seel",
      "Dewgong",
      "Galarian Mr. Mime",
      "Mr. Rime",
      "Glaceon",
      "Snorunt",
      "Spheal",
      "Sealeo",
      "Walrein",
      "Regice",
      "Vanillite",
      "Vanillish",
      "Vanilluxe",
      "Bergmite",
      "Avalugg",
      "Hisuian Avalugg",
      "Arctovish",
      "Frigibax",
      "Arctibax",
      "Baxcalibur"
    ]
  },
  {
    "name": "Solid Rock",
    "description": "Weakens \u201csupereffective\u201d.",
    "pokemon": [
      "Rhyperior",
      "Camerupt",
      "Roggenrola",
      "Boldore",
      "Gigalith",
      "Tirtouga",
      "Carracosta"
    ]
  },
  {
    "name": "Snow Warning",
    "description": "Summons snow in battle.",
    "pokemon": [
      "Alolan Vulpix",
      "Alolan Ninetales",
      "Snover",
      "Abomasnow",
      "Vanilluxe",
      "Amaura",
      "Aurorus"
    ]
  },
  {
    "name": "Honey Gather",
    "description": "May gather Honey.",
    "pokemon": [
      "Teddiursa",
      "Combee",
      "Cutiefly",
      "Ribombee"
    ]
  },
  {
    "name": "Frisk",
    "description": "Checks a foe's item.",
    "pokemon": [
      "Wigglytuff",
      "Alolan Exeggutor",
      "Hisuian Typhlosion",
      "Yanma",
      "Yanmega",
      "Stantler",
      "Wyrdeer",
      "Shuppet",
      "Banette",
      "Duskull",
      "Dusclops",
      "Dusknoir",
      "Gothita",
      "Gothorita",
      "Gothitelle",
      "Phantump",
      "Trevenant",
      "Pumpkaboo",
      "Gourgeist",
      "Noibat",
      "Noivern",
      "Orbeetle",
      "Impidimp",
      "Morgrem",
      "Grimmsnarl",
      "Flittle",
      "Espathra",
      "Munkidori"
    ]
  },
  {
    "name": "Reckless",
    "description": "Boosts moves with recoil.",
    "pokemon": [
      "Hitmonlee",
      "Rhyhorn",
      "Rhydon",
      "Rhyperior",
      "Obstagoon",
      "Starly",
      "Staravia",
      "Staraptor",
      "Emboar",
      "Basculin",
      "Mienfoo",
      "Mienshao",
      "Bouffalant"
    ]
  },
  {
    "name": "Multitype",
    "description": "Changes type to its Plate.",
    "pokemon": []
  },
  {
    "name": "Flower Gift",
    "description": "Allies power up in sunshine.",
    "pokemon": [
      "Cherrim"
    ]
  },
  {
    "name": "Bad Dreams",
    "description": "Damages sleeping Pok\u00e9mon.",
    "pokemon": [
      "Darkrai"
    ]
  },
  {
    "name": "Pickpocket",
    "description": "Steals the foe's held item.",
    "pokemon": [
      "Sneasel",
      "Weavile",
      "Hisuian Sneasel",
      "Seedot",
      "Nuzleaf",
      "Shiftry",
      "Binacle",
      "Barbaracle",
      "Impidimp",
      "Morgrem",
      "Grimmsnarl",
      "Shroodle",
      "Tinkatink",
      "Tinkatuff",
      "Tinkaton"
    ]
  },
  {
    "name": "Sheer Force",
    "description": "Trades effects for power.",
    "pokemon": [
      "Nidoqueen",
      "Nidoking",
      "Steelix",
      "Krabby",
      "Kingler",
      "Kleavor",
      "Tauros",
      "Totodile",
      "Croconaw",
      "Feraligatr",
      "Makuhita",
      "Hariyama",
      "Mawile",
      "Trapinch",
      "Bagon",
      "Cranidos",
      "Rampardos",
      "Darmanitan",
      "Druddigon",
      "Rufflet",
      "Braviary",
      "Hisuian Braviary",
      "Landorus",
      "Pikipek",
      "Trumbeak",
      "Toucannon",
      "Cufant",
      "Copperajah",
      "Squawkabilly",
      "Cetoddle",
      "Cetitan"
    ]
  },
  {
    "name": "Contrary",
    "description": "Inverts stat changes.",
    "pokemon": [
      "Shuckle",
      "Spinda",
      "Snivy",
      "Servine",
      "Serperior",
      "Inkay",
      "Malamar",
      "Fomantis",
      "Lurantis",
      "Enamorus"
    ]
  },
  {
    "name": "Unnerve",
    "description": "Foes can't eat Berries.",
    "pokemon": [
      "Ekans",
      "Arbok",
      "Persian",
      "Aerodactyl",
      "Mewtwo",
      "Ursaring",
      "Ursaluna",
      "Houndour",
      "Houndoom",
      "Tyranitar",
      "Masquerain",
      "Vespiquen",
      "Joltik",
      "Galvantula",
      "Axew",
      "Fraxure",
      "Haxorus",
      "Litleo",
      "Pyroar",
      "Bewear",
      "Rookidee",
      "Corvisquire",
      "Corviknight",
      "Calyrex"
    ]
  },
  {
    "name": "Defiant",
    "description": "Lowered stats up Attack.",
    "pokemon": [
      "Mankey",
      "Primeape",
      "Annihilape",
      "Farfetch'd",
      "Galarian Zapdos",
      "Obstagoon",
      "Purugly",
      "Pawniard",
      "Bisharp",
      "Kingambit",
      "Braviary",
      "Tornadus",
      "Thundurus",
      "Passimian",
      "Falinks"
    ]
  },
  {
    "name": "Defeatist",
    "description": "Gives up at half HP.",
    "pokemon": [
      "Archen",
      "Archeops"
    ]
  },
  {
    "name": "Cursed Body",
    "description": "Disables moves on contact.",
    "pokemon": [
      "Alolan Marowak",
      "Galarian Corsola",
      "Shuppet",
      "Banette",
      "Froslass",
      "Frillish",
      "Jellicent",
      "Sinistea",
      "Polteageist",
      "Dreepy",
      "Drakloak",
      "Dragapult"
    ]
  },
  {
    "name": "Healer",
    "description": "Heals partner Pok\u00e9mon.",
    "pokemon": [
      "Bellossom",
      "Chansey",
      "Blissey",
      "Audino",
      "Alomomola",
      "Spritzee",
      "Aromatisse",
      "Hatenna",
      "Hattrem",
      "Hatterene"
    ]
  },
  {
    "name": "Friend Guard",
    "description": "Lowers damage to partner.",
    "pokemon": [
      "Cleffa",
      "Clefairy",
      "Igglybuff",
      "Jigglypuff",
      "Happiny",
      "Maushold"
    ]
  },
  {
    "name": "Weak Armor",
    "description": "Its stats change when hit.",
    "pokemon": [
      "Onix",
      "Omanyte",
      "Omastar",
      "Slugma",
      "Magcargo",
      "Galarian Corsola",
      "Cursola",
      "Skarmory",
      "Roggenrola",
      "Boldore",
      "Gigalith",
      "Dwebble",
      "Crustle",
      "Garbodor",
      "Vanillite",
      "Vanillish",
      "Vanilluxe",
      "Vullaby",
      "Mandibuzz",
      "Sinistea",
      "Polteageist",
      "Armarouge",
      "Ceruledge"
    ]
  },
  {
    "name": "Heavy Metal",
    "description": "Doubles weight.",
    "pokemon": [
      "Aron",
      "Lairon",
      "Aggron",
      "Bronzor",
      "Bronzong",
      "Cufant",
      "Copperajah",
      "Duraludon"
    ]
  },
  {
    "name": "Light Metal",
    "description": "Halves weight.",
    "pokemon": [
      "Scizor",
      "Beldum",
      "Metang",
      "Metagross",
      "Registeel",
      "Duraludon"
    ]
  },
  {
    "name": "Multiscale",
    "description": "Halves damage at full HP.",
    "pokemon": [
      "Dragonite",
      "Lugia"
    ]
  },
  {
    "name": "Toxic Boost",
    "description": "Ups Attack if poisoned.",
    "pokemon": [
      "Zangoose"
    ]
  },
  {
    "name": "Flare Boost",
    "description": "Ups Sp. Atk if burned.",
    "pokemon": [
      "Drifloon",
      "Drifblim"
    ]
  },
  {
    "name": "Harvest",
    "description": "May recycle a used Berry.",
    "pokemon": [
      "Exeggcute",
      "Exeggutor",
      "Alolan Exeggutor",
      "Tropius",
      "Phantump",
      "Trevenant",
      "Smoliv",
      "Dolliv",
      "Arboliva"
    ]
  },
  {
    "name": "Telepathy",
    "description": "Can't be damaged by an ally.",
    "pokemon": [
      "Wynaut",
      "Wobbuffet",
      "Ralts",
      "Kirlia",
      "Gardevoir",
      "Meditite",
      "Medicham",
      "Dialga",
      "Palkia",
      "Giratina",
      "Munna",
      "Musharna",
      "Elgyem",
      "Beheeyem",
      "Noibat",
      "Noivern",
      "Oranguru",
      "Tapu Koko",
      "Tapu Lele",
      "Tapu Bulu",
      "Tapu Fini",
      "Blipbug",
      "Dottler",
      "Orbeetle",
      "Rabsca"
    ]
  },
  {
    "name": "Moody",
    "description": "Stats change gradually.",
    "pokemon": [
      "Remoraid",
      "Octillery",
      "Smeargle",
      "Snorunt",
      "Glalie",
      "Bidoof",
      "Bibarel",
      "Scovillain"
    ]
  },
  {
    "name": "Overcoat",
    "description": "Blocks weather and powder.",
    "pokemon": [
      "Shellder",
      "Cloyster",
      "Pineco",
      "Forretress",
      "Shelgon",
      "Burmy",
      "Wormadam",
      "Sewaddle",
      "Swadloon",
      "Leavanny",
      "Solosis",
      "Duosion",
      "Reuniclus",
      "Escavalier",
      "Shelmet",
      "Vullaby",
      "Mandibuzz",
      "Jangmo-o",
      "Hakamo-o",
      "Kommo-o",
      "Enamorus",
      "Varoom",
      "Revavroom"
    ]
  },
  {
    "name": "Poison Touch",
    "description": "Poisons foe on contact.",
    "pokemon": [
      "Grimer",
      "Muk",
      "Alolan Grimer",
      "Alolan Muk",
      "Sneasler",
      "Croagunk",
      "Toxicroak",
      "Seismitoad",
      "Skrelp",
      "Dragalge",
      "Grafaiai"
    ]
  },
  {
    "name": "Regenerator",
    "description": "Heals upon switching out.",
    "pokemon": [
      "Slowpoke",
      "Slowbro",
      "Slowking",
      "Galarian Slowpoke",
      "Galarian Slowbro",
      "Galarian Slowking",
      "Tangela",
      "Tangrowth",
      "Corsola",
      "Ho-Oh",
      "Audino",
      "Solosis",
      "Duosion",
      "Reuniclus",
      "Foongus",
      "Amoonguss",
      "Alomomola",
      "Mienfoo",
      "Mienshao",
      "Tornadus",
      "Mareanie",
      "Toxapex",
      "Gossifleur",
      "Eldegoss",
      "Hydrapple",
      "Klawf",
      "Cyclizar"
    ]
  },
  {
    "name": "Big Pecks",
    "description": "Prevents Defense loss.",
    "pokemon": [
      "Pidgey",
      "Pidgeotto",
      "Pidgeot",
      "Chatot",
      "Unfezant",
      "Ducklett",
      "Swanna",
      "Vullaby",
      "Mandibuzz",
      "Fletchling",
      "Bombirdier"
    ]
  },
  {
    "name": "Sand Rush",
    "description": "Ups Speed in a sandstorm.",
    "pokemon": [
      "Sandshrew",
      "Sandslash",
      "Lillipup",
      "Herdier",
      "Stoutland",
      "Drilbur",
      "Excadrill",
      "Lycanroc",
      "Dracozolt",
      "Dracovish",
      "Houndstone"
    ]
  },
  {
    "name": "Wonder Skin",
    "description": "May avoid status problems.",
    "pokemon": [
      "Venomoth",
      "Skitty",
      "Delcatty",
      "Sigilyph",
      "Bruxish"
    ]
  },
  {
    "name": "Analytic",
    "description": "Moving last boosts power.",
    "pokemon": [
      "Magnemite",
      "Magneton",
      "Magnezone",
      "Staryu",
      "Starmie",
      "Porygon",
      "Porygon2",
      "Porygon-Z",
      "Patrat",
      "Watchog",
      "Elgyem",
      "Beheeyem"
    ]
  },
  {
    "name": "Illusion",
    "description": "Appears as a partner.",
    "pokemon": [
      "Zorua",
      "Zoroark",
      "Hisuian Zorua",
      "Hisuian Zoroark"
    ]
  },
  {
    "name": "Imposter",
    "description": "Transforms into the foe.",
    "pokemon": [
      "Ditto"
    ]
  },
  {
    "name": "Infiltrator",
    "description": "Passes through barriers.",
    "pokemon": [
      "Zubat",
      "Golbat",
      "Crobat",
      "Hoppip",
      "Skiploom",
      "Jumpluff",
      "Ninjask",
      "Seviper",
      "Spiritomb",
      "Cottonee",
      "Whimsicott",
      "Litwick",
      "Lampent",
      "Chandelure",
      "Espurr",
      "Meowstic",
      "Inkay",
      "Malamar",
      "Noibat",
      "Noivern",
      "Dreepy",
      "Drakloak",
      "Dragapult",
      "Bramblin",
      "Brambleghast"
    ]
  },
  {
    "name": "Mummy",
    "description": "Spreads with contact.",
    "pokemon": [
      "Yamask",
      "Cofagrigus"
    ]
  },
  {
    "name": "Moxie",
    "description": "KOs raise Attack.",
    "pokemon": [
      "Pinsir",
      "Gyarados",
      "Honchkrow",
      "Heracross",
      "Poochyena",
      "Mightyena",
      "Salamence",
      "Sandile",
      "Krokorok",
      "Krookodile",
      "Scraggy",
      "Scrafty",
      "Litleo",
      "Pyroar",
      "Quaxly",
      "Quaxwell",
      "Quaquaval"
    ]
  },
  {
    "name": "Justified",
    "description": "Dark hits raise Attack.",
    "pokemon": [
      "Gallade",
      "Absol",
      "Lucario",
      "Cobalion",
      "Terrakion",
      "Virizion",
      "Keldeo"
    ]
  },
  {
    "name": "Rattled",
    "description": "Raises Speed when scared.",
    "pokemon": [
      "Alolan Meowth",
      "Alolan Persian",
      "Magikarp",
      "Ledyba",
      "Bonsly",
      "Sudowoodo",
      "Dunsparce",
      "Dudunsparce",
      "Whismur",
      "Clamperl",
      "Basculin",
      "Cubchoo",
      "Yamper",
      "Toxel",
      "Wiglett",
      "Wugtrio",
      "Gimmighoul"
    ]
  },
  {
    "name": "Magic Bounce",
    "description": "Reflects status moves.",
    "pokemon": [
      "Vulpix",
      "Ninetales",
      "Espeon",
      "Natu",
      "Xatu",
      "Hatenna",
      "Hattrem",
      "Hatterene"
    ]
  },
  {
    "name": "Sap Sipper",
    "description": "Grass increases Attack.",
    "pokemon": [
      "Azurill",
      "Marill",
      "Azumarill",
      "Girafarig",
      "Farigiraf",
      "Stantler",
      "Wyrdeer",
      "Miltank",
      "Blitzle",
      "Zebstrika",
      "Bouffalant",
      "Skiddo",
      "Gogoat",
      "Goomy",
      "Sliggoo",
      "Goodra",
      "Hisuian Sliggoo",
      "Hisuian Goodra",
      "Drampa"
    ]
  },
  {
    "name": "Prankster",
    "description": "Status moves go first.",
    "pokemon": [
      "Murkrow",
      "Sableye",
      "Volbeat",
      "Illumise",
      "Riolu",
      "Purrloin",
      "Liepard",
      "Cottonee",
      "Whimsicott",
      "Tornadus",
      "Thundurus",
      "Meowstic",
      "Klefki",
      "Impidimp",
      "Morgrem",
      "Grimmsnarl",
      "Shroodle",
      "Grafaiai"
    ]
  },
  {
    "name": "Sand Force",
    "description": "Powers up in a sandstorm.",
    "pokemon": [
      "Diglett",
      "Dugtrio",
      "Alolan Diglett",
      "Alolan Dugtrio",
      "Nosepass",
      "Probopass",
      "Shellos",
      "Gastrodon",
      "Hippopotas",
      "Hippowdon",
      "Drilbur",
      "Excadrill",
      "Landorus"
    ]
  },
  {
    "name": "Iron Barbs",
    "description": "Hurts to touch.",
    "pokemon": [
      "Ferroseed",
      "Ferrothorn",
      "Togedemaru"
    ]
  },
  {
    "name": "Zen Mode",
    "description": "Transforms at half HP.",
    "pokemon": [
      "Darmanitan",
      "Galarian Darmanitan"
    ]
  },
  {
    "name": "Victory Star",
    "description": "Raises party accuracy.",
    "pokemon": [
      "Victini"
    ]
  },
  {
    "name": "Turboblaze",
    "description": "Moves hit through abilities.",
    "pokemon": [
      "Reshiram",
      "Kyurem"
    ]
  },
  {
    "name": "Teravolt",
    "description": "Moves hit through abilities.",
    "pokemon": [
      "Zekrom",
      "Kyurem"
    ]
  },
  {
    "name": "Aroma Veil",
    "description": "Prevents limiting of moves.",
    "pokemon": [
      "Spritzee",
      "Aromatisse",
      "Milcery",
      "Lechonk",
      "Oinkologne",
      "Dachsbun"
    ]
  },
  {
    "name": "Flower Veil",
    "description": "Protects Grass-types.",
    "pokemon": [
      "Floette",
      "Florges",
      "Comfey"
    ]
  },
  {
    "name": "Cheek Pouch",
    "description": "Eating Berries restores HP.",
    "pokemon": [
      "Bunnelby",
      "Diggersby",
      "Dedenne",
      "Skwovet",
      "Greedent",
      "Maushold"
    ]
  },
  {
    "name": "Protean",
    "description": "Changes type to used move.",
    "pokemon": [
      "Kecleon",
      "Froakie",
      "Frogadier",
      "Greninja",
      "Sprigatito",
      "Floragato",
      "Meowscarada"
    ]
  },
  {
    "name": "Fur Coat",
    "description": "Raises Defense.",
    "pokemon": [
      "Alolan Persian",
      "Sentret",
      "Furret"
    ]
  },
  {
    "name": "Magician",
    "description": "Steals the foe's held item.",
    "pokemon": [
      "Fennekin",
      "Braixen",
      "Delphox",
      "Klefki",
      "Hoopa"
    ]
  },
  {
    "name": "Bulletproof",
    "description": "Avoids some projectiles.",
    "pokemon": [
      "Ursaluna",
      "Chespin",
      "Quilladin",
      "Chesnaught",
      "Jangmo-o",
      "Hakamo-o",
      "Kommo-o",
      "Wooloo",
      "Dubwool",
      "Applin"
    ]
  },
  {
    "name": "Competitive",
    "description": "Lowered stats up Sp. Atk.",
    "pokemon": [
      "Igglybuff",
      "Jigglypuff",
      "Wigglytuff",
      "Galarian Articuno",
      "Milotic",
      "Piplup",
      "Prinplup",
      "Empoleon",
      "Gothita",
      "Gothorita",
      "Gothitelle",
      "Meowstic",
      "Boltund",
      "Wattrel",
      "Kilowattrel"
    ]
  },
  {
    "name": "Strong Jaw",
    "description": "Boosts biting moves.",
    "pokemon": [
      "Alolan Raticate",
      "Tyrunt",
      "Tyrantrum",
      "Hisuian Avalugg",
      "Yungoos",
      "Gumshoos",
      "Bruxish",
      "Chewtle",
      "Drednaw",
      "Boltund",
      "Dracovish"
    ]
  },
  {
    "name": "Refrigerate",
    "description": "Normal moves become Ice.",
    "pokemon": [
      "Amaura",
      "Aurorus"
    ]
  },
  {
    "name": "Sweet Veil",
    "description": "Prevents party from sleep.",
    "pokemon": [
      "Swirlix",
      "Slurpuff",
      "Cutiefly",
      "Ribombee",
      "Bounsweet",
      "Steenee",
      "Tsareena",
      "Milcery"
    ]
  },
  {
    "name": "Stance Change",
    "description": "Transforms as it battles.",
    "pokemon": [
      "Aegislash"
    ]
  },
  {
    "name": "Gale Wings",
    "description": "Flying moves go first.",
    "pokemon": [
      "Fletchling",
      "Fletchinder",
      "Talonflame"
    ]
  },
  {
    "name": "Mega Launcher",
    "description": "Boosts pulse moves.",
    "pokemon": [
      "Clauncher",
      "Clawitzer"
    ]
  },
  {
    "name": "Grass Pelt",
    "description": "Ups Defense in grass.",
    "pokemon": [
      "Skiddo",
      "Gogoat"
    ]
  },
  {
    "name": "Symbiosis",
    "description": "Passes its item to an ally.",
    "pokemon": [
      "Floette",
      "Florges",
      "Oranguru"
    ]
  },
  {
    "name": "Tough Claws",
    "description": "Boosts contact moves.",
    "pokemon": [
      "Galarian Meowth",
      "Perrserker",
      "Binacle",
      "Barbaracle",
      "Lycanroc"
    ]
  },
  {
    "name": "Pixilate",
    "description": "Normal moves become Fairy.",
    "pokemon": [
      "Sylveon"
    ]
  },
  {
    "name": "Gooey",
    "description": "Lowers Speed on contact.",
    "pokemon": [
      "Goomy",
      "Sliggoo",
      "Goodra",
      "Hisuian Sliggoo",
      "Hisuian Goodra",
      "Wiglett",
      "Wugtrio"
    ]
  },
  {
    "name": "Aerilate",
    "description": "Normal moves become Flying.",
    "pokemon": []
  },
  {
    "name": "Parental Bond",
    "description": "Moves hit twice.",
    "pokemon": []
  },
  {
    "name": "Dark Aura",
    "description": "Boosts Dark moves.",
    "pokemon": [
      "Yveltal"
    ]
  },
  {
    "name": "Fairy Aura",
    "description": "Boosts Fairy moves.",
    "pokemon": [
      "Xerneas"
    ]
  },
  {
    "name": "Aura Break",
    "description": "Reverse aura abilities.",
    "pokemon": [
      "Zygarde"
    ]
  },
  {
    "name": "Primordial Sea",
    "description": "Summons heavy rain.",
    "pokemon": []
  },
  {
    "name": "Desolate Land",
    "description": "Summons intense sunlight.",
    "pokemon": []
  },
  {
    "name": "Delta Stream",
    "description": "Summons strong winds.",
    "pokemon": []
  },
  {
    "name": "Stamina",
    "description": "Boosts Defense when hit.",
    "pokemon": [
      "Mudbray",
      "Mudsdale",
      "Archaludon"
    ]
  },
  {
    "name": "Wimp Out",
    "description": "Flees at half HP.",
    "pokemon": [
      "Wimpod"
    ]
  },
  {
    "name": "Emergency Exit",
    "description": "Flees at half HP.",
    "pokemon": [
      "Golisopod"
    ]
  },
  {
    "name": "Water Compaction",
    "description": "Water boosts Defense.",
    "pokemon": [
      "Sandygast",
      "Palossand"
    ]
  },
  {
    "name": "Merciless",
    "description": "Criticals poisoned foes.",
    "pokemon": [
      "Mareanie",
      "Toxapex"
    ]
  },
  {
    "name": "Shields Down",
    "description": "Shell breaks at half HP.",
    "pokemon": []
  },
  {
    "name": "Stakeout",
    "description": "Stronger as foes switch in.",
    "pokemon": [
      "Yungoos",
      "Gumshoos",
      "Nickit",
      "Thievul",
      "Tarountula",
      "Spidops",
      "Maschiff",
      "Mabosstiff"
    ]
  },
  {
    "name": "Water Bubble",
    "description": "Guards from fire and burns.",
    "pokemon": [
      "Dewpider",
      "Araquanid"
    ]
  },
  {
    "name": "Steelworker",
    "description": "Powers up Steel moves.",
    "pokemon": [
      "Dhelmise"
    ]
  },
  {
    "name": "Berserk",
    "description": "Boosts Sp. Atk at low HP.",
    "pokemon": [
      "Galarian Moltres",
      "Drampa"
    ]
  },
  {
    "name": "Slush Rush",
    "description": "Raises Speed in Hail/Snow.",
    "pokemon": [
      "Alolan Sandshrew",
      "Alolan Sandslash",
      "Cubchoo",
      "Beartic",
      "Arctozolt",
      "Arctovish",
      "Cetitan"
    ]
  },
  {
    "name": "Long Reach",
    "description": "Never makes contact.",
    "pokemon": [
      "Rowlet",
      "Dartrix",
      "Decidueye"
    ]
  },
  {
    "name": "Liquid Voice",
    "description": "Makes sound moves Water.",
    "pokemon": [
      "Popplio",
      "Brionne",
      "Primarina"
    ]
  },
  {
    "name": "Triage",
    "description": "Healing moves go first.",
    "pokemon": [
      "Comfey"
    ]
  },
  {
    "name": "Galvanize",
    "description": "Normal moves turn Electric.",
    "pokemon": [
      "Alolan Geodude",
      "Alolan Graveler",
      "Alolan Golem"
    ]
  },
  {
    "name": "Surge Surfer",
    "description": "Faster on electricity.",
    "pokemon": [
      "Alolan Raichu"
    ]
  },
  {
    "name": "Schooling",
    "description": "Forms a school when strong.",
    "pokemon": [
      "Wishiwashi"
    ]
  },
  {
    "name": "Disguise",
    "description": "Decoy protects it once.",
    "pokemon": [
      "Mimikyu"
    ]
  },
  {
    "name": "Battle Bond",
    "description": "Changes form after a KO.",
    "pokemon": [
      "Greninja"
    ]
  },
  {
    "name": "Power Construct",
    "description": "Cells aid it when weakened.",
    "pokemon": [
      "Zygarde"
    ]
  },
  {
    "name": "Corrosion",
    "description": "Poisons any type.",
    "pokemon": [
      "Salandit",
      "Salazzle",
      "Glimmet",
      "Glimmora"
    ]
  },
  {
    "name": "Comatose",
    "description": "Always drowsing.",
    "pokemon": [
      "Komala"
    ]
  },
  {
    "name": "Queenly Majesty",
    "description": "Protects from priority.",
    "pokemon": [
      "Tsareena"
    ]
  },
  {
    "name": "Innards Out",
    "description": "Hurts foe when defeated.",
    "pokemon": [
      "Pyukumuku"
    ]
  },
  {
    "name": "Dancer",
    "description": "Dances along with others.",
    "pokemon": [
      "Oricorio"
    ]
  },
  {
    "name": "Battery",
    "description": "Boosts ally's Sp. Atk.",
    "pokemon": [
      "Charjabug"
    ]
  },
  {
    "name": "Fluffy",
    "description": "Tougher but flammable.",
    "pokemon": [
      "Stufful",
      "Bewear",
      "Wooloo",
      "Dubwool",
      "Greavard",
      "Houndstone"
    ]
  },
  {
    "name": "Dazzling",
    "description": "Protects from priority.",
    "pokemon": [
      "Bruxish"
    ]
  },
  {
    "name": "Soul-Heart",
    "description": "KOs raise Sp. Atk.",
    "pokemon": [
      "Magearna"
    ]
  },
  {
    "name": "Tangling Hair",
    "description": "Lowers Speed on contact.",
    "pokemon": [
      "Alolan Diglett",
      "Alolan Dugtrio"
    ]
  },
  {
    "name": "Receiver",
    "description": "Copies ally's ability.",
    "pokemon": [
      "Passimian"
    ]
  },
  {
    "name": "Power Of Alchemy",
    "description": "Copies ally's ability.",
    "pokemon": [
      "Alolan Grimer",
      "Alolan Muk"
    ]
  },
  {
    "name": "Beast Boost",
    "description": "KOs boost best stat.",
    "pokemon": [
      "Nihilego",
      "Buzzwole",
      "Pheromosa",
      "Xurkitree",
      "Celesteela",
      "Kartana",
      "Guzzlord",
      "Poipole",
      "Naganadel",
      "Stakataka",
      "Blacephalon"
    ]
  },
  {
    "name": "RKS System",
    "description": "Memories change its type.",
    "pokemon": []
  },
  {
    "name": "Electric Surge",
    "description": "Field becomes Electric.",
    "pokemon": [
      "Tapu Koko",
      "Pincurchin"
    ]
  },
  {
    "name": "Psychic Surge",
    "description": "Field becomes weird.",
    "pokemon": [
      "Tapu Lele",
      "Indeedee"
    ]
  },
  {
    "name": "Misty Surge",
    "description": "Field becomes misty.",
    "pokemon": [
      "Galarian Weezing",
      "Tapu Fini"
    ]
  },
  {
    "name": "Grassy Surge",
    "description": "Field becomes grassy.",
    "pokemon": [
      "Tapu Bulu",
      "Grookey",
      "Thwackey",
      "Rillaboom"
    ]
  },
  {
    "name": "Full Metal Body",
    "description": "Prevents stat reduction.",
    "pokemon": [
      "Solgaleo"
    ]
  },
  {
    "name": "Shadow Shield",
    "description": "Halves damage at full HP.",
    "pokemon": [
      "Lunala"
    ]
  },
  {
    "name": "Prism Armor",
    "description": "Weakens \u201csupereffective\u201d.",
    "pokemon": [
      "Necrozma"
    ]
  },
  {
    "name": "Neuroforce",
    "description": "Ups \u201csupereffective\u201d.",
    "pokemon": [
      "Necrozma"
    ]
  },
  {
    "name": "Intrepid Sword",
    "description": "Ups Attack on entry.",
    "pokemon": [
      "Zacian"
    ]
  },
  {
    "name": "Dauntless Shield",
    "description": "Ups Defense on entry.",
    "pokemon": [
      "Zamazenta"
    ]
  },
  {
    "name": "Libero",
    "description": "Changes type to move's.",
    "pokemon": [
      "Scorbunny",
      "Raboot",
      "Cinderace"
    ]
  },
  {
    "name": "Ball Fetch",
    "description": "Fetches failed Pok\u00e9 Ball.",
    "pokemon": [
      "Yamper"
    ]
  },
  {
    "name": "Cotton Down",
    "description": "Lower Speed of all when hit.",
    "pokemon": [
      "Gossifleur",
      "Eldegoss"
    ]
  },
  {
    "name": "Propeller Tail",
    "description": "Ignores foe's redirection.",
    "pokemon": [
      "Arrokuda",
      "Barraskewda"
    ]
  },
  {
    "name": "Mirror Armor",
    "description": "Reflect stat decreases.",
    "pokemon": [
      "Rookidee",
      "Corvisquire",
      "Corviknight"
    ]
  },
  {
    "name": "Gulp Missile",
    "description": "If hit, spits prey from sea.",
    "pokemon": [
      "Cramorant"
    ]
  },
  {
    "name": "Stalwart",
    "description": "Ignores foe's redirection.",
    "pokemon": [
      "Duraludon",
      "Archaludon"
    ]
  },
  {
    "name": "Steam Engine",
    "description": "Fire or Water hits up Speed.",
    "pokemon": [
      "Rolycoly",
      "Carkol",
      "Coalossal"
    ]
  },
  {
    "name": "Punk Rock",
    "description": "Ups and resists sound.",
    "pokemon": [
      "Loudred",
      "Exploud",
      "Toxtricity"
    ]
  },
  {
    "name": "Sand Spit",
    "description": "Creates a sandstorm if hit.",
    "pokemon": [
      "Silicobra",
      "Sandaconda"
    ]
  },
  {
    "name": "Ice Scales",
    "description": "Halves special damage.",
    "pokemon": [
      "Snom",
      "Frosmoth"
    ]
  },
  {
    "name": "Ripen",
    "description": "Doubles effect of Berries.",
    "pokemon": [
      "Applin",
      "Flapple",
      "Appletun"
    ]
  },
  {
    "name": "Ice Face",
    "description": "Hail or Snow renew free hit.",
    "pokemon": [
      "Eiscue"
    ]
  },
  {
    "name": "Power Spot",
    "description": "Powers up ally moves.",
    "pokemon": [
      "Stonjourner"
    ]
  },
  {
    "name": "Mimicry",
    "description": "Changes type on terrain.",
    "pokemon": [
      "Galarian Stunfisk"
    ]
  },
  {
    "name": "Screen Cleaner",
    "description": "Removes walls of light.",
    "pokemon": [
      "Galarian Mr. Mime",
      "Mr. Rime"
    ]
  },
  {
    "name": "Steely Spirit",
    "description": "Boosts ally's Steel moves.",
    "pokemon": [
      "Galarian Meowth",
      "Perrserker"
    ]
  },
  {
    "name": "Perish Body",
    "description": "Foe faints in 3 turns if hit.",
    "pokemon": [
      "Cursola"
    ]
  },
  {
    "name": "Wandering Spirit",
    "description": "Trade abilities on contact.",
    "pokemon": [
      "Galarian Yamask",
      "Runerigus"
    ]
  },
  {
    "name": "Gorilla Tactics",
    "description": "Ups Attack and locks move.",
    "pokemon": [
      "Galarian Darmanitan"
    ]
  },
  {
    "name": "Neutralizing Gas",
    "description": "All Abilities are nullified.",
    "pokemon": [
      "Koffing",
      "Weezing",
      "Galarian Weezing"
    ]
  },
  {
    "name": "Pastel Veil",
    "description": "Protects team from poison.",
    "pokemon": [
      "Galarian Ponyta",
      "Galarian Rapidash"
    ]
  },
  {
    "name": "Hunger Switch",
    "description": "Changes form each turn.",
    "pokemon": [
      "Morpeko"
    ]
  },
  {
    "name": "Quick Draw",
    "description": "Moves first occasionally.",
    "pokemon": [
      "Galarian Slowbro"
    ]
  },
  {
    "name": "Unseen Fist",
    "description": "Contact evades protection.",
    "pokemon": [
      "Urshifu"
    ]
  },
  {
    "name": "Curious Medicine",
    "description": "Remove ally's stat changes.",
    "pokemon": [
      "Galarian Slowking"
    ]
  },
  {
    "name": "Transistor",
    "description": "Ups Electric-type moves.",
    "pokemon": [
      "Regieleki"
    ]
  },
  {
    "name": "Dragon's Maw",
    "description": "Ups Dragon-type moves.",
    "pokemon": [
      "Regidrago"
    ]
  },
  {
    "name": "Chilling Neigh",
    "description": "KOs boost Attack stat.",
    "pokemon": [
      "Glastrier"
    ]
  },
  {
    "name": "Grim Neigh",
    "description": "KOs boost Sp. Atk stat.",
    "pokemon": [
      "Spectrier"
    ]
  },
  {
    "name": "As One",
    "description": "Unnerve and Chilling Neigh.",
    "pokemon": [
      "Calyrex"
    ]
  },
  {
    "name": "As One",
    "description": "Unnerve and Grim Neigh.",
    "pokemon": [
      "Calyrex"
    ]
  },
  {
    "name": "Lingering Aroma",
    "description": "Spreads with contact.",
    "pokemon": [
      "Oinkologne"
    ]
  },
  {
    "name": "Seed Sower",
    "description": "Affects terrain when hit.",
    "pokemon": [
      "Arboliva"
    ]
  },
  {
    "name": "Thermal Exchange",
    "description": "Fire hits up Attack.",
    "pokemon": [
      "Frigibax",
      "Arctibax",
      "Baxcalibur"
    ]
  },
  {
    "name": "Anger Shell",
    "description": "Gets angry at half HP.",
    "pokemon": [
      "Klawf"
    ]
  },
  {
    "name": "Purifying Salt",
    "description": "Protected by pure salts.",
    "pokemon": [
      "Nacli",
      "Naclstack",
      "Garganacl"
    ]
  },
  {
    "name": "Well-Baked Body",
    "description": "Strengthened by Fire.",
    "pokemon": [
      "Dachsbun"
    ]
  },
  {
    "name": "Wind Rider",
    "description": "Ups Attack if hit by wind.",
    "pokemon": [
      "Shiftry",
      "Bramblin",
      "Brambleghast"
    ]
  },
  {
    "name": "Guard Dog",
    "description": "Cannot be intimidated.",
    "pokemon": [
      "Mabosstiff",
      "Okidogi"
    ]
  },
  {
    "name": "Rocky Payload",
    "description": "Powers up Rock moves.",
    "pokemon": [
      "Bombirdier"
    ]
  },
  {
    "name": "Wind Power",
    "description": "Gets charged by wind.",
    "pokemon": [
      "Wattrel",
      "Kilowattrel"
    ]
  },
  {
    "name": "Zero to Hero",
    "description": "Changes form on switch out.",
    "pokemon": [
      "Palafin"
    ]
  },
  {
    "name": "Commander",
    "description": "Commands from Dondozo.",
    "pokemon": [
      "Tatsugiri"
    ]
  },
  {
    "name": "Electromorphosis",
    "description": "Gets Charged when hit.",
    "pokemon": [
      "Bellibolt"
    ]
  },
  {
    "name": "Protosynthesis",
    "description": "Sun boosts best stat.",
    "pokemon": [
      "Great Tusk",
      "Scream Tail",
      "Brute Bonnet",
      "Flutter Mane",
      "Slither Wing",
      "Sandy Shocks",
      "Roaring Moon",
      "Walking Wake",
      "Gouging Fire",
      "Raging Bolt"
    ]
  },
  {
    "name": "Quark Drive",
    "description": "Elec. field ups best stat.",
    "pokemon": [
      "Iron Treads",
      "Iron Bundle",
      "Iron Hands",
      "Iron Jugulis",
      "Iron Moth",
      "Iron Thorns",
      "Iron Valiant",
      "Iron Leaves",
      "Iron Boulder",
      "Iron Crown"
    ]
  },
  {
    "name": "Good as Gold",
    "description": "Avoids status moves.",
    "pokemon": [
      "Gholdengo"
    ]
  },
  {
    "name": "Vessel of Ruin",
    "description": "Lowers foes' sp. damage.",
    "pokemon": [
      "Ting-Lu"
    ]
  },
  {
    "name": "Sword of Ruin",
    "description": "Lowers foes' Defense.",
    "pokemon": [
      "Chien-Pao"
    ]
  },
  {
    "name": "Tablets of Ruin",
    "description": "Lowers foes' damage.",
    "pokemon": [
      "Wo-Chien"
    ]
  },
  {
    "name": "Beads of Ruin",
    "description": "Lowers foes' Sp. Defense.",
    "pokemon": [
      "Chi-Yu"
    ]
  },
  {
    "name": "Orichalcum Pulse",
    "description": "Summons sunlight in battle.",
    "pokemon": [
      "Koraidon"
    ]
  },
  {
    "name": "Hadron Engine",
    "description": "Field becomes Electric.",
    "pokemon": [
      "Miraidon"
    ]
  },
  {
    "name": "Opportunist",
    "description": "Copies foe's stat change.",
    "pokemon": [
      "Espathra"
    ]
  },
  {
    "name": "Cud Chew",
    "description": "Eats a used berry again.",
    "pokemon": [
      "Paldean Tauros",
      "Farigiraf"
    ]
  },
  {
    "name": "Sharpness",
    "description": "Strengthens slicing moves.",
    "pokemon": [
      "Kleavor",
      "Kabuto",
      "Kabutops",
      "Gallade",
      "Hisuian Samurott",
      "Veluza"
    ]
  },
  {
    "name": "Supreme Overlord",
    "description": "Inherits fallen's strength.",
    "pokemon": [
      "Kingambit"
    ]
  },
  {
    "name": "Costar",
    "description": "Copies ally's stat changes.",
    "pokemon": [
      "Flamigo"
    ]
  },
  {
    "name": "Toxic Debris",
    "description": "Throws poison spikes if hit.",
    "pokemon": [
      "Glimmet",
      "Glimmora"
    ]
  },
  {
    "name": "Armor Tail",
    "description": "Protects from priority.",
    "pokemon": [
      "Farigiraf"
    ]
  },
  {
    "name": "Earth Eater",
    "description": "Eats ground to heal HP.",
    "pokemon": [
      "Orthworm"
    ]
  },
  {
    "name": "Mycelium Might",
    "description": "Status moves never fail.",
    "pokemon": [
      "Toedscool",
      "Toedscruel"
    ]
  },
  {
    "name": "Hospitality",
    "description": "Restores ally's HP.",
    "pokemon": [
      "Poltchageist",
      "Sinistcha"
    ]
  },
  {
    "name": "Mind's Eye",
    "description": "Keen Eye and Scrappy.",
    "pokemon": [
      "Ursaluna"
    ]
  },
  {
    "name": "Embody Aspect",
    "description": "Raises Speed.",
    "pokemon": []
  },
  {
    "name": "Embody Aspect",
    "description": "Raises Attack.",
    "pokemon": []
  },
  {
    "name": "Embody Aspect",
    "description": "Raises Sp. Def.",
    "pokemon": []
  },
  {
    "name": "Embody Aspect",
    "description": "Raises Defense.",
    "pokemon": []
  },
  {
    "name": "Toxic Chain",
    "description": "Moves can poison.",
    "pokemon": [
      "Okidogi",
      "Munkidori",
      "Fezandipiti"
    ]
  },
  {
    "name": "Supersweet Syrup",
    "description": "Lowers the foe's Evasion.",
    "pokemon": [
      "Dipplin",
      "Hydrapple"
    ]
  },
  {
    "name": "Tera Shift",
    "description": "Terastallizes upon entry.",
    "pokemon": [
      "Terapagos"
    ]
  },
  {
    "name": "Tera Shell",
    "description": "Resists all at full HP.",
    "pokemon": [
      "Terapagos"
    ]
  },
  {
    "name": "Teraform Zero",
    "description": "Zeroes weather and terrain.",
    "pokemon": [
      "Terapagos"
    ]
  },
  {
    "name": "Poison Puppeteer",
    "description": "Confuses poisoned foes.",
    "pokemon": [
      "Pecharunt"
    ]
  },
  {
    "name": "Piercing Drill",
    "description": "Contact evades protection.",
    "pokemon": []
  },
  {
    "name": "Dragonize",
    "description": "Normal moves turn Dragon.",
    "pokemon": []
  },
  {
    "name": "Subversion",
    "description": "Raises opposite Atk stat.",
    "pokemon": []
  },
  {
    "name": "-------",
    "description": "No special ability.",
    "pokemon": []
  },
  {
    "name": "Mega Sol",
    "description": "Acts like under sun.",
    "pokemon": []
  },
  {
    "name": "-------",
    "description": "No special ability.",
    "pokemon": []
  },
  {
    "name": "-------",
    "description": "No special ability.",
    "pokemon": []
  },
  {
    "name": "Spicy Spray",
    "description": "Burns the foe when damaged.",
    "pokemon": []
  }
];
