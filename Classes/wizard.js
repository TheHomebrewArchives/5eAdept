//Wizard subclasses

arcaneTraditions = [
  {
    "arcaneTradition":"",
    "arcaneTraditionFeature1":"",
    "arcaneTraditionFeature2":"",
    "arcaneTraditionFeature3":"",
  }
];

//Wizard Class Boons

classBoon = [
  {
    "name":"Cantrip Formulae",
    "cost":2,
    "prereq":"Wizard level 3rd",
    "desc":"You have scribed a set of arcane formulas in your spellbook that you can use to formulate a cantrip in your mind. Whenever you finish a long rest and consult those formulas in your spellbook, you can replace one wizard cantrip you know with another cantrip from the wizard spell list.",
    "type":"Class Boon",
  },
  {
    "name":"Improved Arcane Recovery",
    "cost":3,
    "prereq":"Wizard level 13th",
    "desc":"When you use Arcane Recovery, you can recover 6th and 7th level spell slots.",
    "type":"Class Boon",
  },
  {
    "name":"Greater Arcane Recovery",
    "cost":3,
    "prereq":"<a onclick='boonDisplay(1)' href='#'>Improved Arcane Recovery</a>, Wizard level 17th",
    "desc":"When you use Arcane Recovery, you can recover 8th and 9th level spell slots.",
    "type":"Class Boon",
  },
  {
    "name":"Abjuration Adept",
    "cost":2,
    "prereq":"Abjuration Wizard level 3rd",
    "desc":"You replenish your Arcane Ward when you finish a short rest.",
    "type":"Class Boon",
  },
  {
    "name":"Shielding Force",
    "cost":3,
    "prereq":"Abjuration Wizard level 9th",
    "desc":"The range of your Projected Ward increases to 20 meters, and the creature it is protecting doesn't take any leftover damage from damage the ward takes.",
    "type":"Class Boon",
  },
  {
    "name":"Conjuration Adept",
    "cost":2,
    "prereq":"Abjuration Wizard level 3rd",
    "desc":"An object you create using Minor Conjuration can have dimensions of up to 3 meters, and weigh up to 200 kilograms.",
    "type":"Class Boon",
  },
  {
    "name":"Portal Walker",
    "cost":3,
    "prereq":"Abjuration Wizard level 9th",
    "desc":"You can use Benign Transportation as a bonus action. Additionally, its range increases to 20 meters.",
    "type":"Class Boon",
  },
  {
    "name":"Divination Adept",
    "cost":2,
    "prereq":"Divination Wizard level 3rd",
    "desc":"When you use a portent die, you can instead choose to add or subtract a d8 from a creature's roll.",
    "type":"Class Boon",
  },
  {
    "name":"Prophecy",
    "cost":3,
    "prereq":"Divination Wizard level 9th",
    "desc":"When you finish a long rest, you can choose to save 1 portent die for the next day.",
    "type":"Class Boon",
  },
  {
    "name":"Enchantment Adept",
    "cost":2,
    "prereq":"Enchantment Wizard level 3rd",
    "desc":"The range of Hypnotic Gaze becomes 10 meters.",
    "type":"Class Boon",
  },
  {
    "name":"Unstoppable Charm",
    "cost":3,
    "prereq":"Enchantment Wizard level 9th",
    "desc":"A creature can be targeted by Instinctive Charm again even if they succeeded on a saving throw against the ability. Additionally, the first time a creature is affected by Instinctive Charm, they have disadvantage on the saving throw.",
    "type":"Class Boon",
  },
  {
    "name":"Illusion Adept",
    "cost":2,
    "prereq":"Illusion Wizard level 3rd",
    "desc":"When you cast an illusion spell of 3rd level or lower that requires concentration and does not damage another creature, it does not require concentration for you.",
    "type":"Class Boon",
  },
  {
    "name":"Ever-Shifting Illusions",
    "cost":3,
    "prereq":"Illusion Wizard level 9th",
    "desc":"You can use Malleable Illusions as a reaction. Additionally, you do not need to be able to see an illusion to use this ability.",
    "type":"Class Boon",
  },
  {
    "name":"Evocation Adept",
    "cost":2,
    "prereq":"Evocation Wizard level 3rd",
    "desc":"When you cast an evocation spell that requires creatures to make a saving throw, you can give those creatures advantage on the saving throw. If they fail, they take double damage from the spell.",
    "type":"Class Boon",
  },
  {
    "name":"Irresistable Spell",
    "cost":3,
    "prereq":"Evocation Wizard level 9th",
    "desc":"If a creature would take no damage as a result of succeeding on a saving throw against an evocation spell you cast, they take half damage instead.",
    "type":"Class Boon",
  },
  {
    "name":"Necromancy Adept",
    "cost":2,
    "prereq":"Necromancy Wizard level 3rd",
    "desc":"When you use Grim Harvest, you also gain a number of temporary hit points equal to twice the spell's level.",
    "type":"Class Boon",
  },
  {
    "name":"Greusome Horde",
    "cost":3,
    "prereq":"Necromancy Wizard level 9th",
    "desc":"You may target up to two additional corpses, instead of one, when you use Undead Thralls.",
    "type":"Class Boon",
  }
];

//Display Subclass

function arcaneTraditionDisplay(x) {
  document.getElementById("lvl2").innerHTML = arcaneTraditions[x].arcaneTradition;
  document.getElementById("lvl6").innerHTML = arcaneTraditions[x].arcaneTraditionFeature1;
  document.getElementById("lvl10").innerHTML = arcaneTraditions[x].arcaneTraditionFeature2;
  document.getElementById("lvl14").innerHTML = arcaneTraditions[x].arcaneTraditionFeature3;
}
