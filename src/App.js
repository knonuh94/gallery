import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const titleText = "Roll For Whatever";

  const [diceType, setDiceType] = useState("0");
  const [numDice, setNumDice] = useState(1);
  const [diceTotal, setDiceTotal] = useState(0);
  const diceTypes = [4, 6, 8, 12, 20, 50, 100];

  const rollD = (dice) => Math.floor(Math.random() * dice + 1);

  //uses rollD function to roll multiple dice and return a total
  function rollMultiple() {
    // todo implement numDice
    const count = 1;
    for (let counter = count; counter !== 0; counter--) {
      setDiceTotal(diceTotal + rollD(diceType));
    }
  }

  return (
    <div>
      <h1 className="header">{titleText}</h1>
      <div className="dice-form">
        <form name="dice-roller-input" className="dice-roller-input">
          <h3 className="dropdown-label type label">Select Dice Type</h3>
          {/* diceType: {diceType} */}
          <select
            name="dice-dropdown"
            className="dice-dropdown"
            onChange={(e) => {
              console.log(e.target.value);
              setDiceType(e.target.value);
            }}
            value={diceType}
          >
            {diceTypes.map((diceOption) => (
              <option name={diceOption} value={diceOption}>
                d{diceOption}
              </option>
            ))}
          </select>
          <h3 className="dropdown-label number label">Enter Number of Dice</h3>
          <input
            type="number"
            min="1"
            value={numDice}
            onChange={setNumDice}
            id="count"
            className="enter-number"
          />
          <button type="button" onClick={rollMultiple} className="roll-button">
            <p>Roll It</p>
          </button>
          <h3 name="roll-total" className="roll-total">
            You Rolled a Total of
            <span id="roll-total"> {diceTotal}</span>
          </h3>
        </form>
      </div>
    </div>
  );
}

export default App;
