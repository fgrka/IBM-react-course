import React, {useState, useContext} from "react";
import { AppContext } from "../context/AppContext";




const Currency = () => {
const [currency, setCurrency] = useState("");
const { dispatch } = useContext(AppContext);

const handleCurrencyChange = (e) => {
    setCurrency(e.target.innerText);
    dispatch({
        type: 'CHG_CURRENCY',
        payload: e.target.value,
    });
    console.log(e.target.value);
}


return(
    <>
        <div className="dropdown-currency">
            <div className="dropdown-title">Currency {currency} <span>&#9660;</span></div>
            <div className="dropdown-list">
                <button value="$" onClick={handleCurrencyChange}>$ Dolar</button>
                <button value="£" onClick={handleCurrencyChange} >£ Pound</button>
                <button onClick={handleCurrencyChange} value="€">€ Euro</button>
                <button onClick={handleCurrencyChange} value="₹">₹ Rupee</button>
            </div>
        </div>

    </>
    )





}


export default Currency;