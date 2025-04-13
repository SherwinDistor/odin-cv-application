import PropTypes from 'prop-types';

function FormCard({ children, name }) {
	return (
		<div className='formCard'>
			<h2>{name}</h2>
			{children}
		</div>
	);
}

FormCard.propTypes = {
	children: PropTypes.element,
	name: PropTypes.string,
};

FormCard.defaultProps = {
	name: 'Info',
};
export default FormCard;
