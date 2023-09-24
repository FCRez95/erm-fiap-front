import styled from "styled-components";

export const NavbarContainer = styled.div`
  background-color: #222222;
  border-top-right-radius: 80px;
  border-bottom-right-radius: 80px;
  display: flex;
  flex-direction: column;
  z-index: 2;

  @media screen and (max-width: 750px) {
    display: none;
  }
`

export const LogoContainer = styled.div`
  margin: 30px;
  color: white;
  height: 20%;
  font-size: 24px;
  font-weight: 800;
`

export const LinksContainer = styled.div`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  overflow: auto;
`

export const ListItem = styled.div`
  
  &:hover {
    background-color: #757575;
  }

  & > a {
    border: 1px solid transparent;
    color: white;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 15px;
    height: 70px;
    padding-left: 30px;
    text-transform: uppercase;
    padding-right: 30px;
  }

  & > a:hover {
    background-color: #757575;
  }
  
  & > a.active {
    background-color: #757575;
  }
`