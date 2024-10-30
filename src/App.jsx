import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [countryCode, setCountryCode] = useState("")
  const [data, setData] = useState([])

  useEffect(()=>{
    fetch(`https://disease.sh/v3/covid-19/countries/${countryCode}`)
    .then(res => res.json())
    .then(data => setData(data))
  },[countryCode])
  const handleInput = (e)=>{
    setCountryCode(e.target.value)
  }
  return (
    <div className="App">
      <div className="info">
      <h1>Covid-19 deaths</h1>
      <input 
         type="text"
         placeholder='Enter country'
         value={countryCode}
         onChange={handleInput}
      />
      <p>Covid-19 death {data.country}  in : {data.deaths}</p>
      </div>
    </div>
  );
}

export default App;
