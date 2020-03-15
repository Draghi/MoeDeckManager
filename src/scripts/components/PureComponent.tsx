/* *************************************************************** **
** * ©2020 Michael Baker (project@absolutelynot.moe) | AGPL v3.0 * **
** *************************************************************** */

import * as Preact from 'preact';
import shallowEquals from 'scripts/util/ShallowEqual';

export abstract class PureComponent<P = {}, S = {}> extends Preact.Component<P, S> {
    shouldComponentUpdate(props: P, state: S): boolean {
        return !shallowEquals(this.props, props) || !shallowEquals(this.state, state);
    }
} 