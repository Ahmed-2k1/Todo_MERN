import { useState } from "react"

export const CreateTodo = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return <div>
        <input type="text" placeholder="Enter title" onChange={(e) => {
            const value = e.target.value
            setTitle(e.target.value)
        }}/> <br /><br />
        <input type="text" placeholder="Enter description" onChange={(e) => {
            const value = e.target.value
            setDescription(e.target.value)
        }}/> <br /><br />
        <button 
            onClick={() => {
                fetch("http://localhost:3000/todo", {
                    method: "POST",
                    body: JSON.stringify({
                        title: title,
                        description: description
                    }),
                    headers: {
                        "content-type": "application/json"
                    }
                })
                 .then(async (res) => {
                    const json = await res.json();
                    addListener("todos added")
                 })
            }}
        >Add a Todo</button>
    </div>
}