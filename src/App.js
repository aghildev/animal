import { useState } from "react"
import Animal from "./components/Animal"
import "./app.css"

function App() {
  const [animals, setAnimals] = useState([])
  const addAnimals = () => {
    let animals = ["bird", "cat", "dog", "gator", "horse", "cow"]
    return animals[Math.floor(Math.random() * animals.length)]
  }
  const handleClick = () => {
    setAnimals([...animals, addAnimals()])
  }
  //console.log(animals)
  const renderedAnimals =
    animals.map((animal, idx) => {
      return <Animal type={animal} idx={idx} />
    })

  return (
    <div className="App">
      <h1>Animals App</h1>
      <h5>Click On Animal to Increase Love</h5>
      <button className="button-85" onClick={handleClick}>Add Animal</button>
      <div className="rendering-container">{renderedAnimals}</div>
    </div>
  );
}

export default App;
