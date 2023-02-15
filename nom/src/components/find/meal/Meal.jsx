import react from 'react';
import './meal.css';

import DownArrow from './../../../assets/expand.svg';

function Meal({ handleCallback }) {

    function handleClick() {
        handleCallback("cuisine");
    }

    return (
        <div class="meal-container">
            <div class="meal-text">
                <p class="meal-subtitle">let's start!</p>
                <p class="meal-title">what are we eating?</p>
            </div>
            <div class="button-container">
                <div class="row-one">
                    <button class="left">breakfast</button>
                    <button class="middle">brunch</button>
                    <button class="middle">lunch</button>
                    <button class="right">dinner</button>
                </div>
                <div class="row-two">
                    <button class="left">dessert</button>
                    <button class="middle">snack</button>
                    <button class="right">drinks</button>
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

export default Meal