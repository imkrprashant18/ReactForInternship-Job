import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, updateTodo } from "../features/Todo/todoSlice";
import Message from "./Message";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [message, setMessage] = useState(null);
  const [updateMesaage, setUpdateMessage] = useState(null);
  const [notUpdateMessage, setNotUpdateMessage] = useState(null);
  const [editText, setEditText] = useState("");
  const [editTodoId, setEditTodoId] = useState(null);
  useEffect(() => {
    let timeout;
    if (message) {
      timeout = setTimeout(() => {
        setMessage(null);
      }, 1000);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [message]);

  const startEditing = (todo) => {
    setEditTodoId(todo.id);
    setEditText(todo.text);
  };

  const cancelEditing = () => {
    setEditTodoId(null);
    setEditText("");
    setNotUpdateMessage("Update has Been Canceled!!");
  };

  const saveEdit = () => {
    dispatch(updateTodo({ id: editTodoId, newText: editText }));
    cancelEditing();
    setUpdateMessage("Todo Has been Updated Successfully!");
    setNotUpdateMessage("");
  };
  useEffect(() => {
    let timeout;
    if (updateMesaage) {
      timeout = setTimeout(() => {
        setUpdateMessage(null);
      }, 1000);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [updateMesaage]);
  useEffect(() => {
    let timeout;
    if (notUpdateMessage) {
      timeout = setTimeout(() => {
        setNotUpdateMessage(null);
      }, 1000);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [notUpdateMessage]);
  return (
    <>
      {message && (
        <Message
          messageText={message}
          textColor="text-red-600"
          markColor="text-red-600"
          crossColor="text-red-600"
        />
      )}
      {notUpdateMessage && (
        <Message
          messageText={notUpdateMessage}
          textColor="text-blue-800"
          markColor="text-blue-600"
          crossColor="text-blue-600"
        />
      )}
      {updateMesaage && (
        <Message
          messageText={updateMesaage}
          textColor="text-pink-800"
          markColor="text-pink-800"
          crossColor="text-pink-800"
        />
      )}
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex  justify-between items-center bg-zinc-800 text-red-600 px-4 py-2 rounded"
            key={todo.id}
          >
            {editTodoId === todo.id ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                <button
                  className="text-white bg-pink-800 border-0 py-2 px-6 focus:outline-none hover:bg-pink-700 rounded text-lg"
                  onClick={saveEdit}
                >
                  Save
                </button>
                <button
                  className="text-white bg-blue-800 border-0 py-2 px-6 focus:outline-none hover:bg-blue-700 rounded text-lg"
                  onClick={cancelEditing}
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                {todo.text}
                <button
                  className="text-white bg-green-800 border-0 py-2 px-6 focus:outline-none hover:bg-green-700 rounded text-lg"
                  onClick={() => {
                    startEditing(todo);
                  }}
                >
                  Edit
                </button>

                <button
                  className="text-white bg-red-800 border-0 py-2 px-6 focus:outline-none hover:bg-red-700 rounded text-lg"
                  onClick={() => {
                    dispatch(removeTodo(todo.id));
                    setMessage("Todo Has been Deleted Successfully!");
                  }}
                >
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
