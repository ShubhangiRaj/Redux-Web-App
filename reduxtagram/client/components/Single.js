import React, { Component }  from 'react';
import Photo from './Photo';
// import comments
import Comments from './Comments';

class Single extends Component {
	render(){
		// index of the post
		const i = this.props.posts.findIndex((post)=> post.code === this.props.params.postId);
		const post = this.props.posts[i];
		console.log(post);
		// get the post
		return(
			<div className="single-photo">
				<Photo i={i} post={post} {...this.props} />
				<Comments/>
			</div>
		);
	}
}

export default Single;