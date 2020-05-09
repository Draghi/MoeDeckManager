/* *************************************************************** **
** * ©2020 Michael Baker (project@absolutelynot.moe) | AGPL v3.0 * **
** *************************************************************** */

import "styles/index.scss";
import * as Preact from "preact";
import { PageHeader, PageFooter } from "pages/shared";
import { PureComponent } from "scripts/components/PureComponent";
import CryptoJS from "crypto-js";
 
interface EncryptContentProps {

}

interface EncryptContentState {
    content: string,
    password: string,
    encryptedData: string
}

class EncryptContent extends PureComponent<EncryptContentProps, EncryptContentState> {

    state: EncryptContentState = {
        content: "",
        password: "",
        encryptedData: "",
    }

    componentDidUpdate(oldProps: EncryptContentProps, oldState: EncryptContentState) {
        if ((oldState.content !== this.state.content) || (oldState.password !== this.state.password)) {
            
            this.setState({
                encryptedData: this.state.content.length && this.state.password.length
                    ? CryptoJS.AES.encrypt(this.state.content, this.state.password).toString()
                    : ""
            });
        }
    }

    render() {
        return <div class="page-content panel">
            <h1 class="panel-content">Encrypt</h1>

            <div class="panel-content">
                    <div style={{width:"100%"}}>
                    <h3>Content</h3>
                    <textarea style={{width:"100%"}} onChange={v => this.setState({content: v.currentTarget.value})}/>
                </div>

                <div>
                    <h3>Password</h3>
                    <input type="password" onChange={v => this.setState({password: v.currentTarget.value})}/>
                </div>

                <div>
                    <h3>Encrypted and Encoded</h3>
                    <textarea style={{width:"100%"}} value={this.state.encryptedData}/>
                </div>
                
            </div>
        </div>;
    }
}

Preact.render([
        <PageHeader title="Title"/>,
        <EncryptContent/>,
        <PageFooter/>
    ],
    document.body
);