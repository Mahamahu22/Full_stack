import React, { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addTodo = () => {
    if (todo.trim() === "") return;
    setTodoList([...todoList, todo]);
    setTodo("");
  };

  return (
    <div style={styles.container}>
      <h1>My Todo List</h1>
      <input
        type="text"
        value={todo}
        placeholder="Enter a todo"
        onChange={(e) => setTodo(e.target.value)}
        style={styles.input}
      />
      <button onClick={addTodo} style={styles.button}>Add Todo</button>

      <h2>Your Todos:</h2>
      <ul>
        {
          (() => {
            const items = [];
            for (let i = 0; i < todoList.length; i++) {
              items.push(<li key={i}>{todoList[i]}</li>);
            }
            return items;
          })()
        }
      </ul>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "40px",
    fontFamily: "Arial",
  },
  input: {
    padding: "10px",
    width: "60%",
    fontSize: "16px",
    marginRight: "10px"
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    backgroundColor: "#2196F3",
    color: "white",
    border: "none",
    borderRadius: "5px"
  }
};

export default App;
