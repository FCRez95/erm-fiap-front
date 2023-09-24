import styled from 'styled-components'

type ButtonProps = {
    width: string;
    mobileWidth: string;
}

export const ButtonContainer = styled.button<ButtonProps>`
    width: ${props => props.width};
    border: none;
    cursor: pointer;
    text-decoration: none;
    border-radius: 5px;
    font-size: 12px;
    font-weight: 500;
    font-family: Roboto;
    text-transform: capitalize;

    &.small {
        height: 23px;
        min-width: 52px;
        padding: 0px 5px;
    }
      
    &.medium {
        height: 28px;
        min-width: 62px;
        padding: 0px 3px;
    }

    &.large {
        height: 38px;
        min-width: 82px;
        padding: 0px 10px;
        font-size: 13px;
        text-transform: uppercase;
        @media screen and (max-width: 960px) {
            font-size: 12px;
            height: 28px;
            width: ${(props) => props.mobileWidth}
        }
    }

    &.confirm {
        background-color: #222222;
        color: white;
    }
`