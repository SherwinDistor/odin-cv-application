// import { useState } from 'react';
import handleCardClick from './handleCardClick';

// eslint-disable-next-line react/prop-types
const CardBtn = ({ name }) => {
	return (
		<button onClick={handleCardClick} className='sectionBox' key={name}>
			{name}
		</button>
	);
};

const SectionSelector = () => {
	return (
		<div className='sectionSelector'>
			<CardBtn name={'Personal Info'} />
			<CardBtn name={'Work Experience'} />
			<CardBtn name={'Projects'} />
			<CardBtn name={'Education'} />
		</div>
	);
};

export default SectionSelector;
