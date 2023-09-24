import { User } from '../../../models/user';
import UserRow from '../Line';

interface Props {
  allUsers: User[]
}
const EmployeesTable = ({ allUsers }: Props) => {
    return (
        <>
            {allUsers.map((user, index) => (
                <UserRow key={index} user={user}/>
            ))}
        </>
    )
}

export default EmployeesTable;