
import "./CurrencyStyling.css";
import { useEffect, useState } from "react";
import CurrencyContext from "./Contexts/CurrencyContext.js";
import CurrencyConverter from "./CurrencyConverter.jsx"; // Assuming you have a CurrencyConverter component


function CurrencyDropdown(){
    const [count, setCount] = useState(0);
    const [currencyList, setCurrencyList] = useState([]); 

    //const [currencyFrom, setCurrencyFrom] = useState("USD");
    //const [currencyTo, setCurrencyTo] = useState("SGD");
    const {currencyFrom, currencyTo } = useContext(CurrencyContext);
    

    useEffect(() => {
        fetch('https://v6.exchangerate-api.com/v6/2f50b1133f6e9b0421ec4f45/codes')
        .then(response => response.json())
        .then(data => setCurrencyList(data.supported_codes))
    },[]);


    function handleCurrencyFrom(event) {
        setCurrencyFrom(event.target.value);
        console.log("Selected currency from:", event.target.value);
    }

    function handleCurrencyTo(event) {
        setCurrencyTo(event.target.value);
        console.log("Selected currency to:", event.target.value);
    }

    return(
        <>
           <div> Current Count: {count} </div>
                <button onClick={() => setCount(count + 1)}>Increment</button>
                
                
                <div className="container">
                    <p>i want to convert</p>
                    <select name="currency" 
                            id="currencySelect" 
                            onChange={handleCurrencyFrom}
                            value = {currencyFrom}
                            >
                        {[...currencyList]
                            .sort((a, b) => a[1].localeCompare(b[1]))
                            .map((currency) => (
                            <option key={currency[0]} value={currency[0]}>
                                ({currency[0]}) {currency[1]}
                            </option>
                        ))}
                    </select>
                    <p>to</p>
                    <select name="currency" 
                            id="currencySelect"
                            onChange={handleCurrencyTo}
                            value = {currencyTo}
                            >
                        {[...currencyList]
                            .sort((a, b) => a[1].localeCompare(b[1]))
                            .map((currency) => (
                            <option key={currency[0]} value={currency[0]}>
                                ({currency[0]}) {currency[1]}
                            </option>
                        ))}
                    </select>
            </div> 
            <CurrencyConverter currencyFrom={currencyFrom} currencyTo={currencyTo} />
        </>
    )
}


//API KEY 2f50b1133f6e9b0421ec4f45
//https://v6.exchangerate-api.com/v6/2f50b1133f6e9b0421ec4f45/latest/USD
export default CurrencyDropdown;