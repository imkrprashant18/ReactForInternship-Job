import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/Todo/todoSlice";
import Message from "./Message";
function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const [message, setMessage] = useState(null);
  const [blankMessage, setBlankMessage] = useState(null);
  const addTodoHandler = (e) => {
    e.preventDefault();
    if (input.length === 0) {
      // alternative code input.trim()==""
      setBlankMessage("Please Enter A valid Task!!!");
      return;
    } else {
      dispatch(addTodo(input));
      setMessage("Task Added Successfully!!!");
    }
    setInput("");
  };
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
  useEffect(() => {
    let timeout;
    if (blankMessage) {
      timeout = setTimeout(() => {
        setBlankMessage(null);
      }, 1000);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [blankMessage]);
  return (
    <>
      <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
        <input
          type="text"
          className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          placeholder="Enter a Todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          Add Todo
        </button>
      </form>
      {message && (
        <Message
          messageText={message}
          textColor="text-indigo-800"
          markColor="text-indigo-800"
          crossColor="text-indigo-800"
        />
      )}
      {blankMessage && (
        <Message
          messageText={blankMessage}
          textColor="text-sky-600"
          markColor="text-sky-600"
          crossColor="text-sky-600"
        />
      )}
    </>
  );
}

export default AddTodo;
