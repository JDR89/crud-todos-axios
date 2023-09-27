import axios from "axios";
import { useContext, useState } from "react";
import { todoContext } from "../context/TodoContext";

export const NewTodo = () => {
  const { URL, updateTodos, setUpdateTodos } = useContext(todoContext);

  const [todo, setTodo] = useState({
    text: "",
    done: false,
    urgency: "",
  });

  const onChange = ({ target }) => {
    const { name, value } = target;
    
    setTodo({
      ...todo,
      [name]: value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if(todo.text.trim().length < 3)return
    
    const resp = await axios.post(URL, todo);
    
    setUpdateTodos(!updateTodos);
    
  };

  return (
    <form onSubmit={onSubmit} className="mt-3">
      <div className="mb-3">
        <div className="d-flex justify-content-between align-items-center"></div>
        <div className="container">
          <div className="row">
            <div className="col-8">
              <input
                placeholder="Task:"
                type="text"
                className="form-control me-2"
                id="text"
                name="text"
                onChange={onChange}
                required
                maxLength={60}
              />
            </div>
            <div className="col-4">
              <select
                className="form-select"
                id="urgency"
                name="urgency"
                onChange={onChange}
                required
                defaultValue=""
              >
                <option value="" disabled >Select urgency</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <button type="submit" className="btn btn-primary mb-4">
        Add Task
      </button>
    </form>
  );
};
