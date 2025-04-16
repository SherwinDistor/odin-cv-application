import PropTypes from 'prop-types';

function EducationDisplay({ educationObj }) {
	return (
		<>
			<h1>{educationObj.university}</h1>
			<h1>{educationObj.city}</h1>
			<h1>{educationObj.state}</h1>
			<h1>{educationObj.degree}</h1>
		</>
	);
}

EducationDisplay.propTypes = {
	educationObj: PropTypes.object,
};

export default EducationDisplay;
