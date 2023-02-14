import react from 'react';
import './about.css'

import GroupPhoto from './../../assets/group-pic.jpg'
import Table from "./../../assets/table_asset.svg"

function About() {
    return (
        <div class="about-container">
            <div class="title-container">
                <p>about nom appetit</p>
            </div>
            <div class="column-container">
                <div class="image">
                    <img src={GroupPhoto}></img>
                </div>
                <div class="about-text">
                    <p>
                        nom appetit started as a way to make finding a place to eat easier
                        for a group of five friends.
                    </p>
                </div>
            </div>
            <div class="table-container">
                <img src={Table}></img>
            </div>
        </div>
    )
}

export default About