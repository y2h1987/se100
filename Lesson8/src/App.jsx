import './App.css'
import CurrencyDropdown from './CurrencyDropdown';  
import { useState } from "react";

function App() {

  const [currencyFrom, setCurrencyFrom] = useState("USD");
  const [currencyTo, setCurrencyTo] = useState("SGD");

  return (
    <>
      <CurrencyContext.Provider value={{ currencyFrom, setCurrencyFrom, currencyTo, setCurrencyTo }}>
        <h1>Currency Converter</h1>
        <CurrencyDropdown />
      </CurrencyContext.Provider>
    </>
  )
}

export default App;
