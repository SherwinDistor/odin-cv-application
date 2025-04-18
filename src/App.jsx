import { useState } from 'react';

function App() {
	const [profile, setProfile] = useState({
		name: 'Joe Tester',
		location: 'Sioux Falls, SD',
		email: 'test@gmail.com',
		number: 5553337777,
		linkedIn: 'linkedin.com/in/sherwindistor',
	});
	const [education, setEducation] = useState({
		university: 'University of Nebraska-Lincoln',
		degree: 'Bachelors of Business Administration',
	});
	const [work, setWork] = useState();
	const [projects, setProjects] = useState();

	function handleNameChange(e) {
		setProfile((p) => ({ ...p, name: e.target.value }));
	}

	function handleEmailChange(e) {
		setProfile((p) => ({ ...p, email: e.target.value }));
	}

	function handleNumberChange(e) {
		setProfile((p) => ({ ...p, number: e.target.value }));
	}

	function handleLocationChange(e) {
		setProfile((p) => ({ ...p, location: e.target.value }));
	}

	function handleLinkChange(e) {
		setProfile((p) => ({ ...p, linkedIn: e.target.value }));
	}

	return (
		<>
			<div className='sidebar'>
				<h1>Resume Generator</h1>
				<ul>
					<li>
						<button>Profile</button>
					</li>
					<li>
						<button>Education</button>
					</li>
					<li>
						<button>Work</button>
					</li>
					<li>
						<button>Projects</button>
					</li>
				</ul>
				<div className='inputContainer'>
					<form>
						<label>
							Name:{' '}
							<input
								type='text'
								value={profile.name}
								onChange={(e) => handleNameChange(e)}
							/>
						</label>
						<label>
							Location:{' '}
							<input
								type='text'
								value={profile.location}
								onChange={(e) => handleLocationChange(e)}
							/>
						</label>
						<label>
							Email:{' '}
							<input
								type='email'
								value={profile.email}
								onChange={(e) => handleEmailChange(e)}
							/>
						</label>
						<label>
							Number:{' '}
							<input
								type='number'
								value={profile.number}
								onChange={(e) => handleNumberChange(e)}
							/>
						</label>
						<label>
							LinkedIn:{' '}
							<input
								type='url'
								value={profile.linkedIn}
								onChange={(e) => handleLinkChange(e)}
							/>
						</label>
						<button>Submit</button>
					</form>
				</div>
			</div>
			<div className='display'>
				<div className='paper'>
					<div className='profile'>
						<h2>{profile.name}</h2>
						<span>
							{profile.location} | {profile.email} | {profile.number}
						</span>
						<br />
						<span>
							<a href=''>{profile.linkedIn}</a>
						</span>
					</div>
					<hr />
				</div>
			</div>
		</>
	);
}

export default App;
