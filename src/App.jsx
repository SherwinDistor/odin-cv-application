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
	const [work, setWork] = useState([
		{
			title: 'Paid Media Analyst',
			company: 'Voro',
			location: 'Minneapolis, MN',
			startDate: 'June 2023',
			endDate: 'May 2024',
			description: ['went to work', 'took out the trash'],
		},
	]);
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
					<form>
						<label>
							Title:{' '}
							<input
								type='text'
								value={work[0].title}
								onChange={(e) => handleNameChange(e)}
							/>
						</label>
						<label>
							Company:{' '}
							<input
								type='text'
								value={work[0].company}
								onChange={(e) => handleEmailChange(e)}
							/>
						</label>
						<label>
							Location:{' '}
							<input
								type='text'
								value={work[0].location}
								onChange={(e) => handleLocationChange(e)}
							/>
						</label>
						<label>
							Start Date:{' '}
							<input
								type='text'
								value={work[0].startDate}
								onChange={(e) => handleNumberChange(e)}
							/>
						</label>
						<label>
							End Date:{' '}
							<input
								type='url'
								value={work[0].endDate}
								onChange={(e) => handleLinkChange(e)}
							/>
						</label>
						<label>
							Job Description:
							<ul>
								{work[0].description.map((duty, index) => (
									<li key={index}>
										<textarea value={duty}></textarea>
									</li>
								))}
							</ul>
							<button>Add Duty</button>
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
					<h3>Experience</h3>
					<hr />
					<div className='lineSpace'>
						<h4>{work[0].title}</h4>
						<span>{work[0].location}</span>
					</div>
					<div className='lineSpace'>
						<span>{work[0].company}</span>
						<span>
							{work[0].startDate} - {work[0].endDate}
						</span>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
