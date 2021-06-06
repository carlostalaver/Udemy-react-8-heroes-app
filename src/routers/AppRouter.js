import React, { useContext  } from "react";
import {
    BrowserRouter as Router,
    Switch
} from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import { LoginScreen } from "../components/login/LoginScreen";
import { DashboardRouter } from "./DashboardRouter";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {

    const  { user } = useContext(AuthContext);
    // este componente representa las rutas principales, por ello es q puedo usar <Router>
    return (
        <Router>
            <div>

                <Switch>
                    <PublicRoute
                        exact
                        path="/login"
                        component= { LoginScreen }
                        isAutenticated = { user.logged } />
                    
                    {/* Ojo que estoy trabajando con rutas privadas, es decir, se necesita estar logueado para poder cargar cualquiera de los componentes privados */}
                    <PrivateRoute
                        path="/"
                        component= { DashboardRouter } 
                        isAutenticated = { user.logged }
                    /> {/* no se puede usar la palabra exact porq necesito redireccionar a rutas hijas */}
                </Switch>
            </div>
        </Router>
    )
}
