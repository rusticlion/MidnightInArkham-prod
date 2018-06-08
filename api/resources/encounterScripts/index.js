const { LichStreetEncounters } = require('./LichStreetEncounters');
const { FrenchHillEncounters } = require('./FrenchHillEncounters');
const { WoodedGraveyard } = require('./WoodedGraveyardEncounters');
const { DarkWoods } = require('./DarkWoods');
const { HangmansBrook } = require('./HangmansBrook');
const { HangmansHill } = require('./HangmansHill');
const { WestStreet } = require('./WestStreet');
const { StMarysHospital } = require('./StMarysHospital');
const { ResidentialStreets } = require('./ResidentialStreets');
const { PickmansHouse } = require('./PickmansHouse');
const { TheWitchHouse } = require('./TheWitchHouse');
const { CaligarisCuriosities } = require('./CaligarisCuriosities');
const { MarbleGardens } = require('./MarbleGardens');
const { SilverTwilightLodge } = require('./SilverTwilightLodge');
const { SilverTwilightSanctum } = require('./SilverTwilightSanctum');
const { CemeteryRoad } = require('./CemeteryRoad');
const { ChristchurchCemetery } = require('./ChristchurchCemetery');
const { BlackCave } = require('./BlackCave');
const { TheUnnameable } = require('./TheUnnameable');
const { Oldtown } = require('./Oldtown');
const { HibbsRoadhouse } = require('./HibbsRoadhouse');
const { HistoricalSociety } = require('./HistoricalSociety');
const { ArtisticSupply } = require('./ArtisticSupply');
const { MasBoardingHouse } = require('./MasBoardingHouse');
const { PoliceStation } = require('./PoliceStation');
const { JailCell } = require('./JailCell');
const { ArkhamAsylum } = require('./ArkhamAsylum');
const { IndependenceSquare } = require('./IndependenceSquare');
const { VelmasDiner } = require('./VelmasDiner');
const { MainStreet } = require('./MainStreet');
const { ArkhamGeneralSupply } = require('./ArkhamGeneralSupply');
const { ArkhamInvestigator } = require('./ArkhamInvestigator');
const { WarehouseAlleys } = require('./WarehouseAlleys');
const { RiverStreet } = require('./RiverStreet');
const { ByzantinePier } = require('./ByzantinePier');
const { OvergrownIsland } = require('./OvergrownIsland');
const { WestChurch } = require('./WestChurch');
const { ChurchStreet } = require('./ChurchStreet');
const { BaptistChurch } = require('./BaptistChurch');
const { MiskatonicUniversityCampus } = require('./MiskatonicUniversityCampus');
const { CollegeOfPhysicalSciences } = require('./CollegeOfPhysicalsciences');
const { ResearchLibrary } = require('./ResearchLibrary');
const { LectureHall } = require('./LectureHall');

const encounterLocations = [LichStreetEncounters, FrenchHillEncounters, WoodedGraveyard, DarkWoods, HangmansBrook, HangmansHill, WestStreet, StMarysHospital, ResidentialStreets, TheWitchHouse, PickmansHouse, CaligarisCuriosities, MarbleGardens, SilverTwilightLodge, SilverTwilightSanctum, CemeteryRoad, ChristchurchCemetery, BlackCave, TheUnnameable, Oldtown, HibbsRoadhouse, HistoricalSociety, ArtisticSupply, MasBoardingHouse, PoliceStation, JailCell, ArkhamAsylum, IndependenceSquare, VelmasDiner, MainStreet, ArkhamGeneralSupply, ArkhamInvestigator, WarehouseAlleys, RiverStreet, ByzantinePier, OvergrownIsland, WestChurch, ChurchStreet, BaptistChurch, MiskatonicUniversityCampus, ResearchLibrary, LectureHall, CollegeOfPhysicalSciences];

const getRandomEncounter = (gameState, currentInvestigator) => {
  const encountersForLocation = encounterLocations.find(location => {
    console.log("Comparing", location.name);
    console.log("To ", currentInvestigator.location);
    if (location.name === currentInvestigator.location) return location;
  }).encounters;
  const randomEncounter = encountersForLocation[Math.floor(Math.random()*encountersForLocation.length)];
  return randomEncounter;
}

const getEncounterByIndex = (index, currentInvestigator) => {
  return encounterLocations.find(location => location.name === currentInvestigator.location).encounters.find(encounter => {
    console.log("About to compare", encounter.index);
    console.log("To", index);
    if (encounter.index === index) return encounter;
  });
}

const resolveEncounter = (gameState, index, currentInvestigator, decision) => {
  const encounter = getEncounterByIndex(index, currentInvestigator);
  encounter.resolve(gameState, currentInvestigator, decision);
}

module.exports = {
  getRandomEncounter,
  resolveEncounter,
}