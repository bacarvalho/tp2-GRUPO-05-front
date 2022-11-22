import React from "react";
import { Divider } from './divider'
import './styles.desktop.css'
import QUOTE from './quote.json'

export const Quote =()=> {

    return (
        <div className='quote-container'>
            <div id='opener'>
            <Divider/>
            </div>
            <div id='quote-container'>
                <p>{QUOTE.quote}</p>
            </div>
            <div id='author-container'>
                <p>{QUOTE.author}</p>
            </div>
            <div id='closer'>
            <Divider/>
            </div>
        </div>
    )
}