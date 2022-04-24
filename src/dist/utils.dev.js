"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toProper = void 0;

// converts a string to a proper string - makes first letter a capital
var toProper = function toProper(string) {
  return string[0].toUpperCase() + string.substring(1);
};

exports.toProper = toProper;