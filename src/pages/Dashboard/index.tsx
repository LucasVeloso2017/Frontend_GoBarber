import React,{useEffect} from 'react';

// import { Container } from './styles';

import { useAuth } from '../../context/AuthContext'
import { useHistory } from 'react-router-dom';
import Header from './../../components/Header/index';

const Dashboard: React.FC = () => {
  const { user } = useAuth()
  const history = useHistory()

  useEffect(()=>{
    console.log(user)
    user.admin && history.push('/admin/dashboard')
  },[])

  return (
    <>  
      <Header/>
    </>
  )
}

export default Dashboard;