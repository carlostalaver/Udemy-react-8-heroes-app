import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types'; /* impt más tab para importar */

export const PrivateRoute = ({ isAutenticated,  component: MiComponent, ...rest }) => { //...rest almacenaré el resto de parametos, ejemplo el exact, el path etc
   
    // para recordar la ultima ruta visitada para
    localStorage.setItem('lastPath', rest.location.pathname);
   
    return (
        <Route
            {...rest}
            component= { (props) => (
                (isAutenticated)
                    ? (<MiComponent {...props} />) /* si esta autenticado retornara el componente al que deseo ir */
                    : (<Redirect to="/login" />) /* si  no esta autenticado redirijo al login*/
            )}
        />
    )
}

PrivateRoute.propTypes = { // propTypes con p minuzcula 
   isAutenticated: PropTypes.bool.isRequired, // PropTypes con p mayuscula
   component: PropTypes.func.isRequired  // component es una funcion por eso se usa func
}
