import { useEffect, useState } from 'react'

import Header from './components/Header'
import Todos from './components/Todos'

import { supabase } from './supabaseClient'

function App() {

  useEffect(() => {
    // signup()
  }, [])


  const [todos, setTodos] = useState([
    {
      id: 1, 
      text: 'Show todo'
    }, 
    {
      id: 2, 
      text: 'Delete todo'
    }
  ])

  const signup = async () => {
    // just a dummy signup function 
    let { user, error } = await supabase.auth.signUp({
      email: 'recluze+sp1@gmail.com',
      password: 'unpainted-usable-mangle'
    })
    console.log(user)
   }

  const deleteFromSupabase = async (id) => { 
    const { data, error } = await supabase
      .from('todos')
      .delete()
      .eq('id', id)
    console.log(data)
  }

  const deleteTodo = (id) => { 
    console.log("Deleting: ", id)
    // setTodos(todos.filter((todos) => todos.id != id))


    // create a table in supabase for todos 
    // install supabase dependency 
    // set up the .env file.
    // create the supabaseClient helper 
    // issue the supabase delete API call 
    deleteFromSupabase(id)
  }

  return (
    <div className="container">
      <Header /> 
      <Todos todos={ todos } onDelete={deleteTodo} /> 
    </div>
  );
}

export default App;
