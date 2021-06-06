import React from 'react'
import { HeroList } from '../heroes/HeroList'

export const MarvelScreen = () => {
    return (
        <div>
              <h1>Marvel Screem</h1>
              <hr/>
              <HeroList publisher={"Marvel Comics"}/> {/* le pude pasar "Marvel Comics"  sin las {} eigual funcionaria */}
        </div>
    )
}
