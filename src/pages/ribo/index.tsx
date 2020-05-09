/* *************************************************************** **
** * ©2020 Michael Baker (project@absolutelynot.moe) | AGPL v3.0 * **
** *************************************************************** */

import "styles/index.scss";
import * as Preact from "preact";
import { Markdown } from "scripts/components/Markdown";
import { PageHeader, PageFooter } from "pages/shared";
 
let markdownSource = `
# Introduction
<section>
    Welcome! This is the core rulebook for the Ribofunk: Outerwest (RFO) sci-fi tabletop RPG system. It 
    leverages a unique playing-card based resolution mechanic to play out biotechnology-heavy scenerios
    with and classless, leveless, characters and analog-era technology in both city and rural environments.

    Think _wild west_ meets _mad scientists_, _megacities_ and that analog-industrial aesthetic from 
    the _Alien_ movies.
</section>

# What this "Ribofunk" thing?
<section>
    Ribofunk is a term coined by author [Paul Di Filippo](https://en.wikipedia.org/wiki/Paul_Di_Filippo) 
    to describe a science fiction setting where, instead of computer systems coming to dominate technological 
    development, biotechnology does instead. A world where computers are "Merely simulators and modelers for life." 
    and "The cell is king". It can be likened to cyberpunk, but that would be a disservice. Where Cyberpunk is 
    nihilistic, Ribofunk cracks the funk up to 11. Ribofunk is to Cyberpunk what a space western is to a western, 
    or a pulp novel is to an action novel. There's hope and humour in Ribofunk, but it's weird, cheesey and it 
    doesn't care if stains your carpet.

    However, do keep in mind that this system isn't actually well-informed by a supporting body of literature.
</section>

# Quick Links
  - [Resolution](/ribo/resolution)

# Setting (Saturn)
  - [Titan](/ribo/setting/saturn/titan)
`;

Preact.render([
        <PageHeader title="Ribofunk: Outerwest"/>,
        <div class="page-content panel">
            <Markdown source={markdownSource
                .replace(      /    +/g, ""           ) // Stop codeblocks
                .replace(/\<section>+/g, "<section>\n") // Break up section blocks
                .replace(        /\n#/g, "\n\n#"      ) // Break up header blocks
            }/>
        </div>,
        <PageFooter/>
    ],
    document.body
);