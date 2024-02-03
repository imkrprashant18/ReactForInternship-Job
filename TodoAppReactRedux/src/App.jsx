import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <h1 className="text-center text-3xl text-red-700">Todo App</h1>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
