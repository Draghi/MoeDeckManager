(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home~oasisIndex~reignArc1~reignCharacters~reignRules~toolsEncrypt~._i"],{

/***/ "./src/pages/shared.tsx":
/*!******************************!*\
  !*** ./src/pages/shared.tsx ***!
  \******************************/
/*! exports provided: PageHeader, PageFooter, WebsiteInformation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageHeader", function() { return PageHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageFooter", function() { return PageFooter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteInformation", function() { return WebsiteInformation; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var scripts_components_Copyright__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! scripts/components/Copyright */ "./src/scripts/components/Copyright.tsx");
/* harmony import */ var scripts_components_Dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! scripts/components/Dropdown */ "./src/scripts/components/Dropdown.tsx");
/* *************************************************************** **
** * ©2020 Michael Baker (project@absolutelynot.moe) | AGPL v3.0 * **
** *************************************************************** */



function PageHeader(props) {
    return preact__WEBPACK_IMPORTED_MODULE_0__["h"]("div", { class: "panel page-header" },
        preact__WEBPACK_IMPORTED_MODULE_0__["h"](scripts_components_Dropdown__WEBPACK_IMPORTED_MODULE_2__["default"], { icon: "/static/menu.svg", hideArrow: true },
            preact__WEBPACK_IMPORTED_MODULE_0__["h"]("a", { href: "/", class: "button" }, "Home"),
            preact__WEBPACK_IMPORTED_MODULE_0__["h"](scripts_components_Dropdown__WEBPACK_IMPORTED_MODULE_2__["default"], { text: "ReignOfStrahd", style: { borderTop: "2px solid black" } },
                preact__WEBPACK_IMPORTED_MODULE_0__["h"]("a", { href: "/reignofstrahd/characters.html", class: "button" }, "Character Options"),
                preact__WEBPACK_IMPORTED_MODULE_0__["h"]("a", { href: "/reignofstrahd/rules.html", class: "button" }, "Homebrew Rules")),
            preact__WEBPACK_IMPORTED_MODULE_0__["h"](scripts_components_Dropdown__WEBPACK_IMPORTED_MODULE_2__["default"], { text: "Oasis" },
                preact__WEBPACK_IMPORTED_MODULE_0__["h"]("a", { href: "/oasis", class: "button" }, "Index")),
            preact__WEBPACK_IMPORTED_MODULE_0__["h"](scripts_components_Dropdown__WEBPACK_IMPORTED_MODULE_2__["default"], { text: "Admin", style: { borderTop: "2px solid black" } },
                preact__WEBPACK_IMPORTED_MODULE_0__["h"]("a", { href: "/admin/encrypt", class: "button" }, "Encrypt"),
                preact__WEBPACK_IMPORTED_MODULE_0__["h"](scripts_components_Dropdown__WEBPACK_IMPORTED_MODULE_2__["default"], { text: "ReignOfStrahd" },
                    preact__WEBPACK_IMPORTED_MODULE_0__["h"]("a", { href: "/admin/reign/arc1.html", class: "button" }, "Origins")))),
        preact__WEBPACK_IMPORTED_MODULE_0__["h"]("div", { class: "panel-content" },
            preact__WEBPACK_IMPORTED_MODULE_0__["h"]("h1", null,
                " ",
                props.title,
                " ")));
}
function PageFooter(props) {
    return preact__WEBPACK_IMPORTED_MODULE_0__["h"]("div", { class: "page-footer panel" },
        preact__WEBPACK_IMPORTED_MODULE_0__["h"](scripts_components_Copyright__WEBPACK_IMPORTED_MODULE_1__["CopyrightNotice"], { published: 2020, author: WebsiteInformation.author, licence: WebsiteInformation.licence }));
}
const WebsiteInformation = {
    author: "Michael J. Baker",
    licence: "AGPLv3"
};


/***/ }),

/***/ "./src/scripts/components/Copyright.tsx":
/*!**********************************************!*\
  !*** ./src/scripts/components/Copyright.tsx ***!
  \**********************************************/
/*! exports provided: CopyrightNotice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CopyrightNotice", function() { return CopyrightNotice; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* *************************************************************** **
** * ©2020 Michael Baker (project@absolutelynot.moe) | AGPL v3.0 * **
** *************************************************************** */

function CopyrightNotice(props) {
    const { published, author, licence } = props;
    const current = new Date().getFullYear();
    return preact__WEBPACK_IMPORTED_MODULE_0__["h"]("span", null, current === published
        ? `©${published} ${author} // ${licence}`
        : `©${published} - ${current} ${author} // ${licence}`);
}


/***/ }),

/***/ "./src/scripts/components/Dropdown.tsx":
/*!*********************************************!*\
  !*** ./src/scripts/components/Dropdown.tsx ***!
  \*********************************************/
/*! exports provided: DropDir, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropDir", function() { return DropDir; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Dropdown; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var _PureComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PureComponent */ "./src/scripts/components/PureComponent.tsx");
/* *************************************************************** **
** * ©2020 Michael Baker (project@absolutelynot.moe) | AGPL v3.0 * **
** *************************************************************** */


var DropDir;
(function (DropDir) {
    DropDir[DropDir["BottomDown"] = 0] = "BottomDown";
    DropDir[DropDir["TopUp"] = 1] = "TopUp";
    DropDir[DropDir["LeftDown"] = 2] = "LeftDown";
    DropDir[DropDir["LeftUp"] = 3] = "LeftUp";
    DropDir[DropDir["RightDown"] = 4] = "RightDown";
    DropDir[DropDir["RightUp"] = 5] = "RightUp";
})(DropDir || (DropDir = {}));
class Dropdown extends _PureComponent__WEBPACK_IMPORTED_MODULE_1__["PureComponent"] {
    constructor() {
        super(...arguments);
        this.state = {
            showMenu: false
        };
        this.ref = null;
        this.onDocumentClick = (ev) => {
            if (!this.ref)
                return;
            if (this.ref !== ev.target && !this.ref.contains(ev.target)) {
                this.setState({ showMenu: false });
            }
        };
    }
    componentDidMount() {
        document.addEventListener("click", this.onDocumentClick);
    }
    componentWillUnmount() {
        document.removeEventListener("click", this.onDocumentClick);
    }
    render() {
        var _a;
        const { text, tooltip, icon, children, hideArrow } = this.props;
        const direction = (_a = this.props.direction) !== null && _a !== void 0 ? _a : DropDir.BottomDown;
        const { showMenu } = this.state;
        const imgDropdown = this.getDropdownImage(direction);
        const branchDir = this.getBranchDirection(direction);
        return preact__WEBPACK_IMPORTED_MODULE_0__["h"]("div", { class: "dropdown", ref: ref => this.ref = ref, style: this.props.style },
            icon
                ? preact__WEBPACK_IMPORTED_MODULE_0__["h"]("img", { class: "dropdown-button button", title: tooltip, tabIndex: 0, onFocus: () => this.setState({ showMenu: true }), src: icon })
                : preact__WEBPACK_IMPORTED_MODULE_0__["h"]("div", { class: "dropdown-button button", title: tooltip, tabIndex: 0, onFocus: () => this.setState({ showMenu: true }), style: { backgroundImage: `url(${imgDropdown !== null && imgDropdown !== void 0 ? imgDropdown : ""})`, ...this.getDropdownBackgroundLocation(direction) } }, text),
            !showMenu ? null :
                preact__WEBPACK_IMPORTED_MODULE_0__["h"]("div", { class: `content ${this.getDropdownContentClass(direction)}` },
                    preact__WEBPACK_IMPORTED_MODULE_0__["h"]("div", { class: "group-vertical" }, preact__WEBPACK_IMPORTED_MODULE_0__["toChildArray"](children).map(v => {
                        var _a, _b, _c, _d;
                        // If button text exists, and direction isn't set, clone and set default direction.
                        if (((_b = (_a = v) === null || _a === void 0 ? void 0 : _a.props) === null || _b === void 0 ? void 0 : _b.text) && (((_d = (_c = v) === null || _c === void 0 ? void 0 : _c.props) === null || _d === void 0 ? void 0 : _d.direction) == null)) {
                            return preact__WEBPACK_IMPORTED_MODULE_0__["cloneElement"](v, { direction: branchDir });
                        }
                        return v;
                    }))));
    }
    getDropdownContentClass(direction) {
        switch (direction) {
            case DropDir.BottomDown: return "bottom-down";
            case DropDir.TopUp: return "top-up";
            case DropDir.LeftDown: return "left-down";
            case DropDir.LeftUp: return "left-up";
            case DropDir.RightDown: return "right-down";
            case DropDir.RightUp: return "right-up";
            default: return "";
        }
    }
    getDropdownBackgroundLocation(direction) {
        if ((direction === DropDir.LeftDown) || (direction === DropDir.LeftUp)) {
            return { backgroundPosition: "left" };
        }
        return { backgroundPosition: "right" };
    }
    getDropdownImage(direction) {
        switch (direction) {
            case DropDir.BottomDown: return "/static/dropdown-down.svg";
            case DropDir.TopUp: return "/static/dropdown-up.svg";
            case DropDir.LeftDown: return "/static/dropdown-left.svg";
            case DropDir.LeftUp: return "/static/dropdown-left.svg";
            case DropDir.RightDown: return "/static/dropdown-right.svg";
            case DropDir.RightUp: return "/static/dropdown-right.svg";
            default: return null;
        }
    }
    getBranchDirection(direction) {
        switch (direction) {
            case DropDir.BottomDown: return DropDir.RightDown;
            case DropDir.TopUp: return DropDir.RightUp;
            case DropDir.LeftDown: return DropDir.LeftDown;
            case DropDir.LeftUp: return DropDir.LeftUp;
            case DropDir.RightDown: return DropDir.RightDown;
            case DropDir.RightUp: return DropDir.RightUp;
            default: return DropDir.BottomDown;
        }
    }
}


/***/ }),

/***/ "./src/scripts/components/PureComponent.tsx":
/*!**************************************************!*\
  !*** ./src/scripts/components/PureComponent.tsx ***!
  \**************************************************/
/*! exports provided: PureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PureComponent", function() { return PureComponent; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var scripts_util_ShallowEqual__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! scripts/util/ShallowEqual */ "./src/scripts/util/ShallowEqual.ts");
/* *************************************************************** **
** * ©2020 Michael Baker (project@absolutelynot.moe) | AGPL v3.0 * **
** *************************************************************** */


class PureComponent extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    shouldComponentUpdate(props, state) {
        return !Object(scripts_util_ShallowEqual__WEBPACK_IMPORTED_MODULE_1__["default"])(this.props, props) || !Object(scripts_util_ShallowEqual__WEBPACK_IMPORTED_MODULE_1__["default"])(this.state, state);
    }
}


/***/ }),

/***/ "./src/scripts/util/ShallowEqual.ts":
/*!******************************************!*\
  !*** ./src/scripts/util/ShallowEqual.ts ***!
  \******************************************/
/*! exports provided: default, shallowEqualObjects, shallowEqualsArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return shallowEquals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shallowEqualObjects", function() { return shallowEqualObjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shallowEqualsArray", function() { return shallowEqualsArray; });
/* *************************************************************** **
** * ©2020 Michael Baker (project@absolutelynot.moe) | AGPL v3.0 * **
** *************************************************************** */
function shallowEquals(valA, valB) {
    if (Array.isArray(valA)) {
        if (!Array.isArray(valB))
            return false;
        return shallowEqualsArray(valA, valB);
    }
    return shallowEqualObjects(valA, valB);
}
function shallowEqualObjects(objA, objB) {
    if (objA === objB)
        return true;
    if ((objA == null) || (objB == null))
        return false;
    const keysA = Object.keys(objA);
    const keysB = Object.keys(objB);
    if (keysA.length !== keysB.length)
        return false;
    for (const key of keysA) {
        if (objA[key] !== objB[key])
            return false;
        if (!Object.prototype.hasOwnProperty.call(objB, key))
            return false;
    }
    return true;
}
function shallowEqualsArray(arrA, arrB) {
    if (arrA === arrB)
        return true;
    if ((arrA == null) || (arrB == null))
        return false;
    if (arrA.length !== arrB.length)
        return false;
    for (let i = 0, len = arrA.length; i < len; i++) {
        if (!shallowEqualObjects(arrA[i], arrB[i]))
            return false;
    }
    return true;
}


/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=home~oasisIndex~reignArc1~reignCharacters~reignRules~toolsEncrypt~._i_dc5c0bc9738032da2668.js.map