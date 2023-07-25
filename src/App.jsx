import { useState } from "react";
import "./App.css"


function App() {
  const [newItem, setNewItem] = useState("")
  const [todos, setTodos] = useState([])

  function handleSubmit(e) {
    e.preventDefault()

    setTodos(currentTodos =>{
      return [
        ...currentTodos,
        {id: crypto.randomUUID(), title: newItem, completed: false}
      ]
    })
    setNewItem("")
  }
  function toggleTodo (id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map (todo => {
        if (todo.id === id) {
          return {...todo, completed}
        }
        return todo
      })
    })
  }
  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter (todo =>todo.id !==id)
    })
  }
  const styleStrikethree = {
    textDecoration: "line-through"
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="item">New Item</label>
          <input value ={newItem} onChange= {e => setNewItem(e.target.value)} type="text" id="item"/>
        </div>
        <button>Add Item</button>
      </form>
      <h1>To Do List</h1>
      <ul>
        {todos.map(todo =>{
          return (
            <li key={todo.id}>
              <label>
                <input type="checkbox" onclick={setTodos} checked={todo.completed}
                onChange={e => toggleTodo(todo.id, e.target.checked)} />
                <p style= {todo.completed?styleStrikethree:{}}>{todo.title}</p>
              </label>
              <button onClick={() =>deleteTodo(todo.id)}>Delete</button>
            </li>
          )
        })}
      </ul>
    </>
  );
}

export default App;
