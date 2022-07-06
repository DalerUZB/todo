import { useRef, useState } from 'react';
import { v4 } from 'uuid';
import './App.css';


function App() {
  const [todos, setTodos] = useState([])
  const [search, setSearch] = useState([])
  const inputRef = useRef(0)
  const id = v4();

  const saveTodoFunc = () => {
    const newTodo = {
      id: id,
      title: inputRef.current.value
    }
    setTodos([...todos, newTodo])
    inputRef.current.value = ""

  }

  const listinerEnter = (event) => {
    if (event.key === "Enter") {
      saveTodoFunc()
    }
  }

  const serachFunc = (target) => {
    setSearch(todos.filter((elem) => elem.title.includes(target.value)))
  }

  const removeItems = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))

  }

  return (
    <div className="App">
      <div className='forFlex'>
        <input
          placeholder='To Write'
          onKeyUp={(event) => listinerEnter(event)}
          ref={inputRef}
          className="input"
        />

        <button
          onClick={() => saveTodoFunc()}
          className="btn"
        >saqlash</button>

      </div>



      <ul>
        {todos.map((item) =>
          <li

            className='li'
            key={item.id}
            onClick={() => removeItems(item.id)}
          >
            {item.title}
          </li>)}
      </ul>


      <div>
        <input
          onKeyUp={

            ({ target }) => serachFunc(target)}
          placeholder='Search'
          className="input"

        />
        <ul>
          {search.map((item) =>
            <li
              className='li'
              key={item.id}>
              {item.title}
            </li>)}
        </ul>
      </div>
    </div >
  );
}

export default App;
