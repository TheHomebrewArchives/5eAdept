//Ranger subclasses

rangerArchetypes = [
  {
    "rangerArchetype":"",
    "rangerArchetypeFeature1":"",
    "rangerArchetypeFeature2":"",
    "rangerArchetypeFeature3":"",
  },
];

//Ranger Class Boons

classBoon = [
  {
    "name":"Additional Favored Enemy",
    "cost":3,
    "prereq":"Ranger level 3rd",
    "desc":"You gain one additional Favored Enemy of your choice. You do not gain additional language known.",
    "type":"Class Boon",
  },
  {
    "name":"Feral Magic",
    "cost":1,
    "prereq":"Ranger level 3rd",
    "desc":"Learn one Druid or Ranger spell that you have an appropriate spell slot to cast. This spell does not count against your number of maximum spells known.",
    "type":"Class Boon",
  },
  {
    "name":"Companion's Bond",
    "cost":2,
    "prereq":"Beast Master Ranger level 3rd",
    "desc":"As an action on your turn, you may percieve through the senses of your Animal Companion. While percieving through their senses in this way, you are blind and deaf to your own body's surroundings.",
    "type":"Class Boon",
  },
  {
    "name":"Bestial Retaliation",
    "cost":3,
    "prereq":"Beast Master Ranger level 9th",
    "desc":"When your animal companion is hit by a weapon attack, you can use your reaction to make an opportunity attack against the attacker.",
    "type":"Class Boon",
  },
  {
    "name":"Twilight Sight",
    "cost":2,
    "prereq":"Gloom Stalker Ranger level 3rd",
    "desc":"You can see through both magical and non-magical darkness as if it were dim light out to a range of your Umbral Sight.",
    "type":"Class Boon",
  },
  {
    "name":"Stalker's Ambush",
    "cost":3,
    "prereq":"Gloom Stalker Ranger level 9th",
    "desc":"You may use your Dread Ambush ability any time you would go first in initiative.",
    "type":"Class Boon",
  },
  {
    "name":"Portal Sense",
    "cost":2,
    "prereq":"Horizon Walker Ranger level 3rd",
    "desc":"You can use your Detect Portal ability at will, and can tell to which plane a portal leads.",
    "type":"Class Boon",
  },
  {
    "name":"Planar Strike",
    "cost":3,
    "prereq":"Horizon Walker Ranger level 9th",
    "desc":"As an action, you can attempt to send a creature back to its native plane. Make a weapon attack against a creature that you can see. If you hit, that creature must succeed on a Charisma saving throw against your spell save DC or be banished to their native plane. At the end of each of their turns, they can repeat the saving throw. If they succeed, they reappear at the beginning of their next turn in the closest unoccupied space near to where they were banished. If a creature is native to the plane you are currently on, they instead are teleported to an unnocupied space within 20 meters of you on a failed save.",
    "type":"Class Boon",
  },
  {
    "name":"Hunter's Quarry",
    "cost":2,
    "prereq":"Hunter Ranger level 3rd",
    "desc":"You gain an improved version of the Hunter's Prey choice you chose at 3rd level:<br><ul><li><b>Titan Feller.</b> Replaces Collosus Slayer. When you hit a creature with a weapon attack, the creature takes an extra 1d8 damage if it's below its hit point maximum.</li><li><b>Leviathan Retaliation.</b> Replaces Giant Killer. When a Large or larger creature within reach of you hits or misses you with an attack, you can use your reaction to attack that creature immediately after its attack, provided that you can see the creature. You make this attack at advantage, and if it hits, that creature also cannot take reactions until the end of your next turn.</li><li><b>Swarm Obliterator.</b> Replaces Horde Breaker. Once on each of your turns when you make a weapon attack, you can make another attack with the same weapon against a different creature that is within 2 meters of the original target and within range of your weapon. If this attack reduces a creature to 0 hit points, you can make an additional weapon attack against a creature within 2 meters of the second target, and within range of your weapon.</li></ul>",
    "type":"Class Boon",
  },
  {
    "name":"Defensive Tact",
    "cost":3,
    "prereq":"Hunter Ranger level 9th",
    "desc":"You gain an improved version of the Defensive Tactics choice you chose at 7th level:<br><ul><li><b>Punish the Horde.</b> Replaces Escape the Horde. Opportunity attacks against you are made with disadvantage. If a creature makes an opportunity attack against you, you can make a weapon attack against them. </li><li><b>Slow Attacks.</b> Replaces Multiattack Defense. When you hit a creature with a weapon attack that can make multiple attacks per turn, you can use your bonus action to give that creature disadvantage on all of their attacks on their next turn.</li><li><b>Steel Spirit.</b> Replaces Steel Will. You are immune to the frightened condition. When a creature would otherwise cause you to make a Wisdom saving throw against being frightened, you can use your reaction to make a weapon attack against them.</li></ul>",
    "type":"Class Boon",
  },
  {
    "name":"Slayer's Mark",
    "cost":2,
    "prereq":"Monster Slayer Ranger level 3rd",
    "desc":"When a creature is marked by your Slayer's Prey, you can use a bonus action to make a weapon attack against them.",
    "type":"Class Boon",
  },
  {
    "name":"Slayer's Capability",
    "cost":3,
    "prereq":"Monster Slayer Ranger level 9th",
    "desc":"The extra damage from your Slayer's Prey ability occurs each time you make a weapon attack. Additionally, your Supernatural Defense die becomes a d8.",
    "type":"Class Boon",
  },
];

//Display Subclass

function rangerArchetypeDisplay(x) {
  document.getElementById("lvl3").innerHTML = rangerArchetypes[x].rangerArchetype;
  document.getElementById("lvl7").innerHTML = rangerArchetypes[x].rangerArchetypeFeature1;
  document.getElementById("lvl11").innerHTML = rangerArchetypes[x].rangerArchetypeFeature2;
  document.getElementById("lvl15").innerHTML = rangerArchetypes[x].rangerArchetypeFeature3;
}
