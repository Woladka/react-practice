import Youtube from "./youtube"
function MyApp(){

  const [counter, setCounter] = useState(0)

  const addValue = () => {
    setCounter(counter + 1)
  }

    return (
    <div>
      <h1>React counter</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick = {addValue}>Add value</button>
    </div>
  )
}
export default App
