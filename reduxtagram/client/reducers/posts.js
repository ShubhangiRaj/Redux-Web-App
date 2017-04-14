// we create a reducer for every single piece of state

// a reducer takes in 2 things
// 1. action (info about what happened)
// 2. copy of current state

function posts(state = [], action) {
	console.log("the post has changed");
  	console.log(state, action);
  	return state;
}

export default posts;


// foundational to redux, whenever an action is dispatched every single reducer will run, wether you choose to act on the action is up to it.
// that is where switch statements come into place