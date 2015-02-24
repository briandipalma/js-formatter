import winston from 'winston';
import {format} from 'esformatter';

import defaultConfig from '../esformatter.json';

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
		winston.error(codeToFormat);
		winston.error(error);
		winston.error('Error formatting source code, skipping formatting.');
	}

	return codeToFormat;
}
