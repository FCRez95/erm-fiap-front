import { UserLine, ColumnValue } from './styles';
import { User } from '../../../models/user';

interface Props {
  user: User
}
const UserRow = ({ user }: Props) => {

  return (
    <UserLine>
        <ColumnValue>{user.name}</ColumnValue>
        <ColumnValue>{user.email}</ColumnValue>
        <ColumnValue>{user.type}</ColumnValue>
    </UserLine>
  )
}

export default UserRow;