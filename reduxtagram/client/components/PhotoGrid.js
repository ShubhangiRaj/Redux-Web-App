import React, { Component }  from 'react';
import Photo from './Photo';

class PhotoGrid extends Component {
	render(){
		return(
			<div className="photo-grid">
				{this.props.posts.map((posts, i) => <Photo/>)}
			</div>
		);
	}
}

export default PhotoGrid;