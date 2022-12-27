import {useState} from 'react'
import Statistics from './Statistics'
import StatisticLine from './StatisticLine'
import Button from './Button'
function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  return (
    <div>
      <h1>give feedback</h1>
      <div>
      <Button text="good" action ={()=>setGood(good+1)} />
      <Button text="neutral" action ={()=>setNeutral(neutral+1)} />
      <Button text="bad" action ={()=>setBad(bad+1)} />
      </div>
<h1>statistics</h1>
      {(good||neutral||bad)?
      <>
      <StatisticLine text="good" value ={good} />
      <StatisticLine text="neutral" value ={neutral} />
      <StatisticLine text="bad" value ={bad} />
<Statistics good={good} neutral={neutral} bad={bad} />
</>:<p>No feedback given</p>}
    </div>
  );
}

export default App;
