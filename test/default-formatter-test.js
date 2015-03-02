import {equal} from 'assert';
import {readFileSync} from 'fs';

import {describe, it} from 'mocha';

import {defaultFormatCode} from '../src/index';

const fileOptions = {encoding: 'utf-8'};
const testResourcesLocation = 'test/resources/';

describe('js-formatter', () => {
	it('formats JS code according to config', () => {
		// Given
		const givenCode = readFileSync(testResourcesLocation + 'given.js', fileOptions);

		// When
		const formattedCode = defaultFormatCode(givenCode);

		// Then
		const expectedCode = readFileSync(testResourcesLocation + 'expected.js', fileOptions);
		equal(formattedCode, expectedCode);
	});
});
