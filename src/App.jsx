import { useState } from 'react';
import InputCard from './components/InputCard';
import ExperienceTile from './components/ExperienceTile';

function App() {
	const [personalDetails, setPersonalDetails] = useState({
		name: 'Joe Shmo',
		email: 'example@example.com',
		number: '(555)555-5555',
		location: 'Austin, TX',
		link: 'linkedin.com/joeshmoe1',
	});

	const [experience, setExperience] = useState([{ name: 'Garmin' }]);

	const [experienceIsExpanded, setExperienceIsExpanded] = useState(false);

	return (
		<>
			<div className='bg-zinc-200 p-4 h-full flex gap-4'>
				<div>
					<InputCard>
						<h1 className='text-xl font-bold mb-2'>Personal Details</h1>
						<h2 className='text-md font-medium'>Full Name</h2>
						<input
							className='bg-zinc-200 p-1 rounded-lg w-full mb-2'
							type='text'
							name='name'
							id='name'
							onChange={(e) =>
								setPersonalDetails({ ...personalDetails, name: e.target.value })
							}
							value={personalDetails.name}
						/>
						<h2 className='text-md font-medium'>Email</h2>
						<input
							className='bg-zinc-200 p-1 rounded-lg w-full mb-2'
							type='text'
							name=''
							id=''
							onChange={(e) =>
								setPersonalDetails({
									...personalDetails,
									email: e.target.value,
								})
							}
							value={personalDetails.email}
						/>
						<h2 className='text-md font-medium'>Phone Number</h2>
						<input
							className='bg-zinc-200 p-1 rounded-lg w-full mb-2'
							type='text'
							name=''
							id=''
							onChange={(e) =>
								setPersonalDetails({
									...personalDetails,
									number: e.target.value,
								})
							}
							value={personalDetails.number}
						/>
						<h2 className='text-md font-medium'>Location</h2>
						<input
							className='bg-zinc-200 p-1 rounded-lg w-full mb-2'
							type='text'
							name=''
							id=''
							onChange={(e) =>
								setPersonalDetails({
									...personalDetails,
									location: e.target.value,
								})
							}
							value={personalDetails.location}
						/>
						<h2 className='text-md font-medium'>LinkedIn</h2>
						<input
							className='bg-zinc-200 p-1 rounded-lg w-full mb-2'
							type='text'
							name=''
							id=''
							onChange={(e) =>
								setPersonalDetails({ ...personalDetails, link: e.target.value })
							}
							value={personalDetails.link}
						/>
					</InputCard>
					<InputCard>
						<h1 className='text-xl font-bold mb-2'>Experience</h1>
						{experience.length <= 0
							? 'empty'
							: experience.map((exp, index) => {
									if (experienceIsExpanded) {
										return (
											// Work on changing state of an array of objects and how to pass that down
											<ExperienceTile
												key={index}
												experience={experience}
												setExperience={setExperience}
											/>
										);
									} else {
										return (
											<h2
												key={index}
												onClick={() =>
													setExperienceIsExpanded(!experienceIsExpanded)
												}
											>
												{exp.name}
											</h2>
										);
									}
							  })}
					</InputCard>
				</div>
				<div className='w-full'>
					<div className='bg-zinc-100 w-[210mm] h-[297mm]'>
						<div>
							<h1>{personalDetails.name}</h1>
							<p>
								{personalDetails.location} | {personalDetails.number} |{' '}
								{personalDetails.email}
							</p>
							<a href=''>{personalDetails.link}</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
