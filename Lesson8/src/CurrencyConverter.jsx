import { useEffect, useState } from "react";

function CurrencyConverter(props){
    
    const [output, setOutput] = useState(0);
    const [amount, setAmount] = useState("");

    function handleChange(event) {
        setAmount(event.target.value);
    } 

    
    useEffect(() => {
        fetch('https://v6.exchangerate-api.com/v6/2f50b1133f6e9b0421ec4f45/pair/' + props.currencyFrom + '/' + props.currencyTo +'/' + amount)
        .then(response => response.json())
        .then(data => setOutput(data.conversion_result));
    }, [amount, props.currencyFrom, props.currencyTo]);

    return(
        <>
           <div className="container">
                <input 
                className="converter-input" 
                placeholder="Enter Amount" 
                onChange={handleChange}
                />

                <p>{props.currencyFrom}</p>
                <p>=</p>
                <p className="converter-result">{output}</p>
                <p>{props.currencyTo}</p>

            </div> 
        </>
    )
}

export default CurrencyConverter;