import React, { FormEvent } from 'react'
import FormInput from '../../components/FormElements/FormInput'
import Button from '../../components/FormElements/Button'
import { db } from '../../db/db'
import { useForm } from '../../hooks/form-hook'
import { RequireValidator, MinLengthValidator, MaxLengthValidator, EmailValidator } from '../../utils/validators'
import { Container, FormContainer, AppName } from './styles'
import { login } from '../../services'

const LoginPage = () => {
  const [formState, inputHandler] = useForm(
    {
      email: {
        value: '',
        isValid: false,
      },
      password: {
        value: '',
        isValid: false,
      },
    },
    false
  );

  const submitLogin = async (event: FormEvent) => {
    event?.preventDefault()
    if (!formState.isValid) {
      alert('Preencha o formulário com dados validos para prosseguir!')
      return
    }

    const userInfo = {
      email: formState.inputs.email.value,
      password: formState.inputs.password.value
    }

    try {
      const loginResponse = await login(userInfo)
      
      db.user.add(loginResponse.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>
      <AppName>Traceable</AppName>
      <FormContainer onSubmit={submitLogin}>
        <FormInput 
          id='email' 
          type='email'
          label='Email'
          invalidMessage='Please, enter a valid email'
          validators={[EmailValidator()]}
          onInput={inputHandler}
          placeholder='Email'
        />

        <FormInput 
          id='password' 
          type='password'
          label='Password'
          invalidMessage='Password not valid! Should have between 6 and 12 characters'
          validators={[RequireValidator(), MinLengthValidator(5), MaxLengthValidator(12)]}
          onInput={inputHandler}
          placeholder='Password'
        />

        <Button type='submit' size='medium' model='confirm' width='80%' mobileWidth='80%'/>
      </FormContainer>
    </Container>
  )
}

export default LoginPage;