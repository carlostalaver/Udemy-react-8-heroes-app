import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroCard}  from './HeroCard'
 
export const HeroList = ( { publisher }) => { // publisher  viene de del objeto heroes.js que sta en la carperta data
    
    /* Memorizo esta funcion para que solo se ejecute cada vez que el la variable publisher cambie y no cuando 
       cambie algo en el componente que hara uso del componente HeroList
    */
    const heroes = useMemo(() => getHeroesByPublisher( publisher ), [ publisher ])
    
    
    return (
        <div className="card-columns animate__animated animate__fadeIn">
            {
                heroes.map( hero => (
                   <HeroCard  key={ hero.id }  { ...hero }/>
                ))
            }
        </div>
    )
}
