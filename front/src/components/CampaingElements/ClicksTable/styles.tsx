import styled from 'styled-components'

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`

export const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 2fr 1fr 1fr 2fr 1fr;
  margin-bottom: 5px;
`

export const ColumnName = styled.div`
  display: flex;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
`