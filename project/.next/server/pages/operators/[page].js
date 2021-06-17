(function() {
var exports = {};
exports.id = "pages/operators/[page]";
exports.ids = ["pages/operators/[page]"];
exports.modules = {

/***/ "./pages/operators/[page].tsx":
/*!************************************!*\
  !*** ./pages/operators/[page].tsx ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-input-mask */ "react-input-mask");
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_input_mask__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _document__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../document */ "./pages/document.tsx");


var _jsxFileName = "C:\\Users\\\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440.WIN-MF8AQNB7BFV\\Desktop\\proj\\project\\pages\\operators\\[page].tsx";






const capitalize = word => word[0].toUpperCase() + word.substring(1);

const Popup = ({
  success
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledPopup, {
  height: !success ? "40px" : "80px",
  color: !success ? "green" : "red",
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledPopupText, {
    padding: !success ? "10px 0 0 0" : "0",
    children: !success ? "Операция проведена успешно!" : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: ["\u041F\u0440\u043E\u0438\u0437\u043E\u0448\u043B\u0430 \u043D\u0435\u043F\u043E\u043B\u0430\u0434\u043A\u0430.", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: "\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 31
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 10,
  columnNumber: 3
}, undefined);

const Payment = () => {
  var _router$query;

  const {
    0: phone,
    1: setPhone
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: sum,
    1: setSum
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: error,
    1: setError
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    phone: "",
    sum: ""
  });
  const {
    0: isSuccess,
    1: setIsSuccess
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: isError,
    1: setIsError
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);

  const onChangePhone = e => {
    setPhone(e.target.value);
  };

  const onChangeSum = e => {
    if (+e.target.value > 0 && +e.target.value <= 1000 || e.target.value === "") {
      setSum(e.target.value);
    }
  };

  const onClickButton = e => {
    e.preventDefault();
    const isValidPhone = phone.length === 16;
    setError({
      sum: !sum ? "Введите сумму" : "",
      phone: !isValidPhone ? "Введите корректный номер" : ""
    });
    if (!sum || phone.length < 16) return;
    setTimeout(() => {
      if (Math.random() > 0.5) {
        setIsError(false);
        setIsSuccess(true);
        setTimeout(() => {
          next_router__WEBPACK_IMPORTED_MODULE_2___default().push("/");
        }, 3000);
      } else {
        setIsError(true);
        setIsSuccess(true);
        setTimeout(() => setIsSuccess(false), 3000);
      }
    }, 2000);
  };

  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const name = router === null || router === void 0 ? void 0 : (_router$query = router.query) === null || _router$query === void 0 ? void 0 : _router$query.page;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_document__WEBPACK_IMPORTED_MODULE_5__.default, {
      title: !name ? "" : name && capitalize(name)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Main, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: !name ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: name && capitalize(name)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 30
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Form, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_input_mask__WEBPACK_IMPORTED_MODULE_4___default()), {
          mask: "+7 999 999 99 99",
          maskChar: "",
          disabled: false,
          value: phone,
          onChange: onChangePhone,
          children: () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Input, {
            type: "tel",
            placeholder: "Номер телефона"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 20
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Error, {
          children: error.phone
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Input, {
          value: sum,
          onChange: onChangeSum,
          type: "number",
          placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0443\u043C\u043C\u0443 \u043F\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F(1-1000 \u0440\u0443\u0431)"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Error, {
          children: error.sum
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SubmitButton, {
          type: "button",
          onClick: onClickButton,
          children: "\u041E\u043F\u043B\u0430\u0442\u0438\u0442\u044C"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 11
        }, undefined), isSuccess && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Popup, {
          success: isError
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 25
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 76,
    columnNumber: 5
  }, undefined);
};

const Container = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "page__Container",
  componentId: "sc-47q407-0"
})(["min-height:100vh;padding:0 0.5rem;display:flex;flex-direction:column;justify-content:center;align-items:center;height:100vh;font-family:\"Arial\",monospace;"]);
const Main = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "page__Main",
  componentId: "sc-47q407-1"
})(["padding:5rem 0;flex:1;display:flex;flex-direction:column;justify-content:center;align-items:center;"]);
const Form = styled_components__WEBPACK_IMPORTED_MODULE_3___default().form.withConfig({
  displayName: "page__Form",
  componentId: "sc-47q407-2"
})(["display:flex;flex-direction:column;"]);
const Input = styled_components__WEBPACK_IMPORTED_MODULE_3___default().input.withConfig({
  displayName: "page__Input",
  componentId: "sc-47q407-3"
})(["height:30px;width:300px;margin-top:5%;border-radius:5px;text-align:center;"]);
const SubmitButton = styled_components__WEBPACK_IMPORTED_MODULE_3___default().button.withConfig({
  displayName: "page__SubmitButton",
  componentId: "sc-47q407-4"
})(["height:30px;width:300px;margin-top:5%;border-radius:10px;font-size:14px;:hover{border-color:rgb(0,152,95);background-color:rgb(0,152,95);color:white;}"]);
const Error = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "page__Error",
  componentId: "sc-47q407-5"
})(["margin-left:10px;margin-top:10px;color:red;font-size:12px;"]);
const StyledPopup = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "page__StyledPopup",
  componentId: "sc-47q407-6"
})(["margin-top:5%;width:300px;height:", ";background-color:", ";border:2px solid black;color:white;border-radius:15px;"], props => props.height, props => props.color);
const StyledPopupText = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "page__StyledPopupText",
  componentId: "sc-47q407-7"
})(["font-size:14px;text-align:center;padding:", ";display:flex;flex-direction:column;align-items:center;justify-content:center;"], props => props.padding);
/* harmony default export */ __webpack_exports__["default"] = (Payment);

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

/***/ "react-input-mask":
/*!***********************************!*\
  !*** external "react-input-mask" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-input-mask");;

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["pages_document_tsx"], function() { return __webpack_exec__("./pages/operators/[page].tsx"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0Ly4vcGFnZXMvb3BlcmF0b3JzL1twYWdlXS50c3giLCJ3ZWJwYWNrOi8vcHJvamVjdC9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL3Byb2plY3QvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL3Byb2plY3QvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3Byb2plY3QvZXh0ZXJuYWwgXCJyZWFjdC1pbnB1dC1tYXNrXCIiLCJ3ZWJwYWNrOi8vcHJvamVjdC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL3Byb2plY3QvZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbImNhcGl0YWxpemUiLCJ3b3JkIiwidG9VcHBlckNhc2UiLCJzdWJzdHJpbmciLCJQb3B1cCIsInN1Y2Nlc3MiLCJQYXltZW50IiwicGhvbmUiLCJzZXRQaG9uZSIsInVzZVN0YXRlIiwic3VtIiwic2V0U3VtIiwiZXJyb3IiLCJzZXRFcnJvciIsImlzU3VjY2VzcyIsInNldElzU3VjY2VzcyIsImlzRXJyb3IiLCJzZXRJc0Vycm9yIiwib25DaGFuZ2VQaG9uZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlU3VtIiwib25DbGlja0J1dHRvbiIsInByZXZlbnREZWZhdWx0IiwiaXNWYWxpZFBob25lIiwibGVuZ3RoIiwic2V0VGltZW91dCIsIk1hdGgiLCJyYW5kb20iLCJSb3V0ZXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJuYW1lIiwicXVlcnkiLCJwYWdlIiwiQ29udGFpbmVyIiwic3R5bGVkIiwiTWFpbiIsIkZvcm0iLCJJbnB1dCIsIlN1Ym1pdEJ1dHRvbiIsIkVycm9yIiwiU3R5bGVkUG9wdXAiLCJwcm9wcyIsImhlaWdodCIsImNvbG9yIiwiU3R5bGVkUG9wdXBUZXh0IiwicGFkZGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7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QUNDLE1BSFosRUFJTUQsS0FBRCxJQUFXQSxLQUFLLENBQUNFLEtBSnRCLENBQWpCO0FBU0EsTUFBTUMsZUFBZSxHQUFHVix1RUFBSDtBQUFBO0FBQUE7QUFBQSxvSUFHUE8sS0FBRCxJQUFXQSxLQUFLLENBQUNJLE9BSFQsQ0FBckI7QUFTQSwrREFBZTFDLE9BQWYsRTs7Ozs7Ozs7Ozs7QUM1S0EsdUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsK0MiLCJmaWxlIjoicGFnZXMvb3BlcmF0b3JzL1twYWdlXS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJvdXRlciwgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgSW5wdXRNYXNrIGZyb20gXCJyZWFjdC1pbnB1dC1tYXNrXCI7XG5pbXBvcnQgR2xvYmFsSGVhZCBmcm9tIFwiLi4vZG9jdW1lbnRcIjtcblxuY29uc3QgY2FwaXRhbGl6ZSA9ICh3b3JkOiBzdHJpbmcpID0+IHdvcmRbMF0udG9VcHBlckNhc2UoKSArIHdvcmQuc3Vic3RyaW5nKDEpO1xuXG5jb25zdCBQb3B1cCA9ICh7IHN1Y2Nlc3MgfTogYW55KSA9PiAoXG4gIDxTdHlsZWRQb3B1cFxuICAgIGhlaWdodD17IXN1Y2Nlc3MgPyBcIjQwcHhcIiA6IFwiODBweFwifVxuICAgIGNvbG9yPXshc3VjY2VzcyA/IFwiZ3JlZW5cIiA6IFwicmVkXCJ9XG4gID5cbiAgICA8U3R5bGVkUG9wdXBUZXh0IHBhZGRpbmc9eyFzdWNjZXNzID8gXCIxMHB4IDAgMCAwXCIgOiBcIjBcIn0+XG4gICAgICB7IXN1Y2Nlc3MgPyAoXG4gICAgICAgIFwi0J7Qv9C10YDQsNGG0LjRjyDQv9GA0L7QstC10LTQtdC90LAg0YPRgdC/0LXRiNC90L4hXCJcbiAgICAgICkgOiAoXG4gICAgICAgIDxwPlxuICAgICAgICAgINCf0YDQvtC40LfQvtGI0LvQsCDQvdC10L/QvtC70LDQtNC60LAuPHA+0J/QvtCy0YLQvtGA0LjRgtC1INC10YnRkSDRgNCw0LcuPC9wPlxuICAgICAgICA8L3A+XG4gICAgICApfVxuICAgIDwvU3R5bGVkUG9wdXBUZXh0PlxuICA8L1N0eWxlZFBvcHVwPlxuKTtcblxuY29uc3QgUGF5bWVudCA9ICgpID0+IHtcbiAgY29uc3QgW3Bob25lLCBzZXRQaG9uZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3N1bSwgc2V0U3VtXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKHsgcGhvbmU6IFwiXCIsIHN1bTogXCJcIiB9KTtcbiAgY29uc3QgW2lzU3VjY2Vzcywgc2V0SXNTdWNjZXNzXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lzRXJyb3IsIHNldElzRXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IG9uQ2hhbmdlUGhvbmUgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBzZXRQaG9uZShlLnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgY29uc3Qgb25DaGFuZ2VTdW0gPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBpZiAoXG4gICAgICAoK2UudGFyZ2V0LnZhbHVlID4gMCAmJiArZS50YXJnZXQudmFsdWUgPD0gMTAwMCkgfHxcbiAgICAgIGUudGFyZ2V0LnZhbHVlID09PSBcIlwiXG4gICAgKSB7XG4gICAgICBzZXRTdW0oZS50YXJnZXQudmFsdWUpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBvbkNsaWNrQnV0dG9uID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGlzVmFsaWRQaG9uZSA9IHBob25lLmxlbmd0aCA9PT0gMTY7XG5cbiAgICBzZXRFcnJvcih7XG4gICAgICBzdW06ICFzdW0gPyBcItCS0LLQtdC00LjRgtC1INGB0YPQvNC80YNcIiA6IFwiXCIsXG4gICAgICBwaG9uZTogIWlzVmFsaWRQaG9uZSA/IFwi0JLQstC10LTQuNGC0LUg0LrQvtGA0YDQtdC60YLQvdGL0Lkg0L3QvtC80LXRgFwiIDogXCJcIixcbiAgICB9KTtcblxuICAgIGlmICghc3VtIHx8IHBob25lLmxlbmd0aCA8IDE2KSByZXR1cm47XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmIChNYXRoLnJhbmRvbSgpID4gMC41KSB7XG4gICAgICAgIHNldElzRXJyb3IoZmFsc2UpO1xuICAgICAgICBzZXRJc1N1Y2Nlc3ModHJ1ZSk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIFJvdXRlci5wdXNoKFwiL1wiKTtcbiAgICAgICAgfSwgMzAwMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRJc0Vycm9yKHRydWUpO1xuICAgICAgICBzZXRJc1N1Y2Nlc3ModHJ1ZSk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0SXNTdWNjZXNzKGZhbHNlKSwgMzAwMCk7XG4gICAgICB9XG4gICAgfSwgMjAwMCk7XG4gIH07XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IG5hbWUgPSByb3V0ZXI/LnF1ZXJ5Py5wYWdlIGFzIHN0cmluZztcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8R2xvYmFsSGVhZCB0aXRsZT17IW5hbWUgPyBcIlwiIDogbmFtZSAmJiBjYXBpdGFsaXplKG5hbWUpfSAvPlxuXG4gICAgICA8TWFpbj5cbiAgICAgICAgPGgxPnshbmFtZSA/IDw+PC8+IDogPGRpdj57bmFtZSAmJiBjYXBpdGFsaXplKG5hbWUpfTwvZGl2Pn08L2gxPlxuICAgICAgICA8Rm9ybT5cbiAgICAgICAgICA8SW5wdXRNYXNrXG4gICAgICAgICAgICBtYXNrPVwiKzcgOTk5IDk5OSA5OSA5OVwiXG4gICAgICAgICAgICBtYXNrQ2hhcj1cIlwiXG4gICAgICAgICAgICBkaXNhYmxlZD17ZmFsc2V9XG4gICAgICAgICAgICB2YWx1ZT17cGhvbmV9XG4gICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VQaG9uZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7KCkgPT4gPElucHV0IHR5cGU9XCJ0ZWxcIiBwbGFjZWhvbGRlcj17XCLQndC+0LzQtdGAINGC0LXQu9C10YTQvtC90LBcIn0gLz59XG4gICAgICAgICAgPC9JbnB1dE1hc2s+XG4gICAgICAgICAgPEVycm9yPntlcnJvci5waG9uZX08L0Vycm9yPlxuICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgdmFsdWU9e3N1bX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVN1bX1cbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLQktCy0LXQtNC40YLQtSDRgdGD0LzQvNGDINC/0L7Qv9C+0LvQvdC10L3QuNGPKDEtMTAwMCDRgNGD0LEpXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxFcnJvcj57ZXJyb3Iuc3VtfTwvRXJyb3I+XG4gICAgICAgICAgPFN1Ym1pdEJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17b25DbGlja0J1dHRvbn0+XG4gICAgICAgICAgICDQntC/0LvQsNGC0LjRgtGMXG4gICAgICAgICAgPC9TdWJtaXRCdXR0b24+XG4gICAgICAgICAge2lzU3VjY2VzcyAmJiA8UG9wdXAgc3VjY2Vzcz17aXNFcnJvcn0gLz59XG4gICAgICAgIDwvRm9ybT5cbiAgICAgIDwvTWFpbj5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgcGFkZGluZzogMCAwLjVyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBmb250LWZhbWlseTogXCJBcmlhbFwiLCBtb25vc3BhY2U7XG5gO1xuY29uc3QgTWFpbiA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6IDVyZW0gMDtcbiAgZmxleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gO1xuY29uc3QgRm9ybSA9IHN0eWxlZC5mb3JtYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuYDtcbmNvbnN0IElucHV0ID0gc3R5bGVkLmlucHV0YFxuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMDBweDtcbiAgbWFyZ2luLXRvcDogNSU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuYDtcbmNvbnN0IFN1Ym1pdEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDMwMHB4O1xuICBtYXJnaW4tdG9wOiA1JTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICA6aG92ZXIge1xuICAgIGJvcmRlci1jb2xvcjogcmdiKDAsIDE1MiwgOTUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxNTIsIDk1KTtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbmA7XG5jb25zdCBFcnJvciA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDEycHg7XG5gO1xuY29uc3QgU3R5bGVkUG9wdXAgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tdG9wOiA1JTtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6ICR7KHByb3BzKSA9PiBwcm9wcy5oZWlnaHR9O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMuY29sb3J9O1xuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuYDtcbmNvbnN0IFN0eWxlZFBvcHVwVGV4dCA9IHN0eWxlZC5kaXZgXG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAkeyhwcm9wcykgPT4gcHJvcHMucGFkZGluZ307XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuYDtcbmV4cG9ydCBkZWZhdWx0IFBheW1lbnQ7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaW5wdXQtbWFza1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==