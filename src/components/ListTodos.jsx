import { useState } from "react";
import { useTodos } from "../hooks/useTodos";
import { Modal } from "./Modal";
import { MdEditDocument, MdDeleteOutline} from "react-icons/md";

export const ListTodos = () => {
  const [sortBy, setSortBy] = useState("");
  const [filterByUrgency, setFilterByUrgency] = useState("all");
  const [searchTerm, setSearchTerm] = useState('');

  const { todos, onChange, onSubmit, onEdit, onDelete } = useTodos();

  const onSort = ({ target }) => {
    setSortBy(target.value);
  };

  const onFilter=({target})=>{
    setFilterByUrgency(target.value)
  }

  const onSearchChange = ({target}) => {
    setSearchTerm(target.value);
  };

 

  const filteredTodos = todos
  .filter((todo) => {
    
    if (filterByUrgency !== "all") {
      return todo.urgency === filterByUrgency;
    }
    return true;
  })
  .filter((todo) =>
    todo.text.toLowerCase().includes(searchTerm.toLowerCase())
  )
  .sort((a, b) => {
    if (sortBy === "original") {
      return a.id - b.id;
    } else if (sortBy === "urgency") {
      const urgencyOrder = { high: 3, medium: 2, low: 1 };
      return urgencyOrder[b.urgency] - urgencyOrder[a.urgency];
    } else {
      return a.id - b.id;
    }
  });



  function getBadgeColor(urgency) {
    switch (urgency) {
      case "high":
        return "danger";
      case "medium":
        return "warning";
      case "low":
        return "success";
      default:
        return "primary";
    }
  }

  return (
    <>
      <Modal onChange={onChange} onSubmit={onSubmit} />

      <div id="filtros" className="mb-2">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <select className="form-select" onChange={onSort} value={sortBy}>
                <option value="" disabled>
                  Order by...
                </option>
                <option value="original">Original</option>
                <option value="urgency">Urgency</option>
              </select>
            </div>

            <div className="col-4">
              <select
                className="form-select"
                onChange={onFilter}
                value={filterByUrgency}
              >
                <option value="all">All</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>

            <div className="col-4">
            
                <input
                className="form-control"
                type="text"
                placeholder="Buscar"
                value={searchTerm}
                onChange={onSearchChange}
                />
               
            </div>

          </div>
        </div>
      </div>

      <ul className="list-group">
        {filteredTodos.map((todo) => (
          <li
            key={todo.id}
            className="list-group-item d-flex justify-content-between align-items-center "
          >
            <div className="text-break">{todo.text}</div>
            <div className="d-flex align-items-center">
              <span
                className={`badge bg-${getBadgeColor(
                  todo.urgency
                )} me-3 badge-circle`}
              >
                {todo.urgency.charAt(0).toUpperCase()}
              </span>
              <button
                type="button"
                className="btn btn-primary me-2"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={() => onEdit(todo)}
              >
                <MdEditDocument />
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => onDelete(todo.id)}
              >
                <MdDeleteOutline />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
