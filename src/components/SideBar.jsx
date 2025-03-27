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
			<input
				value={info.name}
				onChange={(event) => setInfo(event.target.value)}
			/>
		</>
	);
}

function Education() {
	const [edInfo, setEdInfo] = useState({
		university: 'University of Nebraska Lincoln',
		degree: 'Marketing and Management',
	});

	return (
		<>
			<label>University:</label>
			<input
				value={edInfo.university}
				onChange={(event) => setEdInfo(event.target.value)}
			/>
		</>
	);
}

function Work() {
	const [workInfo, setWorkInfo] = useState({
		company: 'Voro',
		position: 'Paid Media Analyst',
	});

	return (
		<>
			<label>Company:</label>
			<input
				value={workInfo.company}
				onChange={(event) => setWorkInfo(event.target.value)}
			/>
		</>
	);
}

function InfoCard({ type }) {
	let cardType;

	if (type === 'general') {
		cardType = <General />;
	} else if (type === 'education') {
		cardType = <Education />;
	} else if (type === 'work') {
		cardType = <Work />;
	}

	return <div className='infoCard'>{cardType}</div>;
}

function Sidebar() {
	return (
		<div className='sidebar'>
			<InfoCard type={'general'} />
			<InfoCard type={'education'} />
			<InfoCard type={'work'} />
		</div>
	);
}

export default Sidebar;
