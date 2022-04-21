export const Header = ({ status }) => {

	let message = '';
	switch (status) {
		case 'internalUser':
			message = 'The summer employee picnic is on May 15.';
			break;
		case 'externalUser':
			message = 'This is our team:';
			break;
		default:
			message = '******* HAVE A NICE DAY ******';
			break;
	}

	return (
		<>
			<h1>Employee Site</h1>
			<div className="message">{message}</div>
		</>
	);
}

/* //su sekilde de yazabilirdik

export const Header = (props) => {
    return (
        <>
            <h1>Employee Site ({props.status})</h1>
            {props.userIsExternal
                ? <div className='message'>This is our team:</div>
                : <div className="message"> The summer employee picnic is on May 15.</div>
            }
        </>
    )
}
*/