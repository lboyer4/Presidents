import React from 'react';
import { CardHolder, mapStateToProps } from './CardHolder';
import { setPresidents } from '../../actions';
import { shallow } from 'enzyme';

describe('mapStateToProps', () => {
	it('should return an object with a presidents array', () => {

		const mockState = {
			type: 'SET_PRESIDENTS',
			presidents: [{name: 'hello'}]
		}

		const expected = {
			presidents: [{name: 'hello'}]
		}

		const mappedProps = mapStateToProps(mockState)

		expect(mappedProps).toEqual(expected)
	});
});