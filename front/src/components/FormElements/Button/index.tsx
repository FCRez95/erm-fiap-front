import { ButtonContainer } from './styles'

interface Props {
    type: 'button' | 'submit'
    size: 'large' | 'medium' | 'small'
    model: 'confirm'
    width: string
    mobileWidth: string
    onClick?: () => void
}

const Button = ({type, size, model, width, mobileWidth, onClick}: Props) => {
    const classes = `${size} ${model}`
    return (
        <ButtonContainer className={classes} width={width} mobileWidth={mobileWidth}>
            Login
        </ButtonContainer>
    )
}

export default Button