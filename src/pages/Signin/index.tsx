import React,{ useCallback,useRef } from 'react';
import {FiLogIn,FiMail,FiLock} from 'react-icons/fi'
import { Link,useHistory } from 'react-router-dom'


import { Content,Container,Background,AnimationContainer } from './styles';

import {Form} from '@unform/web'
import { FormHandles } from '@unform/core'

import * as Yup from 'yup'


import Input from '../../components/Input'
import Button from '../../components/Button'
import Logo from '../../assets/logo.svg'

import validationErrors from '../../utils/validationErrors';

import { useAuth } from '../../context/AuthContext'
import { useToast } from '../../context/ToastContext'

interface signInFormdata{
    email:string
    password:string
}


const Signin: React.FC = () => {
    const formRef = useRef<FormHandles>(null)
    
    const{ signin } = useAuth()
    const{ addToast } = useToast()

    const history = useHistory()

    const handleSubmit=useCallback( async(data:signInFormdata)=>{
        try{

            formRef.current?.setErrors({})

            const schema = Yup.object().shape({
                email:Yup.string().required('O e-mail é obrigatorio').email('Digite um e-mail Valido'),
                password:Yup.string().required('A senha é obrigatoria')
            })

            await schema.validate(data,{
                abortEarly:false
            })

            await signin({
                email:data.email,
                password:data.password
            })

            history.push('/dashboard')
        }catch(e){

            if(e instanceof Yup.ValidationError){
                const errors = validationErrors(e)
                formRef.current?.setErrors(errors)
                
                return
            }
            
            addToast({
                type:'error',
                title:'Erro na Autenticação',
                description:'Oops ocorreu um erro ao fazer login'
            })
            
        }
        
    },[signin,addToast,history])

    return(
        <Container>
            <Content>
                <AnimationContainer>

                    <img src={Logo} alt=""/>
                    <Form ref={formRef} onSubmit={handleSubmit}>
                        <h1>Faça seu login</h1>

                        <Input name="email" icon={FiMail} type="text" placeholder="Email" />
                        <Input name="password" icon={FiLock} type="password" placeholder="Senha" />
                        <Button type="submit">Entrar</Button>

                        <Link to='#'>Esqueci minha senha</Link>
                    </Form>
                    
                    <Link to='/signup'><FiLogIn/>Criar conta</Link>
                    
                </AnimationContainer>
            </Content>

            <Background/>
        </Container>
    )
}

export default Signin;