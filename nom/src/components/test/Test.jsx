import react from 'react';
import { Link } from "react-router-dom";

function callAPI() {
    fetch('https://nom-appetit-api.onrender.com/details', { method: 'GET' })
        .then(data => data.json())
        .then(json => alert(JSON.stringify(json)))
}

function Test() {
    return (
        <div>
            <div class="home-container">
                <button class="startbutton" onClick={callAPI}>call api</button>
            </div>
        </div>
    )
}

export default Test