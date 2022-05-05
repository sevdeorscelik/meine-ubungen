export const Employee = ({ emp, status, index }) => {
    return (
        <>
            <div className="employees">
                {index+1}. {emp.firstName} {emp.lastName}
                <div className="title">
                    {emp.title}
                </div> 
                {status === 'internalUser' && (
                    <div className="notes">{emp.notes}</div>
                )}

            </div>
        </>
    )
}