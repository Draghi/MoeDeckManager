(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["toolsEncrypt~._src_pages_admin_encrypt_index.tsx~91727d01"],{

/***/ "./src/pages/admin/encrypt/index.tsx":
/*!*******************************************!*\
  !*** ./src/pages/admin/encrypt/index.tsx ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var styles_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styles_index_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var pages_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pages/shared */ "./src/pages/shared.tsx");
/* harmony import */ var scripts_components_PureComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! scripts/components/PureComponent */ "./src/scripts/components/PureComponent.tsx");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! crypto-js */ "./node_modules/crypto-js/index.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_4__);
/* *************************************************************** **
** * ©2020 Michael Baker (project@absolutelynot.moe) | AGPL v3.0 * **
** *************************************************************** */





class EncryptContent extends scripts_components_PureComponent__WEBPACK_IMPORTED_MODULE_3__["PureComponent"] {
    constructor() {
        super(...arguments);
        this.state = {
            content: "",
            password: "",
            encryptedData: "",
        };
    }
    componentDidUpdate(oldProps, oldState) {
        if ((oldState.content !== this.state.content) || (oldState.password !== this.state.password)) {
            this.setState({
                encryptedData: this.state.content.length && this.state.password.length
                    ? crypto_js__WEBPACK_IMPORTED_MODULE_4___default.a.AES.encrypt(this.state.content, this.state.password).toString()
                    : ""
            });
        }
    }
    render() {
        return preact__WEBPACK_IMPORTED_MODULE_1__["h"]("div", { class: "page-content panel" },
            preact__WEBPACK_IMPORTED_MODULE_1__["h"]("h1", { class: "panel-content" }, "Encrypt"),
            preact__WEBPACK_IMPORTED_MODULE_1__["h"]("div", { class: "panel-content" },
                preact__WEBPACK_IMPORTED_MODULE_1__["h"]("div", { style: { width: "100%" } },
                    preact__WEBPACK_IMPORTED_MODULE_1__["h"]("h3", null, "Content"),
                    preact__WEBPACK_IMPORTED_MODULE_1__["h"]("textarea", { style: { width: "100%" }, onChange: v => this.setState({ content: v.currentTarget.value }) })),
                preact__WEBPACK_IMPORTED_MODULE_1__["h"]("div", null,
                    preact__WEBPACK_IMPORTED_MODULE_1__["h"]("h3", null, "Password"),
                    preact__WEBPACK_IMPORTED_MODULE_1__["h"]("input", { type: "password", onChange: v => this.setState({ password: v.currentTarget.value }) })),
                preact__WEBPACK_IMPORTED_MODULE_1__["h"]("div", null,
                    preact__WEBPACK_IMPORTED_MODULE_1__["h"]("h3", null, "Encrypted and Encoded"),
                    preact__WEBPACK_IMPORTED_MODULE_1__["h"]("textarea", { style: { width: "100%" }, value: this.state.encryptedData }))));
    }
}
preact__WEBPACK_IMPORTED_MODULE_1__["render"]([
    preact__WEBPACK_IMPORTED_MODULE_1__["h"](pages_shared__WEBPACK_IMPORTED_MODULE_2__["PageHeader"], { title: "Title" }),
    preact__WEBPACK_IMPORTED_MODULE_1__["h"](EncryptContent, null),
    preact__WEBPACK_IMPORTED_MODULE_1__["h"](pages_shared__WEBPACK_IMPORTED_MODULE_2__["PageFooter"], null)
], document.body);


/***/ })

},[["./src/pages/admin/encrypt/index.tsx","runtime","vendors~home~oasisIndex~reignArc1~reignCharacters~reignRules~toolsEncrypt~._node_modules_a","home~oasisIndex~reignArc1~reignCharacters~reignRules~toolsEncrypt~._i"]]]);
//# sourceMappingURL=toolsEncrypt~._src_pages_admin_encrypt_index.tsx~91727d01_187988910ac7a4f39607.js.map