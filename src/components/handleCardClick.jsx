import { useState } from 'react';

const handleCardClick = (e) => {
	const [selection, setSelection] = useState('');
	setSelection(e.target.textContent);
	console.log(selection);

	return <>{selection}</>;
};

export default handleCardClick;
