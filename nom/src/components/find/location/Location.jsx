import react from 'react';
import './location.css';

import DownArrow from './../../../assets/expand.svg';

function Location({ handleCallback }) {

    function handleClick() {
        handleCallback("loading");
    }

    return (
        <div>
            <div>
                <p>location</p>
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

export default Location