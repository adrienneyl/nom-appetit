import react from 'react';
import './home.css'
import { Link } from "react-router-dom";
import Table from "./../../assets/table_asset.svg"

function Home() {
    return (
        <div>
            <div class="text-container">
                <p class="center">nom appetit</p>
            </div>
            <div class="home-container">
                <button class="startbutton"><Link to="/find" class="letseat">let's eat!</Link></button>
            </div>
            <div class="table-container">
                <img src={Table}></img>
            </div>
        </div>
    )
}

export default Home