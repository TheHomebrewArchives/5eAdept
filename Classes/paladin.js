//Paladin subclasses

sacredOaths = [
  {
    "sacredOath":"",
    "sacredOathFeature1":"",
    "sacredOathFeature2":"",
    "sacredOathFeature3":"",
  },
];

//Paladin Class Boons

classBoon = [
  {
    "name":"Healing Hands",
    "cost":2,
    "prereq":"Paladin level 3rd",
    "desc":"Your Lay on Hands pool increases by a number of points equal to your Paladin level + 5.",
    "type":"Class Boon",
  },
  {
    "name":"Strike of Conquest",
    "cost":2,
    "prereq":"Conquest Paladin level 3rd",
    "desc":"When you use a Conquest Paladin Channel Divinity option, you gain advantage on your next weapon attack.",
    "type":"Class Boon",
  },
  {
    "name":"Iron Grip of Conquest",
    "cost":3,
    "prereq":"Conquest Paladin level 9th",
    "desc":"While a creature within your Aura of Conquest is frightened of you due to Conquering Presence, you can use your bonus action to cause that creature to automatically fail their next saving throw against it.",
    "type":"Class Boon",
  },
  {
    "name":"Weapon of Devotion",
    "cost":2,
    "prereq":"Devotion Paladin level 3rd",
    "desc":"You cannot be disarmed of a weapon affected by your Sacred Weapon. Additionally, you gain a number of temporary hit points equal to your Charisma modifier at the start of your turn as long as you are still wielding your Sacred Weapon.",
    "type":"Class Boon",
  },
  {
    "name":"Greater Devotion Aura",
    "cost":3,
    "prereq":"Devotion Paladin level 9th",
    "desc":"All healing spells you cast on creatures within your Aura of Devotion heal for their maximum amount.",
    "type":"Class Boon",
  },
  {
    "name":"Glorious Smite",
    "cost":2,
    "prereq":"Glory Paladin level 3rd",
    "desc":"When you use Divine Smite o reduce a creature to 0 hit points, you have advantage on your next attack roll on the same turn.",
    "type":"Class Boon",
  },
  {
    "name":"Greater Alacrity Aura",
    "cost":3,
    "prereq":"Glory Paladin level 9th",
    "desc":"The radius of your Aura of Alacrity increases to 10 meters.",
    "type":"Class Boon",
  },
  {
    "name":"Channel Heroism",
    "cost":2,
    "prereq":"Heroism Paladin level 3rd",
    "desc":"When you use a Heroism Paladin Channel Divinity option, you gain a number of temporary hit points equal to your Paladin level.",
    "type":"Class Boon",
  },
  {
    "name":"Heroic Deed",
    "cost":3,
    "prereq":"Heroism Paladin level 9th",
    "desc":"When you score a critical hit or reduce a creature to 0 hit points, you have advantage on your next saving throw until the end of your next turn.",
    "type":"Class Boon",
  },
  {
    "name":"Retaliation of the Provoked",
    "cost":2,
    "prereq":"Redemtion Paladin level 3rd",
    "desc":"When you use Rebuke of the Violent, the attacked creature may make a melee weapon attack as a reaction.",
    "type":"Class Boon",
  },
  {
    "name":"Greater Guardian Aura",
    "cost":3,
    "prereq":"Redemption Paladin level 9th",
    "desc":"You have resistance to damage from Aura of the Guardian.",
    "type":"Class Boon",
  },
  {
    "name":"Nature's Hold",
    "cost":2,
    "prereq":"Ancients Paladin level 3rd",
    "desc":"While a creature is restrained as a result of your Nature's Wrath, it also is blind and has disadvantage on saving throws to break free.",
    "type":"Class Boon",
  },
  {
    "name":"Greater Warding Aura",
    "cost":3,
    "prereq":"Ancients Paladin level 9th",
    "desc":"Creatures within your Aura of Warding have advantage on saving throws against spells.",
    "type":"Class Boon",
  },
  {
    "name":"Champion's Call",
    "cost":2,
    "prereq":"Crown Paladin level 3rd",
    "desc":"A creature affected by your Champion Challenge must use its movement to move closer to you.",
    "type":"Class Boon",
  },
  {
    "name":"Extended Alliegence",
    "cost":3,
    "prereq":"Crown Paladin level 9th",
    "desc":"You can use Divine Alliegence on a creature within 10 meters of you. Additionally, you gain a number of temporary hit points equal to your Charisma modifier when you take damage as a result of Divine Alliegence.",
    "type":"Class Boon",
  },
  {
    "name":"Hostile Abjure",
    "cost":2,
    "prereq":"Vengeance Paladin level 3rd",
    "desc":"WHen you use Abjure Creature, it does not end on a creature as a result of it taking damage.",
    "type":"Class Boon",
  },
  {
    "name":"Coward's Choice",
    "cost":3,
    "prereq":"Vengeance Paladin level 9th",
    "desc":"You have advantage on opportunity attacks against creatures that move out of your reach.",
    "type":"Class Boon",
  },
  {
    "name":"Grievous Aspect",
    "cost":2,
    "prereq":"Oathbreaker Paladin level 3rd",
    "desc":"A creature affected by your Dreadful Aspect takes 1d6 psychic damage at the beginning of their turn.",
    "type":"Class Boon",
  },
  {
    "name":"Selective Atrocity",
    "cost":3,
    "prereq":"Oathbreaker Paladin level 9th",
    "desc":"Any creatures within your Aura of Hate that you choose gain a bonus to their melee weapon damage rolls equal to your Charisma modifier (minimum of +1).",
    "type":"Class Boon",
  },
];

//Display Subclass

function sacredOathDisplay(x) {
  document.getElementById("lvl3").innerHTML = sacredOaths[x].sacredOath;
  document.getElementById("lvl7").innerHTML = sacredOaths[x].sacredOathFeature1;
  document.getElementById("lvl15").innerHTML = sacredOaths[x].sacredOathFeature2;
  document.getElementById("lvl20").innerHTML = sacredOaths[x].sacredOathFeature3;
}
