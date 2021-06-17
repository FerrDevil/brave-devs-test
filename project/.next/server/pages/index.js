(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Page; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _document__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./document */ "./pages/document.tsx");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-modal */ "react-modal");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "C:\\Users\\\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440.WIN-MF8AQNB7BFV\\Desktop\\proj\\project\\pages\\index.tsx";






const operatorsList = [{
  name: "Мегафон",
  img: "/megafon.png",
  size: [350, 350],
  href: "megafon"
}, {
  name: "МТС",
  img: "/mts.png",
  size: [350, 350],
  href: "MTC"
}, {
  name: "Билайн",
  img: "/beeline.png",
  size: [350, 350],
  href: "beeline"
}];

const Operators = () => {
  const {
    0: operators,
    1: setOperators
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(operatorsList);
  const {
    0: modalIsOpen,
    1: setIsOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const {
    0: name,
    1: setName
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
  const {
    0: filePath,
    1: setFilePath
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
  const {
    0: href,
    1: setHref
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
  const modalStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)"
    }
  };

  const OnChangeName = e => {
    setName(e.target.value);
  };

  const OnChangeFilePath = e => {
    setFilePath(e.target.value);
  };

  const OnChangeHref = e => {
    setHref(e.target.value);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const addOpModal = () => {
    console.log(name, filePath, href);
    const newop = {
      name: name ? name : "Default",
      img: filePath ? filePath : "/default.png",
      size: [350, 350],
      href: href ? href : "default"
    };
    setOperators(prev => [...prev, newop]);
    setIsOpen(!modalIsOpen);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(OpsFlex, {
    children: [operators.map(i => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Operator, {
      operator: i
    }, i.name, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }, undefined)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AddNewOp, {
      onClick: openModal,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AddNewOpImage, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
          layout: "responsive",
          src: "/plus.png",
          alt: "plus",
          width: 350,
          height: 350
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_modal__WEBPACK_IMPORTED_MODULE_6___default()), {
      isOpen: modalIsOpen,
      onRequestClose: closeModal,
      contentLabel: "Example Modal",
      style: modalStyles,
      ariaHideApp: false,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ModalBody, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ModalHeader, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
            children: "\u041E\u043A\u043D\u043E \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u043E\u0432"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ModalHeaderButton, {
            onClick: closeModal,
            children: "\u2716"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Form, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Input, {
            type: "text",
            onChange: OnChangeName,
            placeholder: "Название оператора"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Input, {
            type: "text",
            onChange: OnChangeFilePath,
            placeholder: "\u041F\u0443\u0442\u044C \u043A \u0444\u0430\u0439\u043B\u0443"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Input, {
            type: "text",
            onChange: OnChangeHref,
            placeholder: "\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u043E\u043F\u043B\u0430\u0442\u044B"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SubmitButton, {
            onClick: addOpModal,
            children: " \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 71,
    columnNumber: 5
  }, undefined);
};

const Operator = ({
  operator
}) => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(OperatorItem, {
    onClick: () => router.push({
      pathname: "/operators/" + operator.href
    }),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
      children: operator.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(OperatorCard, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
        layout: "responsive",
        src: operator.img,
        alt: operator.img.split(".")[0],
        width: operator.size[0],
        height: operator.size[1]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 7
    }, undefined)]
  }, operator.name, true, {
    fileName: _jsxFileName,
    lineNumber: 114,
    columnNumber: 5
  }, undefined);
};

function Page() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_document__WEBPACK_IMPORTED_MODULE_5__.default, {
      title: "Mobile Operators Terminal"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Main, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: "Mobile Ops"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Hint, {
        children: "\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043D\u0430 \u043B\u043E\u0433\u043E\u0442\u0438\u043F \u0434\u043B\u044F \u043F\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Operators, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 134,
    columnNumber: 5
  }, this);
}
const Container = styled_components__WEBPACK_IMPORTED_MODULE_4___default().div.withConfig({
  displayName: "pages__Container",
  componentId: "sc-1u8vcib-0"
})(["min-height:100vh;padding:0 0.5rem;display:flex;flex-direction:column;justify-content:center;align-items:center;height:100%;width:100%;font-family:\"Arial\",monospace;@media only screen and (max-width:600px){height:100%;}"]);
const Main = styled_components__WEBPACK_IMPORTED_MODULE_4___default().div.withConfig({
  displayName: "pages__Main",
  componentId: "sc-1u8vcib-1"
})(["text-align:center;align-items:center;justify-content:center;"]);
const AddNewOp = styled_components__WEBPACK_IMPORTED_MODULE_4___default().div.withConfig({
  displayName: "pages__AddNewOp",
  componentId: "sc-1u8vcib-2"
})(["padding:5%;flex-direction:column;align-items:center;justify-content:center;margin-left:2.5%;margin-right:2.5%;margin-bottom:5%;border:2px solid rgb(0,0,0);border-radius:20%;width:300px;height:300px;:hover{border-color:rgb(0,152,95);color:rgb(0,152,95);}@media only screen and (max-width:600px){margin-left:0;margin-right:0;margin-bottom:5%;width:200px;height:200px;}@media only screen and (max-width:1000px){width:200px;height:200px;margin-left:2.5%;margin-right:2.5%;margin-bottom:5%;}"]);
const AddNewOpImage = styled_components__WEBPACK_IMPORTED_MODULE_4___default().div.withConfig({
  displayName: "pages__AddNewOpImage",
  componentId: "sc-1u8vcib-3"
})(["width:100%;height:100%;padding:20%;@media only screen and (max-width:600px){width:200px;height:200px;padding:20% 0 0 20%;}@media only screen and (max-width:1000px){width:80%;height:80%;padding:20% 0 0 20%;}"]);
const OpsFlex = styled_components__WEBPACK_IMPORTED_MODULE_4___default().div.withConfig({
  displayName: "pages__OpsFlex",
  componentId: "sc-1u8vcib-4"
})(["margin-top:3%;display:flex;flex-direction:row;align-items:center;justify-content:center;flex-wrap:wrap;width:100%;@media only screen and (max-width:600px){margin-top:5%;flex-direction:column;}"]);
const OperatorItem = styled_components__WEBPACK_IMPORTED_MODULE_4___default().div.withConfig({
  displayName: "pages__OperatorItem",
  componentId: "sc-1u8vcib-5"
})(["display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 5% 2.5% 5%;margin-left:2.5%;margin-right:2.5%;margin-bottom:5%;border:2px solid rgb(0,0,0);border-radius:20%;width:300px;height:300px;:hover{border-color:rgb(0,152,95);color:rgb(0,152,95);}@media only screen and (max-width:600px){margin-left:0;margin-right:0;margin-bottom:5%;width:200px;height:200px;}@media only screen and (max-width:1000px){width:200px;height:200px;margin-left:2.5%;margin-right:2.5%;margin-bottom:5%;}"]);
const OperatorCard = styled_components__WEBPACK_IMPORTED_MODULE_4___default().div.withConfig({
  displayName: "pages__OperatorCard",
  componentId: "sc-1u8vcib-6"
})(["width:100%;height:100%;@media only screen and (max-width:600px){margin-top:-10%;width:80%;height:80%;padding:5%;}"]);
const Hint = styled_components__WEBPACK_IMPORTED_MODULE_4___default().div.withConfig({
  displayName: "pages__Hint",
  componentId: "sc-1u8vcib-7"
})(["@media only screen and (max-width:600px){margin-bottom:5%;font-size:12px;}"]);
const Form = styled_components__WEBPACK_IMPORTED_MODULE_4___default().form.withConfig({
  displayName: "pages__Form",
  componentId: "sc-1u8vcib-8"
})(["display:flex;flex-direction:column;align-items:center;justify-content:center;"]);
const Input = styled_components__WEBPACK_IMPORTED_MODULE_4___default().input.withConfig({
  displayName: "pages__Input",
  componentId: "sc-1u8vcib-9"
})(["height:30px;width:300px;margin-top:20px;border-radius:5px;text-align:center;"]);
const SubmitButton = styled_components__WEBPACK_IMPORTED_MODULE_4___default().button.withConfig({
  displayName: "pages__SubmitButton",
  componentId: "sc-1u8vcib-10"
})(["height:30px;width:300px;margin-top:20px;border-radius:10px;font-size:14px;:hover{border-color:rgb(0,152,95);background-color:rgb(0,152,95);color:white;}"]);
const ModalHeader = styled_components__WEBPACK_IMPORTED_MODULE_4___default().div.withConfig({
  displayName: "pages__ModalHeader",
  componentId: "sc-1u8vcib-11"
})(["display:flex;flex-direction:row;align-items:center;justify-content:center;text-align:center;"]);
const ModalHeaderButton = styled_components__WEBPACK_IMPORTED_MODULE_4___default().a.withConfig({
  displayName: "pages__ModalHeaderButton",
  componentId: "sc-1u8vcib-12"
})(["margin-left:10px;:hover{color:rgb(0,152,95);}"]);
const ModalBody = styled_components__WEBPACK_IMPORTED_MODULE_4___default().div.withConfig({
  displayName: "pages__ModalBody",
  componentId: "sc-1u8vcib-13"
})(["display:grid;align-items:center;max-width:100%;"]);

/***/ }),

/***/ "../next-server/lib/head":
/*!****************************************************!*\
  !*** external "next/dist/next-server/lib/head.js" ***!
  \****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ "../next-server/lib/to-base-64":
/*!**********************************************************!*\
  !*** external "next/dist/next-server/lib/to-base-64.js" ***!
  \**********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ "../next-server/server/image-config":
/*!***************************************************************!*\
  !*** external "next/dist/next-server/server/image-config.js" ***!
  \***************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-modal":
/*!******************************!*\
  !*** external "react-modal" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-modal");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_babel_runtime_helpers_extends_js-node_modules_babel_runtime_helpers_inte-f89ba9","vendors-node_modules_next_image_js","pages_document_tsx"], function() { return __webpack_exec__("./pages/index.tsx"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0Ly4vcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovL3Byb2plY3QvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2hlYWQuanNcIiIsIndlYnBhY2s6Ly9wcm9qZWN0L2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0LmpzXCIiLCJ3ZWJwYWNrOi8vcHJvamVjdC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvaW1hZ2UtY29uZmlnLmpzXCIiLCJ3ZWJwYWNrOi8vcHJvamVjdC9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL3Byb2plY3QvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL3Byb2plY3QvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3Byb2plY3QvZXh0ZXJuYWwgXCJyZWFjdC1tb2RhbFwiIiwid2VicGFjazovL3Byb2plY3QvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9wcm9qZWN0L2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJvcGVyYXRvcnNMaXN0IiwibmFtZSIsImltZyIsInNpemUiLCJocmVmIiwiT3BlcmF0b3JzIiwib3BlcmF0b3JzIiwic2V0T3BlcmF0b3JzIiwidXNlU3RhdGUiLCJtb2RhbElzT3BlbiIsInNldElzT3BlbiIsInNldE5hbWUiLCJmaWxlUGF0aCIsInNldEZpbGVQYXRoIiwic2V0SHJlZiIsIm1vZGFsU3R5bGVzIiwiY29udGVudCIsInRvcCIsImxlZnQiLCJyaWdodCIsImJvdHRvbSIsIm1hcmdpblJpZ2h0IiwidHJhbnNmb3JtIiwiT25DaGFuZ2VOYW1lIiwiZSIsInRhcmdldCIsInZhbHVlIiwiT25DaGFuZ2VGaWxlUGF0aCIsIk9uQ2hhbmdlSHJlZiIsIm9wZW5Nb2RhbCIsImNsb3NlTW9kYWwiLCJhZGRPcE1vZGFsIiwiY29uc29sZSIsImxvZyIsIm5ld29wIiwicHJldiIsIm1hcCIsImkiLCJPcGVyYXRvciIsIm9wZXJhdG9yIiwicm91dGVyIiwidXNlUm91dGVyIiwicHVzaCIsInBhdGhuYW1lIiwic3BsaXQiLCJQYWdlIiwiQ29udGFpbmVyIiwic3R5bGVkIiwiTWFpbiIsIkFkZE5ld09wIiwiQWRkTmV3T3BJbWFnZSIsIk9wc0ZsZXgiLCJPcGVyYXRvckl0ZW0iLCJPcGVyYXRvckNhcmQiLCJIaW50IiwiRm9ybSIsIklucHV0IiwiU3VibWl0QnV0dG9uIiwiTW9kYWxIZWFkZXIiLCJNb2RhbEhlYWRlckJ1dHRvbiIsIk1vZGFsQm9keSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFVQSxNQUFNQSxhQUEwQixHQUFHLENBQ2pDO0FBQUVDLE1BQUksRUFBRSxTQUFSO0FBQW1CQyxLQUFHLEVBQUUsY0FBeEI7QUFBd0NDLE1BQUksRUFBRSxDQUFDLEdBQUQsRUFBTSxHQUFOLENBQTlDO0FBQTBEQyxNQUFJLEVBQUU7QUFBaEUsQ0FEaUMsRUFFakM7QUFBRUgsTUFBSSxFQUFFLEtBQVI7QUFBZUMsS0FBRyxFQUFFLFVBQXBCO0FBQWdDQyxNQUFJLEVBQUUsQ0FBQyxHQUFELEVBQU0sR0FBTixDQUF0QztBQUFrREMsTUFBSSxFQUFFO0FBQXhELENBRmlDLEVBR2pDO0FBQUVILE1BQUksRUFBRSxRQUFSO0FBQWtCQyxLQUFHLEVBQUUsY0FBdkI7QUFBdUNDLE1BQUksRUFBRSxDQUFDLEdBQUQsRUFBTSxHQUFOLENBQTdDO0FBQXlEQyxNQUFJLEVBQUU7QUFBL0QsQ0FIaUMsQ0FBbkM7O0FBTUEsTUFBTUMsU0FBUyxHQUFHLE1BQU07QUFDdEIsUUFBTTtBQUFBLE9BQUNDLFNBQUQ7QUFBQSxPQUFZQztBQUFaLE1BQTRCQywrQ0FBUSxDQUFDUixhQUFELENBQTFDO0FBQ0EsUUFBTTtBQUFBLE9B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TUFBTUMsSUFBSSxHQUFHRCx1RUFBSDtBQUFBO0FBQUE7QUFBQSxvRUFBVjtBQU1BLE1BQU1FLFFBQVEsR0FBR0YsdUVBQUg7QUFBQTtBQUFBO0FBQUEsOGVBQWQ7QUErQkEsTUFBTUcsYUFBYSxHQUFHSCx1RUFBSDtBQUFBO0FBQUE7QUFBQSxzTkFBbkI7QUFlQSxNQUFNSSxPQUFPLEdBQUdKLHVFQUFIO0FBQUE7QUFBQTtBQUFBLHdNQUFiO0FBY0EsTUFBTUssWUFBWSxHQUFHTCx1RUFBSDtBQUFBO0FBQUE7QUFBQSxxZ0JBQWxCO0FBZ0NBLE1BQU1NLFlBQVksR0FBR04sdUVBQUg7QUFBQTtBQUFBO0FBQUEseUhBQWxCO0FBVUEsTUFBTU8sSUFBSSxHQUFHUCx1RUFBSDtBQUFBO0FBQUE7QUFBQSxrRkFBVjtBQU1BLE1BQU1RLElBQUksR0FBR1Isd0VBQUg7QUFBQTtBQUFBO0FBQUEscUZBQVY7QUFNQSxNQUFNUyxLQUFLLEdBQUdULHlFQUFIO0FBQUE7QUFBQTtBQUFBLG9GQUFYO0FBT0EsTUFBTVUsWUFBWSxHQUFHViwwRUFBSDtBQUFBO0FBQUE7QUFBQSxnS0FBbEI7QUFZQSxNQUFNVyxXQUFXLEdBQUdYLHVFQUFIO0FBQUE7QUFBQTtBQUFBLG9HQUFqQjtBQU9BLE1BQU1ZLGlCQUFpQixHQUFHWixxRUFBSDtBQUFBO0FBQUE7QUFBQSxxREFBdkI7QUFNQSxNQUFNYSxTQUFTLEdBQUdiLHVFQUFIO0FBQUE7QUFBQTtBQUFBLHVEQUFmLEM7Ozs7Ozs7Ozs7O0FDdlRBLCtEOzs7Ozs7Ozs7OztBQ0FBLHFFOzs7Ozs7Ozs7OztBQ0FBLDBFOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLCtDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBHbG9iYWxIZWFkIGZyb20gXCIuL2RvY3VtZW50XCI7XG5pbXBvcnQgTW9kYWwgZnJvbSBcInJlYWN0LW1vZGFsXCI7XG5pbXBvcnQgSW5wdXRNYXNrIGZyb20gXCJyZWFjdC1pbnB1dC1tYXNrXCI7XG5cbmludGVyZmFjZSBJT3BzIHtcbiAgbmFtZTogc3RyaW5nO1xuICBpbWc6IHN0cmluZztcbiAgc2l6ZTogQXJyYXk8bnVtYmVyPjtcbiAgaHJlZjogc3RyaW5nO1xufVxuXG5jb25zdCBvcGVyYXRvcnNMaXN0OiBBcnJheTxJT3BzPiA9IFtcbiAgeyBuYW1lOiBcItCc0LXQs9Cw0YTQvtC9XCIsIGltZzogXCIvbWVnYWZvbi5wbmdcIiwgc2l6ZTogWzM1MCwgMzUwXSwgaHJlZjogXCJtZWdhZm9uXCIgfSxcbiAgeyBuYW1lOiBcItCc0KLQoVwiLCBpbWc6IFwiL210cy5wbmdcIiwgc2l6ZTogWzM1MCwgMzUwXSwgaHJlZjogXCJNVENcIiB9LFxuICB7IG5hbWU6IFwi0JHQuNC70LDQudC9XCIsIGltZzogXCIvYmVlbGluZS5wbmdcIiwgc2l6ZTogWzM1MCwgMzUwXSwgaHJlZjogXCJiZWVsaW5lXCIgfSxcbl07XG5cbmNvbnN0IE9wZXJhdG9ycyA9ICgpID0+IHtcbiAgY29uc3QgW29wZXJhdG9ycywgc2V0T3BlcmF0b3JzXSA9IHVzZVN0YXRlKG9wZXJhdG9yc0xpc3QpO1xuICBjb25zdCBbbW9kYWxJc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbZmlsZVBhdGgsIHNldEZpbGVQYXRoXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbaHJlZiwgc2V0SHJlZl0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgbW9kYWxTdHlsZXMgPSB7XG4gICAgY29udGVudDoge1xuICAgICAgdG9wOiBcIjUwJVwiLFxuICAgICAgbGVmdDogXCI1MCVcIixcbiAgICAgIHJpZ2h0OiBcImF1dG9cIixcbiAgICAgIGJvdHRvbTogXCJhdXRvXCIsXG4gICAgICBtYXJnaW5SaWdodDogXCItNTAlXCIsXG4gICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKC01MCUsIC01MCUpXCIsXG4gICAgfSxcbiAgfTtcbiAgY29uc3QgT25DaGFuZ2VOYW1lID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgc2V0TmFtZShlLnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgT25DaGFuZ2VGaWxlUGF0aCA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIHNldEZpbGVQYXRoKGUudGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBPbkNoYW5nZUhyZWYgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBzZXRIcmVmKGUudGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBvcGVuTW9kYWwgPSAoKSA9PiB7XG4gICAgc2V0SXNPcGVuKHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IGNsb3NlTW9kYWwgPSAoKSA9PiB7XG4gICAgc2V0SXNPcGVuKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBhZGRPcE1vZGFsID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKG5hbWUsIGZpbGVQYXRoLCBocmVmKVxuICAgIGNvbnN0IG5ld29wID0ge1xuICAgICAgbmFtZTogbmFtZSA/IG5hbWUgOiBcIkRlZmF1bHRcIixcbiAgICAgIGltZzogZmlsZVBhdGggPyBmaWxlUGF0aCA6IFwiL2RlZmF1bHQucG5nXCIsXG4gICAgICBzaXplOiBbMzUwLCAzNTBdLFxuICAgICAgaHJlZjogaHJlZiA/IGhyZWYgOiBcImRlZmF1bHRcIixcbiAgICB9O1xuICAgIHNldE9wZXJhdG9ycygocHJldikgPT4gWy4uLnByZXYsIG5ld29wXSk7XG4gICAgc2V0SXNPcGVuKCFtb2RhbElzT3Blbik7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8T3BzRmxleD5cbiAgICAgIHtvcGVyYXRvcnMubWFwKChpKSA9PiAoXG4gICAgICAgIDxPcGVyYXRvciBrZXk9e2kubmFtZX0gb3BlcmF0b3I9e2l9IC8+XG4gICAgICApKX1cbiAgICAgIDxBZGROZXdPcCBvbkNsaWNrPXtvcGVuTW9kYWx9PlxuICAgICAgICA8QWRkTmV3T3BJbWFnZT5cbiAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgIGxheW91dD1cInJlc3BvbnNpdmVcIlxuICAgICAgICAgICAgc3JjPVwiL3BsdXMucG5nXCJcbiAgICAgICAgICAgIGFsdD1cInBsdXNcIlxuICAgICAgICAgICAgd2lkdGg9ezM1MH1cbiAgICAgICAgICAgIGhlaWdodD17MzUwfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQWRkTmV3T3BJbWFnZT5cbiAgICAgIDwvQWRkTmV3T3A+XG5cbiAgICAgIDxNb2RhbFxuICAgICAgICBpc09wZW49e21vZGFsSXNPcGVufVxuICAgICAgICBvblJlcXVlc3RDbG9zZT17Y2xvc2VNb2RhbH1cbiAgICAgICAgY29udGVudExhYmVsPVwiRXhhbXBsZSBNb2RhbFwiXG4gICAgICAgIHN0eWxlPXttb2RhbFN0eWxlc31cbiAgICAgICAgYXJpYUhpZGVBcHA9e2ZhbHNlfVxuICAgICAgPlxuICAgICAgICA8TW9kYWxCb2R5PlxuICAgICAgICAgIDxNb2RhbEhlYWRlcj5cbiAgICAgICAgICAgIDxoMz7QntC60L3QviDQuNC30LzQtdC90LXQvdC40Y8g0L7Qv9C10YDQsNGC0L7RgNC+0LI8L2gzPlxuICAgICAgICAgICAgPE1vZGFsSGVhZGVyQnV0dG9uIG9uQ2xpY2s9e2Nsb3NlTW9kYWx9PuKcljwvTW9kYWxIZWFkZXJCdXR0b24+XG4gICAgICAgICAgPC9Nb2RhbEhlYWRlcj5cbiAgICAgICAgICA8Rm9ybT5cbiAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXtPbkNoYW5nZU5hbWV9IHBsYWNlaG9sZGVyPXtcItCd0LDQt9Cy0LDQvdC40LUg0L7Qv9C10YDQsNGC0L7RgNCwXCJ9IC8+XG4gICAgICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17T25DaGFuZ2VGaWxlUGF0aH1wbGFjZWhvbGRlcj1cItCf0YPRgtGMINC6INGE0LDQudC70YNcIiAvPlxuICAgICAgICAgICAgPElucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e09uQ2hhbmdlSHJlZn1wbGFjZWhvbGRlcj1cItCh0YHRi9C70LrQsCDQvdCwINGB0YLRgNCw0L3QuNGG0YMg0L7Qv9C70LDRgtGLXCIgLz5cbiAgICAgICAgICAgIDxTdWJtaXRCdXR0b24gb25DbGljaz17YWRkT3BNb2RhbH0+INCU0L7QsdCw0LLQuNGC0YwgPC9TdWJtaXRCdXR0b24+XG4gICAgICAgICAgPC9Gb3JtPlxuICAgICAgICA8L01vZGFsQm9keT5cbiAgICAgIDwvTW9kYWw+XG4gICAgPC9PcHNGbGV4PlxuICApO1xufTtcblxuY29uc3QgT3BlcmF0b3IgPSAoeyBvcGVyYXRvciB9OiBhbnkpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIHJldHVybiAoXG4gICAgPE9wZXJhdG9ySXRlbVxuICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goeyBwYXRobmFtZTogXCIvb3BlcmF0b3JzL1wiICsgb3BlcmF0b3IuaHJlZiB9KX1cbiAgICAgIGtleT17b3BlcmF0b3IubmFtZX1cbiAgICA+XG4gICAgICA8aDM+e29wZXJhdG9yLm5hbWV9PC9oMz5cbiAgICAgIDxPcGVyYXRvckNhcmQ+XG4gICAgICAgIDxJbWFnZVxuICAgICAgICAgIGxheW91dD1cInJlc3BvbnNpdmVcIlxuICAgICAgICAgIHNyYz17b3BlcmF0b3IuaW1nfVxuICAgICAgICAgIGFsdD17b3BlcmF0b3IuaW1nLnNwbGl0KFwiLlwiKVswXX1cbiAgICAgICAgICB3aWR0aD17b3BlcmF0b3Iuc2l6ZVswXX1cbiAgICAgICAgICBoZWlnaHQ9e29wZXJhdG9yLnNpemVbMV19XG4gICAgICAgIC8+XG4gICAgICA8L09wZXJhdG9yQ2FyZD5cbiAgICA8L09wZXJhdG9ySXRlbT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2UoKSB7XG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxHbG9iYWxIZWFkIHRpdGxlPVwiTW9iaWxlIE9wZXJhdG9ycyBUZXJtaW5hbFwiIC8+XG4gICAgICA8TWFpbj5cbiAgICAgICAgPGgxPk1vYmlsZSBPcHM8L2gxPlxuICAgICAgICA8SGludD7QndCw0LbQvNC40YLQtSDQvdCwINC70L7Qs9C+0YLQuNC/INC00LvRjyDQv9C+0L/QvtC70L3QtdC90LjRjzwvSGludD5cbiAgICAgICAgPE9wZXJhdG9ycyAvPlxuICAgICAgPC9NYWluPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufVxuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgcGFkZGluZzogMCAwLjVyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LWZhbWlseTogXCJBcmlhbFwiLCBtb25vc3BhY2U7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbmA7XG5cbmNvbnN0IE1haW4gPSBzdHlsZWQuZGl2YFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuYDtcblxuY29uc3QgQWRkTmV3T3AgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiA1JTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAyLjUlO1xuICBtYXJnaW4tcmlnaHQ6IDIuNSU7XG4gIG1hcmdpbi1ib3R0b206IDUlO1xuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMCwgMCwgMCk7XG4gIGJvcmRlci1yYWRpdXM6IDIwJTtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDMwMHB4O1xuICA6aG92ZXIge1xuICAgIGJvcmRlci1jb2xvcjogcmdiKDAsIDE1MiwgOTUpO1xuICAgIGNvbG9yOiByZ2IoMCwgMTUyLCA5NSk7XG4gIH1cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgfVxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAyLjUlO1xuICAgIG1hcmdpbi1yaWdodDogMi41JTtcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcbiAgfVxuYDtcbmNvbnN0IEFkZE5ld09wSW1hZ2UgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAyMCU7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBwYWRkaW5nOiAyMCUgMCAwIDIwJTtcbiAgfVxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgaGVpZ2h0OiA4MCU7XG4gICAgcGFkZGluZzogMjAlIDAgMCAyMCU7XG4gIH1cbmA7XG5jb25zdCBPcHNGbGV4ID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLXRvcDogMyU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHdpZHRoOiAxMDAlO1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgbWFyZ2luLXRvcDogNSU7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuYDtcblxuY29uc3QgT3BlcmF0b3JJdGVtID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgNSUgMi41JSA1JTtcbiAgbWFyZ2luLWxlZnQ6IDIuNSU7XG4gIG1hcmdpbi1yaWdodDogMi41JTtcbiAgbWFyZ2luLWJvdHRvbTogNSU7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigwLCAwLCAwKTtcbiAgYm9yZGVyLXJhZGl1czogMjAlO1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogMzAwcHg7XG4gIDpob3ZlciB7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMCwgMTUyLCA5NSk7XG4gICAgY29sb3I6IHJnYigwLCAxNTIsIDk1KTtcbiAgfVxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDUlO1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICB9XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDIuNSU7XG4gICAgbWFyZ2luLXJpZ2h0OiAyLjUlO1xuICAgIG1hcmdpbi1ib3R0b206IDUlO1xuICB9XG5gO1xuY29uc3QgT3BlcmF0b3JDYXJkID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIG1hcmdpbi10b3A6IC0xMCU7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBoZWlnaHQ6IDgwJTtcbiAgICBwYWRkaW5nOiA1JTtcbiAgfVxuYDtcbmNvbnN0IEhpbnQgPSBzdHlsZWQuZGl2YFxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG5gO1xuY29uc3QgRm9ybSA9IHN0eWxlZC5mb3JtYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbmA7XG5jb25zdCBJbnB1dCA9IHN0eWxlZC5pbnB1dGBcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMzAwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuYDtcbmNvbnN0IFN1Ym1pdEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDMwMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIDpob3ZlciB7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMCwgMTUyLCA5NSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDE1MiwgOTUpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuYDtcbmNvbnN0IE1vZGFsSGVhZGVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbmA7XG5jb25zdCBNb2RhbEhlYWRlckJ1dHRvbiA9IHN0eWxlZC5hYFxuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgOmhvdmVyIHtcbiAgICBjb2xvcjogcmdiKDAsIDE1MiwgOTUpO1xuICB9XG5gO1xuY29uc3QgTW9kYWxCb2R5ID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZ3JpZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuYDtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZy5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LW1vZGFsXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9