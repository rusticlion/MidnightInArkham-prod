class Path {
  constructor(destination, description) {
    this.destination = destination;
    this.description = description;
  }
}

class Location {
  constructor(name, description, paths = []) {
    this.name = name;
    this.description = description;
    this.paths = paths;
    this.investigators = [];
    this.monsters = [];
    this.wildMonsters = [];
  }

  addPath(destination, description) {
    const path = new Path(destination, description);
    this.paths.push(path);
    return this.paths.length-1;
  }

  addWildMonsterList(list) {
    for (let i = 0; i < list.length; i++) {
      this.wildMonsters.push(list[i].name);
    }
  }

}

class Map {
  constructor(locations = []) {
    this.locations = locations;
  }

  addLocation(name, description) {
    const location = new Location(name, description);
    this.locations.push(location);
    return this.locations.length-1;
  }
};

const CityOfArkham = new Map();
const WestStreet = CityOfArkham.addLocation("West Street", "There are no street lamps out here on the outskirts, but the landscape is preternaturally clear in the full moon’s lucent shine.");
const HangmansHill = CityOfArkham.addLocation("Hangman's Hill", "This particular corner of Arkham remains quiet for a reason.");
const HangmansBrook = CityOfArkham.addLocation("Hangman's Brook", "The water seems louder than it has any right to be...");
const DarkWoods = CityOfArkham.addLocation("Dark Woods", "The moon must have disappeared behind a cloud…it’s hard to find your way in the dark.");
const WoodedGraveyard = CityOfArkham.addLocation("Wooded Graveyard", "There is a strange electricity in the air here. For a graveyard, it feels very…alive.");
const StMarysHospital = CityOfArkham.addLocation("St. Mary's Hospital", "St. Mary’s looks eerie in the night, but you may be glad it’s there.");
const WestChurch = CityOfArkham.addLocation("West Church", "The Blood of Christ the Redeemer Roman Catholic Church has stood in Arkham for almost a hundred and fifty years. Teenagers whisper about hidden chambers beneath the vestry…");
const ChurchStreet = CityOfArkham.addLocation("Church Street", "Church Street runs right through the middle of town, providing easy access to the Miskatonic campus. The conflict between the congregations of the Blood of Christ Catholic Church (the “West Church”) and the First Baptist Church of Arkham (the “Baptist Church”) is a contentious aspect of Arkham civic life.");
const RiverStreet = CityOfArkham.addLocation("River Street", "The waters of the Miskatonic shimmer black like oil in the moonlight.");
const OvergrownIsland = CityOfArkham.addLocation("Overgrown Island", "No one ever seems to visit this island. Perhaps there’s a reason…");
const ByzantinePier = CityOfArkham.addLocation("Byzantine Pier", "Roustabouts and longshoremen dwell on the docks throughout the night, drinking, smoking, and gambling when they aren’t loading cargo.");
const WarehouseAlleys = CityOfArkham.addLocation("Warehouse Alleys", "There are legitimate reasons to be in these alleys at this hour of the night - but not many.");
const ResidentialStreets = CityOfArkham.addLocation("Residential Streets", "These winding streets are mostly lined with small houses and apartments full of Miskatonic U students, but a few of Arkham’s ancient colonial estates remain, mostly in disrepair, like shipwrecks in a shallow cove.");
const PickmansHouse = CityOfArkham.addLocation("Pickman's House", "You hear something from inside a nondescript duplex - a ghoulish screech…");
const TheWitchHouse = CityOfArkham.addLocation("The Witch House", "Rumors of haunting have swirled around this condemned manse for decades. There must be something to it…");
const CaligarisCuriosities = CityOfArkham.addLocation("Caligari's Curiosities", "Tucked between two crumbling condominiums, Caligari’s is easy to miss. This is quite by design.");
const MiskatonicUniversityCampus = CityOfArkham.addLocation("Miskatonic University Campus", "A quiet institution, dedicated completely to the pursuit of knowledge.");
const LectureHall = CityOfArkham.addLocation("Lecture Hall", "It’s always worth taking time out to learn something. It just might come in handy…");
const ResearchLibrary = CityOfArkham.addLocation("Research Library", "Knowledge may be the most powerful weapon we can wield against the horrors we face tonight.");
const CollegeOfPhysicalSciences = CityOfArkham.addLocation("College of Physical Sciences", "The staff here just might be able to help you figure out what’s going on here…");
const MainStreet = CityOfArkham.addLocation("Main Street", "Main Street is quiet this late at night, and you cast a long shadow in the incandescent glow of the street lamps.");
const ArkhamInvestigator = CityOfArkham.addLocation("Arkham Investigator", "The printing press of the ‘Investigator’ runs day and night.");
const ArkhamGeneralSupply = CityOfArkham.addLocation("Arkham General Supply", "If we are to stand any chance at all, we must prepare ourselves.");
const IndependenceSquare = CityOfArkham.addLocation("Independence Square", "The large fountain in front of city halls is a gathering place for families and lovers on pleasant days. The square is quiet tonight.");
const VelmasDiner = CityOfArkham.addLocation("Velma's Diner", "A red neon sign in the window proclaims “24 HOURS - COFFEE - HOTCAKES”.");
const BaptistChurch = CityOfArkham.addLocation("Baptist Church", "The First Baptist Church was only founded seven years ago, but it has quickly garnered a fairly large and passionate congregation.  Some accuse Pastor Rhine of manipulating the minds of his flock…");
const LichStreet = CityOfArkham.addLocation("Lich Street", "The area between Church Street and Oldtown has a reputation for seediness that has only somewhat improved since the opening of the Police Station there.");
const ArkhamAsylum = CityOfArkham.addLocation("Arkham Asylum", "Dark histories haunt these halls.");
const PoliceStation = CityOfArkham.addLocation("Police Station", "Deputy Dingby seems worryingly absentminded as he shuffles papers at his desk, revolver sitting loaded and apparently being used as a paperweight.");
const JailCell = CityOfArkham.addLocation("Jail Cell", "The iron bars seems sturdy. Moonlight streams in through a small, barred window in the wall.");
const MasBoardingHouse = CityOfArkham.addLocation("Ma's Boarding House", "Visitors to Arkham of any importance always seem to end up in this surprisingly warm and clean den.");
const Oldtown = CityOfArkham.addLocation("Oldtown", "Oldtown has a bit of a nasty reputation, but it’s also home to some of Arkham’s most notable landmarks.");
const ArtisticSupply = CityOfArkham.addLocation("Neptune and Darke's Artistic Supply", "There are many types of art, and many types of supplies.");
const HistoricalSociety = CityOfArkham.addLocation("Historical Society", "The Fellows of the Historical Society just might have the answers you need.");
const HibbsRoadhouse = CityOfArkham.addLocation("Hibbs' Roadhouse", "This rowdy bar is a great place to drink for cheap and fight for free.");
const FrenchHill = CityOfArkham.addLocation("French Hill", "This historic area is full of great sycamore trees and large estates.");
const MarbleGardens = CityOfArkham.addLocation("Marble Gardens", "You spy something fantastical through a gap in a hedge wall…");
const TheUnnameable = CityOfArkham.addLocation("The Unnameable", "Children in Arkham unanimously believe that the reclusive woman who inhabits this manor is a witch.");
const SilverTwilightLodge = CityOfArkham.addLocation("Silver Twilight Lodge", "This dark lodge hides darker secrets.");
const SilverTwilightSanctum = CityOfArkham.addLocation("Silver Twilight Sanctum", "White marble, scrubbed clean nightly by terrified help.");
const CemeteryRoad = CityOfArkham.addLocation("Cemetery Road", "This winding dirt road through the hills south of Arkham fills you with an odd feeling of deja vu.");
const ChristchurchCemetery = CityOfArkham.addLocation("Christchurch Cemetery", "The large cemetery is dotted with weathered mausoleums.");
const BlackCave = CityOfArkham.addLocation("Black Cave", "First-time visitors to Arkham are often enthused at the prospect of visiting the locally famous “Black Cave”. Return visitors usually are not.");

const WoodedGraveyardToDarkWoods = CityOfArkham.locations[WoodedGraveyard].addPath(DarkWoods, "Go to Dark Woods");

const DarkWoodsToWoodedGraveyard = CityOfArkham.locations[DarkWoods].addPath(WoodedGraveyard, "Go to Wooded Graveyard");
const DarkWoodsToHangmansBrook = CityOfArkham.locations[DarkWoods].addPath(HangmansBrook, "Go to Hangman's Brook");
const DarkWoodsToHangmansHill = CityOfArkham.locations[DarkWoods].addPath(HangmansHill, "Go to Hangman's Hill");

const HangmansBrookToDarkWood = CityOfArkham.locations[HangmansBrook].addPath(DarkWoods, "Go to Dark Woods");
const HangmansBrookToHangmansHill = CityOfArkham.locations[HangmansBrook].addPath(HangmansHill, "Go to Hangman's Hill");

const HangmansHillToDarkWoods = CityOfArkham.locations[HangmansHill].addPath(DarkWoods, "Go to Dark Woods");
const HangmansHillToHangmansBrook = CityOfArkham.locations[HangmansHill].addPath(HangmansBrook, "Go to Hangman's Brook");
const HangmansHillToWestStreet = CityOfArkham.locations[HangmansHill].addPath(WestStreet, "Go to West Street");

const WestStreetToStMarysHospital = CityOfArkham.locations[WestStreet].addPath(StMarysHospital, "Go to St. Mary's Hospital");
const WestStreetToResidentialStreets = CityOfArkham.locations[WestStreet].addPath(ResidentialStreets, "Go to Residential Streets");
const WestStreetToMiskatonicUniversityCampus = CityOfArkham.locations[WestStreet].addPath(MiskatonicUniversityCampus, "Go to Miskatonic University Campus");
const WestStreetToChurchStreet = CityOfArkham.locations[WestStreet].addPath(ChurchStreet, "Go to Church Street");
const WestStreetToWestChurch = CityOfArkham.locations[WestStreet].addPath(WestChurch, "Go to West Church");
const WestStreetToRiverStreet = CityOfArkham.locations[WestStreet].addPath(RiverStreet, "Go to River Street");
const WestStreetToHangmansHill = CityOfArkham.locations[WestStreet].addPath(HangmansHill, "Go to Hangman's Hill");

const StMarysHospitalToWestStreet = CityOfArkham.locations[StMarysHospital].addPath(WestStreet, "Go to West Street");

const WestChurchToWestStreet = CityOfArkham.locations[WestChurch].addPath(WestStreet, "Go to West Street");
const WestChurchToChurchStreet = CityOfArkham.locations[WestChurch].addPath(ChurchStreet, "Go to Church Street");

const ResidentialStreetsToPickmansHouse = CityOfArkham.locations[ResidentialStreets].addPath(PickmansHouse, "Go to Pickman's House");
const ResidentialStreetsToTheWitchHouse = CityOfArkham.locations[ResidentialStreets].addPath(TheWitchHouse, "Go to The Witch House");
const ResidentialStreetsToCaligarisCuriosities = CityOfArkham.locations[ResidentialStreets].addPath(CaligarisCuriosities, "Go to Caligari's Curiosities");
const ResidentialStreetsToFrenchHill = CityOfArkham.locations[ResidentialStreets].addPath(FrenchHill, "Go to French Hill");
const ResidentialStreetsToMiskatonicUniversityCampus = CityOfArkham.locations[ResidentialStreets].addPath(MiskatonicUniversityCampus, "Go to Miskatonic University Campus");
const ResidentialStreetsToWestStreet = CityOfArkham.locations[ResidentialStreets].addPath(WestStreet, "Go to West Street");

const PickmansHouseToResidentialStreets = CityOfArkham.locations[PickmansHouse].addPath(ResidentialStreets, "Go to Residential Streets");

const TheWitchHouseToResidentialStreets = CityOfArkham.locations[TheWitchHouse].addPath(ResidentialStreets, "Go to Residential Streets");

const CaligarisCuriositiesToResidentialStreets = CityOfArkham.locations[CaligarisCuriosities].addPath(ResidentialStreets, "Go to Residential Streets");

const MiskatonicUniversityCampusToWestStreet = CityOfArkham.locations[MiskatonicUniversityCampus].addPath(WestStreet, "Go to West Street");
const MiskatonicUniversityCampusToLectureHall = CityOfArkham.locations[MiskatonicUniversityCampus].addPath(LectureHall, "Go to Lecture Hall");
const MiskatonicUniversityCampusToResearchLibrary = CityOfArkham.locations[MiskatonicUniversityCampus].addPath(ResearchLibrary, "Go to Research Library");
const MiskatonicUniversityCampusToCollegeOfPhysicalSciences = CityOfArkham.locations[MiskatonicUniversityCampus].addPath(CollegeOfPhysicalSciences, "Go to College of Physical Sciences");
const MiskatonicUniversityCampusToChurchStreet = CityOfArkham.locations[MiskatonicUniversityCampus].addPath(ChurchStreet, "Go to Church Street");
const MiskatonicUniversityCampusToResidentialStreets = CityOfArkham.locations[MiskatonicUniversityCampus].addPath(ResidentialStreets, "Go to Residential Streets");

const CollegeOfPhysicalSciencesToMiskatonicUniversityCampus = CityOfArkham.locations[CollegeOfPhysicalSciences].addPath(MiskatonicUniversityCampus, "Go to Miskatonic University Campus");

const ResearchLibraryToMiskatonicUniversityCampus = CityOfArkham.locations[ResearchLibrary].addPath(MiskatonicUniversityCampus, "Go to Miskatonic University Campus");

const LectureHallToMiskatonicUniversityCampus = CityOfArkham.locations[LectureHall].addPath(MiskatonicUniversityCampus, "Go to Miskatonic University Campus");

const ChurchStreetToWestChurch = CityOfArkham.locations[ChurchStreet].addPath(WestChurch, "Go to West Church");
const ChurchStreetToWestStreet = CityOfArkham.locations[ChurchStreet].addPath(WestStreet, "Go to West Street");
const ChurchStreetToMiskatonicUniversityCampus = CityOfArkham.locations[ChurchStreet].addPath(MiskatonicUniversityCampus, "Go to Miskatonic University Campus");
const ChurchStreetToBaptistChurch = CityOfArkham.locations[ChurchStreet].addPath(BaptistChurch, "Go to Baptist Church");
const ChurchStreetToLichStreet = CityOfArkham.locations[ChurchStreet].addPath(LichStreet, "Go to Lich Street");
const ChurchStreetToMainStreet = CityOfArkham.locations[ChurchStreet].addPath(MainStreet, "Go to Main Street");

const BaptistChurchToChurchStreet = CityOfArkham.locations[BaptistChurch].addPath(ChurchStreet, "Go to Church Street");
const BaptistChurchToLichStreet = CityOfArkham.locations[BaptistChurch].addPath(LichStreet, "Go to Lich Street");

const RiverStreetToWestStreet = CityOfArkham.locations[RiverStreet].addPath(WestStreet, "Go to West Street");
const RiverStreetToMainStreet = CityOfArkham.locations[RiverStreet].addPath(MainStreet, "Go to Main Street");
const RiverStreetToWarehouseAlleys = CityOfArkham.locations[RiverStreet].addPath(WarehouseAlleys, "Go to Warehouse Alleys");
const RiverStreetToByzantinePier = CityOfArkham.locations[RiverStreet].addPath(ByzantinePier, "Go to Byzantine Pier");
const RiverStreetToOvergrownIsland = CityOfArkham.locations[RiverStreet].addPath(OvergrownIsland, "Go to Overgrown Island");

const ByzantinePierToRiverStreet = CityOfArkham.locations[ByzantinePier].addPath(RiverStreet, "Go to River Street");

const OvergrownIslandToRiverStreet = CityOfArkham.locations[OvergrownIsland].addPath(RiverStreet, "Go to River Street");

const WarehouseAlleysToRiverStreet = CityOfArkham.locations[WarehouseAlleys].addPath(RiverStreet, "Go to River Street");
const WarehouseAlleysToMainStreet = CityOfArkham.locations[WarehouseAlleys].addPath(MainStreet, "Go to Main Street");

const MainStreetToRiverStreet = CityOfArkham.locations[MainStreet].addPath(RiverStreet, "Go to River Street");
const MainStreetToChurchStreet = CityOfArkham.locations[MainStreet].addPath(ChurchStreet, "Go to Church Street");
const MainStreetToIndependenceSquare = CityOfArkham.locations[MainStreet].addPath(IndependenceSquare, "Go to Independence Square");
const MainStreetToArkhamGeneralSupply = CityOfArkham.locations[MainStreet].addPath(ArkhamGeneralSupply, "Go to Arkham General Supply");
const MainStreetToArkhamInvestigator = CityOfArkham.locations[MainStreet].addPath(ArkhamInvestigator, "Go to Arkham Investigator");
const MainStreetToWarehouseAlleys = CityOfArkham.locations[MainStreet].addPath(WarehouseAlleys, "Go to Warehouse Alleys");

const ArkhamInvestigatorToMainStreet = CityOfArkham.locations[ArkhamInvestigator].addPath(MainStreet, "Go to Main Street");

const ArkhamGeneralSupplyToMainStreet = CityOfArkham.locations[ArkhamGeneralSupply].addPath(MainStreet, "Go to Main Street");

const IndependenceSquareToMainStreet = CityOfArkham.locations[IndependenceSquare].addPath(MainStreet, "Go to Main Street");
const IndependenceSquareToVelmasDiner = CityOfArkham.locations[IndependenceSquare].addPath(VelmasDiner, "Go to Velma's Diner");
const IndependenceSquareToLichStreet = CityOfArkham.locations[IndependenceSquare].addPath(LichStreet, "Go to Lich Street");

const VelmasDinerToIndependenceSquare = CityOfArkham.locations[VelmasDiner].addPath(IndependenceSquare, "Go to Independence Square");

const LichStreetToIndependenceSquare = CityOfArkham.locations[LichStreet].addPath(IndependenceSquare, "Go to Independence Square");
const LichStreetToArkhamAsylum = CityOfArkham.locations[LichStreet].addPath(ArkhamAsylum, "Go to Arkham Asylum");
const LichStreetToPoliceStation = CityOfArkham.locations[LichStreet].addPath(PoliceStation, "Go to Police Station");
const LichStreetToMasBoardingHouse = CityOfArkham.locations[LichStreet].addPath(MasBoardingHouse, "Go to Ma's Boarding House");
const LichStreetToOldtown = CityOfArkham.locations[LichStreet].addPath(Oldtown, "Go to Oldtown");
const LichStreetToFrenchHill = CityOfArkham.locations[LichStreet].addPath(FrenchHill, "Go to French Hill");
const LichStreetToBaptistChurch = CityOfArkham.locations[LichStreet].addPath(BaptistChurch, "Go to Baptist Church");
const LichStreetToChurchStreet = CityOfArkham.locations[LichStreet].addPath(ChurchStreet, "Go to Church Street");

const ArkhamAsylumToLichStreet = CityOfArkham.locations[ArkhamAsylum].addPath(LichStreet, "Go to Lich Street");

const PoliceStationToLichStreet = CityOfArkham.locations[PoliceStation].addPath(LichStreet, "Go to Lich Street");
const PoliceStationToJailCell = CityOfArkham.locations[PoliceStation].addPath(JailCell, "Go to Jail Cell");

const JailCellToPoliceStation = CityOfArkham.locations[JailCell].addPath(PoliceStation, "Go to Police Station");

const MasBoardingHouseToLichStreet = CityOfArkham.locations[MasBoardingHouse].addPath(LichStreet, "Go to Lich Street");
const MasBoardingHouseToOldtown = CityOfArkham.locations[MasBoardingHouse].addPath(Oldtown, "Go to Oldtown");

const OldtownToLichStreet = CityOfArkham.locations[Oldtown].addPath(LichStreet, "Go to Lich Street");
const OldtownToMasBoardingHouse = CityOfArkham.locations[Oldtown].addPath(MasBoardingHouse, "Go to Ma's Boarding House");
const OldtownToArtisticSupply = CityOfArkham.locations[Oldtown].addPath(ArtisticSupply, "Go to Neptune and Darke's Artistic Supply");
const OldtownToHistoricalSociety = CityOfArkham.locations[Oldtown].addPath(HistoricalSociety, "Go to Historical Society");
const OldtownToHibbsRoadhouse = CityOfArkham.locations[Oldtown].addPath(HibbsRoadhouse, "Go to Hibbs' Roadhouse");
const OldtownToFrenchHill = CityOfArkham.locations[Oldtown].addPath(FrenchHill, "Go to French Hill");

const ArtisticSupplyToOldtown = CityOfArkham.locations[ArtisticSupply].addPath(Oldtown, "Go to Oldtown");

const HistoricalSocietyToOldtown = CityOfArkham.locations[HistoricalSociety].addPath(Oldtown, "Go to Oldtown");

const HibbsRoadhouseToOldtown = CityOfArkham.locations[HibbsRoadhouse].addPath(Oldtown, "Go to Oldtown");

const FrenchHillToTheUnnameable = CityOfArkham.locations[FrenchHill].addPath(TheUnnameable, "Go to The Unnameable");
const FrenchHillToLichStreet = CityOfArkham.locations[FrenchHill].addPath(LichStreet, "Go to Lich Street");
const FrenchHillToOldtown = CityOfArkham.locations[FrenchHill].addPath(Oldtown, "Go to Oldtown");
const FrenchHillToCemeteryRoad = CityOfArkham.locations[FrenchHill].addPath(CemeteryRoad, "Go to Cemetery Road");
const FrenchHillToSilverTwilightLodge = CityOfArkham.locations[FrenchHill].addPath(SilverTwilightLodge, "Go to Silver Twilight Lodge");
const FrenchHillToMarbleGardens = CityOfArkham.locations[FrenchHill].addPath(MarbleGardens, "Go to Marble Gardens");
const FrenchHillToResidentialStreets = CityOfArkham.locations[FrenchHill].addPath(ResidentialStreets, "Go to Residential Streets");

const TheUnnameableToFrenchHill = CityOfArkham.locations[TheUnnameable].addPath(FrenchHill, "Go to French Hill");

const MarbleGardensToFrenchHill = CityOfArkham.locations[MarbleGardens].addPath(FrenchHill, "Go to French Hill");

const CemeteryRoadToFrenchHill = CityOfArkham.locations[CemeteryRoad].addPath(FrenchHill, "Go to French Hill");
const CemeteryRoadToBlackCave = CityOfArkham.locations[CemeteryRoad].addPath(BlackCave, "Go to Black Cave");
const CemeteryRoadToChristchurchCemtery = CityOfArkham.locations[CemeteryRoad].addPath(ChristchurchCemetery, "Go to Christchurch Cemetery");

const BlackCaveToCemeteryRoad = CityOfArkham.locations[BlackCave].addPath(CemeteryRoad, "Go to Cemetery Road");

const ChristchurchCemeteryToCemeteryRoad = CityOfArkham.locations[ChristchurchCemetery].addPath(CemeteryRoad, "Go to Cemetery Road");

const SilverTwilightLodgeToFrenchHill = CityOfArkham.locations[SilverTwilightLodge].addPath(FrenchHill, "Go to French Hill");
const SilverTwilightLodgeToSilverTwilightSanctum = CityOfArkham.locations[SilverTwilightLodge].addPath(SilverTwilightSanctum, "Go to Silver Twilight Sanctum");

const SilverTwilightSanctumToSilverTwilightLodge = CityOfArkham.locations[SilverTwilightSanctum].addPath(SilverTwilightLodge, "Go to Silver Twilight Lodge");

const { allMonsters } = require('../monsterdex/allMonsters.js');

CityOfArkham.locations[WestStreet].addWildMonsterList(allMonsters);
CityOfArkham.locations[HangmansHill].addWildMonsterList(allMonsters);
CityOfArkham.locations[HangmansBrook].addWildMonsterList(allMonsters);
CityOfArkham.locations[DarkWoods].addWildMonsterList(allMonsters);
CityOfArkham.locations[WoodedGraveyard].addWildMonsterList(allMonsters);
CityOfArkham.locations[StMarysHospital].addWildMonsterList(allMonsters);
CityOfArkham.locations[WestChurch].addWildMonsterList(allMonsters);
CityOfArkham.locations[ChurchStreet].addWildMonsterList(allMonsters);
CityOfArkham.locations[RiverStreet].addWildMonsterList(allMonsters);
CityOfArkham.locations[OvergrownIsland].addWildMonsterList(allMonsters);
CityOfArkham.locations[ByzantinePier].addWildMonsterList(allMonsters);
CityOfArkham.locations[WarehouseAlleys].addWildMonsterList(allMonsters);
CityOfArkham.locations[ResidentialStreets].addWildMonsterList(allMonsters);
CityOfArkham.locations[PickmansHouse].addWildMonsterList(allMonsters);
CityOfArkham.locations[TheWitchHouse].addWildMonsterList(allMonsters);
CityOfArkham.locations[CaligarisCuriosities].addWildMonsterList(allMonsters);
CityOfArkham.locations[MiskatonicUniversityCampus].addWildMonsterList(allMonsters);
CityOfArkham.locations[LectureHall].addWildMonsterList(allMonsters);
CityOfArkham.locations[ResearchLibrary].addWildMonsterList(allMonsters);
CityOfArkham.locations[CollegeOfPhysicalSciences].addWildMonsterList(allMonsters);
CityOfArkham.locations[MainStreet].addWildMonsterList(allMonsters);
CityOfArkham.locations[ArkhamInvestigator].addWildMonsterList(allMonsters);
CityOfArkham.locations[ArkhamGeneralSupply].addWildMonsterList(allMonsters);
CityOfArkham.locations[IndependenceSquare].addWildMonsterList(allMonsters);
CityOfArkham.locations[VelmasDiner].addWildMonsterList(allMonsters);
CityOfArkham.locations[BaptistChurch].addWildMonsterList(allMonsters);
CityOfArkham.locations[LichStreet].addWildMonsterList(allMonsters);
CityOfArkham.locations[ArkhamAsylum].addWildMonsterList(allMonsters);
CityOfArkham.locations[PoliceStation].addWildMonsterList(allMonsters);
CityOfArkham.locations[JailCell].addWildMonsterList(allMonsters);
CityOfArkham.locations[MasBoardingHouse].addWildMonsterList(allMonsters);
CityOfArkham.locations[Oldtown].addWildMonsterList(allMonsters);
CityOfArkham.locations[ArtisticSupply].addWildMonsterList(allMonsters);
CityOfArkham.locations[HistoricalSociety].addWildMonsterList(allMonsters);
CityOfArkham.locations[HibbsRoadhouse].addWildMonsterList(allMonsters);
CityOfArkham.locations[FrenchHill].addWildMonsterList(allMonsters);
CityOfArkham.locations[MarbleGardens].addWildMonsterList(allMonsters);
CityOfArkham.locations[TheUnnameable].addWildMonsterList(allMonsters);
CityOfArkham.locations[SilverTwilightLodge].addWildMonsterList(allMonsters);
CityOfArkham.locations[SilverTwilightSanctum].addWildMonsterList(allMonsters);
CityOfArkham.locations[CemeteryRoad].addWildMonsterList(allMonsters);
CityOfArkham.locations[ChristchurchCemetery].addWildMonsterList(allMonsters);
CityOfArkham.locations[BlackCave].addWildMonsterList(allMonsters);

module.exports = {
  CityOfArkham
}