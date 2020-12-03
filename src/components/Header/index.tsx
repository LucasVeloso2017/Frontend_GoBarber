import React, { useCallback, useState } from 'react';
import {FiPower,FiMenu,FiSettings,FiUsers} from 'react-icons/fi'

import Logo from '../../assets/logo.svg'

import { useAuth } from '../../context/AuthContext';
import { useHistory } from 'react-router-dom';

import { Container,MenuFloat } from './styles';

const Header: React.FC = () => {
    
    const nonUserImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUI4ueoXqXOfnVlpC3cXaSM9BEuVni-t7qmQ&usqp=CAU"

    const[adminMenu,setAdminMenu]=useState(false)


    const { user,signout } = useAuth()
    const history = useHistory()

    const getOut = useCallback(()=>{
        signout()
        history.push('/')
    },[])

  return (
    <>
    <Container>
        <img src={Logo}/>
        <div className="user-info">
            <img src={user.avatar_url ? user.avatar_url : nonUserImage}/>
            <p>
                Bem vindo,<br/>
                <strong>{user.name}</strong>
            </p>
        </div>
        <div className="commands">
            <button type="button" onClick={getOut} className="power">
                <FiPower color="#999591" size={25}/>
            </button>

            <button type="button" onClick={()=>setAdminMenu(state => !state)} className="menu">
                <FiMenu color="#999591" size={25}/>
            </button>
        </div>
        {adminMenu && FloatMenu()}
    </Container>
    </>
  );
}

const FloatMenu = ()=>{
    return(
        <>
        <MenuFloat>
            <ul>
                <li><FiUsers color="#ff9800" size={20} />Todos Barbeiros</li>
                <li><FiSettings color="#ff9800" size={20} />Painel de Controle</li>
            </ul>
        </MenuFloat>
        </>
    )
}

export default Header;