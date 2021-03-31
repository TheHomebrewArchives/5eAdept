//Monk subclasses

monasticTraditions = [
  {
    "monasticTradition":"",
    "monasticTraditionFeature1":"",
    "monasticTraditionFeature2":"",
    "monasticTraditionFeature3":"",
  },
];

//Monk Class Boons

classBoon = [
  {
    "name":"Deepened Ki",
    "cost":2,
    "prereq":"Monk level 3rd",
    "desc":"Your ki pool increases by 2 points.",
    "type":"Class Boon",
  },
  {
    "name":"Greater Martial Arts",
    "cost":3,
    "prereq":"Monk level 5th",
    "desc":"Your Martial Arts damage die increases by 1 step.",
    "type":"Class Boon",
  },
  {
    "name":"Spider Step",
    "cost":2,
    "prereq":"Monk level 7th",
    "desc":"When you use Step of the Wind, you may move across any solid surface. When you do so, you do not fall until you next use movement on your turn.",
    "type":"Class Boon",
  },
  {
    "name":"Wind Step",
    "cost":3,
    "prereq":"<a onclick='boonDisplay(2)' href='#'>Spider Step</a>, Monk level 11th",
    "desc":"When you use Step of the Wind, you gain a flying speed equal to your walking speed. You do not fall until you next use movement on your turn.",
    "type":"Class Boon",
  },
  {
    "name":"Drunken Movement",
    "cost":2,
    "prereq":"Drunken Master Monk level 3rd",
    "desc":"When you use Drunken Technique, your movement speed increases by an addtional 3 meters.",
    "type":"Class Boon",
  },
  {
    "name":"Drunken Tumble",
    "cost":3,
    "prereq":"Drunken Master Monk level 9th",
    "desc":"When a creature attacks you with a weapon attack on their turn, you can spend 2 ki points. That creature gains disadvantage on that attack roll against you.",
    "type":"Class Boon",
  },
  {
    "name":"Elemental Arts",
    "cost":2,
    "prereq":"Way of the Elements Monk level 3rd",
    "desc":"When you use your action to cast a Way of the Elements spell, you can make an unarmed strike as a bonus action.",
    "type":"Class Boon",
  },
  {
    "name":"Elements Master",
    "cost":3,
    "prereq":"Way of the Elements Monk level 9th",
    "desc":"You have immunity to the damage of Way of the Elements spells you cast.",
    "type":"Class Boon",
  },
  {
    "name":"Kensei's Parry",
    "cost":2,
    "prereq":"Kensei Monk level 3rd",
    "desc":"You can use Agile Parry even if the Kensei weapon you are wielding is a ranged weapn. Additionally, if a creature hits you with a weapon attack while you are under the effects of Agile Parry, you can make an unarmed strike as a reaction against that creature.",
    "type":"Class Boon",
  },
  {
    "name":"Kensei Strike",
    "cost":3,
    "prereq":"Kensei Monk level 9th",
    "desc":"When you hit a creature with a kensei weapon on your turn, you can spend 2 ki point to give that creature vulnerability against damage of the next attack you make against them.",
    "type":"Class Boon",
  },
  {
    "name":"Stolen Vitality",
    "cost":2,
    "prereq":"Long Death Monk level 3rd",
    "desc":"When you reduce a creature within reach of you to 0 hit points, you can spend 1 ki point to gain a number of hit points equal to that creature's hit dice + your Wisdom modifier.",
    "type":"Class Boon",
  },
  {
    "name":"Wraith of Death",
    "cost":3,
    "prereq":"Long Death Monk level 9th",
    "desc":"When a creature fails its saving throw against Hour of Reaping, you can spend 1 ki point to gain advantage on attack rolls against that creature until the end of your next turn.",
    "type":"Class Boon",
  },
  {
    "name":"Tranquil Stance",
    "cost":2,
    "prereq":"Lotus Monk level 3rd",
    "desc":"While in your Lotus Stance, you also gain a number of temporary hit points at the start of your turn equal to your Wisdom modifier.",
    "type":"Class Boon",
  },
  {
    "name":"Expected Strike",
    "cost":3,
    "prereq":"Lotus Monk level 9th",
    "desc":"When a creature misses you with an attack while in your Lotus Stance, you can make a melee weapon attack against them without spending a reaction.",
    "type":"Class Boon",
  },
  {
    "name":"Open Hand Expertise",
    "cost":2,
    "prereq":"Open Hand Monk level 3rd",
    "desc":"While you have at least 1 ki point in your ki pool, creatures have disadvantage on saving throws against your Open Hand Technique.",
    "type":"Class Boon",
  },
  {
    "name":"Overflow of Body",
    "cost":3,
    "prereq":"Open Hand Monk level 9th",
    "desc":"When you use Wholeness of Body, you also gain a number of temporary hit points equal to two times your monk level.",
    "type":"Class Boon",
  },
  {
    "name":"One with Darkness",
    "cost":2,
    "prereq":"Shadow Monk level 3rd",
    "desc":"When you use ki points to cast Darkness, you can see through the darkness normally.",
    "type":"Class Boon",
  },
  {
    "name":"Step of Shade",
    "cost":3,
    "prereq":"Shadow Monk level 9th",
    "desc":"Your movement speed increases by a number of meters equal to your monk level while in darkness.",
    "type":"Class Boon",
  },
  {
    "name":"Seeking Sun Bolt",
    "cost":2,
    "prereq":"Sun Soul Monk level 3rd",
    "desc":"When you use Radiant Sun Bolt, you add both your Wisdom and Dexterity modifier to the attack roll.",
    "type":"Class Boon",
  },
  {
    "name":"Radiant Arc Strike",
    "cost":3,
    "prereq":"Sun Soul Monk level 9th",
    "desc":"When you cast Burning Hands using ki points, the damage dice increase by one step.",
    "type":"Class Boon",
  },
];

//Display Subclass

function monasticTraditionDisplay(x) {
  document.getElementById("lvl3").innerHTML = monasticTraditions[x].monasticTradition;
  document.getElementById("lvl6").innerHTML = monasticTraditions[x].monasticTraditionFeature1;
  document.getElementById("lvl10").innerHTML = monasticTraditions[x].monasticTraditionFeature2;
  document.getElementById("lvl17").innerHTML = monasticTraditions[x].monasticTraditionFeature3;
}
