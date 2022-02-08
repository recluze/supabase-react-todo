import  Todo  from './Todo'

const Todos = ( { todos }) => {
    return (
        <div> 
        {todos.map((todo, index) => (
            <Todo key={index} todo={todo} /> 
        ))}
        </div> 
    )
}

export default Todos 