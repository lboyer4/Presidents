
import React from 'react';
import ReactDOM from 'react-dom';
import { App, mapDispatchToProps } from './App';
import { setPresidents } from '../../actions';
import { shallow } from 'enzyme'

describe('App', () => { 


	describe('mapDispatchToProps', () => {

		it('calls dispatch with an setPresidents type', () => {

			const wrapper = shallow(
				<App 
					setPresidents={jest.fn()}
				/>
			)
			
		
			const mockDispatch = jest.fn();
			const actionToDispatch = setPresidents([{name: 'hello'}])

			const mappedProps = mapDispatchToProps(mockDispatch)
			mappedProps.makeThePresidents([{name: 'hello'}])

			expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
		})
	})
})