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
Welcome to Oasis state, a special administrative region of the great country of .


Central Eurasia Union

</section>

# Quick Links
  - [Resolution](/oasis/resolution)

`;

Preact.render([
        <PageHeader title="Oasis - Index"/>,
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