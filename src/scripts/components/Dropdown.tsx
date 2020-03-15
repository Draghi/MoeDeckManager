/* *************************************************************** **
** * ©2020 Michael Baker (project@absolutelynot.moe) | AGPL v3.0 * **
** *************************************************************** */

import * as Preact from "preact";
import { PureComponent } from "./PureComponent";

export enum DropDir {
    BottomDown,
    TopUp,
    LeftDown,
    LeftUp,
    RightDown,
    RightUp
}

interface DropdownProps {
    text?: string;
    tooltip?: string;
    icon?: string;
    direction?: DropDir;
    hideArrow?: boolean;
    style?: { [key: string]: string | number }
}

interface DropdownState {
    showMenu: boolean;
}

export default class Dropdown extends PureComponent<DropdownProps, DropdownState> {

    state: DropdownState = {
        showMenu: false
    };

    ref: HTMLElement | null= null;

    componentDidMount() {
        document.addEventListener("click", this.onDocumentClick);
    }

    componentWillUnmount() {
        document.removeEventListener("click", this.onDocumentClick);
    }

    onDocumentClick = (ev: MouseEvent) => {
        if (!this.ref) return;
        if (this.ref !== ev.target && !this.ref.contains(ev.target as Node)) {
            this.setState({showMenu: false});
        }
    }

    render() {
        const { text, tooltip, icon, children, hideArrow } = this.props;
        const direction = this.props.direction ?? DropDir.BottomDown;
        const { showMenu } = this.state;

        const imgDropdown = this.getDropdownImage(direction);
        const branchDir   = this.getBranchDirection(direction);

        return <div class="dropdown" ref={ref => this.ref = ref} style={this.props.style}>
            {icon
                ? <img 
                    class="dropdown-button button" 
                    title={tooltip} 
                    tabIndex={0} 
                    onFocus={() => this.setState({showMenu: true})} 
                    src={icon}
                />
                : <div 
                    class="dropdown-button button" 
                    title={tooltip} 
                    tabIndex={0} 
                    onFocus={() => this.setState({showMenu: true})}
                    style={{backgroundImage: `url(${imgDropdown ?? ""})`, ...this.getDropdownBackgroundLocation(direction)}}
                >
                    {text}
                </div>
            }
            

            {!showMenu ? null :
                <div class={`content ${this.getDropdownContentClass(direction)}`}>
                    <div class="group-vertical">
                        {Preact.toChildArray(children).map(v => {
                            // If button text exists, and direction isn't set, clone and set default direction.
                            if (((v as Preact.VNode<DropdownProps>)?.props?.text) && ((v as Preact.VNode<DropdownProps>)?.props?.direction == null)) {
                                return Preact.cloneElement(v as any, {direction: branchDir});
                            }
                            return v;
                        })}
                    </div>
                </div>
            }
        </div>;
    }

    getDropdownContentClass(direction: DropDir) {
        switch(direction) {
            case DropDir.BottomDown: return "bottom-down";
            case DropDir.TopUp:      return "top-up";
            case DropDir.LeftDown:   return "left-down";
            case DropDir.LeftUp:     return "left-up";
            case DropDir.RightDown:  return "right-down";
            case DropDir.RightUp:    return "right-up";
            default:                 return "";
        }
    }

    getDropdownBackgroundLocation(direction: DropDir) {
        if ((direction === DropDir.LeftDown) || (direction === DropDir.LeftUp)) {
            return {backgroundPosition: "left"}; 
        }
        return {backgroundPosition: "right"}; 
    }

    getDropdownImage(direction: DropDir): string | null {
        switch(direction) {
            case DropDir.BottomDown: return "/static/dropdown-down.svg";
            case DropDir.TopUp:      return "/static/dropdown-up.svg";
            case DropDir.LeftDown:   return "/static/dropdown-left.svg";
            case DropDir.LeftUp:     return "/static/dropdown-left.svg";
            case DropDir.RightDown:  return "/static/dropdown-right.svg";
            case DropDir.RightUp:    return "/static/dropdown-right.svg";
            default:                 return null;
        }
    }

    getBranchDirection(direction: DropDir): DropDir {
        switch(direction) {
            case DropDir.BottomDown: return DropDir.RightDown;
            case DropDir.TopUp:      return DropDir.RightUp;
            case DropDir.LeftDown:   return DropDir.LeftDown;
            case DropDir.LeftUp:     return DropDir.LeftUp;
            case DropDir.RightDown:  return DropDir.RightDown;
            case DropDir.RightUp:    return DropDir.RightUp;
            default:                 return DropDir.BottomDown;
        }
    }

}