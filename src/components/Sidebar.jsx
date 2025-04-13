import Footer from './Footer';
import Header from './Header';
import InputContainer from './InputContainer';

function Sidebar() {
	return (
		<div className='sidebar'>
			<Header />
			<InputContainer />
			<Footer />
		</div>
	);
}

export default Sidebar;
