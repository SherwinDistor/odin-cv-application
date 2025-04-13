import EducationForm from './EducationForm';
import FormCard from './FormCard';
import GeneralForm from './GeneralForm';

function InputContainer() {
	return (
		<div className='inputContainer'>
			<FormCard name={'General'}>
				<GeneralForm />
			</FormCard>
			<FormCard name={'Education'}>
				<EducationForm />
			</FormCard>
		</div>
	);
}

export default InputContainer;
