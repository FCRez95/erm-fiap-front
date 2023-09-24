import { CampaingSummaryModel } from '../../../../models/campaing-summary'
import { FunilContainer, TitleLine, TimeLine, TextLine, TimeLineDot, Dots, Dot, Line, TitleStep, LineContainer, TextStep, InfoNumber, InfoText } from './styles'

interface Props {
    campaingSummary: CampaingSummaryModel
  }
  
  const FunilLine = ({ campaingSummary }: Props) => {
    return (
      <FunilContainer>
        <TitleLine>
          <TitleStep>Noticias</TitleStep>
          <TitleStep>Compra</TitleStep>
          <TitleStep>Checkout</TitleStep>
          <TitleStep>Pagos</TitleStep>
        </TitleLine>

        <TimeLine>
          <Dots>
            <TimeLineDot>
              <Dot></Dot>
            </TimeLineDot>
            
            <TimeLineDot>
              <Dot></Dot>
            </TimeLineDot>

            <TimeLineDot>
              <Dot></Dot>
            </TimeLineDot>

            <TimeLineDot>
              <Dot></Dot>
            </TimeLineDot>
          </Dots>
          
          <LineContainer>
            <Line></Line>
          </LineContainer>
        </TimeLine>

        <TextLine>
          <TextStep>
            <InfoNumber>{campaingSummary.totalClicks}</InfoNumber>
            <InfoText>Pessoas</InfoText>
          </TextStep>

          <TextStep>
            {campaingSummary.totalPaidClicks}
            <InfoText>Pessoas</InfoText>
            {campaingSummary.totalClicks? JSON.stringify(campaingSummary.totalPaidClicks/campaingSummary.totalClicks*100).substring(0,4) : 0}%
          </TextStep>
        </TextLine>
      </FunilContainer>
    )
  }
  
  export default FunilLine

  /* <FunilStep>
            <TitleStep>Notícias</TitleStep>

            <TimeLineDot>
              <Dot></Dot>
              <Line></Line>
            </TimeLineDot>

            <InfoStep>
              
            </InfoStep>
        </FunilStep>

        <FunilStep>
            <TitleStep>Compra</TitleStep>

            <TimeLineDot>
              <Dot></Dot>
              <Line></Line>
            </TimeLineDot>
            
            <InfoStep>
              <InfoNumber>{campaingSummary.totalProductPage}</InfoNumber>
              <InfoText>Pessoas</InfoText>
              <InfoNumber></InfoNumber>
              <InfoText></InfoText>
            </InfoStep>
        </FunilStep>

        <FunilStep>
            <TitleStep>Checkout</TitleStep>

            <TimeLineDot>
              <Dot></Dot>
              <Line></Line>
            </TimeLineDot>
            
            <InfoStep>
              <InfoNumber>{campaingSummary.totalCheckoutPage}</InfoNumber>
              <InfoText>Pessoas</InfoText>
              <InfoNumber></InfoNumber>
              <InfoText></InfoText>
            </InfoStep>
        </FunilStep>

        <FunilStep>
            <TitleStep>Pagos</TitleStep>

            <TimeLineDot>
              <Dot></Dot>
            </TimeLineDot>
            
            <InfoStep>
              <InfoNumber>{campaingSummary.totalPaidClicks}</InfoNumber>
              <InfoText>Pessoas</InfoText>
              <InfoNumber></InfoNumber>
              <InfoText></InfoText>
            </InfoStep>
        </FunilStep> */