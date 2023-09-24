import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  background-color: #343434;
  position: absolute;
  z-index: 1;
  height: 50px;

  @media screen and (max-width: 750px) {
    display: none;
  }
`