/* *************************************************************** **
** * ©2020 Michael Baker (project@absolutelynot.moe) | AGPL v3.0 * **
** *************************************************************** */

import * as Preact from 'preact';
import { PureComponent } from './PureComponent';
import Marked from 'marked';
import DomPurify from 'dompurify';
import CryptoJS from "crypto-js";

interface MarkdownProps {
    source: string,
    encryptionKey?: string,
    onDecode?:(success: boolean) => void
}

export class Markdown extends PureComponent<MarkdownProps> {
    
    render() {
        let { source, encryptionKey, onDecode } = this.props;

        if (encryptionKey) {
            if (!encryptionKey.length) return null;
            let decoded = CryptoJS.AES.decrypt(source, encryptionKey).toString(CryptoJS.enc.Utf8);
            if (decoded != "") {
                source = decoded;
                onDecode?.(true);
            } else {
                onDecode?.(false);
            }
        }

        return <div className="markdown" dangerouslySetInnerHTML={{__html: 
            DomPurify.sanitize(
                Marked(source, {
                    gfm: true,
                    headerIds: true,
                    headerPrefix: "header-",
                })
            )
        }}/>
    }

} 