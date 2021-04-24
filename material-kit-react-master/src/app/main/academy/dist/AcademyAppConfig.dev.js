"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AcademyAppConfig = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var AcademyAppConfig = {
  settings: {
    layout: {}
  },
  routes: [{
    path: '/academy/course/:courseId/:courseName',
    component: _react["default"].lazy(function () {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('./course/StudentCoursePage'));
      });
    })
  }, {
    path: '/academy/courses',
    component: _react["default"].lazy(function () {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('./courses/Courses'));
      });
    })
  }, {
    path: '/academy/crp/sheetupload',
    component: _react["default"].lazy(function () {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('./crp/tabs/SheetUpload.js'));
      });
    })
  }, {
    path: '/academy/crp/PendingWork/:courseId',
    component: _react["default"].lazy(function () {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('./crp/tabs/PendingWork/RequestList.js'));
      });
    })
  }, {
    path: "/academy/crp/pastOfferingDetails/:offeringId",
    component: _react["default"].lazy(function () {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('./crp/PastOfferingPage.js'));
      });
    })
  }, {
    path: "/academy/crp/courseDetails/:offeringId",
    component: _react["default"].lazy(function () {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('./crp/CoursePage.js'));
      });
    })
  }, {
    path: '/academy/crp/admin',
    component: _react["default"].lazy(function () {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('./crp/admin/AdminPage.js'));
      });
    })
  }, {
    path: '/academy/crp/hod',
    component: _react["default"].lazy(function () {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('./crp/hod/hodPage.js'));
      });
    })
  }, {
    path: '/academy/crp',
    component: _react["default"].lazy(function () {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('./crp/CourseRegistrationPortal'));
      });
    })
  }, {
    path: '/academy',
    component: _react["default"].lazy(function () {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('./AcademyPage/AcademyPage'));
      });
    })
  }]
};
exports.AcademyAppConfig = AcademyAppConfig;