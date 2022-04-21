export const Employee = ({ emp }) => {
    return (
        <>
            <li >
                {emp.firstName} {emp.lastName}
            </li>
        </>
    )
}