import styled from "styled-components";

export const NavbarContainer = styled.div`
  background-color: #222222;
  display: none;
  flex-direction: column;
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;

  @media screen and (max-width: 750px) {
    display: flex;
  }
`

export const LinksContainer = styled.div`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 15px;
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
    height: 50px;
    padding: 0px 15px;
    text-transform: uppercase;
    justify-content: center;
    font-size: 12px;
  }

  & > a:hover {
    background-color: #757575;
  }
  
  & > a.active {
    background-color: #757575;
  }
`