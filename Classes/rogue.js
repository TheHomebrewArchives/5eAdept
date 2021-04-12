//Rogue subclasses

roguishArchetypes = [
  {
    "roguishArchetype":"",
    "roguishArchetypeFeature1":"",
    "roguishArchetypeFeature2":"",
    "roguishArchetypeFeature3":"",
  },
];

//Rogue Class Boons

classBoon = [
  {
    "name":"Improved Sneak Attack",
    "cost":2,
    "prereq":"Rogue level 3rd",
    "desc":"Your sneak attack damage increases by 1d6. This increase does not count against your sneak attack damage by level.",
    "type":"Class Boon",
  },
  {
    "name":"Supreme Sneak Attack",
    "cost":3,
    "prereq":"Rogue level 9th",
    "desc":"When you would be able to deal sneak attack damage on an attack, you can choose to take a -5 penalty to the attack roll. If you do so, your sneak attack damage dice become d8's.",
    "type":"Class Boon",
  },
  {
    "name":"Nimble Casting",
    "cost":2,
    "prereq":"Arcane Trickster Rogue level 3rd",
    "desc":"You can use Dexterity, instead of Intelligence, as your spellcasting ability modifier. This affects your spellcasting attack modifier, and spell save DC.",
    "type":"Class Boon",
  },
  {
    "name":"Ambushing Spell",
    "cost":3,
    "prereq":"Arcane Trickster Rogue level 9th",
    "desc":"If you have advantage on a spell attack roll, and that spell deals damage, you can add your sneak attack to the damage. You can apply your sneak attack damage to only one attack per turn.",
    "type":"Class Boon",
  },
  {
    "name":"Assassin's Infiltration",
    "cost":2,
    "prereq":"Assassin Rogue level 3rd",
    "desc":"You gain a +3 bonus to deception checks, and advantage on deception and performance checks to pass yourself off as another person.",
    "type":"Class Boon",
  },
  {
    "name":"Deft Hand",
    "cost":3,
    "prereq":"Assassin Rogue level 9th",
    "desc":"You can mark a creature with Careful Strike as a bonus action.",
    "type":"Class Boon",
  },
  {
    "name":"Greater Insight",
    "cost":2,
    "prereq":"Inquisitive Rogue level 3rd",
    "desc":"You can learn of the creature's current hit points, armor class, or specific saving throw modifier when you use Insightful Fighting on it.",
    "type":"Class Boon",
  },
  {
    "name":"Infallible Eye",
    "cost":3,
    "prereq":"Inquisitive Rogue level 9th",
    "desc":"Treat a roll of 14 or lower when you make a Perception or Investigation check as a 15.",
    "type":"Class Boon",
  },
  {
    "name":"Pin-Point Tactician",
    "cost":2,
    "prereq":"Mastermind Rogue level 3rd",
    "desc":"When you use the help action to aid an attack roll, you can roll your sneak attack damage as a part of the attack's damage. You can add your sneak attack damage to only one attack per turn.",
    "type":"Class Boon",
  },
  {
    "name":"Master Manipulator",
    "cost":3,
    "prereq":"Mastermind Rogue level 9th",
    "desc":"You can use Insightful Manipulator as an action, and when you do so, you learn of all the statistics given to you as an option by Insightful Manipulator.",
    "type":"Class Boon",
  },
  {
    "name":"Expert Skirmisher",
    "cost":2,
    "prereq":"Scout Rogue level 3rd",
    "desc":"When you use your Skirmisher ability, you may also immediately make an attack of opportunity against the creature that provoked it.",
    "type":"Class Boon",
  },
  {
    "name":"Extraordinary Mobility",
    "cost":3,
    "prereq":"Scout Rogue level 9th",
    "desc":"You can move through the space of any creature. The space of another creature counts as difficult terrain for you, and you may not end your turn inside of another creature's space.",
    "type":"Class Boon",
  },
  {
    "name":"Rakish Duel",
    "cost":2,
    "prereq":"Swashbuckler Rogue level 3rd",
    "desc":"You can use your bonus action to compell a creature to duel you. The target must make a Charisma saving throw against DC 8 + your proficiency bonus + your Charisma modifier. If they fail, they must use their movement on their next turn to get within reach of you.",
    "type":"Class Boon",
  },
  {
    "name":"Beguiling Panache",
    "cost":3,
    "prereq":"Swashbuckler Rogue level 9th",
    "desc":"A hostile creature you affect with Panache is considered blind to all creatures other than you. Additionally, Panache does not end if you or one of your allies hurts the target creature.",
    "type":"Class Boon",
  },
  {
    "name":"Thief's Technique",
    "cost":2,
    "prereq":"Thief Rogue level 3rd",
    "desc":"Your jump distance increases by a number of meters equal to your proficiency bonus. Additionally, reduce any fall damage you take by an amount equal to your Rogue level.",
    "type":"Class Boon",
  },
  {
    "name":"Supreme Maneuverability",
    "cost":3,
    "prereq":"Thief Rogue level 9th",
    "desc":"If you move no more than half of your movement on a turn, you have advantage on acrobatics, sleight of hand, and stealth checks.",
    "type":"Class Boon",
  },
];

//Display Subclass

function roguishArchetypeDisplay(x) {
  document.getElementById("lvl3").innerHTML = c1[8].lvl3;
  document.getElementById("lvl9").innerHTML = c1[8].lvl9;
  document.getElementById("lvl13").innerHTML = c1[8].lvl13;
  document.getElementById("lvl17").innerHTML = c1[8].lvl17;
  document.getElementById("lvl3").innerHTML += roguishArchetypes[x].roguishArchetype;
  document.getElementById("lvl9").innerHTML += roguishArchetypes[x].roguishArchetypeFeature1;
  document.getElementById("lvl13").innerHTML += roguishArchetypes[x].roguishArchetypeFeature2;
  document.getElementById("lvl17").innerHTML += roguishArchetypes[x].roguishArchetypeFeature3;
}
