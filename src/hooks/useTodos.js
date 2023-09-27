import axios from "axios"
import { useContext, useState } from "react"
import { useEffect } from "react"
import { todoContext } from "../context/TodoContext"


export const useTodos=()=>{
    const{URL,updateTodos,setUpdateTodos}=useContext(todoContext)
    
    const [todos, setTodos] = useState([])

    

    const getAxios=async()=>{

      try {

        const resp = await axios.get(URL)
        return resp
        
      } catch (error) {
        throw error
      }

    }
  
    const getData=async()=>{
      const {data} = await getAxios()
      setTodos(data)
    }
    
    useEffect(() => {
      getData()
    }, [updateTodos])

    const [editTodo, setEditTodo] = useState({});
  

    const onDelete = async (id) => {
      try {
        const resp = await axios.delete(`${URL}/${id}`);
        setUpdateTodos(!updateTodos);
      } catch (error) {
        throw error;
      }
    };
  
    const onEdit = (todo) => {
      
      setEditTodo(todo);
      
    };
  
    const onChange = ({ target }) => {
      const { name, value } = target;
  
      const newTodo = {
        ...editTodo,
        [name]: value,
      };
  
      setEditTodo(newTodo);
    };
  
    const onSubmit = async (e) => {
      e.preventDefault();
  
      const resp = await axios.put(`${URL}/${editTodo.id}`, editTodo);
      setUpdateTodos(!updateTodos)
      
    };

    return{
        todos,
        URL,
        onChange,
        onSubmit,
        onEdit,
        onDelete,
        
    }
}