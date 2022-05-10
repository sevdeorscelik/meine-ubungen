export const JobsFull = ({ jobs, handleStatusChange, techItems }) => {
	const getSkillDescription = (skillTitle) => {
		const techItem = techItems.find((m) => {
			let title = m.title.trim();
			switch (title) {
				case 'HTML5':
					title = 'HTML';
					break;
			}
			if (title === skillTitle.trim()) {
				return m.title;
			}
		});
		if (techItem !== undefined) {
			const parts = techItem.extras.split(';');
			let description = '';
			parts.forEach((part) => {
				if (part.includes('$quick')) {
					const ends = part.split('=');
					description = ends[1];  
				}
			});
			return description;
		} else {
			return null;
		}
	};

	const getSkillDefinitions = (job) => {
		const skillDefinitions = [];
		const skillTitles = job.skills.split(',');
		skillTitles.forEach((skillTitle) => {
			const description = getSkillDescription(skillTitle);
			if (description !== null) {
				const sd = {
					title: skillTitle,
					description,
				};
				skillDefinitions.push(sd);
			}
		});
		return skillDefinitions;
	};

	return (
		<div className="jobs">
			{jobs.map((job, index) => {
				return (
					<div key={index} className={`job ${job.status}`}>
						<div className="header">
							<div className="position">
								<a href={job.url}>{job.position}</a>
							</div>
							<button
								onClick={() => handleStatusChange(job)}
								className="status"
							>
								{job.status}
							</button>
						</div>
						<div className="skills">{job.skills}</div>
						{job.status !== 'declined' && (
							<div className="bulkText">{job.bulkText}</div>
						)}
						<ul className="skillDefinitions">
							{getSkillDefinitions(job).map((sd, index) => {
								return (
									<li key={index}>
										{sd.title} - {sd.description}
									</li>
								);
							})}
						</ul>
					</div>
				);
			})}
		</div>
	);
};
