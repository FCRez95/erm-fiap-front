import styled from 'styled-components'

export const FunilContainer = styled.div`
  padding: 0px 15px;
  display: flex;
  justify-content: center;
  gap: 15px;

  @media screen and (max-width: 550px) {
    display: none;
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
  font-size: 9px;

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