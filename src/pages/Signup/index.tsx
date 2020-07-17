import React,{useCallback,useRef} from 'react';
import { FormHandles } from '@unform/core'
import {Form} from '@unform/web'
import * as Yup from 'yup'
import {Link, useHistory} from 'react-router-dom'


import {FiArrowLeft,FiMail,FiLock,FiUser} from 'react-icons/fi'

import { Content,Container,Background,AnimationContainer } from './styles';


import Input from '../../components/Input'
import Button from '../../components/Button'

import Logo from '../../assets/logo.svg'
import validationErrors from '../../utils/validationErrors';
import {useToast} from '../../context/ToastContext'

import api from '../../services/api'




interface SignupFormData{
    name:string
    email:string
    password:string
}

const Signup: React.FC = () => {
    const formRef = useRef<FormHandles>(null)

    const{addToast} = useToast()
    const history = useHistory()

    const handleSubmit=useCallback( async(data:SignupFormData)=>{
        try{

            formRef.current?.setErrors({})

            const schema = Yup.object().shape({
                name:Yup.string().required('O Nome é obrigatorio'),
                email:Yup.string().required('O Email é obrigatorio').email('Digite um e-mail Valido'),
                password:Yup.string().min(6,'Mínimo de 6 digitos')
            })

            await schema.validate(data,{
                abortEarly:false
            })

            await api.post('/users',data)

            history.push('/')

            addToast({
                type:'success',
                title:'Cadastro realizado',
                description:'Cadastro efetuado com sucesso'
            })

        }catch(e){

            if(e instanceof Yup.ValidationError){
                const errors = validationErrors(e)
                formRef.current?.setErrors(errors)
                
                return
            }
            
            addToast({
                type:'error',
                title:'Erro no Cadastro',
                description:'Oops ocorreu um erro ao realizar o cadastro'
            })
        }
        
    },[addToast,history])


    return(
        <Container>

            <Background/>  
             
            <Content>
                <AnimationContainer>
                <img src={Logo} alt=""/>
                <Form ref={formRef} onSubmit={handleSubmit}>
                    <h1>Faça seu Cadastro</h1>

                    <Input name="name" icon={FiUser} type="text" placeholder="Nome" />
                    <Input name="email" icon={FiMail} type="text" placeholder="Email" />
                    <Input name="password" icon={FiLock} type="password" placeholder="Senha" />
                    <Button type="submit">Cadastrar</Button>
                </Form>


                <Link to="/"><FiArrowLeft/>Voltar para login</Link>
                </AnimationContainer>
            </Content>

        </Container>
    )
}

export default Signup;