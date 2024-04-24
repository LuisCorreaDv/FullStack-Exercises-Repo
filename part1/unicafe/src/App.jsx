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

const StatisticLine = (props) => {
  return <p>{props.text} {props.value}</p>
}

const Statistics = (props) => {
  const {good, neutral, bad, total, average, positive} = props;
  if(total === 0) {
    return <p>No feedback given</p>
  } else {
    return <>
    <div>
      <h1>Statistics</h1>
      <StatisticLine text={"Good"} value={good} />
      <StatisticLine text={"neuBad"} value={neutral} />
      <StatisticLine text={"Bad"} value={bad} />
      <StatisticLine text={"All"} value={total} />
      <StatisticLine text={"Average"} value={average} />
      <StatisticLine text={"Positive"} value={positive} />
    </div>
  </>
  }
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);

  const updateBad = () => {
    const updatedBad = bad + 1;
    setBad(updatedBad);
    setTotal(updatedBad + neutral + good);
  }

  const updateNeutral = () => {
    const updatedNeutral = neutral + 1;
    setNeutral(updatedNeutral);
    setTotal(bad + updatedNeutral + good);
  }

  const updateGood = () => {
    const updatedGood = good + 1;
    setGood(updatedGood);
    setTotal(bad + neutral + updatedGood);
  }

  const positive = (100 * good) / total;
  const average = (good - bad) / total; 

  return (
    <div>
      <Title text={"Give Feedback"}/>
      <Button text={"Bad"} handleClick={updateBad}/>
      <Button text={"Neutral"} handleClick={updateNeutral}/>
      <Button text={"Good"} handleClick={updateGood}/>
      <Statistics good={good} neutral={neutral} bad={bad} total={total} average={average} positive={positive}/>
    </div>
  )
}

export default App