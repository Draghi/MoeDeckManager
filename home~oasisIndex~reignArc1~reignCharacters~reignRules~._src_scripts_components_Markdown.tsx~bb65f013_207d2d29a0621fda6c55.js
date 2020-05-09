(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home~oasisIndex~reignArc1~reignCharacters~reignRules~._src_scripts_components_Markdown.tsx~bb65f013"],{

/***/ "./src/scripts/components/Markdown.tsx":
/*!*********************************************!*\
  !*** ./src/scripts/components/Markdown.tsx ***!
  \*********************************************/
/*! exports provided: Markdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Markdown", function() { return Markdown; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var _PureComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PureComponent */ "./src/scripts/components/PureComponent.tsx");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! marked */ "./node_modules/marked/src/marked.js");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dompurify */ "./node_modules/dompurify/dist/purify.js");
/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dompurify__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! crypto-js */ "./node_modules/crypto-js/index.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_4__);
/* *************************************************************** **
** * ©2020 Michael Baker (project@absolutelynot.moe) | AGPL v3.0 * **
** *************************************************************** */





class Markdown extends _PureComponent__WEBPACK_IMPORTED_MODULE_1__["PureComponent"] {
    render() {
        let { source, encryptionKey, onDecode } = this.props;
        if (encryptionKey) {
            if (!encryptionKey.length)
                return null;
            let decoded = crypto_js__WEBPACK_IMPORTED_MODULE_4___default.a.AES.decrypt(source, encryptionKey).toString(crypto_js__WEBPACK_IMPORTED_MODULE_4___default.a.enc.Utf8);
            if (decoded != "") {
                source = decoded;
                onDecode === null || onDecode === void 0 ? void 0 : onDecode(true);
            }
            else {
                onDecode === null || onDecode === void 0 ? void 0 : onDecode(false);
            }
        }
        return preact__WEBPACK_IMPORTED_MODULE_0__["h"]("div", { className: "markdown", dangerouslySetInnerHTML: { __html: dompurify__WEBPACK_IMPORTED_MODULE_3___default.a.sanitize(marked__WEBPACK_IMPORTED_MODULE_2___default()(source, {
                    gfm: true,
                    headerIds: true,
                    headerPrefix: "header-",
                }))
            } });
    }
}


/***/ })

}]);
//# sourceMappingURL=home~oasisIndex~reignArc1~reignCharacters~reignRules~._src_scripts_components_Markdown.tsx~bb65f013_207d2d29a0621fda6c55.js.map