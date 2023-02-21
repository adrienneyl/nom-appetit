import react from 'react';
import { useState } from 'react';
import './find.css';

import Table from "./../../assets/table_asset.svg"

import Meal from './meal/Meal';
import Cuisine from './cuisine/Cuisine';
import Dietary from './dietary/Dietary';
import Location from './location/Location';

function Find() {

    const [progress, setProgress] = useState("meal");
    const [meal, setMeal] = useState("");
    const [cuisine, setCuisine] = useState("");
    const [dietary, setDietary] = useState("");
    const [location, setLocation] = useState("");

    function handleCallback(payload) {
        setProgress(payload);
    }

    if (progress === "meal") {
        return (
            <div>
                <Meal handleCallback={handleCallback} meal={meal} setMeal={setMeal} />
                <div class="table-container">
                    <img src={Table}></img>
                </div>
            </div>
        )
    } else if (progress === "cuisine") {
        return (
            <div>
                <Cuisine handleCallback={handleCallback} meal={meal} setCuisine={setCuisine} />
                <div class="table-container">
                    <img src={Table}></img>
                </div>
            </div>
        )
    } else if (progress === "dietary") {
        return (
            <div>
                <Dietary handleCallback={handleCallback} setDietary={setDietary} />
                <div class="table-container">
                    <img src={Table}></img>
                </div>
            </div>
        )
    } else if (progress === "location") { 
        return (
            <div>
                <Location handleCallback={handleCallback} setLocation={setLocation} />
                <div class="table-container">
                    <img src={Table}></img>
                </div>
            </div>
        )
    }
}

export default Find