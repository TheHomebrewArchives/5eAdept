//Sorcerer subclasses

sorcerousOrigins = [
  {
    "sorcerousOrigin":"",
    "sorcerousOriginFeature1":"",
    "sorcerousOriginFeature2":"",
    "sorcerousOriginFeature3":"",
  },
];

//Sorcerer Class Boons

classBoon = [
  {
    "name":"Deepened Magical Font",
    "cost":2,
    "prereq":"Sorcerer level 3rd",
    "desc":"You gain 2 maximum sorcery points. This increase does not count against your maximum number of sorcery points per level.",
    "type":"Class Boon",
  },
  {
    "name":"Hastened Spell Conversion",
    "cost":2,
    "prereq":"Sorcerer level 9th",
    "desc":"With your Font of Magic ability, you can create and convert spell slots as a reaction as well as a bonus action on your turn.",
    "type":"Class Boon",
  },
  {
    "name":"Exalted Favor",
    "cost":2,
    "prereq":"Divine Soul Sorcerer level 3rd",
    "desc":"You can use Favored by the Gods one additional time per rest.",
    "type":"Class Boon",
  },
  {
    "name":"Divine Healing",
    "cost":3,
    "prereq":"Divine Soul Sorcerer level 9th",
    "desc":"The range of Empowered Healing becomes sight for you.",
    "type":"Class Boon",
  },
  {
    "name":"Draconic Resilience",
    "cost":2,
    "prereq":"Draconic Bloodline Sorcerer level 3rd",
    "desc":"Your hit point maximum increases by 20. You may take this boon only once.",
    "type":"Class Boon",
  },
  {
    "name":"Draconic Affinity",
    "cost":3,
    "prereq":"Draconic Bloodline Sorcerer level 9th",
    "desc":"Choose one additional Draconic Ancestry. You gain all of its effects as well as your original ancestry.",
    "type":"Class Boon",
  },
  {
    "name":"Grip of Dusk",
    "cost":2,
    "prereq":"Shadow Essence Sorcerer level 3rd",
    "desc":"You can use Strength of the Grave until you fall to 0 hit points.",
    "type":"Class Boon",
  },
  {
    "name":"Hound of Shade",
    "cost":3,
    "prereq":"Shadow Essence Sorcerer level 9th",
    "desc":"Your Hound of Ill Omen gains the following features:<br><ul><li>Its size is large.</li><li>The hound disappears if it is reduced to 0 hit points, if its target is reduced to 0 hit points, or after 30 minutes.</li><li>When your hound disappears as a result of reducing a creature to 0 hit points, you can use a reaction to raise it again at full hit points against another creature within range for 2 sorcery points.</li></ul>.",
    "type":"Class Boon",
  },
  {
    "name":"Furorous Travel",
    "cost":2,
    "prereq":"Storm Magic Sorcerer level 3rd",
    "desc":"You may move through up to 1 creature using Tempestuous Magic. That creature then takes thunder or lightning damage (your choice) equal to half your Sorcerer level.",
    "type":"Class Boon",
  },
  {
    "name":"Heart of the Hurricane",
    "cost":3,
    "prereq":"Storm Magic Sorcerer level 9th",
    "desc":"Each time Heart of the Storm activates, you can fly a number of meters equal to the level of spell you are casting.",
    "type":"Class Boon",
  },
];

//Display Subclass

function originDisplay(x) {
  document.getElementById("lvl1").innerHTML = c1[9].lvl1;
  document.getElementById("lvl6").innerHTML = c1[9].lvl6;
  document.getElementById("lvl14").innerHTML = c1[9].lvl14;
  document.getElementById("lvl18").innerHTML = c1[9].lvl18;
  document.getElementById("lvl1").innerHTML += sorcerousOrigins[x].sorcerousOrigin;
  document.getElementById("lvl6").innerHTML += sorcerousOrigins[x].sorcerousOriginFeature1;
  document.getElementById("lvl14").innerHTML += sorcerousOrigins[x].sorcerousOriginFeature2;
  document.getElementById("lvl18").innerHTML += sorcerousOrigins[x].sorcerousOriginFeature3;
}
