/* *************************************************************** **
** * ©2020 Michael Baker (project@absolutelynot.moe) | AGPL v3.0 * **
** *************************************************************** */

import * as Preact from "preact";
import { CopyrightNotice } from "scripts/components/Copyright";
import Dropdown from 'scripts/components/Dropdown';

interface PageHeaderProps {
    title: string;
}

export function PageHeader(props: PageHeaderProps) {
    return <div class="panel page-header">
            <Dropdown icon="/static/menu.svg" hideArrow={true}>
                <a href="/" class="button">Home</a>
                <Dropdown text="ReignOfStrahd" style={{borderTop:"2px solid black"}}>
                    <a href="/reignofstrahd/characters.html" class="button">Character Options</a>
                    <a href="/reignofstrahd/rules.html"      class="button">Homebrew Rules</a>
                </Dropdown>
                <Dropdown text="Oasis">
                    <a href="/oasis" class="button">Index</a>
                </Dropdown>
                <Dropdown text="Admin" style={{borderTop:"2px solid black"}}>
                    <a href="/admin/encrypt" class="button">Encrypt</a>
                    <Dropdown text="ReignOfStrahd">
                        <a href="/admin/reign/arc1.html" class="button">Origins</a>
                    </Dropdown>
                </Dropdown>
            </Dropdown>
            <div class="panel-content">
                <h1> {props.title} </h1>
            </div>
    </div>;
}

export function PageFooter(props: {}) {
    return <div class="page-footer panel">
        <CopyrightNotice 
            published={2020} 
            author={WebsiteInformation.author} 
            licence={WebsiteInformation.licence}
        />
    </div>;
}

export const WebsiteInformation = {
    author: "Michael J. Baker",
    licence: "AGPLv3"
}