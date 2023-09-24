import CampaingModel from './campaing'
import ClickModel from './click'

export interface CampaingDataModel {
  campaing: CampaingModel,
  clicks: ClickModel[]
}
  