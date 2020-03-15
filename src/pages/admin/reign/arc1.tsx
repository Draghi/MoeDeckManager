/* *************************************************************** **
** * ©2020 Michael Baker (project@absolutelynot.moe) | AGPL v3.0 * **
** *************************************************************** */

import "styles/index.scss";
import * as Preact from "preact";
import { PageHeader, PageFooter } from "pages/shared";
import { EncryptedPage } from "scripts/components/EncryptedPage";
import txt from "./arc1.aes";

Preact.render([
        <PageHeader title="Encrypted Page - Origins"/>,
        <EncryptedPage source={txt}/>,
        <PageFooter/>
    ],
    document.body
);