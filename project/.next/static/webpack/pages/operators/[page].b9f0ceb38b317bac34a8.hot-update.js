self["webpackHotUpdate_N_E"]("pages/operators/[page]",{

/***/ "./pages/operators/[page].tsx":
/*!************************************!*\
  !*** ./pages/operators/[page].tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-input-mask */ "./node_modules/react-input-mask/index.js");
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_input_mask__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _document__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../document */ "./pages/document.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440.WIN-MF8AQNB7BFV\\Desktop\\proj\\project\\pages\\operators\\[page].tsx",
    _this = undefined,
    _s = $RefreshSig$();







var capitalize = function capitalize(word) {
  return word[0].toUpperCase() + word.substring(1);
};

var Popup = function Popup(_ref) {
  var success = _ref.success;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledPopup, {
    padding: !success ? "5px 0 0 0" : "0px 0 0 0",
    height: !success ? "40px" : "80px",
    color: !success ? "green" : "red",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledPopupText, {
      children: !success ? "Операция проведена успешно!" : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: ["\u041F\u0440\u043E\u0438\u0437\u043E\u0448\u043B\u0430 \u043D\u0435\u043F\u043E\u043B\u0430\u0434\u043A\u0430.", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: "\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 31
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 3
  }, _this);
};

_c = Popup;

var Payment = function Payment() {
  _s();

  var _router$query;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
      phone = _useState[0],
      setPhone = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
      sum = _useState2[0],
      setSum = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    phone: "",
    sum: ""
  }),
      error = _useState3[0],
      setError = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      isSuccess = _useState4[0],
      setIsSuccess = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      isError = _useState5[0],
      setIsError = _useState5[1];

  var onChangePhone = function onChangePhone(e) {
    setPhone(e.target.value);
  };

  var onChangeSum = function onChangeSum(e) {
    if (+e.target.value > 0 && +e.target.value <= 1000 || e.target.value === "") {
      setSum(e.target.value);
    }
  };

  var onClickButton = function onClickButton(e) {
    e.preventDefault();
    var isValidPhone = phone.length === 16;
    setError({
      sum: !sum ? "Введите сумму" : "",
      phone: !isValidPhone ? "Введите корректный номер" : ""
    });
    if (!sum || phone.length < 16) return;
    setTimeout(function () {
      if (Math.random() > 0.5) {
        setIsError(false);
        setIsSuccess(true);
        setTimeout(function () {
          next_router__WEBPACK_IMPORTED_MODULE_2___default().push("/");
        }, 3000);
      } else {
        setIsError(true);
        setIsSuccess(true);
        setTimeout(function () {
          return setIsSuccess(false);
        }, 3000);
      }
    }, 2000);
  };

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  var name = router === null || router === void 0 ? void 0 : (_router$query = router.query) === null || _router$query === void 0 ? void 0 : _router$query.page;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_document__WEBPACK_IMPORTED_MODULE_4__.default, {
      title: !name ? "" : name && capitalize(name)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Main, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: !name ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: name && capitalize(name)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 30
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Form, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_input_mask__WEBPACK_IMPORTED_MODULE_3___default()), {
          mask: "+7 999 999 99 99",
          maskChar: "",
          disabled: false,
          value: phone,
          onChange: onChangePhone,
          children: function children() {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Input, {
              type: "tel",
              placeholder: "Номер телефона"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 20
            }, _this);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Error, {
          children: error.phone
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Input, {
          value: sum,
          onChange: onChangeSum,
          type: "number",
          placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0443\u043C\u043C\u0443 \u043F\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F(1-1000 \u0440\u0443\u0431)"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Error, {
          children: error.sum
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SubmitButton, {
          type: "button",
          onClick: onClickButton,
          children: "\u041E\u043F\u043B\u0430\u0442\u0438\u0442\u044C"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 11
        }, _this), isSuccess && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Popup, {
          success: isError
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 25
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 77,
    columnNumber: 5
  }, _this);
};

_s(Payment, "r59NrvLs6KvEC4g7rgtc+TSjFCs=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter];
});

_c2 = Payment;
var Container = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.div.withConfig({
  displayName: "page__Container",
  componentId: "sc-47q407-0"
})(["min-height:100vh;padding:0 0.5rem;display:flex;flex-direction:column;justify-content:center;align-items:center;height:100vh;font-family:\"Arial\",monospace;"]);
_c3 = Container;
var Main = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.div.withConfig({
  displayName: "page__Main",
  componentId: "sc-47q407-1"
})(["padding:5rem 0;flex:1;display:flex;flex-direction:column;justify-content:center;align-items:center;"]);
_c4 = Main;
var Form = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.form.withConfig({
  displayName: "page__Form",
  componentId: "sc-47q407-2"
})(["display:flex;flex-direction:column;"]);
_c5 = Form;
var Input = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.input.withConfig({
  displayName: "page__Input",
  componentId: "sc-47q407-3"
})(["height:30px;width:300px;margin-top:5%;border-radius:5px;text-align:center;"]);
_c6 = Input;
var SubmitButton = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.button.withConfig({
  displayName: "page__SubmitButton",
  componentId: "sc-47q407-4"
})(["height:30px;width:300px;margin-top:5%;border-radius:10px;font-size:14px;:hover{border-color:rgb(0,152,95);background-color:rgb(0,152,95);color:white;}"]);
_c7 = SubmitButton;
var Error = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.div.withConfig({
  displayName: "page__Error",
  componentId: "sc-47q407-5"
})(["margin-left:10px;margin-top:10px;color:red;font-size:12px;"]);
_c8 = Error;
var StyledPopup = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.div.withConfig({
  displayName: "page__StyledPopup",
  componentId: "sc-47q407-6"
})(["margin-top:5%;width:300px;height:", ";background-color:", ";border:2px solid black;color:white;border-radius:15px;"], function (props) {
  return props.height;
}, function (props) {
  return props.color;
});
_c9 = StyledPopup;
var StyledPopupText = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.div.withConfig({
  displayName: "page__StyledPopupText",
  componentId: "sc-47q407-7"
})(["font-size:14px;text-align:center;padding:", ";display:flex;flex-direction:column;align-items:center;justify-content:center;"], function (props) {
  return props.padding;
});
_c10 = StyledPopupText;
/* harmony default export */ __webpack_exports__["default"] = (Payment);

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10;

$RefreshReg$(_c, "Popup");
$RefreshReg$(_c2, "Payment");
$RefreshReg$(_c3, "Container");
$RefreshReg$(_c4, "Main");
$RefreshReg$(_c5, "Form");
$RefreshReg$(_c6, "Input");
$RefreshReg$(_c7, "SubmitButton");
$RefreshReg$(_c8, "Error");
$RefreshReg$(_c9, "StyledPopup");
$RefreshReg$(_c10, "StyledPopupText");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvb3BlcmF0b3JzL1twYWdlXS50c3giXSwibmFtZXMiOlsiY2FwaXRhbGl6ZSIsIndvcmQiLCJ0b1VwcGVyQ2FzZSIsInN1YnN0cmluZyIsIlBvcHVwIiwic3VjY2VzcyIsIlBheW1lbnQiLCJ1c2VTdGF0ZSIsInBob25lIiwic2V0UGhvbmUiLCJzdW0iLCJzZXRTdW0iLCJlcnJvciIsInNldEVycm9yIiwiaXNTdWNjZXNzIiwic2V0SXNTdWNjZXNzIiwiaXNFcnJvciIsInNldElzRXJyb3IiLCJvbkNoYW5nZVBob25lIiwiZSIsInRhcmdldCIsInZhbHVlIiwib25DaGFuZ2VTdW0iLCJvbkNsaWNrQnV0dG9uIiwicHJldmVudERlZmF1bHQiLCJpc1ZhbGlkUGhvbmUiLCJsZW5ndGgiLCJzZXRUaW1lb3V0IiwiTWF0aCIsInJhbmRvbSIsIlJvdXRlciIsInJvdXRlciIsInVzZVJvdXRlciIsIm5hbWUiLCJxdWVyeSIsInBhZ2UiLCJDb250YWluZXIiLCJzdHlsZWQiLCJNYWluIiwiRm9ybSIsIklucHV0IiwiU3VibWl0QnV0dG9uIiwiRXJyb3IiLCJTdHlsZWRQb3B1cCIsInByb3BzIiwiaGVpZ2h0IiwiY29sb3IiLCJTdHlsZWRQb3B1cFRleHQiLCJwYWRkaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxJQUFEO0FBQUEsU0FBa0JBLElBQUksQ0FBQyxDQUFELENBQUosQ0FBUUMsV0FBUixLQUF3QkQsSUFBSSxDQUFDRSxTQUFMLENBQWUsQ0FBZixDQUExQztBQUFBLENBQW5COztBQUVBLElBQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRO0FBQUEsTUFBR0MsT0FBSCxRQUFHQSxPQUFIO0FBQUEsc0JBQ1osOERBQUMsV0FBRDtBQUNFLFdBQU8sRUFBRyxDQUFDQSxPQUFE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LENBQUNFLEtBQWpCO0FBQUEsQ0FKTCxDQUFqQjtNQUFNSCxXO0FBU04sSUFBTUksZUFBZSxHQUFHVixxRUFBSDtBQUFBO0FBQUE7QUFBQSxvSUFHVCxVQUFDTyxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDSSxPQUFqQjtBQUFBLENBSFMsQ0FBckI7T0FBTUQsZTtBQVNOLCtEQUFlekMsT0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9vcGVyYXRvcnMvW3BhZ2VdLmI5ZjBjZWIzOGIzMTdiYWMzNGE4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSb3V0ZXIsIHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IElucHV0TWFzayBmcm9tIFwicmVhY3QtaW5wdXQtbWFza1wiO1xuaW1wb3J0IEdsb2JhbEhlYWQgZnJvbSBcIi4uL2RvY3VtZW50XCI7XG5cbmNvbnN0IGNhcGl0YWxpemUgPSAod29yZDogc3RyaW5nKSA9PiB3b3JkWzBdLnRvVXBwZXJDYXNlKCkgKyB3b3JkLnN1YnN0cmluZygxKTtcblxuY29uc3QgUG9wdXAgPSAoeyBzdWNjZXNzIH06IGFueSkgPT4gKFxuICA8U3R5bGVkUG9wdXBcbiAgICBwYWRkaW5nID17IXN1Y2Nlc3MgPyBcIjVweCAwIDAgMFwiIDogXCIwcHggMCAwIDBcIn1cbiAgICBoZWlnaHQ9eyFzdWNjZXNzID8gXCI0MHB4XCIgOiBcIjgwcHhcIn1cbiAgICBjb2xvcj17IXN1Y2Nlc3MgPyBcImdyZWVuXCIgOiBcInJlZFwifVxuICA+XG4gICAgPFN0eWxlZFBvcHVwVGV4dD5cbiAgICAgIHshc3VjY2VzcyA/IChcbiAgICAgICAgXCLQntC/0LXRgNCw0YbQuNGPINC/0YDQvtCy0LXQtNC10L3QsCDRg9GB0L/QtdGI0L3QviFcIlxuICAgICAgKSA6IChcbiAgICAgICAgPHA+XG4gICAgICAgICAg0J/RgNC+0LjQt9C+0YjQu9CwINC90LXQv9C+0LvQsNC00LrQsC48cD7Qn9C+0LLRgtC+0YDQuNGC0LUg0LXRidGRINGA0LDQty48L3A+XG4gICAgICAgIDwvcD5cbiAgICAgICl9XG4gICAgPC9TdHlsZWRQb3B1cFRleHQ+XG4gIDwvU3R5bGVkUG9wdXA+XG4pO1xuXG5jb25zdCBQYXltZW50ID0gKCkgPT4ge1xuICBjb25zdCBbcGhvbmUsIHNldFBob25lXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbc3VtLCBzZXRTdW1dID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoeyBwaG9uZTogXCJcIiwgc3VtOiBcIlwiIH0pO1xuICBjb25zdCBbaXNTdWNjZXNzLCBzZXRJc1N1Y2Nlc3NdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNFcnJvciwgc2V0SXNFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgb25DaGFuZ2VQaG9uZSA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIHNldFBob25lKGUudGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBvbkNoYW5nZVN1bSA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIGlmIChcbiAgICAgICgrZS50YXJnZXQudmFsdWUgPiAwICYmICtlLnRhcmdldC52YWx1ZSA8PSAxMDAwKSB8fFxuICAgICAgZS50YXJnZXQudmFsdWUgPT09IFwiXCJcbiAgICApIHtcbiAgICAgIHNldFN1bShlLnRhcmdldC52YWx1ZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IG9uQ2xpY2tCdXR0b24gPSAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgaXNWYWxpZFBob25lID0gcGhvbmUubGVuZ3RoID09PSAxNjtcblxuICAgIHNldEVycm9yKHtcbiAgICAgIHN1bTogIXN1bSA/IFwi0JLQstC10LTQuNGC0LUg0YHRg9C80LzRg1wiIDogXCJcIixcbiAgICAgIHBob25lOiAhaXNWYWxpZFBob25lID8gXCLQktCy0LXQtNC40YLQtSDQutC+0YDRgNC10LrRgtC90YvQuSDQvdC+0LzQtdGAXCIgOiBcIlwiLFxuICAgIH0pO1xuXG4gICAgaWYgKCFzdW0gfHwgcGhvbmUubGVuZ3RoIDwgMTYpIHJldHVybjtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPiAwLjUpIHtcbiAgICAgICAgc2V0SXNFcnJvcihmYWxzZSk7XG4gICAgICAgIHNldElzU3VjY2Vzcyh0cnVlKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgUm91dGVyLnB1c2goXCIvXCIpO1xuICAgICAgICB9LCAzMDAwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldElzRXJyb3IodHJ1ZSk7XG4gICAgICAgIHNldElzU3VjY2Vzcyh0cnVlKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBzZXRJc1N1Y2Nlc3MoZmFsc2UpLCAzMDAwKTtcbiAgICAgIH1cbiAgICB9LCAyMDAwKTtcbiAgfTtcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgbmFtZSA9IHJvdXRlcj8ucXVlcnk/LnBhZ2UgYXMgc3RyaW5nO1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxHbG9iYWxIZWFkIHRpdGxlPXshbmFtZSA/IFwiXCIgOiBuYW1lICYmIGNhcGl0YWxpemUobmFtZSl9IC8+XG5cbiAgICAgIDxNYWluPlxuICAgICAgICA8aDE+eyFuYW1lID8gPD48Lz4gOiA8ZGl2PntuYW1lICYmIGNhcGl0YWxpemUobmFtZSl9PC9kaXY+fTwvaDE+XG4gICAgICAgIDxGb3JtPlxuICAgICAgICAgIDxJbnB1dE1hc2tcbiAgICAgICAgICAgIG1hc2s9XCIrNyA5OTkgOTk5IDk5IDk5XCJcbiAgICAgICAgICAgIG1hc2tDaGFyPVwiXCJcbiAgICAgICAgICAgIGRpc2FibGVkPXtmYWxzZX1cbiAgICAgICAgICAgIHZhbHVlPXtwaG9uZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVBob25lfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHsoKSA9PiA8SW5wdXQgdHlwZT1cInRlbFwiIHBsYWNlaG9sZGVyPXtcItCd0L7QvNC10YAg0YLQtdC70LXRhNC+0L3QsFwifSAvPn1cbiAgICAgICAgICA8L0lucHV0TWFzaz5cbiAgICAgICAgICA8RXJyb3I+e2Vycm9yLnBob25lfTwvRXJyb3I+XG4gICAgICAgICAgPElucHV0XG4gICAgICAgICAgICB2YWx1ZT17c3VtfVxuICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlU3VtfVxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCS0LLQtdC00LjRgtC1INGB0YPQvNC80YMg0L/QvtC/0L7Qu9C90LXQvdC40Y8oMS0xMDAwINGA0YPQsSlcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEVycm9yPntlcnJvci5zdW19PC9FcnJvcj5cbiAgICAgICAgICA8U3VibWl0QnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtvbkNsaWNrQnV0dG9ufT5cbiAgICAgICAgICAgINCe0L/Qu9Cw0YLQuNGC0YxcbiAgICAgICAgICA8L1N1Ym1pdEJ1dHRvbj5cbiAgICAgICAgICB7aXNTdWNjZXNzICYmIDxQb3B1cCBzdWNjZXNzPXtpc0Vycm9yfSAvPn1cbiAgICAgICAgPC9Gb3JtPlxuICAgICAgPC9NYWluPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBwYWRkaW5nOiAwIDAuNXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwdmg7XG4gIGZvbnQtZmFtaWx5OiBcIkFyaWFsXCIsIG1vbm9zcGFjZTtcbmA7XG5jb25zdCBNYWluID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZzogNXJlbSAwO1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmA7XG5jb25zdCBGb3JtID0gc3R5bGVkLmZvcm1gXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5gO1xuY29uc3QgSW5wdXQgPSBzdHlsZWQuaW5wdXRgXG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDMwMHB4O1xuICBtYXJnaW4tdG9wOiA1JTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5gO1xuY29uc3QgU3VibWl0QnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMzAwcHg7XG4gIG1hcmdpbi10b3A6IDUlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIDpob3ZlciB7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMCwgMTUyLCA5NSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDE1MiwgOTUpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuYDtcbmNvbnN0IEVycm9yID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbmA7XG5jb25zdCBTdHlsZWRQb3B1cCA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi10b3A6IDUlO1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogJHsocHJvcHMpID0+IHByb3BzLmhlaWdodH07XG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy5jb2xvcn07XG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG5gO1xuY29uc3QgU3R5bGVkUG9wdXBUZXh0ID0gc3R5bGVkLmRpdmBcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6JHsocHJvcHMpID0+IHByb3BzLnBhZGRpbmd9O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbmA7XG5leHBvcnQgZGVmYXVsdCBQYXltZW50O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==