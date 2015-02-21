/**
 * Format code into a consistent style if the code is valid top level script code. It might not be
 * valid if, for example, it has an early return statement which is valid to have in function level
 * code. In the error case it returns the code unformatted.
 *
 * @param   {string}  codeToFormat     Source code to format
 * @param   {?Object} formatterOptions Options to configure formatting
 * @returns {string}  Formatted code
 */
function formatCodeIfValid(codeToFormat, formatterOptions) {
	try {
		return esformatter.format(codeToFormat, formatterOptions);
	} catch (error) {
		console.error(codeToFormat);
		console.error(error);
		console.error('Error formatting source code, skipping formatting.');
	}

	return codeToFormat;
}
