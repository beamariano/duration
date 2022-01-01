import './App.css';

import React, {useState, useEffect} from 'react'

function App() {

  const date = new Date();

  const options = { year: 'numeric', month: 'short', day: 'numeric', weekday: 'short', hour12: true };
  
  const [now, setNow] = useState({
    dateToday: date.toLocaleDateString(undefined, options),
    timeNow: date.toLocaleTimeString(),
  });

  const [log, setLog] = useState([
    { date: "" }
  ]
  );

  // console.log(log.date)

  // // updates time every second
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     const date = new Date();
  //     setNow({
  //       dateToday: date.toLocaleDateString(undefined, options),
  //       timeNow: date.toLocaleTimeString()

  //     });
  //   }, 1000);
  //   return () => clearInterval(timer);
  // }, [now]);

// logs in time check IN when clicked
  const checkInHandler = () => {
    let entry = new Date();
    setLog(entry);
    console.log(log)
  
    console.log("IN - ", new Date());
  }

  // logs in time check OUT when clicked
  const checkOutHandler = () => {  console.log("OUT - ",new Date());
  }

  return (
    <div className="App">
      <header>
<h1>Time Keeper App</h1>
      </header>
      <main>      
        <section className="summary">
          <h2>Date</h2>         
         {now.dateToday}
          <h2>Time</h2>
         {now.timeNow}         
        </section> 
         <section className='controls'>
        <button onClick={()=> checkInHandler()}>Check In</button>
          <button onClick={()=> checkOutHandler()}>Check Out</button>
        </section>
        <section className="log">
          <table>
            <thead>
              <tr>
             
                <td>Date</td>
                <td>In</td>
                <td>Out</td>
                <td>Duration</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Hello!</td>
             
             
              {log.map((item) => {
                <td>{item.log}</td>
              })}
 </tr>
            </tbody>
                      </table>
        </section>
        
        </main>
    </div>
  );
}

export default App;
