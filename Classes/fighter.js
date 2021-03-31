//Fighter subclasses

martialArchetypes = [
  {
    "martialArchetypes":"",
    "martialArchetypeFeature1":"",
    "martialArchetypeFeature2":"",
    "martialArchetypeFeature3":"",
  },
];

//Fighter Class Boons

classBoon = [
  {
    "name":"Third Wind",
    "cost":3,
    "prereq":"Fighter level 3rd",
    "desc":"You can use Second Wind one additional time between rests.<br><br>You can select this boon only once.",
    "type":"Class Boon",
  },
  {
    "name":"Greater Indomitability",
    "cost":3,
    "prereq":"Fighter level 9th",
    "desc":"You can use Indomitable one additional time between long rests.",
    "type":"Class Boon",
  },
  {
    "name":"Additional Arcane Shot",
    "cost":2,
    "prereq":"Arcane Archer Fighter level 3rd",
    "desc":"You gain one additional use of Arcane Shot between rests.",
    "type":"Class Boon",
  },
  {
    "name":"Arrow of Force",
    "cost":3,
    "prereq":"Arcane Archer Fighter level 9th",
    "desc":"When you shoot a magical arrow, you can choose for the arrow to deal force damage instead of its normal damage type. Additionally, all arrows you shoot deal an additional 1d4 force damage.",
    "type":"Class Boon",
  },
  {
    "name":"Inspiring Cry",
    "cost":2,
    "prereq":"Banneret Fighter level 3rd",
    "desc":"When you use Rallying Cry, all affected creatures also gain a d6. Once within the next 10 minutes, the creature can roll the die and add the number rolled to one ability check, attack roll, or saving throw it makes. The creature can wait until after it rolls the d20 before deciding to use the die, but must decide before the GM says whether the roll succeeds or fails. Once the die is rolled, it is lost.",
    "type":"Class Boon",
  },
  {
    "name":"United Protection",
    "cost":3,
    "prereq":"Banneret Fighter level 9th",
    "desc":"All allies within 5 meters of you gain a +1 bonus to AC and saving throws.",
    "type":"Class Boon",
  },
  {
    "name":"Greater Superiority",
    "cost":2,
    "prereq":"Battle Master Fighter level 3rd",
    "desc":"Your Combat Superiority dice become d10's.",
    "type":"Class Boon",
  },
  {
    "name":"Knowledge's Advantage",
    "cost":3,
    "prereq":"Battle Master Fighter level 9th",
    "desc":"When you use Know Your Enemy on a creature, within the next 10 minutes the first attack roll that creature makes against you is made at disadvantage, and the first attack roll you make against them is made at advantage.",
    "type":"Class Boon",
  },
  {
    "name":"Mark of the Cavalier",
    "cost":2,
    "prereq":"Cavalier Fighter level 3rd",
    "desc":"When you mark a creature on your turn with Unwavering Mark, they become marked until the end of your next turn. Additionally, you gain advantage on the first attack roll made against a marked creature on your turn.",
    "type":"Class Boon",
  },
  {
    "name":"Warding Stance",
    "cost":3,
    "prereq":"Cavalier Fighter level 9th",
    "desc":"You may use Warding Maneuver an unlimited number of times between rests. But, you must use your action to enter a Warding Stance to use Warding Maneuver. This stance lasts for 1 minute, or until you fall unconscious.",
    "type":"Class Boon",
  },
  {
    "name":"Champion's Critical",
    "cost":2,
    "prereq":"Champion Fighter level 3rd",
    "desc":"You gain the<a onclick='boonDisplay(72)' href='#'>Improved Critical</a> boon. The level requirements for all Critical Boons are considered as 2 levels less for you.",
    "type":"Class Boon",
  },
  {
    "name":"Peak Performance",
    "cost":3,
    "prereq":"Champion Fighter level 9th",
    "desc":"You gain a +5 bonus to Athletics checks.",
    "type":"Class Boon",
  },
  {
    "name":"Eldritch Weapon",
    "cost":2,
    "prereq":"Eldritch Knight Fighter level 3rd",
    "desc":"A non-magical weapon bonded to you by Weapon Bond is considered magical, and gains a +1 bonus to attack rolls.",
    "type":"Class Boon",
  },
  {
    "name":"Eldritch Smite",
    "cost":3,
    "prereq":"Eldritch Knight Fighter level 9th",
    "desc":"When you hit a creature with a weapon attack on your turn, you can use your bonus action to expend a spell slot to deal extra force damage to the target. The extra damage is 2d8 for a 1st level spell slot, plus 1d8 for each spell level above 1st, to a maximum of 5d8.",
    "type":"Class Boon",
  },
  {
    "name":"Intense Spirit",
    "cost":2,
    "prereq":"Samurai Fighter level 3rd",
    "desc":"While you have temporary hit points granted to you by Fighting Spirit, you also gain a bonus 1d4 to attack rolls.",
    "type":"Class Boon",
  },
  {
    "name":"Unbreakable Spirit",
    "cost":3,
    "prereq":"Samurai Fighter level 9th",
    "desc":"You have advantage on Wisdom saving throws.",
    "type":"Class Boon",
  }];

//Display Subclass

function martialArchetypeDisplay(x) {
  document.getElementById("lvl3").innerHTML = martialArchetypes[x].martialArchetype;
  document.getElementById("lvl7").innerHTML = martialArchetypes[x].martialArchetypeFeature1;
  document.getElementById("lvl10").innerHTML = martialArchetypes[x].martialArchetypeFeature2;
  document.getElementById("lvl15").innerHTML = martialArchetypes[x].martialArchetypeFeature3;
  document.getElementById("lvl18").innerHTML = martialArchetypes[x].martialArchetypeFeature4;
}
