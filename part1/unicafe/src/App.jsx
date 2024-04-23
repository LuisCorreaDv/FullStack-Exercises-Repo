import { useState } from "react";

const Title = (props) => (
  <h1>{props.text}</h1>
)

const Button = (props) =>{
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const Stats = (props) => {
  return <>
  <div>
    <h1>Statistics</h1>
    <p>Good {props.good}</p>
    <p>Neutral {props.neutral}</p>
    <p>Bad {props.bad}</p>
  </div>
  </>
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const updateBad = () => {
    setBad(bad+1);
  }

  const updateNeutral = () => {
    setNeutral(neutral+1);
  }

  const updateGood = () => {
    setGood(good+1);
  }

  return (
    <div>
      <Title text={"Give Feedback"}/>
      <Button text={"Bad"} handleClick={updateBad}/>
      <Button text={"Neutral"} handleClick={updateNeutral}/>
      <Button text={"Good"} handleClick={updateGood}/>
      <Stats good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App