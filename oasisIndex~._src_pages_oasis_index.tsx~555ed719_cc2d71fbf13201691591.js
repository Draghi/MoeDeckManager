(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["oasisIndex~._src_pages_oasis_index.tsx~555ed719"],{

/***/ "./src/pages/oasis/index.tsx":
/*!***********************************!*\
  !*** ./src/pages/oasis/index.tsx ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var styles_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styles_index_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var scripts_components_Markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! scripts/components/Markdown */ "./src/scripts/components/Markdown.tsx");
/* harmony import */ var pages_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pages/shared */ "./src/pages/shared.tsx");
/* *************************************************************** **
** * ©2020 Michael Baker (project@absolutelynot.moe) | AGPL v3.0 * **
** *************************************************************** */




let markdownSource = `
# Introduction
<section>
Welcome to Oasis state, a special administrative region of the great country of .


Central Eurasia Union

</section>

# Quick Links
  - [Resolution](/oasis/resolution)

`;
preact__WEBPACK_IMPORTED_MODULE_1__["render"]([
    preact__WEBPACK_IMPORTED_MODULE_1__["h"](pages_shared__WEBPACK_IMPORTED_MODULE_3__["PageHeader"], { title: "Oasis - Index" }),
    preact__WEBPACK_IMPORTED_MODULE_1__["h"]("div", { class: "page-content panel" },
        preact__WEBPACK_IMPORTED_MODULE_1__["h"](scripts_components_Markdown__WEBPACK_IMPORTED_MODULE_2__["Markdown"], { source: markdownSource
                .replace(/    +/g, "") // Stop codeblocks
                .replace(/\<section>+/g, "<section>\n") // Break up section blocks
                .replace(/\n#/g, "\n\n#") // Break up header blocks
         })),
    preact__WEBPACK_IMPORTED_MODULE_1__["h"](pages_shared__WEBPACK_IMPORTED_MODULE_3__["PageFooter"], null)
], document.body);


/***/ })

},[["./src/pages/oasis/index.tsx","runtime","vendors~home~oasisIndex~reignArc1~reignCharacters~reignRules~toolsEncrypt~._node_modules_a","vendors~home~oasisIndex~reignArc1~reignCharacters~reignRules~._node_modules_d","home~oasisIndex~reignArc1~reignCharacters~reignRules~toolsEncrypt~._i","home~oasisIndex~reignArc1~reignCharacters~reignRules~._src_scripts_components_Markdown.tsx~bb65f013"]]]);
//# sourceMappingURL=oasisIndex~._src_pages_oasis_index.tsx~555ed719_cc2d71fbf13201691591.js.map