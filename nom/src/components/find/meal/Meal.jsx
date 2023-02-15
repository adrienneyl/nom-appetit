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
                <p class="subtitle">let's start!</p>
                <p class="title">what are we eating?</p>
            </div>
            <div class="button-container">
                <div class="row-one">
                    <button>breakfast</button>
                    <button>brunch</button>
                    <button>lunch</button>
                    <button>dinner</button>
                </div>
                <div class="row-two">
                    <button>dessert</button>
                    <button>snack</button>
                    <button>drinks</button>
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