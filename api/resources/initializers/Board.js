const CityOfArkham = require('./MapPrototype').CityOfArkham;

const initializeBoard = () => {
  console.log("Here's the map I'm trying to use:", CityOfArkham);
  return {
    // map: {
    //   FrenchHillStreets: {
    //     name: 'French Hill Streets',
    //     description: "French Hill is home to Arkham's oldest and darkest dynasties.",
    //     links: ['TheWitchHouse', 'SilverTwilightLodge', 'SouthsideStreets', 'MiskatonicUniversityStreets', 'RivertownStreets'],
    //     investigators: [],
    //   },
    //   SouthsideStreets: {
    //     name: 'Southside Streets',
    //     description: 'The brooding Gothic architecture of historic Arkham looms in the shadows.',
    //     links: ['HistoricalSociety', 'SouthChurch', 'MasBoardingHouse', 'FrenchHillStreets', 'UptownStreets'],
    //     investigators: [],
    //   },
    //   UptownStreets: {
    //     name: 'Uptown Streets',
    //     description: 'St Mary\'s looks menacing against the backdrop of the dark woods.',
    //     links: ['Woods', 'StMarysHospital', 'YeOldeMagickShoppe', 'SouthsideStreets', 'MiskatonicUniversityStreets'],
    //     investigators: [],
    //   },
    //   MiskatonicUniversityStreets: {
    //     name: 'Miskatonic Campus',
    //     description: 'A quiet institution, dedicated completely to the pursuit of knowledge.',
    //     links: ['ScienceBuilding', 'Administration', 'Library', 'UptownStreets', 'FrenchHillStreets', 'MerchantDistrictStreets'],
    //     investigators: [],
    //   },
    //   MerchantDistrictStreets: {
    //     name: 'Merchant District Streets',
    //     description: 'Other than a group of longshoremen unloading crates on the dock, the commercial district is oddly quiet.',
    //     links: ['RiverDocks', 'UnvisitedIsle', 'TheUnnameable', 'MiskatonicUniversityStreets', 'RivertownStreets', 'DowntownStreets', 'NorthsideStreets'],
    //     investigators: [],
    //   },
    //   NorthsideStreets: {
    //     name: 'Northside Streets',
    //     description: 'A well-maintained and vibrant area. The printing press at the Arkham Investigator runs continuously,',
    //     links: ['CuriositieShoppe', 'TrainStation', 'Newspaper', 'MerchantDistrictStreets', 'DowntownStreets'],
    //     investigators: [],
    //   },
    //   DowntownStreets: {
    //     name: 'Downtown Streets',
    //     description: 'The civic heart of Arkham, home of Arkham Bank and City Hall - as well as the famous Arkham Asylum.',
    //     links: ['BankOfArkham', 'ArkhamAsylum', 'IndependenceSquare', 'NorthsideStreets', 'MerchantDistrictStreets', 'EasttownStreets'],
    //     investigators: [],
    //   },
    //   EasttownStreets: {
    //     name: 'Easttown Streets',
    //     description: 'This area has cleaned up some since the new police station was built here - some.',
    //     links: ['HibbsRoadhouse, VelmasDiner', 'PoliceStation', 'DowntownStreets', 'RivertownStreets'],
    //     investigators: [],
    //   },
    //   RivertownStreets: {
    //     name: 'Rivertown Streets',
    //     description: 'Few venture farther on River Street than Arkham General Suppy. That\'s not to say there\'s nothing out there,',
    //     links: ['GeneralStore', 'BlackCave', 'Graveyard', 'EastTownStreets', 'MerchantDistrictStreets', 'FrenchHillStreets'],
    //     investigators: [],
    //   },
    //   TheWitchHouse: {
    //     name: 'The Witch House',
    //     description: "A creaking wooden relic from a bygone era of grandeur.",
    //     links: ['FrenchHillStreets'],
    //     investigators: [],
    //   },
    //   SilverTwilightLodge: {
    //     name: 'Silver Twilight Lodge',
    //     description: "A dark lodge, filled with darker secrets.",
    //     links: ['FrenchHillStreets', 'SilverTwilightSanctum'],
    //     ability: {
    //       description: "If you are a member of the Lodge, or can fake it, you may enter Silver Twilight Sanctum.",
    //     },
    //     investigators: [],
    //   },
    //   SilverTwilightSanctum: {
    //     name: 'Silver Twilight Sanctum',
    //     description: "Shining white marble - scrubbed clean nightly by terrified help.",
    //     links: ['SilverTwilightLodge'],
    //     ability: {
    //       description: 'Give up 10 Trophy, 1 max Stamina, 1 max Sanity, and become barred from Silver Twilight Lodge: SEAL a gate.',
    //     },
    //     investigators: [],
    //   },
    //   Woods: {
    //     name: 'Woods',
    //     description: "The dark woods west of Arkham.",
    //     links: ['UptownStreets'],
    //     investigators: [],
    //   },
    //   YeOldeMagickShoppe: {
    //     name: 'Ye Olde Magick Shoppe',
    //     description: "Phials of strange emulsions, dusty books bound in pale leather, and purchases tbat cost more than cash.",
    //     links: ['UptownStreets'],
    //     ability: {
    //       description: "Shop at this location: it often stocks magical tools and artifacts.",
    //     },
    //     investigators: [],
    //   },
    //   StMarysHospital: {
    //     name: 'St. Mary\'s Hospital',
    //     description: "St. Mary's is busier than ever before - it must be, right?",
    //     links: ['UptownStreets'],
    //     ability: {
    //       description: "Heal Stamina.",
    //     },
    //     investigators: [],
    //   },
    //   Library: {
    //     name: 'Library',
    //     description: "The Miskatonic U. research library.",
    //     links: ['MiskatonicUniversityStreets'],
    //     investigators: [],
    //   },
    //   Administration: {
    //     name: 'Administration',
    //     description: "The worst part of Miskatonic life by far, even accounting for the monsters.",
    //     links: ['MiskatonicUniversityStreets'],
    //     ability: {
    //       description: "Take a Class for $8: learn a new Skill.",
    //     },
    //     investigators: [],
    //   },
    //   ScienceBuilding: {
    //     name: 'Science Building',
    //     description: "lorem ipsum...",
    //     links: ['MiskatonicUniversityStreets'],
    //     ability: {
    //       description: "Study the Evidence for at least 5 Trophy: gain some Clues.",
    //     },
    //     investigators: [],
    //   },
    //   Unnameable: {
    //     name: 'Unnameable',
    //     description: "lorem ipsum...",
    //     links: ['MerchantDistrictStreets'],
    //     investigators: [],
    //   },
    //   RiverDocks: {
    //     name: 'River Docks',
    //     description: "lorem ipsum...",
    //     links: ['MerchantDistrictStreets'],
    //     ability: {
    //       description: "Find a Buyer for at least 2 Trophy: gain some Money.",
    //     },
    //     investigators: [],
    //   },
    //   UnvisitedIsle: {
    //     name: 'Unvisited Isle',
    //     description: "lorem ipsum...",
    //     links: ['MerchantDistrictStreets'],
    //     investigators: [],
    //   },
    //   Newspaper: {
    //     name: 'Newspaper',
    //     description: "lorem ipsum...",
    //     links: ['NorthsideStreets'],
    //     investigators: [],
    //   },
    //   TrainStation: {
    //     name: 'Train Station',
    //     description: "lorem ipsum...",
    //     links: ['NorthsideStreets'],
    //     investigators: [],
    //   },
    //   CuriositieShoppe: {
    //     name: 'Curiositie Shoppe',
    //     description: "lorem ipsum...",
    //     links: ['NorthsideStreets'],
    //     ability: {
    //       description: "Shop for artifacts and tomes!",
    //     },
    //     investigators: [],
    //   },
    //   BankOfArkham: {
    //     name: 'Bank of Arkham',
    //     description: "lorem ipsum...",
    //     links: ['DowntownStreets'],
    //     ability: {
    //       description: "Take a Bank Loan: gain $10",
    //     },
    //     investigators: [],
    //   },
    //   IndependenceSquare: {
    //     name: 'Independence Square',
    //     description: "lorem ipsum...",
    //     links: ['DowntownStreets'],
    //     investigators: [],
    //   },
    //   ArkhamAsylum: {
    //     name: 'Arkham Asylum',
    //     description: "lorem ipsum...",
    //     links: ['DowntownStreets'],
    //     ability: {
    //       description: "Gain Sanity",
    //     },
    //     investigators: [],
    //   },
    //   HibbsRoadhouse: {
    //     name: 'Hibb\'s Roadhouse',
    //     description: "lorem ipsum...",
    //     links: ['EasttownStreets'],
    //     investigators: [],
    //   },
    //   VelmasDiner: {
    //     name: 'Velma\'s Diner',
    //     description: "lorem ipsum...",
    //     links: ['EasttownStreets'],
    //     investigators: [],
    //   },
    //   PoliceStation: {
    //     name: 'Police Station',
    //     description: "lorem ipsum...",
    //     links: ['EasttownStreets'],
    //     ability: {
    //       description: "Spend 10 Trophy: become Deputy of Arkham",
    //     },
    //     investigators: [],
    //   },
    //   BlackCave: {
    //     name: 'Black Cave',
    //     description: "lorem ipsum...",
    //     links: ['RivertownStreets'],
    //     investigators: [],
    //   },
    //   Graveyard: {
    //     name: 'Graveyard',
    //     description: "lorem ipsum...",
    //     links: ['RivertownStreets'],
    //     investigators: [],
    //   },
    //   GeneralStore: {
    //     name: 'General Store',
    //     description: "lorem ipsum...",
    //     links: ['RivertownStreets'],
    //     ability: {
    //       description: "Shop at the General Store",
    //     },
    //     investigators: [],
    //   },
    // },
    map: CityOfArkham,
    terror: 0,
    otherWorlds: {
      Rlyeh1: {
        description: "In lost, sunken Rlyeh, dread Cthulhu lies dreaming...",
        links: ['Rlyeh2'],
        investigators: [],
      },
      Rlyeh2: {
        description: "The deep rises, and the terrible warped degrees of the city's angles refract a shuddering seafoam fractal nightmare.",
        links: [],
      },
      Carcosa1: {
        description: "In the city of the mad, the Tattered King reigns supreme.",
        links: ['Carcosa2'],
        investigators: [],
      },
      Carcosa2: {
        description: "Clad in sickly xanthosis, rotted, sonorously reciting unbearable verse.",
        links: [],
        investigators: [],
      },
      Celeano1: {
        description: "On a cold, dead planet, a runaway found sanctuary.",
        links: ['Celeano2'],
        investigators: [],
      },
      Celeano2: {
        description: "He built a library of everything he learned, and eventually, he found a way home.",
        links: [],
        investigators: [],
      },
    }
  }
}

module.exports = {
  initializeBoard
};