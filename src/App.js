import React, { useState } from "react";
import "./App.css";
import Image from './components/image'

let todaysDate = new Date().toISOString().slice(0, 10) // today's date in format YYYY-MM-DD (same as nasa data)


function App() {

  const [date, setDate] = useState(todaysDate); //set current date to today's date

  return (
    <div className="App">
      <h1>Nasa Image of the Day</h1>
      <Image date={date} />
    </div>
  );
}

export default App;
