import ClickModel from '../../../models/click'
import ClickLine from './ClickLine'
import { TableContainer, TableHeader, ColumnName } from './styles'

interface Props {
  clicks: ClickModel[]
}

const ClicksTable = ({ clicks }: Props) => {
 
  return(
    <TableContainer>
      <TableHeader>
        <ColumnName>Thumbnail</ColumnName>
        <ColumnName>Título</ColumnName>
        <ColumnName>Site</ColumnName>
        <ColumnName>Plataforma</ColumnName>
        <ColumnName>Data</ColumnName>
        <ColumnName>Funil</ColumnName>
        <ColumnName>Valor</ColumnName>
      </TableHeader>
      
      {clicks.map((click, index) => (
        <ClickLine click={click} first={index === 0? true : false} last={index === clicks.length-1? true : false} />
      ))}
    </TableContainer>
  )
}

export default ClicksTable