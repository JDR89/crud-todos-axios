import { ListTodos } from "./components/ListTodos";
import { NewTodo } from "./components/NewTodo";

function App() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body">
              <h1 className="text-center">Todo CRUD with Axios</h1>
              <div className="text-center">
                <NewTodo />
                <ListTodos />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
