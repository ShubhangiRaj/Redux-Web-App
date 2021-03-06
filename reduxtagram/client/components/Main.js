import React, { Component }  from 'react';

import {Link} from 'react-router';

class Main extends Component {
	render(){
		return(
			<div>
				<h1>
					<Link to="/">Reduxstagram</Link>
				</h1>
				{React.cloneElement(this.props.children, this.props)}
			</div>
		);
	}
}

export default Main;



// {this.props.children} is going to be populated by react-router

// this is the presentational componenet and need to infuse it with action creator and data
