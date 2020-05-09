/* *************************************************************** **
** * ©2020 Michael Baker (project@absolutelynot.moe) | AGPL v3.0 * **
** *************************************************************** */

import "styles/index.scss";
import * as Preact from "preact";
import { Markdown } from "scripts/components/Markdown";
import { PageHeader, PageFooter } from "./shared";
 
let html = `
### Welcome to the NotVeryMoe homepage.

There's not much here yet, and it's a mess of a codebase, but make yourself at home.
`;

Preact.render([
        <PageHeader title="Not Very Moe"/>,
        <div class="page-content panel"><Markdown source={html}/></div>,
        <PageFooter/>
    ],
    document.body
);