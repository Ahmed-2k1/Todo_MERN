// This component will put all the todos to the DOM
export const Todos = ({todos}) => {

    return <div>
        {todos.map((todo) => {
            return <div>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button>{todo.completed == true ? "completed" : "Mark as done"}</button>
            </div>
        })}
    </div>
}