import FormCard from './FormCard';
import GeneralForm from './GeneralForm';

function InputContainer() {
	return (
		<div className='inputContainer'>
			<FormCard name={'General'}>
				<GeneralForm />
			</FormCard>
		</div>
	);
}

export default InputContainer;
