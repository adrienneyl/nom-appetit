import react from 'react';
import { useState } from 'react';
import Select from 'react-select';

import './cuisine.css';
import DownArrow from './../../../assets/expand.svg';

function Cuisine({ handleCallback, meal }) {

    function handleClick() {
        handleCallback("dietary");
    }

    const [selectedOption, setSelectedOption] = useState(null);

    return (
        <div class="cuisine-container">
            <div>
                <p class="cuisine-title">are we craving anything?</p>
                <p class="cuisine-subtitle">i'm craving...</p>
            </div>
            <div class="cuisine-button-container">
                <div class="cuisine-row-one">
                    <button class="left">nothing in particular</button>
                    <button class="middle">chinese</button>
                    <button class="middle">japanese</button>
                    <button class="right">korean</button>
                </div>
                <div class="cuisine-row-two">
                    <button class="left">indian</button>
                    <button class="middle">pakistani</button>
                    <button class="middle">malaysian</button>
                    <button class="right">vietnamese</button>
                </div>
                <div class="cuisine-row-three">
                    <button class="left">italian</button>
                    <button class="middle">mexican</button>
                    <button class="middle">american</button>
                    <button class="right">canadian</button>
                </div>
            </div>
            <div class="next-button">
                <button onClick={handleClick}>
                    <p class="next-text">next</p>
                    <img src={DownArrow} class="colored-arrow"/>
                </button>
            </div>
        </div>
    )
}

export default Cuisine