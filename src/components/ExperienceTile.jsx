import InputField from './InputField';

function ExperienceTile({ exp, isActive, onExpand }) {
	return (
		<>
			{isActive ? (
				<>
					<InputField
						label='Company Name'
						field='name'
						value={exp.name}
						handleChange={console.log('hi')}
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
					<InputField
						label='Description'
						field='description'
						value={exp.description}
						handleChange={console.log('hi')}
					/>
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
