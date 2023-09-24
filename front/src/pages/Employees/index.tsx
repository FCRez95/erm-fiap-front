import { FormEvent, useEffect, useState } from 'react';
import FormInput from '../../components/FormElements/FormInput';
import { User } from '../../models/user';
import { EmailValidator, RequireValidator } from '../../utils/validators';
import { Container, FormTitle, FormContainer, InputsContainer, FormBtn, PageDivider, TableTitle } from './styles'
import { useForm } from '../../hooks/form-hook';
import { createEmployee, getUsers } from '../../services';
import EmployeesTable from './Table';

interface Props {
  user?: User[]
}
const EmplyeesPage = ({ user }: Props) => {
  const [allEmployees, setAllEmployees] = useState<User[]>([])

  useEffect(() => {
    if(user && user[0].type === "adm") {
      getUsers(user[0].tokenAccess)
      .then(resp => {
        console.log(resp.data)
        setAllEmployees(resp.data)
      })
      .catch(error => {
        console.log(error)
      })
    }
  }, [user])

  useEffect(() => {

  }, [allEmployees])

  const [formState, inputHandler] = useForm(
    {
        name: {
            value: '',
            isValid: false,
        },
        email: {
            value: '',
            isValid: false,
        },
        type: {
            value: '',
            isValid: false,
        },
    },
    false
);

const submitNewEmployee = async (event: FormEvent) => {
    event?.preventDefault()
    console.log(formState)
    if (!formState.isValid) {
      alert('Preencha o formulário com dados validos para prosseguir!')
      return
    }
    
    const userInfo = {
      name: formState.inputs.name.value,
      email: formState.inputs.email.value,
      password: 'password',
      type: formState.inputs.type.value
    }
    console.log(userInfo)
    try {
      if (user) {
        const employeeResponse = await createEmployee(userInfo, user[0].tokenAccess)
        console.log(employeeResponse)
        let newEmployeesList = allEmployees
        newEmployeesList.push(employeeResponse.data)
        console.log(newEmployeesList)
        setAllEmployees(newEmployeesList)
      }
    } catch (error) {
        console.log(error)
    }
  }

  return (
    <Container>
      <FormTitle>Adicionar Colaborador</FormTitle>

      <FormContainer onSubmit={submitNewEmployee}>
        <InputsContainer>
          <FormInput 
          id='name' 
          type='name'
          label='Nome do Colaborador'
          invalidMessage='Este campo é obrigatório!'
          validators={[RequireValidator()]}
          onInput={inputHandler}
          placeholder='Nome da campanha'
          />

          <FormInput 
          id='email' 
          type='email'
          label='Email'
          invalidMessage='Este campo deve ser um email!'
          validators={[EmailValidator()]}
          onInput={inputHandler}
          placeholder='example@example.com'
          />

          <FormInput 
          id='type' 
          type='type'
          label='Tipo de usuário'
          invalidMessage='Este campo é obrigatório!'
          validators={[RequireValidator()]}
          onInput={inputHandler}
          placeholder='adm ou cli'
          />
        </InputsContainer>

        <FormBtn>Criar</FormBtn>
      </FormContainer>

      <PageDivider />

      <TableTitle>Colaboradores</TableTitle>

      {allEmployees? (
        <EmployeesTable allUsers={allEmployees}/>
      ) : (
        ''
      )}
      
    </Container>
  )
}

export default EmplyeesPage;