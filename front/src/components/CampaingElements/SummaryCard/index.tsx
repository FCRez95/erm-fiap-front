import { useEffect, useState } from 'react'
import { CardContainer, Header, Title, CampaingId, Footer, FooterInfo, FooterNumber, FooterText } from './styles'
import { CampaingSummaryModel } from '../../../models/campaing-summary'
import { loadCampaingSummary } from '../../../services'
import { User } from '../../../models/user'
import Loading from '../../Loading'
import { useNavigate } from 'react-router-dom';
import FunilCards from '../Funil/FunilCards'
import FunilLine from '../Funil/FunilLine'

interface Props {
  id: number
  name: string
  user?: User[]
}

const SummaryCard = ({ id, name, user }: Props) => {
  const [campaingSummary, setCampaingSummary] = useState<CampaingSummaryModel>()
  const navigate = useNavigate()

  useEffect(() => {
    if(user) {
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

  const redirectPage = (idCampaing: number) => {
    navigate('/campaings/' + idCampaing, {state: { name: name }} )
  }

  return (
    <CardContainer onClick={() => redirectPage(id)}>
      <Header>
        <Title>{name}</Title>
        <CampaingId>id campanha: {id}</CampaingId>
      </Header>
      
      {campaingSummary? (
        <>
          <FunilCards campaingSummary={campaingSummary} />
          <FunilLine campaingSummary={campaingSummary} />
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
    </CardContainer>
  )
}

export default SummaryCard