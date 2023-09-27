import { createContext, useState } from "react";

export const todoContext=createContext()

export const TodoProvider=({children})=>{

    const URL = "http://localhost:3001/todos"
    const [updateTodos, setUpdateTodos] = useState(false)

    return(
        <todoContext.Provider value={{URL,updateTodos,setUpdateTodos}}>
            {children}
        </todoContext.Provider>
    )
}