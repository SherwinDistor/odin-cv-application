function App() {
	return (
		<>
			<div className='bg-zinc-200 p-4 h-full flex gap-4'>
				<div>
					<div className='bg-zinc-100 p-4 rounded-lg min-w-80'>
						<h1 className='text-xl font-bold mb-2'>Personal Details</h1>
						<h2 className='text-md font-medium'>Full Name</h2>
						<input
							className='bg-zinc-200 p-1 rounded-lg w-full mb-2'
							type='text'
							name=''
							id=''
						/>
						<h2 className='text-md font-medium'>Email</h2>
						<input
							className='bg-zinc-200 p-1 rounded-lg w-full mb-2'
							type='text'
							name=''
							id=''
						/>
						<h2 className='text-md font-medium'>Phone Number</h2>
						<input
							className='bg-zinc-200 p-1 rounded-lg w-full mb-2'
							type='text'
							name=''
							id=''
						/>
						<h2 className='text-md font-medium'>Address</h2>
						<input
							className='bg-zinc-200 p-1 rounded-lg w-full mb-2'
							type='text'
							name=''
							id=''
						/>
					</div>
				</div>
				<div className='w-full'>
					<div className='bg-zinc-100 w-[210mm] h-[297mm]'>
						<div>
							<h1>Sherwin John Distor</h1>
							<p>Location | (888)888-8888 | Email address</p>
							<a href=''>LinkedIn link</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
