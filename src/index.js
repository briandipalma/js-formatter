import {
	writeFile,
	readFileSync
} from 'fs';

import {sync} from 'glob';
import {format} from 'esformatter';
import {error as logError} from 'winston';

import defaultConfig from '../esformatter.json';

/**
 * Format all *.js files within a directory (either src or test). The options object controls
 * which directory is formatted.
 *
 * @param {Object} optionsObject - Options to configure file formatting.
 */
export function processFiles(optionsObject) {
	const filesToFormat = optionsObject.t ? 'tests/**/*.js' : 'src/**/*.js';

	sync(filesToFormat)
		.map(fileName => ({
			fileName,
			contents: readFileSync(fileName, {encoding: 'utf8'})
		}))
		.map(({fileName, contents}) => ({
			fileName,
			contents: defaultFormatCode(contents)
		}))
		.map(({fileName, contents}) => {
			writeFile(fileName, contents);
		});
}

/**
 * Format code based on the default configuration.
 *
 * @param   {string} codeToFormat Source code to format
 * @returns {string} Formatted code
 */
export function defaultFormatCode(codeToFormat) {
	return formatCode(codeToFormat, defaultConfig);
}

/**
 * Format code into a consistent style if the code is valid top level script code. It might not be
 * valid if, for example, it has an early return statement which is valid to have in function level
 * code. In the error case it returns the code unformatted.
 *
 * @param   {string}  codeToFormat     Source code to format
 * @param   {?Object} formatterOptions Options to configure formatting
 * @returns {string}  Formatted code
 */
export function formatCode(codeToFormat, formatterOptions) {
	try {
		return format(codeToFormat, formatterOptions);
	} catch (error) {
		logError(codeToFormat);
		logError(error);
		logError('Error formatting source code, skipping formatting.');
	}

	return codeToFormat;
}
