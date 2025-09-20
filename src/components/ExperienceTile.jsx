import InputField from './InputField';

function ExperienceTile({ exp, isActive, onExpand, handleChange }) {
	return (
		<>
			{isActive ? (
				<>
					<InputField
						label='Company Name'
						field='name'
						value={exp.name}
						handleChange={handleChange}
					/>
					<InputField
						label='Position Title'
						field='position'
						value={exp.position}
						handleChange={console.log('hi')}
					/>
					<InputField
						label='Location'
						field='location'
						value={exp.location}
						handleChange={console.log('hi')}
					/>
					<InputField
						label='Start date'
						field='startDate'
						value={exp.startDate}
						handleChange={console.log('hi')}
					/>
					<InputField
						label='End date'
						field='endDate'
						value={exp.endDate}
						handleChange={console.log('hi')}
					/>
					<h2 className='text-md font-medium'>Description</h2>
					<textarea className='bg-zinc-200 p-1 rounded-lg w-full mb-2'>
						{exp.description}
					</textarea>

					<button>Save</button>
					<hr />
				</>
			) : (
				<>
					<h3 onClick={onExpand}>{exp.name}</h3>
				</>
			)}
		</>
	);
}

export default ExperienceTile;
