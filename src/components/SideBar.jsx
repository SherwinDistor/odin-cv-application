import { useState } from 'react';

function General() {
	const [info, setInfo] = useState({
		name: 'Sherwin Distor',
		email: 'sherwin@test.com',
		phoneNumber: '555-555-5555',
	});

	return (
		<>
			<label>Name:</label>
			<input value={info.name} />
		</>
	);
}

function InfoCard() {
	return (
		<div className='infoCard'>
			<General />
		</div>
	);
}

function Sidebar() {
	return (
		<div className='sidebar'>
			<InfoCard />
			<InfoCard />
			<InfoCard />
		</div>
	);
}

export default Sidebar;
