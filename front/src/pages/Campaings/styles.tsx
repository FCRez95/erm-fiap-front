import styled from "styled-components";

export const CampaingsPageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  transition: top;
  flex-grow: 1;
  
  @media screen and (max-width: 750px) {
   height: 92vh;
  }
`

export const TabsContainer = styled.div`      
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  @media screen and (max-width: 750px) {
    margin: 10px 0px;
  }
`

export const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  overflow: auto;
  padding-top: 10px;

  @media screen and (max-width: 750px) {
    padding: 0px;
  }
`