import react from 'react';
import './cuisine.css';

import DownArrow from './../../../assets/expand.svg';

function Cuisine({ handleCallback }) {

    function handleClick() {
        handleCallback("dietary");
    }

    return (
        <div>
            <div>
                <p>cuisine</p>
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