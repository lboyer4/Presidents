import * as actions from '../actions';

describe('actions', () => {

	it('should have a type of SET_PRESIDENTS', () => {

		const mockPresidents = [
			{ name: 'Obama'},
			{ name: 'Bush'},
			{ name: 'Clinton'}
		]
		const expectedAction = {
			type: 'SET_PRESIDENTS',
			presidents: mockPresidents 
		}

		const result = actions.setPresidents(mockPresidents)

		expect(result).toEqual(expectedAction)
	});
});