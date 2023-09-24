import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 48%;
  cursor: pointer;
  text-decoration: none;
  border-radius: 15px;
  box-shadow: 0px 0px 1px 1px #747373;
  background-color: #747373;
  position: relative;
  
  &:hover {
    top: -5px;
  }

  @media screen and (max-width: 1100px) {
    width: 100%;
  }
`

export const Header = styled.div`
  padding: 15px;
  color: white;
`

export const Title = styled.div`
  font-size: 32px;
  font-weight: 200;
` 

export const CampaingId = styled.div`
  font-size: 12px;
` 

export const Footer = styled.div`
  color: white;
  padding: 15px;
  display: flex;
  justify-content: space-between;
`

export const Info = styled.div`
  padding: 0px 15px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 550px) {
    flex-direction: column;
  }
`

export const FunilStep = styled.div`
  background-color: #3f3f3f;
  color: #ec8f4d;
  width: 22%;
  border-radius: 10px;
  padding: 5px;

  @media screen and (max-width: 550px) {
    margin-bottom: 15px;
    width: auto;
  }
`

export const LastFunilStep = styled.div`
  background-color: #292727;
  padding: 5px;
  color: #ec8f4d;
  width: 22%;
  border-radius: 15px;

  @media screen and (max-width: 550px) {
    width: auto;
  }
`

export const TitleStep = styled.div`
  font-size: 11px;
  font-weight: 800;
  height: 10%;
  padding-left: 5px
`

export const ContentStep = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  height: 90%;
  color: white;

  @media screen and (max-width: 550px) {
    flex-direction: row;
    text-align: left;
    padding: 5px;
  }
`

export const TextContent = styled.div`
  font-size: 11px;

  @media screen and (max-width: 550px) {
    padding: 0px 0px 0px 5px;
  }
`

export const ContentNumber = styled.div`
  font-weight: 900;
  font-size: 24px;
  padding: 5px 0px 0px 0px;

  @media screen and (max-width: 550px) {
    padding: 0px;
  }
`

export const StepPercent = styled.div`
  font-weight: 900;
  font-size: 18px;
  padding-top: 5px;

  @media screen and (max-width: 550px) {
    padding: 0px 0px 0px 15px;
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
  width: 40%;
  font-weight: 800;
  font-size: 16px;

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