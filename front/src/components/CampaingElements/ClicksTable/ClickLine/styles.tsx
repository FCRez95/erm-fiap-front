import styled from 'styled-components'

export const ClickLine = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 2fr 1fr 1fr 2fr 1fr;
  background-color: #dfdfdf;
  height: 50px;
  line-height: 50px;
  margin-bottom: 1px;
`

export const ThumbnailContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ThumbnailPic = styled.img`
  width: 50px;
  border-radius: 5px;
`

export const ColumnValue = styled.div`
  text-align: center;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`