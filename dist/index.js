"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

/**
 * Format all *.js files within a directory (either src or test). The options object controls
 * which directory is formatted.
 *
 * @param {Object} optionsObject - Options to configure file formatting.
 */
exports.processFiles = processFiles;

/**
 * Format code based on the default configuration.
 *
 * @param   {string} codeToFormat Source code to format
 * @returns {string} Formatted code
 */
exports.defaultFormatCode = defaultFormatCode;

/**
 * Format code into a consistent style if the code is valid top level script code. It might not be
 * valid if, for example, it has an early return statement which is valid to have in function level
 * code. In the error case it returns the code unformatted.
 *
 * @param   {string}  codeToFormat     Source code to format
 * @param   {?Object} formatterOptions Options to configure formatting
 * @returns {string}  Formatted code
 */
exports.formatCode = formatCode;

var _fs = require("fs");

var writeFile = _fs.writeFile;
var readFileSync = _fs.readFileSync;

var sync = require("glob").sync;

var format = require("esformatter").format;

var logError = require("winston").error;

var defaultConfig = _interopRequire(require("../esformatter.json"));

function processFiles(optionsObject) {
	var filesToFormat = optionsObject.t ? "tests/**/*.js" : "src/**/*.js";

	sync(filesToFormat).map(function (fileName) {
		return {
			fileName: fileName,
			contents: readFileSync(fileName, { encoding: "utf8" })
		};
	}).map(function (_ref) {
		var fileName = _ref.fileName;
		var contents = _ref.contents;
		return {
			fileName: fileName,
			contents: defaultFormatCode(contents)
		};
	}).map(function (_ref) {
		var fileName = _ref.fileName;
		var contents = _ref.contents;

		writeFile(fileName, contents);
	});
}function defaultFormatCode(codeToFormat) {
	return formatCode(codeToFormat, defaultConfig);
}function formatCode(codeToFormat, formatterOptions) {
	try {
		return format(codeToFormat, formatterOptions);
	} catch (error) {
		logError(codeToFormat);
		logError(error);
		logError("Error formatting source code, skipping formatting.");
	}

	return codeToFormat;
}
Object.defineProperty(exports, "__esModule", {
	value: true
});
