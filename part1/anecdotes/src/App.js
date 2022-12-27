import { useState,useEffect } from 'react'

const App = () => {
  function generateRandomInteger(max) {
    return Math.floor(Math.random() * max) + 1;
}


  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
  let value4 = generateRandomInteger(anecdotes.length-1);
  let ary = new Uint8Array(anecdotes.length); 
   
  const [selected, setSelected] = useState(value4)
  const [vote, setVote]=useState(ary)
  const [max,setMax]=useState(0)
  const handleNext=()=>{
    if(selected>=anecdotes.length-1){
      setSelected(0)
    }else{
      setSelected(selected+1)
    }
  }
const handleVote=()=>{
  let newAry=[...vote]
  newAry[selected]++;
  setVote(newAry)

}

useEffect(()=>{
  let i = vote.indexOf(Math.max(...vote));
  setMax(i)
},[vote])
  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <p>has {vote[selected]} votes</p>
      <div>
        <input type="button" value="vote" onClick={handleVote} />
        <input type="button" value="next anecdote" onClick={handleNext} />
      </div>
      <h1>Anecdote with most votes</h1>
      {anecdotes[max]}
      <p>has {vote[max]} votes</p>
    </div>
  )
}

export default App
