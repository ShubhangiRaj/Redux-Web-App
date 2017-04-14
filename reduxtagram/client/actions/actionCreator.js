// increment of likes
export function increment(index){
	return {
		type: 'INCREMENT_LIKES',
		index
	}
}
// add comment
export function addComment(postId, author, comment){
	return{
		type: 'ADD_COMMENT',
		postId,
		author,
		comment
	}
}
// remove comment
export function removeComment(postId, i){
	return{
		type: 'REMOVE_COMMENT',
		i, 
		postId
	}
}


// actions are just object which have type "INCREMENT_LIKES" and payload

// now these actions are going to be dispatched when something happens on the UI front
