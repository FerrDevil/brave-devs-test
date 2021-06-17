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
    height: !success ? "40px" : "80px",
    color: !success ? "green" : "red",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledPopupText, {
      padding: !success ? "5px 0 0 0" : "0px 0 0 0",
      children: !success ? "Операция проведена успешно!" : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: ["\u041F\u0440\u043E\u0438\u0437\u043E\u0448\u043B\u0430 \u043D\u0435\u043F\u043E\u043B\u0430\u0434\u043A\u0430.", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: "\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 31
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
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
      lineNumber: 77,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Main, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: !name ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: name && capitalize(name)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 30
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
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
              lineNumber: 89,
              columnNumber: 20
            }, _this);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Error, {
          children: error.phone
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Input, {
          value: sum,
          onChange: onChangeSum,
          type: "number",
          placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0443\u043C\u043C\u0443 \u043F\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F(1-1000 \u0440\u0443\u0431)"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Error, {
          children: error.sum
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SubmitButton, {
          type: "button",
          onClick: onClickButton,
          children: "\u041E\u043F\u043B\u0430\u0442\u0438\u0442\u044C"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 11
        }, _this), isSuccess && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Popup, {
          success: isError
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 25
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 76,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvb3BlcmF0b3JzL1twYWdlXS50c3giXSwibmFtZXMiOlsiY2FwaXRhbGl6ZSIsIndvcmQiLCJ0b1VwcGVyQ2FzZSIsInN1YnN0cmluZyIsIlBvcHVwIiwic3VjY2VzcyIsIlBheW1lbnQiLCJ1c2VTdGF0ZSIsInBob25lIiwic2V0UGhvbmUiLCJzdW0iLCJzZXRTdW0iLCJlcnJvciIsInNldEVycm9yIiwiaXNTdWNjZXNzIiwic2V0SXNTdWNjZXNzIiwiaXNFcnJvciIsInNldElzRXJyb3IiLCJvbkNoYW5nZVBob25lIiwiZSIsInRhcmdldCIsInZhbHVlIiwib25DaGFuZ2VTdW0iLCJvbkNsaWNrQnV0dG9uIiwicHJldmVudERlZmF1bHQiLCJpc1ZhbGlkUGhvbmUiLCJsZW5ndGgiLCJzZXRUaW1lb3V0IiwiTWF0aCIsInJhbmRvbSIsIlJvdXRlciIsInJvdXRlciIsInVzZVJvdXRlciIsIm5hbWUiLCJxdWVyeSIsInBhZ2UiLCJDb250YWluZXIiLCJzdHlsZWQiLCJNYWluIiwiRm9ybSIsIklucHV0IiwiU3VibWl0QnV0dG9uIiwiRXJyb3IiLCJTdHlsZWRQb3B1cCIsInByb3BzIiwiaGVpZ2h0IiwiY29sb3IiLCJTdHlsZWRQb3B1cFRleHQiLCJwYWRkaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxJQUFEO0FBQUEsU0FBa0JBLElBQUksQ0FBQyxDQUFELENBQUosQ0FBUUMsV0FBUixLQUF3QkQsSUFBSSxDQUFDRSxTQUFMLENBQWUsQ0FBZixDQUExQztBQUFBLENBQW5COztBQUVBLElBQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRO0FBQUEsTUFBR0MsT0FBSCxRQUFHQSxPQUFIO0FBQUEsc0JBQ1osOERBQUMsV0FBRDtBQUNFLFVBQU0sRUFBRSxDQUFDQSxPQUFE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SyxDQUFDRSxLQUFqQjtBQUFBLENBSkwsQ0FBakI7TUFBTUgsVztBQVNOLElBQU1JLGVBQWUsR0FBR1YscUVBQUg7QUFBQTtBQUFBO0FBQUEsb0lBR1IsVUFBQ08sS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0ksT0FBakI7QUFBQSxDQUhRLENBQXJCO09BQU1ELGU7QUFTTiwrREFBZXpDLE9BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvb3BlcmF0b3JzL1twYWdlXS5lZmUxMDYwODZlNDQ1ZTUxYzE3ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUm91dGVyLCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBJbnB1dE1hc2sgZnJvbSBcInJlYWN0LWlucHV0LW1hc2tcIjtcbmltcG9ydCBHbG9iYWxIZWFkIGZyb20gXCIuLi9kb2N1bWVudFwiO1xuXG5jb25zdCBjYXBpdGFsaXplID0gKHdvcmQ6IHN0cmluZykgPT4gd29yZFswXS50b1VwcGVyQ2FzZSgpICsgd29yZC5zdWJzdHJpbmcoMSk7XG5cbmNvbnN0IFBvcHVwID0gKHsgc3VjY2VzcyB9OiBhbnkpID0+IChcbiAgPFN0eWxlZFBvcHVwXG4gICAgaGVpZ2h0PXshc3VjY2VzcyA/IFwiNDBweFwiIDogXCI4MHB4XCJ9XG4gICAgY29sb3I9eyFzdWNjZXNzID8gXCJncmVlblwiIDogXCJyZWRcIn1cbiAgPlxuICAgIDxTdHlsZWRQb3B1cFRleHQgcGFkZGluZz17IXN1Y2Nlc3MgPyBcIjVweCAwIDAgMFwiIDogXCIwcHggMCAwIDBcIn0+XG4gICAgICB7IXN1Y2Nlc3MgPyAoXG4gICAgICAgIFwi0J7Qv9C10YDQsNGG0LjRjyDQv9GA0L7QstC10LTQtdC90LAg0YPRgdC/0LXRiNC90L4hXCJcbiAgICAgICkgOiAoXG4gICAgICAgIDxwPlxuICAgICAgICAgINCf0YDQvtC40LfQvtGI0LvQsCDQvdC10L/QvtC70LDQtNC60LAuPHA+0J/QvtCy0YLQvtGA0LjRgtC1INC10YnRkSDRgNCw0LcuPC9wPlxuICAgICAgICA8L3A+XG4gICAgICApfVxuICAgIDwvU3R5bGVkUG9wdXBUZXh0PlxuICA8L1N0eWxlZFBvcHVwPlxuKTtcblxuY29uc3QgUGF5bWVudCA9ICgpID0+IHtcbiAgY29uc3QgW3Bob25lLCBzZXRQaG9uZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3N1bSwgc2V0U3VtXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKHsgcGhvbmU6IFwiXCIsIHN1bTogXCJcIiB9KTtcbiAgY29uc3QgW2lzU3VjY2Vzcywgc2V0SXNTdWNjZXNzXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lzRXJyb3IsIHNldElzRXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IG9uQ2hhbmdlUGhvbmUgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBzZXRQaG9uZShlLnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgY29uc3Qgb25DaGFuZ2VTdW0gPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBpZiAoXG4gICAgICAoK2UudGFyZ2V0LnZhbHVlID4gMCAmJiArZS50YXJnZXQudmFsdWUgPD0gMTAwMCkgfHxcbiAgICAgIGUudGFyZ2V0LnZhbHVlID09PSBcIlwiXG4gICAgKSB7XG4gICAgICBzZXRTdW0oZS50YXJnZXQudmFsdWUpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBvbkNsaWNrQnV0dG9uID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGlzVmFsaWRQaG9uZSA9IHBob25lLmxlbmd0aCA9PT0gMTY7XG5cbiAgICBzZXRFcnJvcih7XG4gICAgICBzdW06ICFzdW0gPyBcItCS0LLQtdC00LjRgtC1INGB0YPQvNC80YNcIiA6IFwiXCIsXG4gICAgICBwaG9uZTogIWlzVmFsaWRQaG9uZSA/IFwi0JLQstC10LTQuNGC0LUg0LrQvtGA0YDQtdC60YLQvdGL0Lkg0L3QvtC80LXRgFwiIDogXCJcIixcbiAgICB9KTtcblxuICAgIGlmICghc3VtIHx8IHBob25lLmxlbmd0aCA8IDE2KSByZXR1cm47XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmIChNYXRoLnJhbmRvbSgpID4gMC41KSB7XG4gICAgICAgIHNldElzRXJyb3IoZmFsc2UpO1xuICAgICAgICBzZXRJc1N1Y2Nlc3ModHJ1ZSk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIFJvdXRlci5wdXNoKFwiL1wiKTtcbiAgICAgICAgfSwgMzAwMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRJc0Vycm9yKHRydWUpO1xuICAgICAgICBzZXRJc1N1Y2Nlc3ModHJ1ZSk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0SXNTdWNjZXNzKGZhbHNlKSwgMzAwMCk7XG4gICAgICB9XG4gICAgfSwgMjAwMCk7XG4gIH07XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IG5hbWUgPSByb3V0ZXI/LnF1ZXJ5Py5wYWdlIGFzIHN0cmluZztcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8R2xvYmFsSGVhZCB0aXRsZT17IW5hbWUgPyBcIlwiIDogbmFtZSAmJiBjYXBpdGFsaXplKG5hbWUpfSAvPlxuXG4gICAgICA8TWFpbj5cbiAgICAgICAgPGgxPnshbmFtZSA/IDw+PC8+IDogPGRpdj57bmFtZSAmJiBjYXBpdGFsaXplKG5hbWUpfTwvZGl2Pn08L2gxPlxuICAgICAgICA8Rm9ybT5cbiAgICAgICAgICA8SW5wdXRNYXNrXG4gICAgICAgICAgICBtYXNrPVwiKzcgOTk5IDk5OSA5OSA5OVwiXG4gICAgICAgICAgICBtYXNrQ2hhcj1cIlwiXG4gICAgICAgICAgICBkaXNhYmxlZD17ZmFsc2V9XG4gICAgICAgICAgICB2YWx1ZT17cGhvbmV9XG4gICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VQaG9uZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7KCkgPT4gPElucHV0IHR5cGU9XCJ0ZWxcIiBwbGFjZWhvbGRlcj17XCLQndC+0LzQtdGAINGC0LXQu9C10YTQvtC90LBcIn0gLz59XG4gICAgICAgICAgPC9JbnB1dE1hc2s+XG4gICAgICAgICAgPEVycm9yPntlcnJvci5waG9uZX08L0Vycm9yPlxuICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgdmFsdWU9e3N1bX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVN1bX1cbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLQktCy0LXQtNC40YLQtSDRgdGD0LzQvNGDINC/0L7Qv9C+0LvQvdC10L3QuNGPKDEtMTAwMCDRgNGD0LEpXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxFcnJvcj57ZXJyb3Iuc3VtfTwvRXJyb3I+XG4gICAgICAgICAgPFN1Ym1pdEJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17b25DbGlja0J1dHRvbn0+XG4gICAgICAgICAgICDQntC/0LvQsNGC0LjRgtGMXG4gICAgICAgICAgPC9TdWJtaXRCdXR0b24+XG4gICAgICAgICAge2lzU3VjY2VzcyAmJiA8UG9wdXAgc3VjY2Vzcz17aXNFcnJvcn0gLz59XG4gICAgICAgIDwvRm9ybT5cbiAgICAgIDwvTWFpbj5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgcGFkZGluZzogMCAwLjVyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBmb250LWZhbWlseTogXCJBcmlhbFwiLCBtb25vc3BhY2U7XG5gO1xuY29uc3QgTWFpbiA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6IDVyZW0gMDtcbiAgZmxleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gO1xuY29uc3QgRm9ybSA9IHN0eWxlZC5mb3JtYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuYDtcbmNvbnN0IElucHV0ID0gc3R5bGVkLmlucHV0YFxuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMDBweDtcbiAgbWFyZ2luLXRvcDogNSU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuYDtcbmNvbnN0IFN1Ym1pdEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDMwMHB4O1xuICBtYXJnaW4tdG9wOiA1JTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICA6aG92ZXIge1xuICAgIGJvcmRlci1jb2xvcjogcmdiKDAsIDE1MiwgOTUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxNTIsIDk1KTtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbmA7XG5jb25zdCBFcnJvciA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDEycHg7XG5gO1xuY29uc3QgU3R5bGVkUG9wdXAgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tdG9wOiA1JTtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6ICR7KHByb3BzKSA9PiBwcm9wcy5oZWlnaHR9O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMuY29sb3J9O1xuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuYDtcbmNvbnN0IFN0eWxlZFBvcHVwVGV4dCA9IHN0eWxlZC5kaXZgXG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAkeyhwcm9wcykgPT4gcHJvcHMucGFkZGluZ307XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuYDtcbmV4cG9ydCBkZWZhdWx0IFBheW1lbnQ7XG4iXSwic291cmNlUm9vdCI6IiJ9