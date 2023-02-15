import react from 'react';
import { Link } from 'react-router-dom';

import './location.css';
import DownArrow from './../../../assets/expand.svg';

function Location() {
    return (
        <div class="location-container">
            <div>
                <p class="location-title">where are we headed to?</p>
            </div>
            <div>
                <p class="location-subtitle">city</p>
                <div class="location-button-container">
                    <button class="left">no preference</button>
                    <button class="middle">richmond</button>
                    <button class="middle">vancouver</button>
                    <button class="right">surrey</button>
                </div>
            </div>
            <div class="next-button">
                <Link to="/result">
                    <button>
                        <p class="next-text">next</p>
                        <img src={DownArrow} class="colored-arrow" />
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Location