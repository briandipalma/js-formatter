import {equal} from 'assert';
import {readFileSync} from 'fs';

import {describe, it} from 'mocha';

import {defaultFormatCode} from '../src/index';

const fileOptions = {encoding: 'utf-8'};
const testResourcesLocation = 'test/resources/';
const givenCode = readFileSync(testResourcesLocation + 'given.js', fileOptions);
const expectedCode = readFileSync(testResourcesLocation + 'expected.js', fileOptions);

describe('js-formatter', () => {
	it('formats JS code according to config', () => {
		// When
		const formattedCode = defaultFormatCode(givenCode);

		// Then
		equal(formattedCode, expectedCode);
	});
});
