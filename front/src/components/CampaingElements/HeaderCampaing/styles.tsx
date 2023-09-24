import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  padding-bottom: 10px;
  border-bottom: 1px solid #757575;
  height: 15vb;

  @media screen and (max-width: 1100px) {
    flex-direction: column;
  }
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;

  @media screen and (max-width: 1100px) {
    width: 100%;
  }
`

export const CampaingName = styled.div`
  color: #222222;
  font-size: 32px;
  font-weight: 200;
`

export const CampaingId = styled.div`
  color: #222222;
  font-size: 12px;
  font-weight: 300;
`

export const CampaingInfo = styled.div`
  display: flex;
  width: 70%;
  justify-content: space-between;

  @media screen and (max-width: 1100px) {
    width: 100%;
  }

  @media screen and (max-width: 550px) {
    flex-direction: column;
    padding-top: 10px;
  }
`

export const Footer = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 40%;

  @media screen and (max-width: 550px) {
    flex-direction: row;
    width: 100%;
    padding-top: 10px;
  }
`

export const FooterInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #292727;
  border-radius: 15px;
  padding: 5px;
  font-weight: 800;
  font-size: 12px;

  @media screen and (max-width: 550px) {
    width: 45%;
    font-size: 12px;
  }
`

export const FooterText = styled.div`
  color: #ec8f4d;
`

export const FooterNumber = styled.div`
  font-size: 18px;

  @media screen and (max-width: 550px) {
    font-size: 14px;
  }
`
