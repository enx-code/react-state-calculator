import "./App.css";
import { useState } from "react";

function App() {
  const [leftPanel, setleftPanel] = useState("0");
  const [midPanel, setmidPanel] = useState("+");
  const [rightPanel, setrightPanel] = useState("0");
  const [result, setResult] = useState(0);
  console.log("leftPanel", typeof leftPanel);
  console.log("useState", typeof useState);

  const firstSign = (num) => {
    if (leftPanel[0] === "0") {
      setleftPanel(num);
    } else {
      setleftPanel(leftPanel + num);
    }
  };

  const secondSign = (num) => {
    if (rightPanel[0] === "0") {
      setrightPanel(num);
    } else {
      setrightPanel(rightPanel + num);
    }
  };

  const calculator = () => {
    if (midPanel === "+") {
      setResult(Number(leftPanel) + Number(rightPanel));
    } else if (midPanel === "-") {
      setResult(leftPanel - rightPanel);
    } else if (midPanel === "*") {
      setResult(leftPanel * rightPanel);
    } else if (midPanel === "/") {
      setResult(leftPanel / rightPanel);
    }
  };

  // let num = leftPanel.substring(1)
  // let newNum = Array.from(leftPanel).slice(1)
  // console.log(newNum)
  return (
    <div className="calculator">
      <div className="panel">
        <p>{leftPanel}</p>
        <div className="numbers">
          <button onClick={() => firstSign("1")}>1</button>
          <button onClick={() => firstSign("2")}>2</button>
          <button onClick={() => firstSign("3")}>3</button>
          <button onClick={() => firstSign("4")}>4</button>
          <button onClick={() => firstSign("5")}>5</button>
          <button onClick={() => firstSign("6")}>6</button>
          <button onClick={() => firstSign("7")}>7</button>
          <button onClick={() => firstSign("8")}>8</button>
          <button onClick={() => firstSign("9")}>9</button>
          <button onClick={() => firstSign("0")}>0</button>
          <button onClick={() => setleftPanel("0")}>Clear</button>
        </div>
      </div>

      <div className="panel">
        <p>{midPanel}</p>
        <div className="numbers">
          <button onClick={() => setmidPanel("+")}>+</button>
          <button onClick={() => setmidPanel("-")}>-</button>
          <button onClick={() => setmidPanel("*")}>*</button>
          <button onClick={() => setmidPanel("/")}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{rightPanel}</p>
        <div className="numbers">
          <button onClick={() => secondSign("1")}>1</button>
          <button onClick={() => secondSign("2")}>2</button>
          <button onClick={() => secondSign("3")}>3</button>
          <button onClick={() => secondSign("4")}>4</button>
          <button onClick={() => secondSign("5")}>5</button>
          <button onClick={() => secondSign("6")}>6</button>
          <button onClick={() => secondSign("7")}>7</button>
          <button onClick={() => secondSign("8")}>8</button>
          <button onClick={() => secondSign("9")}>9</button>
          <button onClick={() => secondSign("0")}>0</button>
          <button onClick={() => setrightPanel("0")}>Clear</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{result}</p>
        <div>
          <button onClick={() => calculator()}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
