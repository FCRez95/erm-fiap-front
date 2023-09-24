import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  
  @media screen and (max-width: 750px) {
    flex-direction: column-reverse;
  }
`

export const Content = styled.div`
  flex-grow: 1;
  padding: 20px;
  display: flex;

  @media screen and (max-width: 750px) {
    margin-top: 0px;
    padding: 5px 20px;
  }
`
