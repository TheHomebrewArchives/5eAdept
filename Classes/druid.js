//Druid Subclasses

druidCircles = [
  {
    "druidCircle":"",
    "druidCircleFeature1":"",
    "druidCircleFeature2":"",
    "druidCircleFeature3":"",
  }
]

//Druid Class Boons

classBoon = [
  {
    "name":"Additional Wild Shape",
    "cost":3,
    "prereq":"Druid level 3rd",
    "desc":"You may use Wild Shape one additional time per rest.<br><br>You may choose this boon only once.",
    "type":"Class Boon",
  },
  {
    "name":"Extended Wild Shape",
    "cost":1,
    "prereq":"Druid level 3rd",
    "desc":"Your duration for Wild Shape increases by 1 hour.",
    "type":"Class Boon",
  },
  {
    "name":"Wild Speech",
    "cost":2,
    "prereq":"Druid level 3rd",
    "desc":"While in a Wild Shape form that does not allow for speech, you may speak. This does not allow you to cast spells that require verbal components, however.",
    "type":"Class Boon",
  },
  {
    "name":"Potent Balm",
    "cost":2,
    "prereq":"Dreams Druid level 3rd",
    "desc":"Your Balm of the Summer Court dice become d8's.",
    "type":"Class Boon",
  },
  {
    "name":"Undiscoverable Hearth",
    "cost":3,
    "prereq":"Dreams Druid level 9th",
    "desc":"All creatures and objects that you choose within the confines of your Hearth of Moonlight and Shadow are invisible to those outside of the sphere. Additionally, creatures you designate can move in and out of the sphere with ease.",
    "type":"Class Boon",
  },
  {
    "name":"Deadly Spores",
    "cost":2,
    "prereq":"Spores Druid level 3rd",
    "desc":"Your Halo of Spores and Symbiotic Entity damage dice increase by 1 die step (1d6 becomes 1d8, 1d12 becomes 1d12 + 1d2, etc.).",
    "type":"Class Boon",
  },
  {
    "name":"Fungal Horde",
    "cost":3,
    "prereq":"Spores Druid level 9th",
    "desc":"A zombie you create with Fungal Infestation remains animate for 48 hours. You can have a maximum number of zombies from this feature animate at a single time equal to your Wisdom modifier.",
    "type":"Class Boon",
  },
  {
    "name":"Primal Satisfaction",
    "cost":2,
    "prereq":"Land Druid level 3rd",
    "desc":"When you cast a circle spell of 5th level or lower, you can choose to not expend a spell slot. Once you use this ability, you cannot do so again until you finish a long rest.",
    "type":"Class Boon",
  },
  {
    "name":"Shape of the Land",
    "cost":3,
    "prereq":"Land Druid level 9th",
    "desc":"You can use an action to expend a use of your wild shape to recover an expended spell slot. The maximum level of spell slot you can recover is equal to your proficiency bonus.",
    "type":"Class Boon",
  },
  {
    "name":"Durable Wild Shape",
    "cost":2,
    "prereq":"Moon Druid level 3rd",
    "desc":"The first time you wild shape per long rest, you gain a number of temporary hit points equal to your level in this class. Additionally, you gain 1d10 instead of 1d8 hit points per spell slot with Combat Wild Shape.",
    "type":"Class Boon",
  },
  {
    "name":"Primal Destruction",
    "cost":3,
    "prereq":"Moon Druid level 9th",
    "desc":"All of your attacks while you are in Wild Shape deal an additional 1d6 force damage.",
    "type":"Class Boon",
  },
  {
    "name":"Dual Spirit",
    "cost":2,
    "prereq":"Shepard Druid level 3rd",
    "desc":"When you summon a Spirit Totem, you can instead choose to summon two. When you do so, the duration of the spirits is reduced to 7 rounds.",
    "type":"Class Boon",
  },
  {
    "name":"Summoner of the Wilds",
    "cost":3,
    "prereq":"Shepard Druid level 9th",
    "desc":"You cannot lose concentration on a spell as a result of taking damage with a spell that has summoned one or more creatures. Additionally, all creatures you summon gain a +1 bonus to their AC and +2 bonus to attack rolls.",
    "type":"Class Boon",
  },];

//Display Subclasses

function circleDisplay(x) {
  document.getElementById("lvl2").innerHTML = druidCircles[x].druidCircle;
  document.getElementById("lvl6").innerHTML = druidCircles[x].druidCircleFeature1;
  document.getElementById("lvl10").innerHTML = druidCircles[x].druidCircleFeature2;
  document.getElementById("lvl14").innerHTML = druidCircles[x].druidCircleFeature3;
}
