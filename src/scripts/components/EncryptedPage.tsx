/* *************************************************************** **
** * ©2020 Michael Baker (project@absolutelynot.moe) | AGPL v3.0 * **
** *************************************************************** */

import * as Preact from 'preact';
import { PureComponent } from './PureComponent';
import Marked from 'marked';
import DomPurify from 'dompurify';
import CryptoJS from "crypto-js";
import { Markdown } from './Markdown';

interface EncryptedPageProps {
    source: string,
}

interface EncryptedPageState {
    password: string,
    decodeSuccess: boolean,
}

export class EncryptedPage extends PureComponent<EncryptedPageProps, EncryptedPageState> {

    state: EncryptedPageState = {
        password: "",
        decodeSuccess: false,
    }
    
    render() {
        const { source } = this.props;
        const { password, decodeSuccess } = this.state;

        return <div className="page-content panel">
            {decodeSuccess ? null :
                <div className="panel-content">
                <h1 style={{display:"inline", marginRight:"1ch"}}>Decrypt</h1>
                <input type="password" onChange={v => {
                    this.setState({password: v.currentTarget.value})
                    v.currentTarget.value = "";
                }}/>
            </div>
            }
            <Markdown source={source} encryptionKey={password} onDecode={v => this.setState({decodeSuccess: v})}/>
        </div>
    }

} 
