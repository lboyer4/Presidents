import React, { Component } from 'react';
import './Card.css';


export class Card extends Component {
	constructor() {
		super();
		this.state = {

		}
	}

	render(props) {
		const {number, president, birth_year, death_year, took_office, left_office, party} = this.props;
		return(
			<article className="card">
				<p> number: {number} </p>
				<p> president: {president} </p>
				<p> Born: {birth_year} </p>
				<p> Died: {death_year} </p>
				<p> Took Office: {took_office} </p>
				<p> Left Office: {left_office} </p>
				<p> Part: {party} </p>
			</article>
		)
	}
}

export default Card;
