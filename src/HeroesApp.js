import React, { useEffect, useReducer } from 'react'
import { authReducer } from './auth/authReducer'
import { AppRouter }  from  './routers/AppRouter'
import { AuthContext }  from  './auth/AuthContext'

const init = (inicio) => {
    console.log("Inicio de reducer: ", inicio);
    inicio['logged'] = false;
    // return JSON.parse(localStorage.getItem('user')) || { logged: false }; // forma 1 retornando un objeto que defino dentro del init
    return JSON.parse(localStorage.getItem('user')) || inicio; // forma 2 retornando el mismo objeto que recibo como parametro
}

/* Este es el componente donde se comenzara a desplegar la aplicacion */
export const HeroesApp = () => {
    
    // aqui {} se pasa como argumento a la funcion init, para ello hay que definirlo como argumento en la misma funcion
    const [user, dispatch] = useReducer(authReducer, {}, init);

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));
    }, [user])

    return (
        /* A lo largo de la aplicacion quiero distribuir el objeto  {user, dispatch}, para tenerlo disponible globalmente*/
        <AuthContext.Provider  value = { {user, dispatch} }>
            <AppRouter />   
        </AuthContext.Provider>
    )
}
