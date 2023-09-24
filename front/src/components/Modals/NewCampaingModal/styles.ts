import styled from 'styled-components'

export const ContainerNewCampaing = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100vh;
    background-color: #000000bd;
    z-index: 100;
`

export const ModalFormContainer = styled.div`
    border: none;
    border-radius: 5px;
    background-color: white;
    width: 40%;
`

export const Header = styled.div`
    padding: 20px 15px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background-color: #747373;
    color: white;
    font-size: 30px;
    font-weight: 200;
`

export const FormContainer = styled.form`
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const BtnContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 15px;
    width: 100%;
`

export const FormBtn = styled.button`
    border: none;
    border-radius: 5px;
    background-color: #222222;
    color: white;
    width: 100px;
    font-size: 15px;
    height: 30px;
    cursor: pointer;
`

export const CancelBtn = styled.button`
    border: none;
    border-radius: 5px;
    background-color: #e36b6b;
    color: white;
    width: 100px;
    font-size: 15px;
    height: 30px;
    cursor: pointer;
`