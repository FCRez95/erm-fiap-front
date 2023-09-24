import { TabsContainer, CampaingsPageContainer, ContentContainer } from './styles'
import { useEffect, useState } from 'react'
import CampaingModel from '../../models/campaing'
import { User } from '../../models/user'
import { loadUserCampaings } from '../../services'
import SummaryCard from '../../components/CampaingElements/SummaryCard'
import Tab from '../../components/Tab'

interface Props {
  user?: User []
}

const CampaingsPage = ({ user }: Props) => {
  const [campaings, setCampaings] = useState<CampaingModel[]>()

  useEffect(() => {
    if(user) {
      loadUserCampaings(user[0].id, user[0].tokenAccess)
      .then(resp => {
        console.log(resp.data)
        setCampaings(resp.data)
      })
      .catch(error => {
        console.log(error)
      })
    }
  }, [user])

  return (
    <CampaingsPageContainer>
      <TabsContainer>
        <Tab text='Taboola' isSelected={true} onClick={() => {}} />
      </TabsContainer>
    
      <ContentContainer>
        {campaings? (
          campaings.map((campaing, index) => (
            <SummaryCard key={index} id={campaing.id} name={campaing.name} user={user} />
          ))
        ) : (
          'Nenhuma campanha foi criada até o momento.'
        )}
      </ContentContainer>
    </CampaingsPageContainer>
  )
}

export default CampaingsPage