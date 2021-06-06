import { types } from "../types/types";

/* esto es lo que buco que me entrega en reducer en caso de que esté logueado
    const state = {
    name: 'Carlos',
    logged: true
} */
/* esto es lo que buco que me entrega en reducer en caso de que NO esté logueado
    const state = {
        logged: false
} */


/* recordar simpre que los reducer son FUNCIONES PURAS */
export const authReducer = ( state = {}, action) => {
    switch (action.type) {
        case types.login:
            return {
                ...action.payload,
                logged: true
            }

        case types.logout:
            return {
                logged: false
            }
    
        default:
            return state;
    }
}