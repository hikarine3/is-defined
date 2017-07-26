"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = function (obj, key) {
  if (typeof key !== "undefined" && key) {
    return key.split(".").every(function (x) {
      if ((typeof obj === "undefined" ? "undefined" : _typeof(obj)) != "object" || obj === null || !x in obj || obj[x] === null) {
        return false;
      } else {
        obj = obj[x];
        return true;
      }
    });
  } else {
    if (typeof obj !== "undefined" && obj !== null) {
      return true;
    } else {
      return false;
    }
  }
};