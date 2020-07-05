import React, { Component } from 'react';
import Header from 'parts/Header';
import Hero from 'parts/Hero';
import landingPage from 'json/landingPage.json';
import MostPicked from 'parts/MostPicked';
import Category from 'parts/Category';

export default class LandingPage extends Component {
	constructor(props) {
		super(props);
		this.refMostPicked = React.createRef();
	}
	render() {
		return (
			<React.Fragment>
				<Header {...this.props} />
				<Hero refMostPicked={this.refMostPicked} data={landingPage.hero} />
				<MostPicked refMostPicked={this.refMostPicked} data={landingPage.mostPicked} />
				<Category data={landingPage.categories} />
			</React.Fragment>
		);
	}
}
