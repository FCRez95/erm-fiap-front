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

export const BtnContainer = styled.div`      
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

export const CreateBtn = styled.button`
  z-index: 20;
	color: #ec8f4d;
  font-size: 15px;
  border-radius: 5px;
  border: 1px solid #747373;
  padding: 5px;
  background-color: #222222;
  top: -5px;
  position: relative;
  cursor: pointer;

  &:hover {
    background-color: #747373;
  }
`