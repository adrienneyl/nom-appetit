import react from 'react';

import './result.css';
import Table from "./../../assets/table_asset.svg"

function Result() {

    return (
        <div>
            <div>
                <p>result</p>
            </div>
            <div class="table-container">
                <img src={Table}></img>
            </div>
        </div>
    )
}

export default Result