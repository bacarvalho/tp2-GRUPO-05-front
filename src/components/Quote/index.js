import React from "react";
import { Divider } from './divider'
import './styles.desktop.css'


export const Quote =()=> {
    return (
        <div className='quote-container'>
            <Divider/>
            <div id='quote-container'>
            <p>“Un libro es algo con un principio y un fin, es un espacio donde el lector ha de entrar, dar vueltas, quizás perderse, pero encontrando en cierto momento una salida, o tal vez varias salidas, la posibilidad de dar con un camino para salir.”</p>
            </div>
            <div id='author-container'>
            <p>Italo Calvino</p>
            </div>
        </div>
    )
}