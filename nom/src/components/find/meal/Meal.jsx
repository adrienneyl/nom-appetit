import react from 'react';
import { useState } from 'react';
import classNames from 'classnames';

import './meal.css';
import DownArrow from './../../../assets/expand.svg';

function Meal({ handleCallback, meal, setMeal }) {

    function handleClick() {
        if (meal === "") {
        } else {
        handleCallback("cuisine");
        }
    }

    function handleMeal(name) {
        if (name === "breakfast") {
            if (meal === "breakfast") {
                setMeal("");
            } else {
                setMeal("breakfast");
            }
            handleBreakfast();
        } else if (name === "brunch") {
            if (meal === "brunch") {
                setMeal("");
            } else {
                setMeal("brunch");
            }
            handleBrunch();
        } else if (name === "lunch") {
            if (meal === "lunch") {
                setMeal("");
            } else {
                setMeal("lunch");
            }
            handleLunch();
        } else if (name === "dinner") {
            if (meal === "dinner") {
                setMeal("");
            } else {
                setMeal("dinner");
            }
            handleDinner();
        } else if (name === "dessert") {
            if (meal === "dessert") {
                setMeal("");
            } else {
                setMeal("dessert");
            }
            handleDessert();
        } else if (name === "snack") {
            if (meal === "snack") {
                setMeal("");
            } else {
                setMeal("snack");
            }
            handleSnack();
        } else if (name === "drinks") {
            if (meal === "drinks") {
                setMeal("");
            } else {
                setMeal("drinks");
            }
            handleDrinks();
        }
    }

    const [breakfastToggle, setBreakfastToggle] = useState(false);
    const [brunchToggle, setBrunchToggle] = useState(false);
    const [lunchToggle, setLunchToggle] = useState(false);
    const [dinnerToggle, setDinnerToggle] = useState(false);
    const [dessertToggle, setDessertToggle] = useState(false);
    const [snackToggle, setSnackToggle] = useState(false);
    const [drinksToggle, setDrinksToggle] = useState(false);

    function handleBreakfast() {
        if (breakfastToggle) {
            setBreakfastToggle(false);
        } else {
            setBreakfastToggle(true);
            setBrunchToggle(false);
            setLunchToggle(false);
            setDinnerToggle(false);
            setDessertToggle(false);
            setSnackToggle(false);
            setDrinksToggle(false);
        }
    }

    function handleBrunch() {
        if (brunchToggle) {
            setBrunchToggle(false);
        } else {
            setBreakfastToggle(false);
            setBrunchToggle(true);
            setLunchToggle(false);
            setDinnerToggle(false);
            setDessertToggle(false);
            setSnackToggle(false);
            setDrinksToggle(false);
        }
    }

    function handleLunch() {
        if (lunchToggle) {
            setLunchToggle(false);
        } else {
            setBreakfastToggle(false);
            setBrunchToggle(false);
            setLunchToggle(true);
            setDinnerToggle(false);
            setDessertToggle(false);
            setSnackToggle(false);
            setDrinksToggle(false);
        }
    }

    function handleDinner() {
        if (dinnerToggle) {
            setDinnerToggle(false);
        } else {
            setBreakfastToggle(false);
            setBrunchToggle(false);
            setLunchToggle(false);
            setDinnerToggle(true);
            setDessertToggle(false);
            setSnackToggle(false);
            setDrinksToggle(false);
        }
    }

    function handleDessert() {
        if (dessertToggle) {
            setDessertToggle(false);
        } else {
            setBreakfastToggle(false);
            setBrunchToggle(false);
            setLunchToggle(false);
            setDinnerToggle(false);
            setDessertToggle(true);
            setSnackToggle(false);
            setDrinksToggle(false);
        }
    }

    function handleSnack() {
        if (snackToggle) {
            setSnackToggle(false);
        } else {
            setBreakfastToggle(false);
            setBrunchToggle(false);
            setLunchToggle(false);
            setDinnerToggle(false);
            setDessertToggle(false);
            setSnackToggle(true);
            setDrinksToggle(false);
        }
    }
    
    function handleDrinks() {
        if (drinksToggle) {
            setDrinksToggle(false);
        } else {
            setBreakfastToggle(false);
            setBrunchToggle(false);
            setLunchToggle(false);
            setDinnerToggle(false);
            setDessertToggle(false);
            setSnackToggle(false);
            setDrinksToggle(true);
        }
    }
    
    const toggleBreakfast = classNames("breakfast-button", {
        "button-active": breakfastToggle, 
        "button-inactive": !breakfastToggle
    })

    const toggleBrunch = classNames("brunch-button", {
        "button-active": brunchToggle,
        "button-inactive": !brunchToggle
    })

    const toggleLunch = classNames("lunch-button", {
        "button-active": lunchToggle,
        "button-inactive": !lunchToggle
    })

    const toggleDinner = classNames("dinner-button", {
        "button-active": dinnerToggle,
        "button-inactive": !dinnerToggle
    })

    const toggleDessert = classNames("dessert-button", {
        "button-active": dessertToggle,
        "button-inactive": !dessertToggle
    })

    const toggleSnack = classNames("snack-button", {
        "button-active": snackToggle,
        "button-inactive": !snackToggle
    })

    const toggleDrinks = classNames("drinks-button", {
        "button-active": drinksToggle,
        "button-inactive": !drinksToggle
    })

    const Notice = () => {
        if (meal === "") {
            return(
                <p class="meal-footnote">please select a meal</p>
            )
        }
        else {
            return (
                <p class="meal-footnote">you've picked {meal}</p>
            )
        }
    }

    return (
        <div class="meal-container">
            <div class="meal-text">
                <p class="meal-subtitle">let's start!</p>
                <p class="meal-title">what are we eating?</p>
            </div>
            <div class="button-container">
                <div class="row-one">
                    <button className={toggleBreakfast} value="breakfast" onClick={e => handleMeal(e.target.value)}>breakfast</button>
                    <button className={toggleBrunch} value="brunch" onClick={e => handleMeal(e.target.value)}>brunch</button>
                    <button className={toggleLunch} value="lunch" onClick={e => handleMeal(e.target.value)}>lunch</button>
                    <button className={toggleDinner} value="dinner" onClick={e => handleMeal(e.target.value)}>dinner</button>
                </div>
                <div class="row-two">
                    <button className={toggleDessert} value="dessert" onClick={e => handleMeal(e.target.value)}>dessert</button>
                    <button className={toggleSnack} value="snack" onClick={e => handleMeal(e.target.value)}>snack</button>
                    <button className={toggleDrinks} value="drinks" onClick={e => handleMeal(e.target.value)}>drinks</button>
                </div>
            </div>
            <div>
                <Notice/>
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