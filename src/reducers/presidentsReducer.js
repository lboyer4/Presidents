const initialState = [];

export const presidentsReducer = (state= initialState, action ) => {
	switch(action.type) {
		case 'SET_PRESIDENTS':
		console.log(action.presidents)
			return action.presidents
		default: return state
	}
}