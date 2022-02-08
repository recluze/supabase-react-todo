import { useState } from 'react'

import Header from './components/Header'
import Todos from './components/Todos'

function App() {

  const [todos, setTodos] = useState([
    {
      id: 1, 
      text: 'Show todo'
    }, 
    {
      id: 2, 
      text: 'Delete todo'
    }
  ], null)

  return (
    <div className="container">
      <Header /> 
      <Todos todos={ todos } /> 
    </div>
  );
}

export default App;
