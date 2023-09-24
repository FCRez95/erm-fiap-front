import styled from 'styled-components'

export const UserLine = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    background-color: #dfdfdf;
    height: 50px;
    line-height: 50px;
    margin-bottom: 1px;
`

export const ColumnValue = styled.div`
  text-align: center;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`