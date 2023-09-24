import { BtnContainer, CampaingsPageContainer, ContentContainer, CreateBtn } from './styles'
import { useEffect, useState } from 'react'
import CampaingModel from '../../models/campaing'
import { User } from '../../models/user'
import { loadUserCampaings } from '../../services'
import SummaryCard from '../../components/CampaingElements/SummaryCard'
import ModalNewCampaing from '../../components/Modals/NewCampaingModal'

interface Props {
  user?: User []
}

const CampaingsPage = ({ user }: Props) => {
  const [campaings, setCampaings] = useState<CampaingModel[]>()
  const [showModal, setShowModal] = useState<Boolean>(false)

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

  const closeModal = () => setShowModal(false)

  const updateCampaingsList = (newCampaing: any) => {
    let newCampaingsList = campaings
    newCampaingsList?.push(newCampaing)
    setCampaings(newCampaingsList)
  }

  return (
    <CampaingsPageContainer>
      <BtnContainer>
        <CreateBtn onClick={() => {setShowModal(true)}}>Criar Campanha</CreateBtn>
      </BtnContainer>
    
      <ContentContainer>
        {campaings? (
          campaings.map((campaing, index) => (
            <SummaryCard key={index} id={campaing.id} name={campaing.name} user={user} />
          ))
        ) : (
          'Nenhuma campanha foi criada até o momento.'
        )}
      </ContentContainer>

      
      {showModal && (
        <ModalNewCampaing user={user} closeModal={closeModal} updateCampaings={updateCampaingsList}/>
      )}
      
    </CampaingsPageContainer>
  )
}

export default CampaingsPage