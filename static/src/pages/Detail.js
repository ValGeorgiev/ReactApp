import React from 'react';

var test = "Shte stane!";
class Detail extends React.Component {

	clickEvent() {
		console.log('Clicked Clicked');
	}

	render() {
		return( <div> 
			<p>This is JSX rendering HTML {this.props.message} {test}!</p>
			<button onClick={this.clickEvent}>Click me</button>
		</div>);
	}	
}

export default Detail;