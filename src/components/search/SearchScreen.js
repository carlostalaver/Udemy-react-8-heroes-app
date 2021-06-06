import React, { useMemo } from 'react'
import queryString from 'query-string'
import { HeroCard } from '../heroes/HeroCard';
import useForm from '../hooks/useForm';
import { useLocation } from 'react-router-dom';
import { getHeroesByName } from '../../selectors/getHeroByName';

export const SearchScreen = ({ history }) => {

    const location = useLocation();
    /* En react aun no hay una manera nativa de trabajar con queryString, por ello se recomienda tabajar con 
    queryString--> https://www.npmjs.com/package/query-string,me permite leer todo un querystring y parsearlo, retornandome un
    objeto mas facil de manipular*/
    const { q = '' } = queryString.parse(location.search);

    const [formValue, handleInputChange] = useForm({
        searchText: q
    });

    const { searchText } = formValue;

    const heroFiltered = useMemo(() => getHeroesByName( q ), [ q ]) ;
    
    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${searchText}`);
    }

    return (
        <div>
            <h1> SearchScreen</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h4> Search Form</h4>
                    <hr />

                    <form onSubmit={handleSearch}>
                        <input type="text" placeholder="Find your hero"
                            className="form-control"
                            autoComplete="off"
                            name="searchText"
                            value={searchText}
                            onChange={handleInputChange}
                        />
                        <button type="submit" className="btn btn-block m-1 btn-outline-primary">Search</button>
                    </form>


                </div>

                <div className="col-7">
                    <h4> Results </h4>
                    <hr />
                    {
                        (q === '') && <div className="alert alert-info"> Search a hero</div>
                    }

                    {
                        (q !== '' && heroFiltered.length === 0) && 
                        <div className="alert alert-danger"> There is no hero with this name { q }</div>
                    }

                    {
                        heroFiltered.map(hero => (
                            <HeroCard
                                key={hero.id}
                                {...hero}
                            />
                        ))
                    }


                </div>
            </div>

        </div>
    )
}
