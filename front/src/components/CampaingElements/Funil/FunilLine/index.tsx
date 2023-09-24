import { CampaingSummaryModel } from '../../../../models/campaing-summary'
import { FunilContainer, TitleLine, TimeLine, TextLine, TimeLineDot, Dots, Dot, Line, TitleStep, LineContainer, TextStep, InfoNumber, InfoText } from './styles'

interface Props {
    campaingSummary: CampaingSummaryModel
  }
  
  const FunilLine = ({ campaingSummary }: Props) => {
    return (
      <FunilContainer>
        <TitleLine>
          <TitleStep>Total de Clicks</TitleStep>
          <TitleStep>Clicks Pagos</TitleStep>
        </TitleLine>

        <TimeLine>
          <Dots>
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