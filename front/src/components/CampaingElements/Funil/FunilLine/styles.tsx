import styled from 'styled-components'

export const FunilContainer = styled.div`
  display: none;

  @media screen and (max-width: 550px) {
    display: flex;
    flex-direction: column;
    margin: 0px 10px;
    padding: 10px 0px;
    border-radius: 15px;
    background: #3f3f3f
  }
`

export const TitleLine = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: space-around;
  color: white;
`

export const TitleStep = styled.div`
  font-size: 12px;
  width: 25%;
  display: flex;
  justify-content: center;
`

export const TimeLine = styled.div`
  width: 100%;
  padding-top: 10px;
`
export const Dots = styled.div`
  display: flex;
  justify-content: space-around;
`

export const TimeLineDot = styled.div`
  display: flex;
  justify-content: center;
`

export const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background: white;
`
export const LineContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  top: -5px;
`

export const Line = styled.div`
  border-top: 1px solid white;
  width: 50%;
`

export const TextLine = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: space-around;
`

export const TextStep = styled.div`
  font-size: 12px;
  width: 25%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  font-weight: bold;
  color: white
`

export const InfoNumber = styled.div`

`

export const InfoText = styled.div`
  font-size: 10px;
  font-weight: 400;
`



