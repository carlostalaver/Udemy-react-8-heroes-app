import React from 'react';
import ReactDOM from 'react-dom';
import {HeroesApp } from './HeroesApp';

/* este archivo se comienda tenerlo lo mas limpio posible, por ello es que creé el  HeroesApp para allí colocar 
   los contectos en caso de que los necesite y no colocarlos aquí*/
ReactDOM.render(
    <HeroesApp />,
  document.getElementById('root')
);
