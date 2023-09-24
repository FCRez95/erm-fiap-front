import styled from 'styled-components'

export const InputArea = styled.input`
    display: flex;
    flex-direction: column;
    font-size: 14px;
    min-height: 20px;
    border: 1px solid #cecece;
    border-radius: 5px;
    padding:10px;
    outline: none;
    font-family: Roboto;
    &::placeholder {
        color: #9d9d9d;
        font-size: 12px;
    }

    &.invalid {
        border: 1px solid #ed4747b8;
    }
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 15px
`

export const Label = styled.label`
  font-size: 14px;
  font-family: Roboto;
  font-weight: medium;
  margin: 0 0 10px 0;
  color: #1e1e1e;
  letter-spacing: 0px;
`;

export const Small = styled.small`
  font-size: 10px;
  font-weight: 400;
  margin: 5px 0 0 0;
  color: #b10000;
  font-family: Roboto;
`;