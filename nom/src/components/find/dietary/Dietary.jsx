import react from 'react';
import './dietary.css';

import DownArrow from './../../../assets/expand.svg';

function Dietary({ handleCallback}) {

    function handleClick() {
        handleCallback("location");
    }

    return (
        <div class="dietary-container">
            <div>
                <p class="diet-title">any dietary restrictions today?</p>
            </div>
            <div>
                <div>
                    <p class="diet-subtitle">strict restrictions</p>
                </div>
                <div class="diet-button-container">
                    <button class="left">vegetarian</button>
                    <button class="middle">vegan</button>
                    <button class="right">halal</button>
                </div>
            </div>
            <div>
                <div>
                    <p class="diet-subtitle">"friendly" considerations</p>
                </div>
                <div class="diet-button-container">
                    <button class="left">vegetarian</button>
                    <button class="middle">vegan</button>
                    <button class="right">halal</button>
                </div>
            </div>
            <div class="next-button">
                <button onClick={handleClick}>
                    <p class="next-text">next</p>
                    <img src={DownArrow} class="colored-arrow" />
                </button>
            </div>
        </div>
    )
}

export default Dietary