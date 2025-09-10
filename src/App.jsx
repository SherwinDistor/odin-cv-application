import { useState } from 'react';
import InputCard from './components/InputCard';
import ExperienceTile from './components/ExperienceTile';
import InputField from './components/InputField';

function App() {
	const [personalDetails, setPersonalDetails] = useState({
		name: 'Joe Shmo',
		email: 'example@example.com',
		number: '(555)555-5555',
		location: 'Austin, TX',
		link: 'linkedin.com/joeshmoe1',
	});

	const [experience, setExperience] = useState([
		{
			id: 0,
			name: 'Garmin',
			position: '',
			startDate: '',
			endDate: '',
			location: '',
			description: '',
		},
		{
			id: 1,
			name: 'Target',
			position: '',
			startDate: '',
			endDate: '',
			location: '',
			description: '',
		},
	]);

	const [activeIndex, setActiveIndex] = useState(0);

	function handleChange(e) {
		setPersonalDetails({ ...personalDetails, [e.target.name]: e.target.value });
	}

	return (
		<>
			<div className='bg-zinc-200 p-4 h-full flex gap-4'>
				<div>
					<InputCard>
						<h1 className='text-xl font-bold mb-2'>Personal Details</h1>

						<InputField
							label='Full Name'
							field='name'
							value={personalDetails.name}
							handleChange={handleChange}
						/>

						<InputField
							label='Email'
							field='email'
							value={personalDetails.email}
							handleChange={handleChange}
						/>

						<InputField
							label='Phone Number'
							field='number'
							value={personalDetails.number}
							handleChange={handleChange}
						/>

						<InputField
							label='Location'
							field='location'
							value={personalDetails.location}
							handleChange={handleChange}
						/>

						<InputField
							label='LinkedIn'
							field='link'
							value={personalDetails.link}
							handleChange={handleChange}
						/>
					</InputCard>
					<InputCard>
						<h1 className='text-xl font-bold mb-2'>Experience</h1>
						{experience.length <= 0
							? 'empty'
							: experience.map((exp, index) => {
									return (
										<ExperienceTile
											key={index}
											exp={exp}
											isActive={activeIndex === index}
											onExpand={() => setActiveIndex(index)}
										/>
									);
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
