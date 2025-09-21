import InputField from './InputField';

function ExperienceTile({ exp, isActive, onExpand, handleChange, onDelete }) {
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
						value={exp.description}
					></textarea>

					<button
						className='bg-red-200 rounded-lg p-2 hover:bg-red-100'
						onClick={onDelete}
						id={exp.id}
					>
						Delete
					</button>
				</>
			) : (
				<>
					<h3
						className='bg-blue-200 rounded-lg p-2 mb-2 mt-2'
						onClick={onExpand}
					>
						{exp.name}
					</h3>
				</>
			)}
		</>
	);
}

export default ExperienceTile;
