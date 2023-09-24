import { useEffect, useState } from 'react'
import { CardContainer, Header, Title, CampaingId, Footer, FooterInfo, FooterNumber, FooterText, LinkContainer } from './styles'
import { CampaingSummaryModel } from '../../../models/campaing-summary'
import { loadCampaingSummary } from '../../../services'
import { User } from '../../../models/user'
import Loading from '../../Loading'
import FunilCards from '../Funil/FunilCards'
import FunilLine from '../Funil/FunilLine'

interface Props {
  id: number
  name: string
  clickAuther: string
  user?: User[]
}

const SummaryCard = ({ id, name, user, clickAuther }: Props) => {
  const [campaingSummary, setCampaingSummary] = useState<CampaingSummaryModel>()

  useEffect(() => {
    if(user) {
      console.log(id)
      loadCampaingSummary(id, user[0].tokenAccess)
      .then(resp => {
        setCampaingSummary(resp.data)
        console.log(resp)
      })
      .catch(error => {
        console.log(error)
      })
    }
  }, [id, user])

  return (
    <CardContainer>
      <Header>
        <Title>{name}</Title>
        <CampaingId>id campanha: {id}</CampaingId>
        <LinkContainer><strong>Link de Redirecionamento:</strong> http://localhost:3000/{clickAuther}</LinkContainer>
      </Header>
      
      {campaingSummary? (
        <>
          <FunilCards campaingSummary={campaingSummary} />
          <FunilLine campaingSummary={campaingSummary} />
          <Footer>
            <FooterInfo style={{backgroundColor: '#3f3f3f'}}>
              <FooterText>Taxa de conversão</FooterText>
              <FooterNumber>{campaingSummary.totalClicks !== 0? JSON.stringify(campaingSummary.totalPaidClicks/campaingSummary.totalClicks*100).substring(0,5) : 0}%</FooterNumber>
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
    </CardContainer>
  )
}

export default SummaryCard