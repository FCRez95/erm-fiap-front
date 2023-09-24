import { LogoContainer, NavbarContainer, LinksContainer, ListItem, LogoutBtn } from './styles'
import TimelineRoundedIcon from '@mui/icons-material/TimelineRounded';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import { NavLink, useNavigate } from 'react-router-dom';
import { db } from '../../db/db';

const Navbar = () => {
  const navigate = useNavigate()

  const signOutHandler = () => {
    try {
      db.user.clear();
      setTimeout(function () {
        navigate('/login')
        window.location.reload()
      }, 50);
    } catch (error) {
      console.log(error)
    }
  };

  return(
    <NavbarContainer>
      <LogoContainer>Traceable</LogoContainer>

      <LinksContainer>
        <ListItem>
          <NavLink to='/campaings'>
            <TimelineRoundedIcon style={{ fill: '#ffffff' }}/>
            Campanhas
          </NavLink>
        </ListItem>

        <ListItem>
          <NavLink to='/employees'>
            <PersonIcon style={{ fill: '#ffffff' }}/>
            Colaboradores
          </NavLink>
        </ListItem>
      </LinksContainer>

      <LogoutBtn onClick={() => signOutHandler()}>
        <LogoutIcon style={{ fill: '#ffffff' }}/>
        Logout
      </LogoutBtn>     
    </NavbarContainer>
  )
}

export default Navbar