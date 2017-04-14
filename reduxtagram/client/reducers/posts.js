// we create a reducer for every single piece of state

// a reducer takes in 2 things
// 1. action (info about what happened)
// 2. copy of current state

function posts(state = [], action) {
	switch(action.type){
		case 'INCREMENT_LIKES':
		// return the updated state
		console.log("increment likes");
		const i = action.index;
		return [
			...state.slice(0,i), // before the one we are updating
			{...state[i], likes: state[i].likes +1},
			...state.slice(i+1) //  after the one we are updating
		]
		default: 
			return state;
	}
  	return state;
}

export default posts;


// foundational to redux, whenever an action is dispatched every single reducer will run, wether you choose to act on the action is up to it.
// that is where switch statements come into place