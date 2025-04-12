import Header from './Header';
import Footer from './Footer';
import SectionSelector from './SectionSelector';
import Form from './Form';

function Sidebar() {
	return (
		<div className='sidebar'>
			<Header />
			<SectionSelector />
			<Form />
			<Footer />
		</div>
	);
}

export default Sidebar;
