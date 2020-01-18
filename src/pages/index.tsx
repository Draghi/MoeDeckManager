/* ************************************************************************* *
 * * ©2020 Michael Baker (project@absolutelynot.moe) | Apache License v2.0 * *
 * ************************************************************************* */

import "styles/index.scss";
import * as Preact from "preact";

Preact.render(
    <div class="panel">
        <div class="panel-content">
            <h1> Oh noes! It works! </h1>
        </div>
        <div class="panel-content">
            <p> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
                sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                mollit anim id est laborum.
            </p>
        </div>
        <div class="panel-content">©2020 Michael Baker // Apache License v2.0</div>
    </div>,
    document.body
);