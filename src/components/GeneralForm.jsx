function GeneralForm() {
	return (
		<form action='#'>
			<label htmlFor=''>First Name: </label>
			<input type='text' />
			<hr />
			<label htmlFor=''>Last Name: </label>
			<input type='text' />
			<hr />
			<label htmlFor=''>Email: </label>
			<input type='email' />
			<hr />
			<label htmlFor=''>Phone Number: </label>
			<input type='number' />
			<hr />
		</form>
	);
}

export default GeneralForm;
