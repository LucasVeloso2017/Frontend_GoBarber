import React,{useCallback} from 'react';
import {FiAlertCircle, FiXCircle} from 'react-icons/fi'
import { Container, Toasts } from './styles';
import { useTransition } from 'react-spring'


import { ToastMessage,useToast } from '../../context/ToastContext'
import ToastVerify from './ToastVerify'

interface ToastContainerProps{
    messages:ToastMessage[]
}


const Toast: React.FC<ToastContainerProps> = ({messages}) => {

    const messageWithTransitions = useTransition(messages,
        message => message.id,
        {
            from:{right: '-120%'},
            enter:{right:'0%'},
            leave:{right:'-120%'}
        })

    return(
        <Container >
            {messageWithTransitions.map(({item,key,props }) => {
                return(
                    <ToastVerify key={key} message={item} style={props}/> 
                )
            })}
        </Container>    
    
    );
}

export default Toast;