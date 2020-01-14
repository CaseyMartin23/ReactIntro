import React, { useState } from "react";
import { Header } from "./comp/header";
import { Details } from "./comp/details";
import { Footer } from "./comp/footer";
import "./App.css";
import "./myCss.css";
import "bootstrap/dist/css/bootstrap.css";

const App: React.FC = () => {
  let [currentDate, setCurrentDate] = useState("Date Time Label");
  let [name, setName] = useState("You ...");

  let today = new Date();
  let date = `${today.getFullYear()}-${today.getMonth() +
    1}-${today.getDate()}`;
  let time = `${today.getHours()}:${today.getMinutes()}`;
  let dateAndTime = `${date} ${time}`;

  const onClicker = () => {
    setCurrentDate((currentDate = dateAndTime));
  };

  const onChanger = (e: any): void => {
    setName((name = e.target.value));
  };

  return (
    <div className="App">
      <div className="FigOne">Fig.1</div>
      <div className="App-Border">
        <Header currentDate={currentDate} name={name} />
        <Details onClicker={onClicker} onChanger={onChanger} />
        <Footer />
      </div>
    </div>
  );
};

export default App;
