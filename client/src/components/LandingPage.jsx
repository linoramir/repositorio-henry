import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/LandingPage.css';
import {GiDogHouse} from 'react-icons/gi'

export default function LandingPage(){
    return(
        <div className='divLP'>
            <Link to='/home'>
                <button className='button'><h1><span>Home <GiDogHouse/></span></h1></button>
            </Link>
        </div>
    )
}