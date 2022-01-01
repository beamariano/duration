import "./App.css";

import React, { useState, useEffect } from "react";

function App() {
  const date = new Date();
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    weekday: "short",
    hour12: true,
  };

  const [now, setNow] = useState({
    dateToday: date.toLocaleDateString(undefined, options),
    timeNow: date.toLocaleTimeString(),
  });

  const [log, setLog] = useState([
    // { date: null, in: null, out: null }
  ]);

  // updates time every second
  useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date();
      setNow({
        dateToday: date.toLocaleDateString(),
        timeNow: date.toLocaleTimeString(),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [now]);

  // logs IN time when clicked
  const checkInHandler = () => {
    let currentDate = new Date();
    let temp = log;
    temp.push({
      date: currentDate.toLocaleDateString(),
      in: currentDate.toLocaleTimeString(),
    });
    setLog(temp);
  };

  // logs OUT time when clicked
  const checkOutHandler = () => {
    let currentDate = new Date();
    let temp = log;
    temp.push({
      date: currentDate.toLocaleDateString(),
      out: currentDate.toLocaleTimeString(),
    });
    setLog(temp);
  };

  return (
    <div className="App">
      <header>
        <h1>Time Log App</h1>
      </header>
      <main>
        <section className="summary">
          <p>
            <strong>Today's Date</strong> {now.dateToday}
            <br />
            <strong>Time Now</strong> {now.timeNow}
          </p>
        </section>
        <section className="controls">
          <button onClick={() => checkInHandler()}>Check In</button>
          <button onClick={() => checkOutHandler()}>Check Out</button>
        </section>
        <section className="log">
          <table>
            <thead>
              <tr>
                <td>#</td>
                <td>Date</td>
                <td>In</td>
                <td>Out</td>
                {/* //TODO: <td>Duration</td> */}
              </tr>
            </thead>
            <tbody>
              {log.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>
                      {index + 1} {")  "}
                    </td>
                    <td>{item.date}</td>
                    <td> {item.in}</td>
                    <td> {item.out}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}

export default App;
