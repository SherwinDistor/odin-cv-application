import { useRef, useState } from 'react';
import InputCard from './components/InputCard';
import ExperienceTile from './components/ExperienceTile';
import InputField from './components/InputField';

// let experienceId = 2;

function App() {
	const [personalDetails, setPersonalDetails] = useState({
		name: 'Joe Shmo',
		email: 'example@example.com',
		number: '(555)555-5555',
		location: 'Austin, TX',
		link: 'linkedin.com/joeshmoe1',
	});

	const experienceId = useRef(2);
	const [experience, setExperience] = useState([
		{
			id: 0,
			name: 'Amazon',
			position: 'Software Developer',
			startDate: 'January 2023',
			endDate: 'Current',
			location: 'Seattle, WA',
			description:
				'- Engineered and launched a new data processing pipeline that reduced latency by 30% and improved data accuracy by 15%, handling over 1 million records daily\n- Collaborated with a cross-functional team to develop and deploy a microservices-based architecture, which increased system scalability and reduced maintenance costs by 20%',
		},
		{
			id: 1,
			name: 'Target',
			position: 'Sales Representative',
			startDate: 'March 2018',
			endDate: 'July 2022',
			location: 'Chicago, IL',
			description:
				'- Surpassed sales quotas by 150% in Q3 2024 by developing and executing a new lead generation strategy that targeted high-value clients\n- Grew the regional customer base by 25% within one year through targeted outreach and building strong, long-term relationships with key accounts',
		},
	]);

	const [education, setEducation] = useState({
		name: 'University of Southern California',
		degree: 'Bachelor of Science in Business Administration',
		location: 'Los Angeles, CA',
		major: 'Major: Marketing | Minor: Management',
	});

	const [activeIndex, setActiveIndex] = useState(0);

	function handleChange(e) {
		if (e.target.dataset.setType == 'personal') {
			setPersonalDetails({
				...personalDetails,
				[e.target.name]: e.target.value,
			});
		} else {
			setEducation({ ...education, [e.target.name]: e.target.value });
		}
	}

	function handleExperienceChange(e) {
		const newExperience = experience.map((exp) => {
			if (activeIndex == exp.id) {
				const newField = { ...exp, [e.target.name]: e.target.value };
				return newField;
			} else {
				return exp;
			}
		});

		setExperience(newExperience);
	}

	function addExperience() {
		setExperience([
			...experience,
			{
				id: experienceId.current++,
				name: 'Company Name',
				position: '',
				startDate: '',
				endDate: '',
				location: '',
				description: '',
			},
		]);
	}

	function deleteExperience(e) {
		console.log(`Experience with id ${e.target.id} was deleted`);
		setExperience(experience.filter((exp) => exp.id != e.target.id));
	}

	return (
		<>
			<div className='bg-zinc-200 p-4 h-full flex gap-4'>
				<div className='w-full'>
					<InputCard>
						<h1 className='text-xl font-bold mb-2'>Personal Details</h1>

						<InputField
							label='Full Name'
							field='name'
							setType='personal'
							value={personalDetails.name}
							handleChange={handleChange}
						/>

						<InputField
							label='Email'
							field='email'
							setType='personal'
							value={personalDetails.email}
							handleChange={handleChange}
						/>

						<InputField
							label='Phone Number'
							field='number'
							setType='personal'
							value={personalDetails.number}
							handleChange={handleChange}
						/>

						<InputField
							label='Location'
							field='location'
							setType='personal'
							value={personalDetails.location}
							handleChange={handleChange}
						/>

						<InputField
							label='LinkedIn'
							field='link'
							setType='personal'
							value={personalDetails.link}
							handleChange={handleChange}
						/>
					</InputCard>
					<InputCard>
						<h1 className='text-xl font-bold mb-2'>Experience</h1>
						{experience.length <= 0
							? ''
							: experience.map((exp, index) => {
									return (
										<ExperienceTile
											key={index}
											exp={exp}
											handleChange={handleExperienceChange}
											isActive={activeIndex === index}
											onExpand={() => setActiveIndex(index)}
											onDelete={deleteExperience}
										/>
									);
							  })}
						<hr className='mb-4 mt-4' />
						<div className='flex justify-center'>
							<button
								className='bg-green-200 rounded-lg p-2 hover:bg-green-100'
								onClick={addExperience}
							>
								Add Experience
							</button>
						</div>
					</InputCard>
					<InputCard>
						<h1 className='text-xl font-bold mb-2'>Education</h1>

						<InputField
							label='University'
							field='name'
							setType='education'
							value={education.name}
							handleChange={handleChange}
						/>

						<InputField
							label='Location'
							field='location'
							setType='education'
							value={education.location}
							handleChange={handleChange}
						/>

						<InputField
							label='Degree'
							field='degree'
							setType='education'
							value={education.degree}
							handleChange={handleChange}
						/>

						<InputField
							label='Major'
							field='major'
							setType='education'
							value={education.major}
							handleChange={handleChange}
						/>
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
								href={`https://www.${personalDetails.link}`}
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
										<p className='pl-3 description-text'>{exp.description}</p>
									</div>
								);
							})}
						</div>
						<div>
							<h2 className='font-semibold'>Education</h2>
							<hr />
							<div className='flex justify-between'>
								<h3 className='font-semibold'>{education.name}</h3>
								<p>{education.location}</p>
							</div>
							<p>{education.degree}</p>
							<p>{education.major}</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
