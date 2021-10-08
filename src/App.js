import './App.css';
import { useState } from 'react';
import TodoList from './TodoList';

function App() {

  const [inputList, setInputList] = useState('');
  const [items, setItems] = useState([]);
  const itemEvent = (e) => {
      setInputList(e.target.value);
  };
  const listOfItems = () =>{
    setItems((prevItems)=>{
      return [...prevItems, inputList]; 
    });
    setInputList('');
  }
  const deleteItems = (id)=>{
    console.log('deleted');
    setItems((prevItems)=>{
      return prevItems.filter((arrEle, idx)=>{
        return idx!==id;
      });
    });
  }
  return(
    <>
    <div className="main_div">
      <div className="center_div">
        <br />
        <h1>ToDo List</h1>
        <br />
        <input type="text" value={inputList} placeholder='Enter the item:' onChange={itemEvent} />
        <button className='add' onClick={listOfItems}>+</button>

        <ol>
          {
            items.map((item, idx)=>{
              return <TodoList 
              text={item} 
              id={idx} 
              key={idx} 
              onSelect={deleteItems}
              />
            })
          }
        </ol>
      </div>
    </div>
    </>
  );
}

export default App;
