import { NavbarContainer, LinksContainer, ListItem } from './styles'
import TimelineRoundedIcon from '@mui/icons-material/TimelineRounded';
import PersonIcon from '@mui/icons-material/Person';
import { NavLink } from 'react-router-dom';

const NavbarMobile = () => {
  return(
    <NavbarContainer>
      <LinksContainer>
        <ListItem>
          <NavLink to='/campaings' style={{flexDirection: 'column'}}>
            <TimelineRoundedIcon style={{ fill: '#ffffff' }}/>
            Campanhas
          </NavLink>
        </ListItem>

        <ListItem>
          <NavLink to='/employees' style={{flexDirection: 'column'}}>
            <PersonIcon style={{ fill: '#ffffff' }}/>
            Colaboradores
          </NavLink>
        </ListItem>
      </LinksContainer>        
    </NavbarContainer>
  )
}

export default NavbarMobile