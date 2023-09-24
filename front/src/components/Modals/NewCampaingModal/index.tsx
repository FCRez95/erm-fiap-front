import { FormEvent, useState } from 'react';
import { useForm } from '../../../hooks/form-hook';
import { RequireValidator } from '../../../utils/validators';
import FormInput from '../../FormElements/FormInput';
import { ContainerNewCampaing, ModalFormContainer, Header, FormContainer, BtnContainer, FormBtn, CancelBtn } from './styles'
import { User } from '../../../models/user';
import { createCampaing } from '../../../services';

interface Props {
    user?: User[]
    closeModal: () => void
    updateCampaings: (newCampaing: any) => void
}

const ModalNewCampaing = ({user, closeModal, updateCampaings}: Props) => {
    const [loading, setLoading] = useState<Boolean>(false)
    const [formState, inputHandler] = useForm(
        {
            name: {
                value: '',
                isValid: false,
            },
            product: {
                value: '',
                isValid: false,
            },
            clickAuther: {
                value: '',
                isValid: false,
            },
        },
        false
    );

    const submitCampaing = async (event: FormEvent) => {
        event?.preventDefault()
        setLoading(true)
        console.log(formState)
        if (!formState.isValid) {
          alert('Preencha o formulário com dados validos para prosseguir!')
          return
        }
        
        const campaingInfo = {
            idUser: user&& user[0].id,
            name: formState.inputs.name.value,
            product: formState.inputs.product.value,
            clickAuther: formState.inputs.clickAuther.value
        }
        console.log(campaingInfo)
        try {
            const camapingResponse = await createCampaing(campaingInfo)
            updateCampaings(camapingResponse.data)
            setLoading(false)
            closeModal()
          console.log(camapingResponse)
        } catch (error) {
            console.log(error)
        }
      }

    return (
        <ContainerNewCampaing>
            <ModalFormContainer>
                <Header>Criar nova campanha</Header>

                {}
                <FormContainer onSubmit={submitCampaing}>
                    <FormInput 
                    id='name' 
                    type='name'
                    label='Nome da Campanha'
                    invalidMessage='Este campo é obrigatório!'
                    validators={[RequireValidator()]}
                    onInput={inputHandler}
                    placeholder='Nome da campanha'
                    />

                    <FormInput 
                    id='product' 
                    type='product'
                    label='Produto'
                    invalidMessage='Este campo é obrigatório!'
                    validators={[RequireValidator()]}
                    onInput={inputHandler}
                    placeholder='Produto anunciado'
                    />

                    <FormInput 
                    id='clickAuther' 
                    type='clickAuther'
                    label='Link de Redirecionamento'
                    invalidMessage='Este campo é obrigatório!'
                    validators={[RequireValidator()]}
                    onInput={inputHandler}
                    placeholder='Link para redirecionar o cliente'
                    />

                    <BtnContainer>
                        <CancelBtn type='button' onClick={closeModal}>Cancelar</CancelBtn>
                        <FormBtn type="submit">Criar</FormBtn>
                    </BtnContainer>
                </FormContainer>
            </ModalFormContainer>
        </ContainerNewCampaing>
    )
}

export default ModalNewCampaing