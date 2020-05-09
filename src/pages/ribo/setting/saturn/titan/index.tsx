/* *************************************************************** **
** * ©2020 Michael Baker (project@absolutelynot.moe) | AGPL v3.0 * **
** *************************************************************** */

import "styles/index.scss";
import * as Preact from "preact";
import { Markdown } from "scripts/components/Markdown";
import { PageHeader, PageFooter } from "pages/shared";
 
let markdownSource = `
# Olympia
On the sixth moon of Saturn, the second largest natural satelite in the solar system, is
home to one of the greatest cities in the solar system, Olympia.

On the surface, Olympia reaches far into the hydrogen cyanide vortex at the south pole with 
its giant spinning towers, and bellow it plunges through the 200km thick titan ice into the
endless underground ocean. Olympia serves as the main spaceport for the moon, and governs, 
supports and thouroughfare for the deep-sea research and mining outpost, Tartarus, that sits
at the bottom of the ocean, on the ice shell around the core of the planet.
`;

Preact.render([
        <PageHeader title="RFO: Titan"/>,
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