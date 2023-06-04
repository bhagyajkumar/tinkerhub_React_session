import logo from './logo.svg';
import './App.css';
import SampleComponent from './sampleComponent';
import { useEffect, useState } from 'react';


function TodoItem(props) {
  return (
    <div>
      <h1>{props.userId} {props.title}</h1>
    </div>
  )
}

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(
        (resp) => {
          resp.json()
            .then((data) => {
              setTodos(data)
              console.log(data);
            })
        }
      )
  }, [])
  return (
    <div>
      {
        todos.map(((val) => {
          return (
            <TodoItem userId = {val.userId} title={val.title}/>
          )
        }))
      }
    </div>
  )
}


export default App;



