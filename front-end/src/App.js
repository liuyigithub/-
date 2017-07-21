import React, { Component } from 'react';
import {connect} from 'react-redux';

import Header from './components/header.js';
class Apps extends Component {
	render() {
		return (
			<main>
				<Header></Header>
			</main>
		);
	}

	
}
var App=connect(
	function(state,ownProps){
		return {
			
		}
	}
)(Apps)
export default App;
