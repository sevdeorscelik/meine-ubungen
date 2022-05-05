export const JobsFull = ({jobs, handleStatusChange}) => {
    return (
        <div className="jobs">
            {jobs.map((job, index) => {
                console.log(job);
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
                            <div className="bulkText">
                                {job.bulkText}
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    )
}