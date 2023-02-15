import react from 'react';
import './dietary.css';

import DownArrow from './../../../assets/expand.svg';

function Dietary({ handleCallback}) {

    function handleClick() {
        handleCallback("location");
    }

    return (
        <div>
            <div>
                <p>dietary</p>
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