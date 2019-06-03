const initialState = [];

export const presidentsReducer = (state= initialState, action ) => {
	switch(action.type) {
		case 'SET_PRESIDENTS':
			return action.presidents
		default: return state
	}
}