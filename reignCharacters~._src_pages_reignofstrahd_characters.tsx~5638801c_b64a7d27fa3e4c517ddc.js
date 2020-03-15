(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reignCharacters~._src_pages_reignofstrahd_characters.tsx~5638801c"],{

/***/ "./src/pages/reignofstrahd/characters.tsx":
/*!************************************************!*\
  !*** ./src/pages/reignofstrahd/characters.tsx ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var styles_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styles_index_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var scripts_components_Markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! scripts/components/Markdown */ "./src/scripts/components/Markdown.tsx");
/* harmony import */ var pages_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pages/shared */ "./src/pages/shared.tsx");
/* *************************************************************** **
** * ©2020 Michael Baker (project@absolutelynot.moe) | AGPL v3.0 * **
** *************************************************************** */




let markdownSource = `
## Races

### Allowed

If there's a race you'd like to play that's not on here, let me know (inc. 3rd party).

|    PHB     |    Volo   |   XGtE    |    MtoF    |    RftLW   | 3rd-Party |
|:----------:|:---------:|:---------:|:----------:|:----------:|:---------:|
| Dragonborn | Aasimar¹  | Tiefling¹ | Gith       | Bugbear    | [Beastfolk¹](https://drive.google.com/file/d/17boT7-ci5xQTo4iVdi6kJoIkJLOwstua/view?usp=sharing) |
| Dwarf      | Arakocra¹ |           | Eladrin    | Changeling | [Human](https://drive.google.com/file/d/1UjrWIcaBZk6IFXOiH8ucjJVYPcI3eE0Y/view?usp=sharing) |
| Elf        | Firbolg   |           | Sea-Elf    | Goblin     |
| Gnome      | Genasi    |           | Shadar-kai | Kalashtar  |
| Half-Elf   | Golaith   |           |            | Hobgoblin  |
| Halfling   | Kobold    |           |            | Orc        |
| Half-Orc   | Triton    |           |            | Shifter    |
|            |           |           |            | Warforged  |

1. Races that grant a flyspeed gain the following ability:
 - **Glide:** Whilst using your racial fly speed, you descend 60ft at the end of each round until you're at most 5ft above a surface capable of supporting you.

### Darkvision

Ignore all darkvision information provided by your race. Instead, refer to the below list:

| Race            | Distance   | Race                | Distance |  Race            | Distance | 
|:---------------:|:----------:|:-------------------:|:--------:|:----------------:|:--------:|
| ***Beastfolk*** | As written | ***Bugbear***       | 60ft     | ***Dragonborn*** | 60ft     |
| ***Firbolg***   | 60ft       | ***Genasi, Earth*** | 60ft     | ***Golaith***    | 60ft     |
| ***Goblin***    | 60ft       | ***Kobold***        | 60ft     | ***Orc***        | 60ft     |
| ***Shifter***   | 60ft       |                     |          |                  |          |

### Triton / Genasi, Water
Genasi, Water and Triton gain the following ability:
- **Depthsight:** You can see through water as if you had Darkvision(120ft), 
  which returns to normal vision where the water ends. Additionally, you can 
  see through non-magical dirty/clouded water as if it were clear. This ability 
  does not apply to other fluids such as blood, tree sap or magma (ouch).

### Beastfolk

Beastfolk are being used to represent a multiude of races. For 
example, Tabaxi are cat-like beastfolk and Lizardfolk are lizard-like 
beastfolk. Each type of beastfolk, mechanically and roleplay-wise, are 
treated as seperate races.

### Dragonmarks

When in Eberron, dragonmarks. Those born of particular bloodlines occasionally 
manifest certain recognised dragonmarks, these family lines form houses - which 
are similar to extremely powerful guilds. These guilds keep a strict eye on their
lineage, so it's unlikely the mark would transfer outside of the family or to 
someone the family did not approve of. There are also Aberrant marks, rarely 
identical to house-related marks and so are tipically unique. There's no 
established house for these people.

The descriptions below are non-mechanical, the full information is in the RftLW book.
Dragonmarks are applied as an alternate race, or a feat in the case of aberrant marks.

<div class="col-2 spoiler"><div>

#### Detection, House of Medani 
Races: Half-Elves

The Mark of Detection is an inquisitive's dream. It sharpens powers of observation 
and intuition, allow­ing the bearer to draw connections and interpret clues others 
might miss. By actively drawing on its powers, the bearer can detect poisons and 
study the ener-gies of magic. 

</div><div><br/>

#### Finding, House of Tharashk 
Races: Humans, Half-Orcs

The Mark of Finding sharpens the senses, guiding the hunter to prey. Alone among the 
dragonmarks, the Mark of Finding is carried by two races: humans and half­orcs. It 
first appeared in the Shadow Marches, where clan hunters used it to find their prey. 

</div><div><br/>

#### Handling, House of Vadalis
Races: Humans

The Mark of Handling gives its bearer a primal connection to beasts and the natural 
world, grant­ing the power to calm and coax. This  extends beyond purely natural animals; 
the mark allows its bearer to guide a hippogriff as easily as a horse.

</div><div><br/>

#### Healing, House of Jorasco
Races: Halflings

A halfling with the Mark of Healing can save a life with a touch,  restoring vitality 
and the will to live. When dealing with mundane medicine, the mark helps its bearer 
sense the nature of maladies, aiding them in finding a cure. When equipped with drag­onshard 
focus items, the mark can even draw the dead back from the  depths of Dolurrh.

</div><div><br/>

#### Hospitality, House of Ghallanda
Races: Halflings

They may not always have gold, but a halfling with the Mark of Hospitality is sure to be 
rich in friends. The magic of the mark allows the bearer to keep a place clean, and to heat, 
chill, and season food. But it also helps the bearer connect with others.

</div><div><br/>

#### Making, House of Cannith
Races: Humans

The Mark of Making guides its bearer through any act of creation. The bearer of the mark can 
mend broken things with a touch, and always has a minor  magic  item they've been working on. 
An artificer or a wizard will get the most out of the mark, but anyone can find a use for an 
enchanted blade.

</div><div><br/>

#### Passage, House of Orien
Races: Humans

The Mark of Passage governs motion, allowing its bearer to move with uncanny speed. The bearer 
of the mark can even slip through space in the blink of an eye.

</div><div><br/>

#### Scribing, House of Sivis
Races: Gnomes

The Mark of Scribing deals with communication-both the written and spoken word. A gnome who 
bears the mark can fee/ words as though they are living creatures, struggling to make their 
meaning known. The mark provides a range of gifts. It translates languages, but it also allows 
its bearer to communicate with others at a distance.

</div><div><br/>

#### Sentinel, House of Deneith
Races: Humans

The Mark of Sentinel warns and protects. It heightens senses and reflexes, allowing an heir 
to respond to threats with uncanny speed. It can shield its bearer from harm. Whether on the 
battlefield or the ballroom, someone who carries the Mark of Sentinel is prepared for danger. 

</div><div><br/>

#### Shadow, House of Phiarlan/Thuranni
Races: Humans

The Mark of Shadow lets an elf weave illusions, crafting magic to distract or delight. It 
also allows its bearer to sculpt shadows, making it easy to avoid detection.

</div><div><br/>

#### Storm, House of Lyrandar
Races: Half-Elves

Wind and water welcome the half-elves who carry the Mark of Storm, and some learn to call 
on the power of the storm itself.

</div><div><br/>

#### Warding, House of Kundarak
Races: Dwarves

The Mark of Warding helps its bearers protect things of value. Using the mark, a dwarf 
can weave wards with mystic force. It also provides its bearer with an intuitive understanding 
of locks used to protect and seal. 

</div><div><br/>

#### Abberant, Unassociated

The twelve dragonmarks are predictable, and their pow­ers are generally constructive. But there 
is another kind of dragonmark, which is dangerous to both the bearer and the people around them. 
It usually takes time for a character to learn to control an aberrant mark, and in time, people 
might be hurt by it. This factor has led to the general superstition that people with aberrant 
dragonmarks are dangerous. Aberrant marks are feared for another reason, too. 

Long ago, aberrant marks were more common and some held great powers. Aberrant leader Halas 
Tar­kanan could devastate cities with powerful earthquakes. The Lady of the Plague wielded 
disease and com­manded hordes of vermin. The dragonmarked houses united in an inquisition called 
the War of the Mark. Some say this was a persecution of innocents, but most feared the aberrants 
and stood by as the houses hunted them down.

</div></div>

## Classes

### Allowed

<div class="col-3"><div>

#### Artificer
- Alchemist (RftLW p.58)
- Artillerist (RftLW p.59)
- Battle Smith (RftLW p.60)

</div><div>

#### Barbarian
- Path of the Ancestral Guardian ( p.9)
- Path of the Berserker (PHB p.49)
- Path of the Storm Herald (XGtE p.10)
- Path of the Totem Warrior (PHB p.50)
- Path of the Zealot (XGtE p.11)

</div><div>

#### Bard
- College of Glamour (XGtE p.14)
- College of Lore (PHB p.54)
- College of Swords (XGtE p.15)
- College of Valor (PHB p.55)
- College of Whispers (XGtE p.16)
- College of Dirges [(3rd party)](http://walrock-homebrew.blogspot.com/2017/01/bardic-college-college-of-dirges-second.html)

</div><div>

#### Cleric
- Forge Domain (XGtE p.18)
- Grave Domain (XGtE p.19)
- Knowledge Domain (PHB p.59)
- Life Domain (PHB p.60)
- Light Domain (PHB p.60)
- Nature Domain (PHB p.61)
- Tempest Domain (PHB p.62)
- Trickery Domain (PHB p.62)
- War Domain (PHB p.63)
- Civilization Domain [(3rd party)](http://walrock-homebrew.blogspot.com/2016/04/divine-domain-civilization-second-draft.html)
- Madness Domain [(3rd party)](http://walrock-homebrew.blogspot.com/2016/04/divine-domain-madness-second-draft.html)
- Technology Domain [(3rd party)](http://walrock-homebrew.blogspot.com/2016/05/divine-domain-technology-second-draft.html)
- Winter Domain [(3rd party)](http://walrock-homebrew.blogspot.com/2017/10/divine-domain-winter-fourth-draft.html)

</div><div>

#### Druid
- Circle of Dreams (XGtE p.22)
- Circle of the Land (PHB p.68)
- Circle of the Moon (PHB p.69)
- Circle of the Shepherd (XGtE p.23)
- Circle of the City [(3rd party)](https://walrock-homebrew.blogspot.com/2017/10/druid-circle-circle-of-city-rough-draft.html)

</div><div>

#### Fighter
- Arcane Archer (XGtE p.28)
- Battle Master (PHB p.73)
- Cavalier (XGtE p.30)
- Champion (PHB p.72)
- Eldritch Knight (PHB p.74)
- Samurai (XGtE p.31)
- Brawler [(3rd party)](http://walrock-homebrew.blogspot.com/2017/01/these-days-i-really-try-to-finish-up.html)
- Centurion [(3rd party)](http://walrock-homebrew.blogspot.com/2018/05/martial-archetype-centurion-rough-draft.html)

</div><div>

#### Monk
- Way of the Drunken Master (XGtE p.33)
- Way of the Four Elements (PHB p.80)
- Way of the Kensei (XGtE p.34)
- Way of the Open Hand (PHB p.79)
- Way of Shadow (PHB p.80)
- Way of the Sun Soul (XGtE p.35)
- Zen Archer [(3rd party)](http://walrock-homebrew.blogspot.com/2017/02/monastic-tradition-way-of-zen-archer.html)

</div><div>

#### Paladin
- Oath of the Ancients (PHB p.86)
- Oath of Conquest (XGtE p.37)
- Oath of Devotion (PHB p.85)
- Oath of Redemption (XGtE p.38)
- Oath of Vengeance (PHB p.87)
- Oath of Free Commerce [(3rd party)](http://walrock-homebrew.blogspot.com/2015/08/sacred-oath-oath-of-free-commerce.html)
- Oath of Knaver [(3rd party)y](http://walrock-homebrew.blogspot.com/2015/09/sacred-oath-oath-of-knavery-second-draft.html)
- Oath of Love [(3rd party)](http://walrock-homebrew.blogspot.com/2016/07/sacred-oath-oath-of-love-remaster.html)
- Oath of the Comman Man [(3rd party)](http://walrock-homebrew.blogspot.com/2015/08/sacred-oath-oath-of-common-man-second.html)
- Oath of the Hellsworn [(3rd party)](http://walrock-homebrew.blogspot.com/2016/07/sacred-oath-oath-of-hellsworn-second.html)
- Oath of the Midnight Hour [(3rd party)](http://walrock-homebrew.blogspot.com/2017/01/sacred-oath-oath-of-midnight-hour-third.html)

</div><div>

#### Ranger
- Beast Master (PHB p.93)
- Gloom Stalker (XGtE p.41)
- Horizon Walker (XGtE p.42)
- Hunter (PHB p.93)
- Monster Slayer (XGtE p.43)

</div><div>

#### Rogue
- Arcane Trickster (PHB p.97)
- Assassin (PHB p.97)
- Inquisitive (XGtE p.45)
- Mastermind (XGtE p.46)
- Scout (XGtE p.47)
- Swashbuckler (XGtE p.47)
- Thief (PHB p.97)
- Archaeologist [(3rd party)](https://walrock-homebrew.blogspot.com/2017/11/roguish-archetype-archaeologist-third.html)
- Corsair [(3rd party)](http://walrock-homebrew.blogspot.com/2017/01/roguish-archetype-corsair-third-draft.html)
- Daggermaster [(3rd party)](http://walrock-homebrew.blogspot.com/2017/09/roguish-archetype-daggermaster-rough.html)
- Huckster [(3rd party)](http://walrock-homebrew.blogspot.com/2016/03/roguish-archetype-huckster-second-draft.html)
- Jester [(3rd party)](http://walrock-homebrew.blogspot.com/2018/06/roguish-archetype-jester-fifth-draft.html)
- Ninja [(3rd party)](http://walrock-homebrew.blogspot.com/2016/04/roguish-archetype-ninja-second-draft.html)
- Shadow-Weaver [(3rd party)](http://walrock-homebrew.blogspot.com/2017/09/roguish-archetype-shadow-weaver-third.html)

</div><div>

#### Sorcerer
- Divine Soul (XGtE p.50)
- Draconic Bloodline (PHB p.102)
- Shadow Magic (XGtE p.50)
- Storm Sorcery (XGtE p.51)
- Wild Magic (PHB p.103)

</div><div>

#### Warlock
- The Archfey (PHB p.108)
- The Celestial (XGtE p.54)
- The Fiend (PHB p.109)
- The Great Old One (PHB p.109)
- The Hexblade (XGtE p.55)
- The Divine Arbiter [(3rd party)](http://walrock-homebrew.blogspot.com/2015/07/otherworldly-patron-divine-arbiter.html)
- The Fathom Horror [(3rd party)](https://walrock-homebrew.blogspot.com/2017/11/otherworldly-patron-fathom-horror-third.html)
- The Fungal Lord [(3rd party)](http://walrock-homebrew.blogspot.com/2017/01/otherworldly-patron-fungal-lord-second.html)
- The Monstrosity [(3rd party)](http://walrock-homebrew.blogspot.com/2017/12/otherworldly-patron-monstrosity.html)
- The Umbral Lurker [(3rd party)](http://walrock-homebrew.blogspot.com/2015/07/otherworldly-patron-umbral-lurker.html)

</div><div>

#### Wizard
- School of Abjuration (PHB p.115)
- School of Conjuration (PHB p.116)
- School of Divination (PHB p.116)
- School of Enchantment (PHB p.117)
- School of Evocation (PHB p.117)
- School of Illusion (PHB p.118)
- School of Necromancy (PHB p.118)
- School of Transmutation (PHB p.119)
- War Magic (XGtE p.59)

</div></div>

## Options

You may select backgrounds/feats/spells/items from the following WoTC books: PHB, 
XGtE, RftLW. Additionally, please don't be scared to ask for something homebrew or 
third-party!

<div class="col-4"><div>

### General
- [Class Feature Variants (UA)¹](https://dnd.wizards.com/articles/unearthed-arcana/class-feature-variants)

</div><div>

### Spells
- [Codex of Waves](https://drive.google.com/file/d/1vS2hYJe1JWNMAtF7dEEvGYapUWcytz-A/view?usp=sharing)
- [Opus of Elemental Substance](https://drive.google.com/file/d/1FMCy9QNr0y25dj2BUM10rbPty5752MLY/view?usp=sharing)

</div><div>

## Items
- [Exotic and Expanded Weapons](https://drive.google.com/file/d/1xFQ6YjFJL0OXBpM4bd8eN-VO4JwCf9rD/view?usp=sharing)

</div><div>

### Warlock
- [Great Old One Alternatives](http://walrock-homebrew.blogspot.com/2015/07/alternate-familiars-for-great-old-one.html)
- [Pact Boon Alternatives](http://walrock-homebrew.blogspot.com/2015/07/alternate-familiars-for-great-old-one.html)

</div></div>

1. Seriously check this, it's spitting straight fire. Fixed ranger, buffs for weaker classes, more options for less dynamic classes.

#### Bonus Feat

All characters get a bonus feat at 1st level.
`;
preact__WEBPACK_IMPORTED_MODULE_1__["render"]([
    preact__WEBPACK_IMPORTED_MODULE_1__["h"](pages_shared__WEBPACK_IMPORTED_MODULE_3__["PageHeader"], { title: "Reign of Strahd - Character Options" }),
    preact__WEBPACK_IMPORTED_MODULE_1__["h"]("div", { class: "panel" },
        preact__WEBPACK_IMPORTED_MODULE_1__["h"](scripts_components_Markdown__WEBPACK_IMPORTED_MODULE_2__["Markdown"], { source: markdownSource })),
    preact__WEBPACK_IMPORTED_MODULE_1__["h"](pages_shared__WEBPACK_IMPORTED_MODULE_3__["PageFooter"], null)
], document.body);


/***/ })

},[["./src/pages/reignofstrahd/characters.tsx","runtime","vendors~home~reignArc1~reignCharacters~reignRules~toolsEncrypt~._node_modules_a","vendors~home~reignArc1~reignCharacters~reignRules~._node_modules_d","home~reignArc1~reignCharacters~reignRules~toolsEncrypt~._i","home~reignArc1~reignCharacters~reignRules~._src_scripts_components_Markdown.tsx~bb65f013"]]]);
//# sourceMappingURL=reignCharacters~._src_pages_reignofstrahd_characters.tsx~5638801c_b64a7d27fa3e4c517ddc.js.map