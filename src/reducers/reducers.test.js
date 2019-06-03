import {presidentsReducer} from './presidentsReducer';

describe('presidentsReducer', () => {
	it('should return the initial state', () => {
		const expected = [];
		const result = presidentsReducer(undefined, {})
		expect(result).toEqual(expected)
	});

	it('should return state with an array of presidents', () => {

		const expected = [];
		const result = presidentsReducer(undefined{'SET_PRESIDENTS'})

		expect(result).toEqual(expected)
});