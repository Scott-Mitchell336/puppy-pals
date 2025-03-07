import { useState } from 'react';
import './App.css'
import puppyList from './data.js'

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setfeatPupId] = useState(null);

  console.log("App() - puppies = ", puppies);

  function handleClick(){
    // some logic here
  }

  const featuredPup = puppies.find((pup) => pup.id === featPupId);
  console.log("App() - featuredPup = ", featuredPup);

  return (
    <div className="App">
      {
        puppies.map((puppy) =>{
          return <p onClick={() =>{
            setfeatPupId(puppy.id);
          }} key={puppy.id}>{puppy.name}</p>
        })
      }
      { featPupId && (
        <div>
        <h2>{featuredPup.name}</h2>
        <ul>
          <li>Age: {featuredPup.age}</li>
          <li>Email: {featuredPup.email}</li>
        </ul>
        </div>
        )}
    </div>
    
  )
}

export default App
