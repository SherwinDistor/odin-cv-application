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
						handleChange={handleChange}
					/>
					<InputField
						label='Location'
						field='location'
						value={exp.location}
						handleChange={handleChange}
					/>
					<InputField
						label='Start date'
						field='startDate'
						value={exp.startDate}
						handleChange={handleChange}
					/>
					<InputField
						label='End date'
						field='endDate'
						value={exp.endDate}
						handleChange={handleChange}
					/>
					<h2 className='text-md font-medium'>Description</h2>
					<textarea
						name='description'
						id='description'
						className='bg-zinc-200 p-1 rounded-lg w-full mb-2'
						rows='5'
						onChange={handleChange}
					>
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
