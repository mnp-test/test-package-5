"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = testPackage_5;

var _util = require("util");

const LOG = (0, _util.debuglog)('@mnp-test/test-package-5');
/**
 * test-description
 * @param {Config} config Configuration object.
 * @param {string} config.type The type.
 */

async function testPackage_5(config = {}) {
  const {
    type
  } = config;
  LOG('@mnp-test/test-package-5 called with %s', type);
  return type;
}
/**
 * @typedef {Object} Config
 * @property {string} type The type.
 */
//# sourceMappingURL=index.js.map