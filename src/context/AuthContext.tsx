import React,{ createContext,useCallback,useState,useContext } from 'react'
import api from '../services/api'

interface authState{
    token:string
    user:object
}


interface signInCredentials{
    email:string
    password:string
}

interface authContext{
    user:object
    signin(credentials:signInCredentials):Promise<void>
    signout():void

}

const AuthContext = createContext<authContext>({} as authContext)


const AuthProvider: React.FC = ({children}) => {
    
    const[data,setData]=useState<authState>(()=>{
        const token = localStorage.getItem('@GoBarber:token')
        const user = localStorage.getItem('@GoBarber:user')

        if(token && user){
            return{
                token,
                user:JSON.parse(user)
            }
        }

        return {} as authState
    })


    const signin = useCallback(async({email,password})=>{
        
        const { data } = await api.post('session',{email,password})    
        const { token,user } = data

        localStorage.setItem('@GoBarber:token',token)
        localStorage.setItem('@GoBarber:user',JSON.stringify(user))

        setData({ token,user })
    },[])

    const signout = useCallback(()=>{
        localStorage.removeItem('@GoBarber:token')
        localStorage.removeItem('@GoBarber:user')

        setData({} as authState)
    },[])

    
    return(
      <>
        <AuthContext.Provider value={{ user:data.user , signin, signout }}>
            {children}
        </AuthContext.Provider>
    
      </>
    )
}

const useAuth = ():authContext =>{

    const context = useContext(AuthContext)
    
    if(!context){
        throw new Error('useAuth must be use within an AuthProvider')
    }

    return context
}

export { AuthProvider,useAuth}

