import react from 'react';
import { useState } from 'react';
import Select from 'react-select';

import './cuisine.css';
import DownArrow from './../../../assets/expand.svg';

function Cuisine({ handleCallback }) {

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
            <div class="nothing-button">
                <button>nothing in particular</button>
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