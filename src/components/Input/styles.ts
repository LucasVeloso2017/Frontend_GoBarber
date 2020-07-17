import styled,{css} from 'styled-components'
import { shade } from 'polished'

import Tooltip from '../Tooltip'


interface ContainerFocused{
    isFocused:boolean
    isFiled:boolean
    isErrored:boolean
}

export const Container= styled.div<ContainerFocused>`
    
    background:#232129;
    border-radius:10px;
    padding:16px;
    width:100%;
    display:flex;
    align-items:center;

    color:white;
    border:2px solid #232129;
    transition:border,color 0.2s;

    ${props => props.isErrored && css`
        
        border:2px solid red;
    ` }

    ${props => props.isFocused && css`
        color:#ff9800;
        border:2px solid #ff9800;
    ` }

    ${props => props.isFiled && css`
        color:#ff9800;
    ` }
    

    & + div{
        margin-top:8px;
    }
    input{
        color:white;
        flex:1;
        border:0;
        background:transparent;        
    }   

    svg{
        margin-right:16px;
    }

`

export const Error = styled(Tooltip)`
    height:20px;
    margin-left:16px;
    svg{
        margin:0;
    }

    span{
        background:#c53030;
        color:#fff;
    }

    &::before{
        content:'';
        border-color:#c53030 transparent;
    }

`