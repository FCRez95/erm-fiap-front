import { useEffect, useState } from 'react'
import FunilCards from '../Funil/FunilCards'
import { CampaingName, HeaderContainer, CampaingId, TitleContainer, CampaingInfo, Footer, FooterInfo, FooterText, FooterNumber } from './styles'
import { loadCampaingSummary } from '../../../services'
import { User } from '../../../models/user'
import { CampaingSummaryModel } from '../../../models/campaing-summary'
import Loading from '../../Loading'
import FunilLine from '../Funil/FunilLine'

interface Props {
  idCampaing: number
  name: string
  user?: User[]
}

const HeaderCampaing = ({ idCampaing, name, user }: Props) => {
  const [campaingSummary, setCampaingSummary] = useState<CampaingSummaryModel>()

  useEffect(() => {
    if(user) {
      loadCampaingSummary(idCampaing, user[0].tokenAccess)
      .then(resp => {
        setCampaingSummary(resp.data.campaing)
        console.log(resp)
      })
      .catch(error => {
        console.log(error)
      })
    }
  }, [idCampaing, user])

  return(
    <HeaderContainer>
      <TitleContainer>
        <CampaingName>{name}</CampaingName>
        <CampaingId>id campanha: {idCampaing}</CampaingId>
      </TitleContainer>

      <CampaingInfo>
        {campaingSummary? (
          <>
            <FunilCards campaingSummary={campaingSummary}/>
            <FunilLine campaingSummary={campaingSummary}/>

            <Footer>
              <FooterInfo style={{backgroundColor: '#3f3f3f'}}>
                <FooterText>Taxa de conversão</FooterText>
                <FooterNumber>{JSON.stringify(campaingSummary.totalPaidClicks/campaingSummary.totalClicks*100).substring(0,5)}%</FooterNumber>
              </FooterInfo>

              <FooterInfo>
                <FooterText>Faturamento</FooterText>
                <FooterNumber>R$ {campaingSummary.income? JSON.stringify(campaingSummary.income).substring(0,5) : 0}</FooterNumber>
              </FooterInfo>
            </Footer>
          </>
        ) : (
          <Loading />
        )}
      </CampaingInfo>
    </HeaderContainer>
  )
}

export default HeaderCampaing