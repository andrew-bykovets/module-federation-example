import { useState } from 'react';

export const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const handleAddTodo = () => {
    setTodos([...todos, input]);
    setInput('');
  };

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '2rem'
    },
    input: {
      margin: '1rem 0',
      padding: '0.5rem',
      fontSize: '1rem'
    },
    button: {
      padding: '0.5rem 1rem',
      fontSize: '1rem',
      backgroundColor: '#007BFF',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer'
    },
    todo: {
      margin: '0.5rem 0'
    }
  };

  return (
    <div style={styles.container}>
        <h2>Todo component</h2>
      <input 
        style={styles.input}
        value={input} 
        onChange={e => setInput(e.target.value)} 
      />
      <button style={styles.button} onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} style={styles.todo}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
