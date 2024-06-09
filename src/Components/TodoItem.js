import React, { useState } from 'react';
import '../App.css';

export default function TodoItem({ todo, onDelete, onEdit, onSave, editingTodo }) {
  const [title, setTitle] = useState(todo.title);
  const [desc, setDesc] = useState(todo.desc);
  const [date, setDate] = useState(todo.date);
  const [eDate, seteDate] = useState(todo.eDate);
  const [status, setStatus] = useState(todo.status);
  const handleEdit = () => {
    onEdit(todo);
  }
  const handleSave = () => {
    onSave({ ...todo, title, desc, date, eDate, status });
  }
  return (
    <>
      {editingTodo && editingTodo.sno === todo.sno ? (
        <div className="card mb-5 rounded-5 ms-3 me-3 border-info shadow-lg mt-5">
          <div className="card-header fs-2 ps-4"><input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control fs-2 rounded-pill shadow border-2" /></div>
          <div className="card-body">
            <div className="row ms-2">
              <p className="card-text ps-2 fs-4 col-sm-2 mt-3">Description: </p> <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} className="col form-control rounded-pill shadow border-2 fs-4" />
            </div>
            <div className="row ms-2 ps-2 fs-5 border rounded-pill w-50 bg-primary-subtle border-primary text-center mt-4">
              <p className="card-text col-md-4 mt-3">Start Date:</p> <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="form-control rounded-pill shadow border-2 w-50 col m-1" />
            </div>
            <div className="row ps-2 ms-2 fs-5 border rounded-pill w-50 bg-danger-subtle border-danger text-center mt-4">
              <p className="card-text col-md-4 mt-3">End Date:</p> <input type="date" value={eDate} onChange={(e) => seteDate(e.target.value)} className="form-control rounded-pill shadow border-2 w-50 col m-1" />
            </div>
            <div className="row ps-2 ms-2 fs-5 border rounded-pill w-50 bg-warning-subtle border-warning text-center mt-4">
              <p className="card-text col-md-4 mt-3">Status:</p> <select value={status} onChange={(e) => { setStatus(e.target.value) }} className="form-select rounded-pill shadow border-2 w-50 col m-1">
                <option selected>Not Started</option>
                <option value="Temporary Paused">Temporary Paused</option>
                <option value="Working">Working</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
            <button onClick={handleSave} className="btn btn-primary rounded-pill p-2 ps-3 pe-3 mt-4 ms-3"><i class="bi bi-floppy me-2"></i>Save</button>
          </div>
        </div>
      ) : (
        <div className="card mb-5 rounded-5 ms-3 me-3 border-info shadow-lg mt-5">
          <div className="card-header fs-2 ps-4">{todo.title}</div>
          <div className="card-body">
            <p className="card-text ps-2 fs-4">Description: {todo.desc}</p>
            <p className="card-text ps-4 fs-5 border rounded-pill w-50 p-2 bg-primary-subtle border-primary text-start">Start Date: {todo.date}</p>
            <p className="card-text ps-4 fs-5 border rounded-pill w-50 p-2 bg-danger-subtle border-danger text-start">End Date: {todo.eDate}</p>
            <p className="card-text ps-4 fs-5 card-text ps-2 fs-5 border rounded-pill w-50 p-2 bg-warning-subtle border-warning text-start mb-4">Status: {todo.status}</p>
            <button className="btn btn-primary me-3 ms-2 rounded-pill p-2 ps-3 pe-3 shadow-lg" onClick={handleEdit}><i class="bi bi-pencil-fill me-2"></i>Edit</button>
            <button className="btn btn-danger rounded-pill p-2 ps-3 pe-3 shadow-lg" onClick={() => onDelete(todo)}><i class="bi bi-trash3 me-2"></i>Delete</button>
          </div>
        </div>
      )
      }
    </>
  )
}
