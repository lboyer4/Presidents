import React from 'react';
import { connect } from 'react-redux';
import { setPresidents } from '../../actions';
import Card from '../Card/Card';
import './CardHolder.css';


export const CardHolder = (props) => {
	const presidentCard = props.presidents.map(president => {
		return <Card {...president} key={president.id} />
	})
	console.log(props.loading)
	return (
		<section className="holder">
			{presidentCard}
		</section>
		)
}

export const mapStateToProps = (state) => ({
	presidents: state.presidentsReducer,
	
});

export default connect(mapStateToProps)(CardHolder)