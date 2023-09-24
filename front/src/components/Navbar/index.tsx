import { LogoContainer, NavbarContainer, LinksContainer, ListItem } from './styles'
import TimelineRoundedIcon from '@mui/icons-material/TimelineRounded';
import PersonIcon from '@mui/icons-material/Person';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
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
    </NavbarContainer>
  )
}

export default Navbar