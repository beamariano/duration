import "./App.css";

import React, { useState, useEffect } from "react";

function App() {
  const date = new Date();

  const dateOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
    weekday: "short",
    hour12: true,
  };

  const timeOptions = {
    hour: "2-digit",
    minute: "2-digit",
  };

  const [now, setNow] = useState({
    dateToday: date.toLocaleDateString([], dateOptions),
    timeNow: date.toLocaleTimeString(),
  });

  const [log, setLog] = useState([]);

  // updates time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setNow({
        dateToday: date.toLocaleDateString(),
        timeNow: date.toLocaleTimeString(),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [now]);

  // logs IN time when clicked
  const logInHandler = () => {
    let temp = log;
    temp.push({
      date: date.toLocaleDateString(),
      in: date.toLocaleTimeString([], timeOptions),
    });
    setLog(temp);
  };

  // logs OUT time when clicked
  const logOutHandler = () => {
    let temp = log;
    temp.push({
      date: date.toLocaleDateString(),
      out: date.toLocaleTimeString([], timeOptions),
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
          <button onClick={() => logInHandler()}>Log In</button>
          <button onClick={() => logOutHandler()}>Log Out</button>
        </section>
        <br />
        <section className="log-table">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Date</th>
                <th>In</th>
                <th>Out</th>
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
