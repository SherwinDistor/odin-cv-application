import { useState } from 'react';
import EducationForm from './EducationForm';
import EducationDisplay from './EducationDisplay';
import FormCard from './FormCard';

function EducationParent() {
	const [educationObj, setEducationObj] = useState({
		university: '',
		city: '',
		state: '',
		degree: '',
	});

	return (
		<>
			<FormCard name={'Education'}>
				<EducationForm callback={setEducationObj} educationObj={educationObj} />
			</FormCard>
			<EducationDisplay educationObj={educationObj} />
		</>
	);
}

export default EducationParent;
