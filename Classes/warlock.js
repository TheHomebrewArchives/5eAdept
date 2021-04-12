//Warlock subclasses

otherworldlyPatrons = [
  {
    "otherworldlyPatron":"",
    "otherworldlyPatronFeature1":"",
    "otherworldlyPatronFeature2":"",
    "otherworldlyPatronFeature3":"",
  }
];

//Warlock Class Boons

classBoon = [
  {
    "name":"Additional Eldritch Invocation",
    "cost":2,
    "prereq":"Warlock level 3rd",
    "desc":"You learn one additional Eldritch Invoaction. This does not count against your number of Eldritch Invocations per level.",
    "type":"Class Boon",
  },
  {
    "name":"Eldritch Blade Mastery",
    "cost":2,
    "prereq":"Pact of the Blade Warlock level 5th",
    "desc":"You may bond to a pact weapon as a ritual that takes only 1 minute. Additionally, you may bond to an artifact or sentient weapon.",
    "type":"Class Boon",
  },
  {
    "name":"Eldritch Chain Mastery",
    "cost":2,
    "prereq":"Pact of the Chain Warlock level 5th",
    "desc":"When you cast the Find Familiar spell, your familiar's maximum hit points increase by an amount equal to your Warlock level + your proficiency bonus.",
    "type":"Class Boon",
  },
  {
    "name":"Eldritch Tome Mastery",
    "cost":2,
    "prereq":"Pact of the Tome Warlock level 5th",
    "desc":"You replace a warlock spell you know with any spell from any class' spell list. This spell must be of a level that you can cast.",
    "type":"Class Boon",
  },
  {
    "name":"Riveting Presence",
    "cost":2,
    "prereq":"Archfey Warlock level 3rd",
    "desc":"Creatures affected by your Fey Presence ability, they must make a Wisdom saving throw at the end of each of their turns against your spell save DC to end it. Alternatively, you can dismiss it as a free action.",
    "type":"Class Boon",
  },
  {
    "name":"Archfey's Escape",
    "cost":3,
    "prereq":"Archfey Warlock level 9th",
    "desc":"When you use Misty Escape, you gain resistance to the attack's damage and may teleport up to 200 meters away.",
    "type":"Class Boon",
  },
  {
    "name":"Radiant Light",
    "cost":2,
    "prereq":"Celestial Warlock level 3rd",
    "desc":"Your Healing Light dice become d8's.",
    "type":"Class Boon",
  },
  {
    "name":"Celestial Soul",
    "cost":3,
    "prereq":"Celestial Warlock level 9th",
    "desc":"As long as you have a number of Radiant Light dice equal to your proficiency bonus, you have immunity to radiant damage and resistance to necrotic damage.",
    "type":"Class Boon",
  },
  {
    "name":"Invigorating Blessing",
    "cost":2,
    "prereq":"Fiend Warlock level 3rd",
    "desc":"While you have temporary hit points from Dark One's Blessing, you have a +1 bonus to attack rolls and saving throws.",
    "type":"Class Boon",
  },
  {
    "name":"Fiendish Luck",
    "cost":3,
    "prereq":"Fiend Warlock level 9th",
    "desc":"You can use Dark One's Own Luck on an attack roll or damage roll. Additionally, you gain one additional use per rest.",
    "type":"Class Boon",
  },
  {
    "name":"Transmissable Mind",
    "cost":2,
    "prereq":"Great Old One Warlock level 3rd",
    "desc":"The distance at which you can communicate using Awakened Mind becomes 10 meters * your warlock level.",
    "type":"Class Boon",
  },
  {
    "name":"Glimpse of the Unknowable",
    "cost":3,
    "prereq":"Great Old One Warlock level 9th",
    "desc":"A creature that misses you as a result of Entropic Ward becomes paralyzed until the end of its next turn.",
    "type":"Class Boon",
  },
  {
    "name":"One of the Dead",
    "cost":2,
    "prereq":"Undying Warlock level 3rd",
    "desc":"You are immune to disease, and creatures cannot become immune to the effects of Among the Dead as a result of succeeding on the saving throw.",
    "type":"Class Boon",
  },
  {
    "name":"Undying Breath",
    "cost":3,
    "prereq":"Undying Warlock level 9th",
    "desc":"You gain advantage on death saving throws as long as you have at least one unused warlock spell slot.",
    "type":"Class Boon",
  },
];

//Display Subclass

function patronDisplay(x) {
  document.getElementById("lvl1").innerHTML = c1[10].lvl1;
  document.getElementById("lvl6").innerHTML = c1[10].lvl6;
  document.getElementById("lvl10").innerHTML = c1[10].lvl10;
  document.getElementById("lvl14").innerHTML = c1[10].lvl14;
  document.getElementById("lvl1").innerHTML += otherworldlyPatrons[x].otherworldlyPatron;
  document.getElementById("lvl6").innerHTML += otherworldlyPatrons[x].otherworldlyPatronFeature1;
  document.getElementById("lvl10").innerHTML += otherworldlyPatrons[x].otherworldlyPatronFeature2;
  document.getElementById("lvl14").innerHTML += otherworldlyPatrons[x].otherworldlyPatronFeature3;
}
