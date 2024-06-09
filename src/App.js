import React from 'react';
import { useState, useEffect } from 'react';
import Header from './Components/Header';
import Todos from './Components/Todos';
import AddToDo from './Components/AddToDo';
import Footer from './Components/Footer';
import './App.css';

function App() {

  // Initaialization for todos to store each todo item: 

  let initTodo;

  // If there is no item in todos then it create an object for todos:
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }

  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  
  // Add todo item from form: 
  const addTodo = (title, desc, date, eDate, status) => {
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const MyTodo = {
      sno: sno,
      title: title,
      desc: desc,
      date: date,
      eDate: eDate,
      status: status
    }
    setToDos([...todos, MyTodo]);
    console.log(MyTodo);
  }

  // Create todos for store each todo item

  const [todos, setToDos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));

  }, [todos])

  // Search in todo:

  const [SearchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  }

  const filteredTodos = todos.filter((todo) => {
    return todo.title.toLowerCase().includes(SearchTerm.toLowerCase()) || todo.desc.toLowerCase().includes(SearchTerm.toLowerCase()) || todo.status.toLowerCase().includes(SearchTerm.toLowerCase());
  })

  // Edit each to do item

  const [editingTodo, setEditingTodo] = useState(null);

  const onEdit = (todo) => {
    setEditingTodo(todo);
  }

  // Save edited todo item

  const onSave = (todo) => {
    const updatedTodos = todos.map((t) => {
      if (t.sno === todo.sno) {
        return todo;
      }
      return t;
    });
    setToDos(updatedTodos);
    setEditingTodo(null);
  }

  // Delete each todo item

  const onDelete = (todo) => {
    console.log("Delete", todo);
    setToDos(todos.filter((e) => {
      return e !== todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  return (
    <>
      <Header title="My To Do List" />
      <div className="container-fluid">
        <div className="row mt-4 mb-4">
          <div className="col-md-5 d-flex justify-content-center border border-top-0 border-bottom-0 boder-start-0 border-5">
            <AddToDo addTodo={addTodo} />
          </div>
          <div className="col">
            <Todos todos={filteredTodos} onDelete={onDelete} searchVal={SearchTerm} onSearchChange={handleSearch} onEdit={onEdit} onSave={onSave} editingTodo={editingTodo} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
