import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    transition: top;
    flex-grow: 1;
`

export const FormTitle = styled.div`
    font-size: 40px;
    font-weight: 700;
    color: #343434;
    padding-top: 50px;
`

export const FormContainer = styled.form`
    padding: 15px;
    display: flex;
    flex-direction: column;
`

export const InputsContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    gap: 15px;
`

export const FormBtn = styled.button`
    border: none;
    border-radius: 5px;
    background-color: #222222;
    color: white;
    width: 100px;
    font-size: 15px;
    height: 50px;
    cursor: pointer;
`

export const PageDivider = styled.div`
    width: 100%;
    border-top: 1px solid #C5C5C5
`

export const TableTitle = styled.div`
    font-size: 40px;
    font-weight: 700;
    color: #343434;
    padding-top: 15px;
    padding-bottom: 15px;
`
