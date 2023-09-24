import React, { ChangeEvent, useEffect, useReducer, useState } from 'react'
import { validate, Validator } from '../../../utils/validators'
import { Container, InputArea, Label, Small } from './styles'

interface Props {
    id: string
    type: string
    label?: string
    invalidMessage?: string
    initialValue?: string
    initialValid?: boolean
    placeholder?: string
    validators: Validator[]
    onInput: (id: string, value: string, isValid: boolean) => void
}

interface InputState {
    value: string
    isValid: boolean
    isTouched: boolean
}

const FormInput = ({ id, type, label, invalidMessage, initialValue, initialValid, placeholder, validators, onInput }: Props) => {
    const [inputState, setInputState] = useState<InputState>({
        value: initialValue || '',
        isValid: initialValid || false,
        isTouched: false
    })

    useEffect(() => {
        onInput(id, inputState.value, inputState.isValid)
    }, [inputState])

    const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setInputState(oldState => ({
            ...oldState,
            value: event.target.value,
            isValid: validate(event.target.value, validators)
        }))
    }

    const touchHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setInputState(oldState => ({
            ...oldState,
            isTouched: true
        }))
    }

    const InputText = (
        <InputArea 
            className={`${ !inputState.isValid && inputState.isTouched ? 'invalid' : '' }`} 
            placeholder={placeholder}
            onChange={changeHandler}
            onFocus={touchHandler}
        />
    )

    const InputPass = (
        <InputArea 
            className={`${ !inputState.isValid && inputState.isTouched ? 'invalid' : '' }`} 
            placeholder={placeholder}
            onChange={changeHandler}
            onFocus={touchHandler}
            type='password'
        />
    )

    return(
        <Container>
            {label && <Label>{label}</Label>}
            {type === 'password' && InputPass}
            {type !== 'password' && InputText}
            {!inputState.isValid && inputState.isTouched && <Small>{invalidMessage}</Small>}
        </Container>
    )
}

export default FormInput