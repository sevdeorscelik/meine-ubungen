import { useState } from 'react';
import './App.scss';
import jobs from './data/jobs.json';
import { JobsFull } from './components/JobsFull'
import { JobsList } from './components/JobsList'

data_jobs.forEach((job) => {
	job.status = 'send';
});



function App() {
	const [displayKind, setDisplayKind] = useState('full');
	const [jobs, setJobs] = useState(data_jobs);

	const saveToLocalStorage = () => {
		const jobAppState = {
			displayKind,
			jobs,
		};
		localStorage.setItem('jobAppState', JSON.stringify(jobAppState));
	};

	const handleToggleView = () => {
		const _displayKind = displayKind === 'full' ? 'list' : 'full';
		setDisplayKind(_displayKind);
		saveToLocalStorage()
	};

	const handleStatusChange = (job) => {
		switch (job.status) {
			case 'send':
				job.status = 'wait';
				break;
			case 'wait':
				job.status = 'interview';
				break;
			case 'interview':
				job.status = 'declined';
				break;
			case 'declined':
				job.status = 'accepted';
				break;
			case 'accepted':
				job.status = 'send';
				break;
		}

		setJobs([...jobs]);
		//NEDEN SADECE JOBS CALISMYIOR??
	};

	return (
		<div className="App">
			<h1>Job Application Process</h1>
			<button onClick={handleToggleView}>Toggle View</button>
			{displayKind === 'full' ? (
				<JobsFull jobs={jobs} handleStatusChange={handleStatusChange} />
			) : (
				<JobsList jobs={jobs} />
			)}
		</div>
	);
}

export default App;


//------------------------------------------
/*
const [state, setState] = useState({
	email: "",
	password: null,
})

const [checked, setChecked] = useState(false);

const handleChange = (event) => {
	const { name, value } = event.target;
	setState({ ...state, [name]: value })
}



//------------------

<input onChange={handleChange} name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

*/