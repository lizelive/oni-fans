import { definePlant } from "../../../../src/domain/define.js";

export const mealwood = definePlant({
  slug: "mealwood",
  name: "Mealwood",
  description: "Mealwood is a food plant that grows from a Mealwood Seed.",
  tags: [
    "plant",
    "wiki.gg"
  ],
  dlc: [
    "base-game",
    "spaced-out"
  ],
  sources: [
    "https://oxygennotincluded.wiki.gg/wiki/Mealwood",
    "https://oni-db.com/details/mealwood"
  ],
  image: {
    sourceUrl: "https://oxygennotincluded.wiki.gg/images/Mealwood.png?53fede",
    localPath: "D:\\source\\oni-fans\\assets\\oni\\generated\\mealwood.png"
  },
  rawDetails: {
    infobox: {},
    sections: {
      Seed: [
        "The Mealwood Seed can be obtained by harvesting and uprooting Mealwood, or by digging up a Buried Object within the Sandstone Biome. It grows into Mealwood when planted.",
        "Like any other seed, it can be fed to Pacus to domesticate them, and excrete Polluted Dirt."
      ],
      Food: [
        "One domesticated Mealwood plant produces 1 Meal Lice (600 kcal) every 3 cycles (if you do harvest errand immediately!) and consumes 10kg Dirt/cycle.",
        "1 Meal Lice (600kcal) 1 Meal Lice (30kg Dirt) + 50kg Water can be processed in the Microbe Musher into 1 Liceloaf (1700 kcal) 3 Meal Lice can be processed in the Electric Grill into 1 Pickled Meal (1800 kcal)",
        "600 kcal / 3 cycles = 200 kcal/cycle/plant. Thus, when eating raw meal lice, you need exactly1 a minimum of 5 domesticated Mealwood plants or 20 wild mealwood per Duplicant. Domesticated also consumes 50kg Dirt/cycle.",
        "1 If your Duplicants don't do the harvest errand immediatelly, the Meal Lice remains on the plant for 1 cycle, then it drops on the ground (and begins to rot). And only after that, will the cycle to grow a new Meal Lice begin anew! Should you use Auto-Sweeper to do the \"harvesting\", you need to calculate with one full additional cycle: 600/4=150kcal/cycle/plant and then 6,666…7 plants per Duplicant!"
      ],
      Sustainability: [
        "Either employ Pips to plant wild Mealwood plants or find a sustainable source for Dirt:",
        "one Pip produces 20 kg of Dirt/cycle and consumes 9% growth of Arbor Trees and 20% growth of Thimble Reeds per cycle. …"
      ],
      "General considerations": [
        "Consuming as Liceloaf has a bonus of (1,700/1,200) ≈ 1.4. 200 kcal * 1.4 = 280 kcal/cycle/plant. Dupes need around 1,000 kcal/cycle, so you need around four plants per dupe. While Pickled Meal does not provide an increase in Calories, the increased storage times will allow you to build up your food reserves before you're able to build a refrigerator. Making it also provides training in Cooking for your future dedicated Chef.",
        "The advantage of Meal Lice is that it is simple to grow. Together with Dusk Cap, it requires no irrigation of any kind. It also only requires dirt as its fertilizer, and doesn't require extreme temperatures. This makes it useful in the early game, when the Forest Biome's minimal water must be spent efficiently. However, it should be noted that despite the ease of obtaining Dirt, sustained farming of Mealwood requires a perpetual source of dirt, since composting rotten Meal Lice is unable to replenish it. While Quality foods also provide higher calories, the amount of calories in the Mealwood is still more than enough to supply even a fairly populous base, so the main reason to improve your farms away from Meal Lice is for the increased Morale bonus."
      ],
      Growth: [
        "Mealwood requires temperature range of 10 °C ↔ 30 °C / 50 °F ↔ 86 °F, and air pressure of 150 g - 10 kg. It requires Oxygen, Polluted Oxygen or Carbon Dioxide atmosphere."
      ],
      Wild: [
        "A wild Mealwood takes 12 cycles to grow to maturity."
      ],
      Domestic: [
        "Mealwood can be planted in a Planter Box, a Farm Tile or a Hydroponic Farm. It needs to be fertilized with 10 kg/cycle of Dirt.",
        "A domestic Mealwood takes 3 cycles to grow to maturity.",
        "Mealwood can be planted from Mealwood Seeds acquired from digging wild Mealwood or uncovering buried objects."
      ],
      Notes: [
        "Meal Lice is less calorie dense than most other food items: a single kilogram of Meal Lice is only 600 kcal (for comparison, a 1kg Frost Bun is 1200 kcal). However, this is only really relevant for Storage capacity, and possibly producing Rot Piles.",
        "A Mealwood Plant has a decor value of -10 with 2 tiles radius."
      ],
      Mutations: [
        "Variant Production(kcal) other Radiation Range Life cycle Temperature range Fertilizerkg Dirt kcal/cycle kcal/kg harvest drop harvest drop Original Domesticated 600 0 ↔ 4600 3 20K(10 °C ↔ 30 °C / 50 °F ↔ 86 °F) 10 200.00 85.71 20.00 8.57 Original Wild 600 0 ↔ 4600 12 20K(10 °C ↔ 30 °C / 50 °F ↔ 86 °F) 0 50.00 37.50 - - Blooming 600 250 ↔ 4600 3 20K(10 °C ↔ 30 °C / 50 °F ↔ 86 °F) 10 200.00 85.71 20.00 8.57 Bountiful 1200 requires 200 Lux 250 ↔ 4600 3 20K(10 °C ↔ 30 °C / 50 °F ↔ 86 °F) 12 400.00 171.43 33.33 14.29 Easygoing 450 250 ↔ 4600 3 30K(5 °C ↔ 35 °C / 41 °F ↔ 95 °F) 5 150.00 64.29 30.00 12.86 Exuberant 600 requires Darkness10000 Food Poisoning on crop 250 ↔ 4600 0.75 20K(10 °C ↔ 30 °C / 50 °F ↔ 86 °F) 15 800.00 126.31 53.33 8.42 Juicyfruit 600 drops on floor upon ripening 250 ↔ 4600 3 20K(10 °C ↔ 30 °C / 50 °F ↔ 86 °F) 12.5 200.00 200.00 16.00 16.00 Leafy 600 requires 1000 Lux 250 ↔ 4600 1.5 20K(10 °C ↔ 30 °C / 50 °F ↔ 86 °F) 12.5 400.00 109.09 32.00 8.73 Licey 1200 250 ↔ 4600 3 20K(10 °C ↔ 30 °C / 50 °F ↔ 86 °F) 12.5 400.00 171.43 32.00 13.71 Specialized 900 250 ↔ 4600 3 10K(15 °C ↔ 25 °C / 59 °F ↔ 77 °F) 10 300.00 128.57 30.00 12.86 Superspecialized 1200 250 ↔ 4600 3 4K(18 °C ↔ 22 °C / 64.4 °F ↔ 71.6 °F) 10 400.00 171.43 40.00 17.14 Wildish 600 250 ↔ 4600 13.5 20K(10 °C ↔ 30 °C / 50 °F ↔ 86 °F) 1 44.44 34.29 44.44 34.29"
      ],
      Database: [
        "Mealwood Edible Plant Mealwood is an bramble-like plant that has a parasitic symbiotic relationship with the nutrient-rich Meal Lice that inhabit it.Mealwood experience a rapid growth rate in its first stages, but once the Meal Lice become active they consume all the new fruiting spurs on the plant before they can fully mature.Theoretically the flowers of this plant are a beautiful color of fuchsia, however no Mealwood has ever reached the point of flowering without being overrun by the parasitic Meal Lice."
      ],
      Gallery: [
        "An immature Mealwood with dropped Meal Lice, next to a Buried Muckroot, and a ready to harvest Mealwood"
      ],
      "See Also": [
        "Agriculture Guide Food Guide",
        "vehPlantsBase Game Mealwood Dusk Cap Bristle Blossom Sleet Wheat Waterweed Pincha Pepper Buried Muckroot Hexalent Balm Lily Thimble Reed Dasha Saltvine Arbor Tree Gas Grass Oxyfern Wheezewort Bluff Briar Buddy Bud Mirth Leaf Jumping Joya Sporechid Bog Bucket Grubfruit Plant Spindly Grubfruit Plant Saturn Critter Trap Swamp Chard Bliss Burst Mellow Mallow Tranquil Toes Pikeapple Bush Plume Squash Plant Sherberry Plant Bonbon Tree Alveo Vera Idylla Flower Sweatcorn Stalk Megafrond Ovagro Node Mimika Bud Snactus Lura Plant Seakomb Dew Dripper Ring Rosebush"
      ]
    },
    tables: [
      {
        heading: "Mutations",
        headers: [
          "Variant",
          "Production(kcal)",
          "other",
          "Radiation Range",
          "Life cycle",
          "Temperature range",
          "Fertilizerkg Dirt",
          "kcal/cycle",
          "kcal/kg"
        ],
        rows: [
          [
            "600",
            "0 ↔ 4600",
            "3",
            "20K(10 °C ↔ 30 °C / 50 °F ↔ 86 °F)",
            "10",
            "200.00",
            "85.71",
            "20.00",
            "8.57"
          ],
          [
            "600",
            "0 ↔ 4600",
            "12",
            "20K(10 °C ↔ 30 °C / 50 °F ↔ 86 °F)",
            "0",
            "50.00",
            "37.50",
            "-",
            "-"
          ],
          [
            "600",
            "250 ↔ 4600",
            "3",
            "20K(10 °C ↔ 30 °C / 50 °F ↔ 86 °F)",
            "10",
            "200.00",
            "85.71",
            "20.00",
            "8.57"
          ],
          [
            "1200",
            "requires 200 Lux",
            "250 ↔ 4600",
            "3",
            "20K(10 °C ↔ 30 °C / 50 °F ↔ 86 °F)",
            "12",
            "400.00",
            "171.43",
            "33.33",
            "14.29"
          ],
          [
            "450",
            "250 ↔ 4600",
            "3",
            "30K(5 °C ↔ 35 °C / 41 °F ↔ 95 °F)",
            "5",
            "150.00",
            "64.29",
            "30.00",
            "12.86"
          ],
          [
            "600",
            "requires Darkness10000 Food Poisoning on crop",
            "250 ↔ 4600",
            "0.75",
            "20K(10 °C ↔ 30 °C / 50 °F ↔ 86 °F)",
            "15",
            "800.00",
            "126.31",
            "53.33",
            "8.42"
          ],
          [
            "600",
            "drops on floor upon ripening",
            "250 ↔ 4600",
            "3",
            "20K(10 °C ↔ 30 °C / 50 °F ↔ 86 °F)",
            "12.5",
            "200.00",
            "200.00",
            "16.00",
            "16.00"
          ],
          [
            "600",
            "requires 1000 Lux",
            "250 ↔ 4600",
            "1.5",
            "20K(10 °C ↔ 30 °C / 50 °F ↔ 86 °F)",
            "12.5",
            "400.00",
            "109.09",
            "32.00",
            "8.73"
          ],
          [
            "1200",
            "250 ↔ 4600",
            "3",
            "20K(10 °C ↔ 30 °C / 50 °F ↔ 86 °F)",
            "12.5",
            "400.00",
            "171.43",
            "32.00",
            "13.71"
          ],
          [
            "900",
            "250 ↔ 4600",
            "3",
            "10K(15 °C ↔ 25 °C / 59 °F ↔ 77 °F)",
            "10",
            "300.00",
            "128.57",
            "30.00",
            "12.86"
          ],
          [
            "1200",
            "250 ↔ 4600",
            "3",
            "4K(18 °C ↔ 22 °C / 64.4 °F ↔ 71.6 °F)",
            "10",
            "400.00",
            "171.43",
            "40.00",
            "17.14"
          ],
          [
            "600",
            "250 ↔ 4600",
            "13.5",
            "20K(10 °C ↔ 30 °C / 50 °F ↔ 86 °F)",
            "1",
            "44.44",
            "34.29",
            "44.44",
            "34.29"
          ]
        ]
      }
    ],
    relatedLinks: [
      {
        name: "",
        url: "https://oxygennotincluded.wiki.gg/wiki/Barren_Biome",
        slug: "barren-biome"
      },
      {
        name: "",
        url: "https://oxygennotincluded.wiki.gg/wiki/Sandstone_Biome",
        slug: "sandstone-biome"
      },
      {
        name: "",
        url: "https://oxygennotincluded.wiki.gg/wiki/Forest_Biome",
        slug: "forest-biome"
      },
      {
        name: "Meal Lice",
        url: "https://oxygennotincluded.wiki.gg/wiki/Meal_Lice",
        slug: "meal-lice"
      },
      {
        name: "",
        url: "https://oxygennotincluded.wiki.gg/wiki/Heat",
        slug: "heat"
      },
      {
        name: "",
        url: "https://oxygennotincluded.wiki.gg/wiki/Radiation",
        slug: "radiation"
      },
      {
        name: "",
        url: "https://oxygennotincluded.wiki.gg/wiki/Oxygen",
        slug: "oxygen"
      },
      {
        name: "",
        url: "https://oxygennotincluded.wiki.gg/wiki/Polluted_Oxygen",
        slug: "polluted-oxygen"
      },
      {
        name: "",
        url: "https://oxygennotincluded.wiki.gg/wiki/Carbon_Dioxide",
        slug: "carbon-dioxide"
      },
      {
        name: "",
        url: "https://oxygennotincluded.wiki.gg/wiki/Dirt",
        slug: "dirt"
      },
      {
        name: "",
        url: "https://oxygennotincluded.wiki.gg/wiki/Decor",
        slug: "decor"
      },
      {
        name: "",
        url: "https://oxygennotincluded.wiki.gg/wiki/Planter_Box",
        slug: "planter-box"
      },
      {
        name: "",
        url: "https://oxygennotincluded.wiki.gg/wiki/Farm_Tile",
        slug: "farm-tile"
      },
      {
        name: "",
        url: "https://oxygennotincluded.wiki.gg/wiki/Hydroponic_Farm",
        slug: "hydroponic-farm"
      },
      {
        name: "plant",
        url: "https://oxygennotincluded.wiki.gg/wiki/Plant",
        slug: "plant"
      },
      {
        name: "Mealwood Seed",
        url: "https://oxygennotincluded.wiki.gg/wiki/Mealwood_Seed",
        slug: "mealwood-seed"
      },
      {
        name: "Buried Object",
        url: "https://oxygennotincluded.wiki.gg/wiki/Buried_Object",
        slug: "buried-object"
      },
      {
        name: "Pacus",
        url: "https://oxygennotincluded.wiki.gg/wiki/Pacu",
        slug: "pacu"
      },
      {
        name: "Polluted Dirt",
        url: "https://oxygennotincluded.wiki.gg/wiki/Polluted_Dirt",
        slug: "polluted-dirt"
      },
      {
        name: "harvest errand",
        url: "https://oxygennotincluded.wiki.gg/wiki/Errand",
        slug: "errand"
      },
      {
        name: "Microbe Musher",
        url: "https://oxygennotincluded.wiki.gg/wiki/Microbe_Musher",
        slug: "microbe-musher"
      },
      {
        name: "Liceloaf",
        url: "https://oxygennotincluded.wiki.gg/wiki/Liceloaf",
        slug: "liceloaf"
      },
      {
        name: "Electric Grill",
        url: "https://oxygennotincluded.wiki.gg/wiki/Electric_Grill",
        slug: "electric-grill"
      },
      {
        name: "Pickled Meal",
        url: "https://oxygennotincluded.wiki.gg/wiki/Pickled_Meal",
        slug: "pickled-meal"
      },
      {
        name: "Auto-Sweeper",
        url: "https://oxygennotincluded.wiki.gg/wiki/Auto-Sweeper",
        slug: "auto-sweeper"
      },
      {
        name: "Pips",
        url: "https://oxygennotincluded.wiki.gg/wiki/Pip",
        slug: "pip"
      },
      {
        name: "Arbor Trees",
        url: "https://oxygennotincluded.wiki.gg/wiki/Arbor_Tree",
        slug: "arbor-tree"
      },
      {
        name: "Thimble Reeds",
        url: "https://oxygennotincluded.wiki.gg/wiki/Thimble_Reed",
        slug: "thimble-reed"
      },
      {
        name: "rotten Meal Lice",
        url: "https://oxygennotincluded.wiki.gg/wiki/Rot_Pile",
        slug: "rot-pile"
      },
      {
        name: "Frost Bun",
        url: "https://oxygennotincluded.wiki.gg/wiki/Frost_Bun",
        slug: "frost-bun"
      },
      {
        name: "",
        url: "https://oxygennotincluded.wiki.gg/wiki/Spaced_Out",
        slug: "spaced-out"
      },
      {
        name: "Buried Muckroot",
        url: "https://oxygennotincluded.wiki.gg/wiki/Buried_Muckroot",
        slug: "buried-muckroot"
      },
      {
        name: "Agriculture Guide",
        url: "https://oxygennotincluded.wiki.gg/wiki/Guide/Agriculture",
        slug: "agriculture"
      },
      {
        name: "Food Guide",
        url: "https://oxygennotincluded.wiki.gg/wiki/Guide/Food",
        slug: "food"
      },
      {
        name: "Plants",
        url: "https://oxygennotincluded.wiki.gg/wiki/Plants",
        slug: "plants"
      },
      {
        name: "",
        url: "https://oxygennotincluded.wiki.gg/wiki/Mealwood",
        slug: "mealwood"
      },
      {
        name: "",
        url: "https://oxygennotincluded.wiki.gg/wiki/Dusk_Cap",
        slug: "dusk-cap"
      },
      {
        name: "",
        url: "https://oxygennotincluded.wiki.gg/wiki/Bristle_Blossom",
        slug: "bristle-blossom"
      },
      {
        name: "",
        url: "https://oxygennotincluded.wiki.gg/wiki/Sleet_Wheat",
        slug: "sleet-wheat"
      },
      {
        name: "",
        url: "https://oxygennotincluded.wiki.gg/wiki/Waterweed",
        slug: "waterweed"
      },
      {
        name: "",
        url: "https://oxygennotincluded.wiki.gg/wiki/Pincha_Pepper",
        slug: "pincha-pepper"
      },
      {
        name: "",
        url: "https://oxygennotincluded.wiki.gg/wiki/Hexalent",
        slug: "hexalent"
      },
      {
        name: "",
        url: "https://oxygennotincluded.wiki.gg/wiki/Balm_Lily",
        slug: "balm-lily"
      },
      {
        name: "",
        url: "https://oxygennotincluded.wiki.gg/wiki/Dasha_Saltvine",
        slug: "dasha-saltvine"
      },
      {
        name: "",
        url: "https://oxygennotincluded.wiki.gg/wiki/Gas_Grass",
        slug: "gas-grass"
      },
      {
        name: "",
        url: "https://oxygennotincluded.wiki.gg/wiki/Oxyfern",
        slug: "oxyfern"
      },
      {
        name: "",
        url: "https://oxygennotincluded.wiki.gg/wiki/Wheezewort",
        slug: "wheezewort"
      },
      {
        name: "",
        url: "https://oxygennotincluded.wiki.gg/wiki/Bluff_Briar",
        slug: "bluff-briar"
      },
      {
        name: "",
        url: "https://oxygennotincluded.wiki.gg/wiki/Buddy_Bud",
        slug: "buddy-bud"
      },
      {
        name: "",
        url: "https://oxygennotincluded.wiki.gg/wiki/Mirth_Leaf",
        slug: "mirth-leaf"
      },
      {
        name: "",
        url: "https://oxygennotincluded.wiki.gg/wiki/Jumping_Joya",
        slug: "jumping-joya"
      },
      {
        name: "",
        url: "https://oxygennotincluded.wiki.gg/wiki/Sporechid",
        slug: "sporechid"
      },
      {
        name: "",
        url: "https://oxygennotincluded.wiki.gg/wiki/Spaced_Out!",
        slug: "spaced-out"
      },
      {
        name: "",
        url: "https://oxygennotincluded.wiki.gg/wiki/Bog_Bucket",
        slug: "bog-bucket"
      },
      {
        name: "",
        url: "https://oxygennotincluded.wiki.gg/wiki/Grubfruit_Plant",
        slug: "grubfruit-plant"
      },
      {
        name: "",
        url: "https://oxygennotincluded.wiki.gg/wiki/Spindly_Grubfruit_Plant",
        slug: "spindly-grubfruit-plant"
      },
      {
        name: "",
        url: "https://oxygennotincluded.wiki.gg/wiki/Saturn_Critter_Trap",
        slug: "saturn-critter-trap"
      },
      {
        name: "",
        url: "https://oxygennotincluded.wiki.gg/wiki/Swamp_Chard",
        slug: "swamp-chard"
      },
      {
        name: "",
        url: "https://oxygennotincluded.wiki.gg/wiki/Bliss_Burst",
        slug: "bliss-burst"
      },
      {
        name: "",
        url: "https://oxygennotincluded.wiki.gg/wiki/Mellow_Mallow",
        slug: "mellow-mallow"
      },
      {
        name: "",
        url: "https://oxygennotincluded.wiki.gg/wiki/Tranquil_Toes",
        slug: "tranquil-toes"
      },
      {
        name: "",
        url: "https://oxygennotincluded.wiki.gg/wiki/The_Frosty_Planet_Pack",
        slug: "the-frosty-planet-pack"
      },
      {
        name: "",
        url: "https://oxygennotincluded.wiki.gg/wiki/Pikeapple_Bush",
        slug: "pikeapple-bush"
      },
      {
        name: "",
        url: "https://oxygennotincluded.wiki.gg/wiki/Plume_Squash_Plant",
        slug: "plume-squash-plant"
      },
      {
        name: "",
        url: "https://oxygennotincluded.wiki.gg/wiki/Sherberry_Plant",
        slug: "sherberry-plant"
      },
      {
        name: "",
        url: "https://oxygennotincluded.wiki.gg/wiki/Bonbon_Tree",
        slug: "bonbon-tree"
      },
      {
        name: "",
        url: "https://oxygennotincluded.wiki.gg/wiki/Alveo_Vera",
        slug: "alveo-vera"
      },
      {
        name: "",
        url: "https://oxygennotincluded.wiki.gg/wiki/Idylla_Flower",
        slug: "idylla-flower"
      },
      {
        name: "",
        url: "https://oxygennotincluded.wiki.gg/wiki/The_Prehistoric_Planet_Pack",
        slug: "the-prehistoric-planet-pack"
      },
      {
        name: "",
        url: "https://oxygennotincluded.wiki.gg/wiki/Sweatcorn_Stalk",
        slug: "sweatcorn-stalk"
      },
      {
        name: "",
        url: "https://oxygennotincluded.wiki.gg/wiki/Megafrond",
        slug: "megafrond"
      },
      {
        name: "",
        url: "https://oxygennotincluded.wiki.gg/wiki/Ovagro_Node",
        slug: "ovagro-node"
      },
      {
        name: "",
        url: "https://oxygennotincluded.wiki.gg/wiki/Mimika_Bud",
        slug: "mimika-bud"
      },
      {
        name: "",
        url: "https://oxygennotincluded.wiki.gg/wiki/Snactus",
        slug: "snactus"
      },
      {
        name: "",
        url: "https://oxygennotincluded.wiki.gg/wiki/Lura_Plant",
        slug: "lura-plant"
      },
      {
        name: "",
        url: "https://oxygennotincluded.wiki.gg/wiki/Seakomb",
        slug: "seakomb"
      },
      {
        name: "",
        url: "https://oxygennotincluded.wiki.gg/wiki/Dew_Dripper",
        slug: "dew-dripper"
      },
      {
        name: "",
        url: "https://oxygennotincluded.wiki.gg/wiki/Ring_Rosebush",
        slug: "ring-rosebush"
      }
    ],
    oniDb: {}
  },
  operations: []
});

export default mealwood;
