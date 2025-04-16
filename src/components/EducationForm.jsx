import PropTypes from 'prop-types';

function EducationForm({ callback, educationObj }) {
	function handleSubmit(e) {
		e.preventDefault;

		// have a switch statement checking for a value and updating just that value, right now the values get cleared.
		if (e.target.form[0].value !== '') {
			callback({ ...educationObj, university: e.target.form[0].value });
			e.target.form[0].value = '';
		} else if (e.target.form[1].value !== '') {
			callback({ ...educationObj, city: e.target.form[1].value });
			e.target.form[1].value = '';
		} else if (e.target.form[2].value !== '') {
			callback({ ...educationObj, state: e.target.form[2].value });
			e.target.form[2].value = '';
		} else if (e.target.form[3].value !== '') {
			callback({ ...educationObj, degree: e.target.form[3].value });
			e.target.form[3].value = '';
		} else {
			callback({
				...educationObj,
				university: e.target.form[0].value,
				city: e.target.form[1].value,
				state: e.target.form[2].value,
				degree: e.target.form[3].value,
			});
		}
	}

	return (
		<>
			<form action='#'>
				<label htmlFor=''>University: </label>
				<input type='text' />
				<hr />
				<label htmlFor=''>City: </label>
				<input type='text' />
				<hr />
				<label htmlFor=''>State: </label>
				<input type='text' />
				<hr />
				<label htmlFor=''>Degree: </label>
				<input type='text' />
				<hr />
				<button onClick={(e) => handleSubmit(e)}>Submit</button>
			</form>
		</>
	);
}

EducationForm.propTypes = {
	callback: PropTypes.func,
	educationObj: PropTypes.object,
};

export default EducationForm;
