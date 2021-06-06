import React from 'react'
import { Navbar } from '../components/ui/Navbar'
import { Switch,
    Route,
    Redirect}
    from 'react-router-dom'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { DcScreen } from '../components/dc/DcScreen'
import { HeroScreen } from '../components/heroes/HeroScreen'
import { SearchScreen } from '../components/search/SearchScreen'

export const DashboardRouter = () => {

    // como son rutas secundarias no puedo usar nuevamente <Router> como es AppRouter,js
    return (
        <>
            <Navbar /> {/* notar que es un component vulgar y silvestre */}

            <div className={"container mt-2"}>
                <Switch >
                    <Route exact path="/marvel" component= { MarvelScreen}  />
                    <Route exact path="/hero/:heroeId" component= { HeroScreen }  />
                    <Route exact path="/dc" component= { DcScreen }  />
                    <Route exact path="/search" component= { SearchScreen } />
                    <Redirect to="/marvel" />
                </Switch>  
            </div>   
        </>
    )
}
