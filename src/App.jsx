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
			position: 'Software Developer',
			startDate: 'January 2023',
			endDate: 'March 2025',
			location: 'Kansas City, KS',
			description:
				'Collaborated with key stakeholders to reinvent the scholarship application process to generate over 30 candidates furthering a workforce development initiative • Implemented Google Analytics to track key performance metrics and inform strategic planning, resulting in an increase in website traffic',
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

	function handleExperienceChange(e) {
		experience.map((exp, index) => {
			if (activeIndex == exp.id) {
				const newField = { ...exp, [e.target.name]: e.target.value };
				const newExperience = experience;
				newExperience[index] = newField;
				console.log(newExperience);

				setExperience([newExperience]);
			}
		});
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
											handleChange={handleExperienceChange}
											isActive={activeIndex === index}
											onExpand={() => setActiveIndex(index)}
										/>
									);
							  })}
					</InputCard>
				</div>
				<div className='w-full'>
					<div className='bg-zinc-100 w-[210mm] h-[297mm] p-12'>
						<div className='mb-6'>
							<h1 className='text-2xl'>{personalDetails.name}</h1>
							<p>
								{personalDetails.location} | {personalDetails.number} |{' '}
								{personalDetails.email}
							</p>
							<a
								href={personalDetails.link}
								target='_blank'
								className='text-blue-600 visited:text-purple-600 underline'
							>
								{personalDetails.link}
							</a>
						</div>
						<div>
							<h2 className='font-semibold'>Work Experience</h2>
							<hr />
							{experience.map((exp) => {
								return (
									<div className='mb-4' key={exp.id}>
										<div className='flex justify-between'>
											<h3 className='font-semibold'>{exp.name}</h3>
											<p>{exp.location}</p>
										</div>
										<div className='flex justify-between'>
											<h3 className='italic'>{exp.position}</h3>
											<p>
												{exp.startDate} - {exp.endDate}
											</p>
										</div>
										<p className='pl-3'>{exp.description}</p>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
