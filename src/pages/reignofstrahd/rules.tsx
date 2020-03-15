/* *************************************************************** **
** * ©2020 Michael Baker (project@absolutelynot.moe) | AGPL v3.0 * **
** *************************************************************** */

import "styles/index.scss";
import * as Preact from "preact";
import { Markdown } from "scripts/components/Markdown";
import { PageHeader, PageFooter } from "pages/shared";
 
let markdownSource = `
## General

<div class="col-2"><div>

### Teleportation

Teleportation effects that teleport you into a space you
can see have the following additional requirements:
- The destination must be a point on a surface
  (ie. not floating in air/water)
- You must have an unobstructed path to the
  location along your line-of-sight (ie. You can
  teleport through wire-mesh or prison bars, but
  not teleport through glass)
</div><div >

### Mistletoe

Mistletoe costs 1gp, is not found in a spell component pouch and is consumed by spells.

</div><div >

### Slow Natural Healing

During a long rest a character does not fully heal, instead they gain a number of HP equal to their character level + Con Mod (Min. 1). You may spend any number of hit-dice to regain additional HP, as you would in a short rest. You can perform this both before and after regaining hit dice (ie. You have 10 total, 7 remaining. First, you spend 2, regain 5 and then spend those 5, leaving you with a total of 5)

</div><div >

### More Difficult Identification

Items are not identified by a short rest and require the
identification spell or experimentation or both to
discover their effects. Also note that curses wouldn't
be curses if they were trivial to identify.

</div></div>

## Combat

<div class="col-2"><div >

### Combat Fatigue

The first failed death saving throw you make gives you 'Combat Fatigue'.
After 1 minute or whenever they reach 0hp again, those with 'Combat 
Fatigue' exchange it for 1 level of exhaustion . 'Combat Fatigue' cannot 
increase exhaustion above level 3 and does not stack with itself.

</div><div >

### Flanking

Nope. Sorry. Consider the "Help" action.

</div><div >

### Thrown Weapons

Whenever you throw a weapon with the thrown property, you may immediately draw a weapon with both the light and thrown properties, provided you have one within easy reach.

</div><div >

### Touch Spells

Touch spells can be case and held using your concentration until they're use or concentration ends. Unintentional touches don't trigger the spell, including someone purposefully touching you.

</div></div>
`;

Preact.render([
        <PageHeader title="Reign of Strahd - Homebrew Rules"/>,
        <div class="panel"><Markdown source={markdownSource}/></div>,
        <PageFooter/>
    ],
    document.body
);