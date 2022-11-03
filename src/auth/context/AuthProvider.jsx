import { useReducer } from "react"
import { type } from "../types/type";
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer";

const init = () =>{

  const user = JSON.parse(localStorage.getItem('user'));

  return {
      logged: !!user,        // <---- si user existe, devuleve (true)
      user: user,
  }

}

export const AuthProvider = ({ children }) => {
  
  const [ authState, dispatch ] = useReducer(authReducer, {}, init);

  const login = ( name = '' ) =>{

    const user = { id: 'ABC', name}

    const action = {
      type: type.login,
      payload: user
      /*  {
        id: 'ABC',
        name: name
      } */
    }

    localStorage.setItem('user', JSON.stringify( user ))

    dispatch(action)
  }

  const logout = ( name = '' ) =>{

    localStorage.removeItem('user');

    const action = {
      type: type.login,
    }

    dispatch(action)
  }
  
  return ( 
    
    <AuthContext.Provider value={ {
      ...authState,
      login: login,
      logout: logout,
    } }>
      { children }
    </AuthContext.Provider>


  )
}
