import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import NavbarMobile from '../../components/Navbar/NavbarMobile';
import { Container, Content } from './styles';

interface Props {
  user?: any
}

const Layout = ({ user }: Props) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (user && user[0]) {
      if (user[0].tokenAccess && window.location.pathname === '/login') {
        navigate('/campaings');
      }
    } else {
      navigate('/login')
    }
  }, [user, navigate]);

  return (
    <Container>
      {user && user.length > 0 &&
        <>
          <Header />
          <Navbar user={user} />
          <NavbarMobile />
        </>
      }
      <Content>
        <Outlet />
      </Content>
    </Container>
  );
};

export default Layout;