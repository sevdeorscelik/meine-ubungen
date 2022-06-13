export const JobsList = ({ jobs }) => {
	return (
		<ul className="jobsList">
			{jobs.map((job, index) => {
				return (
					<div key={index}>
						<li key={index}>
							<a href={job.url}>{job.position}</a>
						</li>
					</div>
				);
			})}
		</ul>
	);
};
