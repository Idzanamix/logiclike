"use strict";
self["webpackHotUpdatelogiclike"]("main",{

/***/ "./src/Courses/CoursesLogic/CoursesLogic.tsx":
/*!***************************************************!*\
  !*** ./src/Courses/CoursesLogic/CoursesLogic.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CoursesLogic: () => (/* binding */ CoursesLogic)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _CoursesList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../CoursesList */ "./src/Courses/CoursesList/index.ts");
/* harmony import */ var _utils_resetCamelCase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/resetCamelCase */ "./utils/resetCamelCase.ts");
/* harmony import */ var _errorBanners_Error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../errorBanners/Error */ "./src/errorBanners/Error.tsx");
/* harmony import */ var _context_CoursesContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/CoursesContext */ "./src/context/CoursesContext.tsx");






function CoursesLogic() {
  const {
    course
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useParams)(); // извлекаем динамический роуд-тэг
  const {
    coursesData,
    loading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_CoursesContext__WEBPACK_IMPORTED_MODULE_4__.coursesContext);
  const currentCourse = (0,_utils_resetCamelCase__WEBPACK_IMPORTED_MODULE_2__.resetCamelCase)(course || ''); // преобразование Camel Case в привычный читаемый формат
  const currentCourseData = coursesData.filter(({
    tags
  }) => tags.includes(currentCourse)); // фильтруем нужные данные по текущему тегу
  const finalData = course === 'ВсеТемы' ? coursesData : currentCourseData;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, finalData.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CoursesList__WEBPACK_IMPORTED_MODULE_1__.CoursesList, {
    coursesData: finalData,
    "data-testid": "custom-element"
  }) : loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_errorBanners_Error__WEBPACK_IMPORTED_MODULE_3__.Error, {
    massage: "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430... \uD83D\uDE38",
    notError: true
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_errorBanners_Error__WEBPACK_IMPORTED_MODULE_3__.Error, {
    massage: "\u041A\u0443\u0440\u0441\u043E\u0432 \u043F\u043E \u0434\u0430\u043D\u043D\u043E\u0439 \u0442\u0435\u043C\u0435 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E \uD83D\uDE3F"
  }));
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("85a080c0ed0561e94b30")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4zM2U5MmJiZDFjZTdmOWNlYjI5MS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBDO0FBQ0c7QUFDQTtBQUNrQjtBQUNkO0FBQ2E7QUFFdkQsU0FBU08sWUFBWUEsQ0FBQSxFQUFHO0VBQzdCLE1BQU07SUFBRUM7RUFBTyxDQUFDLEdBQUdOLDJEQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDaEMsTUFBTTtJQUFDTyxXQUFXO0lBQUVDO0VBQU8sQ0FBQyxHQUFHVCxpREFBVSxDQUFDSyxtRUFBYyxDQUFDO0VBQ3pELE1BQU1LLGFBQWEsR0FBR1AscUVBQWMsQ0FBQ0ksTUFBTSxJQUFJLEVBQUUsQ0FBQyxFQUFDO0VBQ25ELE1BQU1JLGlCQUFpQixHQUFHSCxXQUFXLENBQUNJLE1BQU0sQ0FBQyxDQUFDO0lBQUVDO0VBQUssQ0FBQyxLQUFLQSxJQUFJLENBQUNDLFFBQVEsQ0FBQ0osYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQzFGLE1BQU1LLFNBQVMsR0FBR1IsTUFBTSxLQUFLLFNBQVMsR0FBR0MsV0FBVyxHQUFHRyxpQkFBaUI7RUFFeEUsb0JBQ0VaLDBEQUFBLENBQUFBLHVEQUFBLFFBQ0dnQixTQUFTLENBQUNHLE1BQU0sR0FBRyxDQUFDLGdCQUVuQm5CLDBEQUFBLENBQUNHLHFEQUFXO0lBQUNNLFdBQVcsRUFBRU8sU0FBVTtJQUFDLGVBQVk7RUFBZ0IsQ0FBRSxDQUFDLEdBRXBFTixPQUFPLGdCQUVMViwwREFBQSxDQUFDSyxzREFBSztJQUFDZSxPQUFPLEVBQUMsa0VBQWdCO0lBQUNDLFFBQVE7RUFBQSxDQUFFLENBQUMsZ0JBRTNDckIsMERBQUEsQ0FBQ0ssc0RBQUs7SUFBQ2UsT0FBTyxFQUFDO0VBQXFDLENBQUUsQ0FDMUQsQ0FBQztBQUVQOzs7Ozs7OztVQzNCQSIsInNvdXJjZXMiOlsid2VicGFjazovL2xvZ2ljbGlrZS8uL3NyYy9Db3Vyc2VzL0NvdXJzZXNMb2dpYy9Db3Vyc2VzTG9naWMudHN4Iiwid2VicGFjazovL2xvZ2ljbGlrZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyBDb3Vyc2VzTGlzdCB9IGZyb20gXCIuLi9Db3Vyc2VzTGlzdFwiO1xuaW1wb3J0IHsgcmVzZXRDYW1lbENhc2UgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvcmVzZXRDYW1lbENhc2VcIjtcbmltcG9ydCB7IEVycm9yIH0gZnJvbSBcIi4uLy4uL2Vycm9yQmFubmVycy9FcnJvclwiO1xuaW1wb3J0IHsgY291cnNlc0NvbnRleHQgfSBmcm9tIFwiLi4vLi4vY29udGV4dC9Db3Vyc2VzQ29udGV4dFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gQ291cnNlc0xvZ2ljKCkge1xuICBjb25zdCB7IGNvdXJzZSB9ID0gdXNlUGFyYW1zKCk7IC8vINC40LfQstC70LXQutCw0LXQvCDQtNC40L3QsNC80LjRh9C10YHQutC40Lkg0YDQvtGD0LQt0YLRjdCzXG4gIGNvbnN0IHtjb3Vyc2VzRGF0YSwgbG9hZGluZ30gPSB1c2VDb250ZXh0KGNvdXJzZXNDb250ZXh0KTtcbiAgY29uc3QgY3VycmVudENvdXJzZSA9IHJlc2V0Q2FtZWxDYXNlKGNvdXJzZSB8fCAnJykgLy8g0L/RgNC10L7QsdGA0LDQt9C+0LLQsNC90LjQtSBDYW1lbCBDYXNlINCyINC/0YDQuNCy0YvRh9C90YvQuSDRh9C40YLQsNC10LzRi9C5INGE0L7RgNC80LDRglxuICBjb25zdCBjdXJyZW50Q291cnNlRGF0YSA9IGNvdXJzZXNEYXRhLmZpbHRlcigoeyB0YWdzIH0pID0+IHRhZ3MuaW5jbHVkZXMoY3VycmVudENvdXJzZSkpOyAvLyDRhNC40LvRjNGC0YDRg9C10Lwg0L3Rg9C20L3Ri9C1INC00LDQvdC90YvQtSDQv9C+INGC0LXQutGD0YnQtdC80YMg0YLQtdCz0YNcbiAgY29uc3QgZmluYWxEYXRhID0gY291cnNlID09PSAn0JLRgdC10KLQtdC80YsnID8gY291cnNlc0RhdGEgOiBjdXJyZW50Q291cnNlRGF0YTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7ZmluYWxEYXRhLmxlbmd0aCA+IDBcbiAgICAgICAgP1xuICAgICAgICA8Q291cnNlc0xpc3QgY291cnNlc0RhdGE9e2ZpbmFsRGF0YX0gZGF0YS10ZXN0aWQ9XCJjdXN0b20tZWxlbWVudFwiIC8+XG4gICAgICAgIDpcbiAgICAgICAgbG9hZGluZ1xuICAgICAgICAgID9cbiAgICAgICAgICA8RXJyb3IgbWFzc2FnZT0n0JfQsNCz0YDRg9C30LrQsC4uLiDwn5i4JyBub3RFcnJvciAvPlxuICAgICAgICAgIDpcbiAgICAgICAgICA8RXJyb3IgbWFzc2FnZT0n0JrRg9GA0YHQvtCyINC/0L4g0LTQsNC90L3QvtC5INGC0LXQvNC1INC90LUg0L3QsNC50LTQtdC90L4g8J+YvycgLz59XG4gICAgPC8+XG4gIClcbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjg1YTA4MGMwZWQwNTYxZTk0YjMwXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ29udGV4dCIsInVzZVBhcmFtcyIsIkNvdXJzZXNMaXN0IiwicmVzZXRDYW1lbENhc2UiLCJFcnJvciIsImNvdXJzZXNDb250ZXh0IiwiQ291cnNlc0xvZ2ljIiwiY291cnNlIiwiY291cnNlc0RhdGEiLCJsb2FkaW5nIiwiY3VycmVudENvdXJzZSIsImN1cnJlbnRDb3Vyc2VEYXRhIiwiZmlsdGVyIiwidGFncyIsImluY2x1ZGVzIiwiZmluYWxEYXRhIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwibGVuZ3RoIiwibWFzc2FnZSIsIm5vdEVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==