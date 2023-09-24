import { CampaingSummaryModel } from '../../../../models/campaing-summary'
import { FunilContainer, FunilStep, LastFunilStep, TitleStep, ContentStep, TextContent, ContentNumber, StepPercent } from './styles'

interface Props {
	campaingSummary: CampaingSummaryModel
}

const FunilCards = ({ campaingSummary }: Props) => {
  return (
		<FunilContainer>
			<FunilStep>
				<TitleStep>Página de Noticias</TitleStep>
				
				<ContentStep>
					<ContentNumber>{campaingSummary.totalClicks}</ContentNumber>
					<TextContent>Pessoas acessaram a página</TextContent>
			</ContentStep>
			</FunilStep>

			<LastFunilStep>
				<TitleStep>Pagos</TitleStep>

				<ContentStep>
					<ContentNumber>{campaingSummary.totalPaidClicks}</ContentNumber>
					<TextContent>Pessoas acessaram a página</TextContent>
					<StepPercent>{campaingSummary.totalClicks? JSON.stringify(campaingSummary.totalPaidClicks/campaingSummary.totalClicks*100).substring(0,4) : 0}%</StepPercent>
					<TextContent>Da página anterior</TextContent>
			</ContentStep>
			</LastFunilStep>
		</FunilContainer>
	)
}

export default FunilCards