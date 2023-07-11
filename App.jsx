import React, {useState} from "react"
import '/Users/lewisaberdein/newshoppinglist/src/styles/app.css'



function App(){

  const time = new Date().toLocaleTimeString();
  const date = new Date().toLocaleDateString();

  const [items, setItems] = useState("");
  const [itemArray, setItemArray] = useState([]);

  function handleChange(event){
    const newValue = event.target.value;

    setItems(newValue);
  }

  function handleSubmit(){
    setItemArray((prevItems)=>{
      return [...prevItems, items];
    })
    setItems("");
    
  }
  
  return(
    <div>
      <header>
        <div className="headers">
          <h1>Shopping List</h1>
          <p>{date}</p>
          <p>{time}</p>
        </div>
        
        <div className="inputs">
          <input onChange={handleChange} type="text" placeholder="Add Item"></input>
          <button onClick={handleSubmit}>Add</button>
        </div>
        
      </header>
      <div className="list-container">
        <ul>
          {itemArray.map(shoppingItem => <li>{shoppingItem}</li>)}
        </ul>
      </div>
    </div>
  )

}

export default App;