/* *************************************************************** **
** * ©2020 Michael Baker (project@absolutelynot.moe) | AGPL v3.0 * **
** *************************************************************** */

import * as Preact from "preact";

interface CopyrightNoticeProps {
    published: number,
    author: string,
    licence: string,
}

export function CopyrightNotice(props: CopyrightNoticeProps) {
    const {published, author, licence} = props;
    const current = new Date().getFullYear();
    return <span>{
        current === published 
            ? `©${published} ${author} // ${licence}` 
            : `©${published} - ${current} ${author} // ${licence}`
    }</span>;
}