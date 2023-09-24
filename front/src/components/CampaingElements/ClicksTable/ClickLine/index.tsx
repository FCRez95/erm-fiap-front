import ClickModel from '../../../../models/click'
import { ClickLine, ColumnValue, ThumbnailContainer, ThumbnailPic } from './styles'

interface Props {
  click: ClickModel
  first?: boolean
  last?: boolean
}

const ClicksTable = ({ click, first, last }: Props) => {
 
  return(
    <ClickLine style={{
      borderTopRightRadius: first? '10px' : '0px',
      borderTopLeftRadius: first? '10px' : '0px',
      borderBottomLeftRadius: last? '10px' : '0px',
      borderBottomRightRadius: last? '10px' : '0px'}}>
      <ThumbnailContainer>
        <ThumbnailPic src={click.thumbnail}/>
      </ThumbnailContainer>
      
      <ColumnValue>{click.title}</ColumnValue>
      <ColumnValue>{click.siteDomain}</ColumnValue>
      <ColumnValue>{click.platform}</ColumnValue>
      <ColumnValue>{click.lastUpdated.replaceAll('-', '/')}</ColumnValue>
      <ColumnValue>teste</ColumnValue>
      <ColumnValue>{click.value}</ColumnValue>
    </ClickLine>
  )
}

export default ClicksTable