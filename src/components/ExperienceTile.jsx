function ExperienceTile(props) {
	const { experience, setExperience } = props;

	return (
		<>
			<h2 className='text-md font-medium'>Company Name</h2>
			<input
				className='bg-zinc-200 p-1 rounded-lg w-full mb-2'
				type='text'
				name='name'
				id='name'
				onChange={(e) => setExperience([...experience])}
				value={experience.name}
			/>

			<h2 className='text-md font-medium'>Position Title</h2>
			<input
				className='bg-zinc-200 p-1 rounded-lg w-full mb-2'
				type='text'
				name='name'
				id='name'
				onChange={(e) => console.log(e)}
				value={''}
			/>

			<h2 className='text-md font-medium'>Start Date</h2>
			<input
				className='bg-zinc-200 p-1 rounded-lg w-full mb-2'
				type='text'
				name='name'
				id='name'
				onChange={(e) => console.log(e)}
				value={''}
			/>

			<h2 className='text-md font-medium'>End Date</h2>
			<input
				className='bg-zinc-200 p-1 rounded-lg w-full mb-2'
				type='text'
				name='name'
				id='name'
				onChange={(e) => console.log(e)}
				value={''}
			/>

			<h2 className='text-md font-medium'>Location</h2>
			<input
				className='bg-zinc-200 p-1 rounded-lg w-full mb-2'
				type='text'
				name='name'
				id='name'
				onChange={(e) => console.log(e)}
				value={''}
			/>

			<h2 className='text-md font-medium'>Description</h2>
			<input
				className='bg-zinc-200 p-1 rounded-lg w-full mb-2'
				type='text'
				name='name'
				id='name'
				onChange={(e) => console.log(e)}
				value={''}
			/>
		</>
	);
}

export default ExperienceTile;
