import { useState, useEffect } from 'react';
import './App.scss';
import _jobs from './data/jobs.json';
import { JobsFull } from './components/JobsFull';
import { JobsList } from './components/JobsList';
import md5 from 'md5';

_jobs.forEach((job) => {
	job.status = 'accepted';
});

const techItemsUrl = 'https://edwardtanguay.netlify.app/share/techItems.json';

const statuses = ['send', 'wait', 'interview', 'declined', 'accepted'];

function App() {
	const [displayKind, setDisplayKind] = useState('');
	const [jobs, setJobs] = useState([]);
	const [techItems, setTechItems] = useState([]);
	const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);
	const [fieldLogin, setFieldLogin] = useState('');
	const [fieldPassword, setFieldPassword] = useState('');
	const [formMessage, setFormMessage] = useState('');
	const [userGroup, setUserGroup] = useState('');

	const saveToLocalStorage = () => {
		if (displayKind !== '') {
			const jobAppState = {
				displayKind,
				jobs,
			};
			localStorage.setItem('jobAppState', JSON.stringify(jobAppState));
		}
	};

	const loadLocalStorage = () => {
		const jobAppState = JSON.parse(localStorage.getItem('jobAppState'));
		if (jobAppState === null) {
			setDisplayKind('list');
			setJobs(_jobs);
		} else {
			setDisplayKind(jobAppState.displayKind);
			setJobs(jobAppState.jobs);
		}
	};

	const loadTechItems = () => {
		(async () => {
			const response = await fetch(techItemsUrl);
			const data = await response.json();
			setTechItems(data);
		})();
	};

	useEffect(() => {
		loadLocalStorage();
		loadTechItems();
	}, []);

	useEffect(() => {
		saveToLocalStorage();
	}, [displayKind, jobs]);

	const handleToggleView = () => {
		const _displayKind = displayKind === 'full' ? 'list' : 'full';
		setDisplayKind(_displayKind);
	};

	const handleStatusChange = (job) => {
		let statusIndex = statuses.indexOf(job.status);
		statusIndex++;
		if (statusIndex > statuses.length - 1) {
			statusIndex = 0;
		}
		job.status = statuses[statusIndex];
		setJobs([...jobs]);
	};

	const handleSubmitButton = (e) => {
		e.preventDefault();
		const hash = md5(fieldPassword);

		if (
			fieldLogin === 'me' &&
			hash === '8c6744c9d42ec2cb9e8885b54ff744d0'
		) {
			setUserGroup('fullAccessMembers');
			setUserIsLoggedIn(true);
			setFormMessage('');
		} else {
			setFormMessage('bad login');
		}

		if (
			fieldLogin === 'guest' &&
			hash === '7ce3284b743aefde80ffd9aec500e085'
		) {
			setUserGroup('guests');
			setUserIsLoggedIn(true);
			setFormMessage('');
			setDisplayKind('list');
		} else {
			setFormMessage('bad login');
		}

		setFieldLogin('');
		setFieldPassword('');
	};

	const handleFieldLogin = (e) => {
		setFieldLogin(e.target.value);
	};

	const handleFieldPassword = (e) => {
		setFieldPassword(e.target.value);
	};

	const handleLogoutButton = () => {
		setFormMessage('');
		setUserIsLoggedIn(false);
	};

	return (
		<div className="App">
			<h1>Job Application Process</h1>
			{userIsLoggedIn ? (
				<>
					<div className="buttonArea">
						{userGroup === 'fullAccessMembers' && (
							<button onClick={handleToggleView}>
								Toggle View
							</button>
						)}
						<button onClick={handleLogoutButton}>Logout</button>
					</div>
					{displayKind === 'full' ? (
						<JobsFull
							jobs={jobs}
							handleStatusChange={handleStatusChange}
							techItems={techItems}
						/>
					) : (
						<JobsList jobs={jobs} />
					)}
				</>
			) : (
				<form>
					<fieldset>
						<legend>Welcome</legend>
						{formMessage !== '' && (
							<div className="formMessage">{formMessage}</div>
						)}
						<div className="row">
							<label htmlFor="login2">Login</label>
							<input
								value={fieldLogin}
								onChange={handleFieldLogin}
								autoFocus
								type="text"
								id="login2"
							/>
						</div>
						<div className="row">
							<label htmlFor="password">Password</label>
							<input
								value={fieldPassword}
								onChange={handleFieldPassword}
								type="password"
								id="password"
							/>
						</div>
						<div className="buttonRow">
							<button onClick={handleSubmitButton}>Enter</button>
						</div>
					</fieldset>
				</form>
			)}
		</div>
	);
}

export default App;
