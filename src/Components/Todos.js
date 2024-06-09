import React from 'react';
import TodoItem from './TodoItem';
import '../App.css';

export default function Todos(props) {
    return (
        <>
            <h1 className="mb-5 text-center mt-4">Task List</h1>
            <div className="justify-center items-start px-4 py-2 bg-white border border-primary shadow rounded-pill mb-5 ms-3 me-3">
                <div className="row">
                    <i className="col-sm-1 bi bi-search fs-3"></i>
                    <input type="search" value={props.searchVal} onChange={props.onSearchChange} placeholder="Search Task" className="col form-control rounded-pill border-0 search-task fs-4" />
                </div>
            </div>
            {props.todos.length === 0 ? <><div className="container d-flex justify-content-center align-items-center h-50">
                <h1 className="text-secondary">There is no task to display!!</h1>
            </div></> :

                props.todos.map((todo) => {
                    return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} onEdit={props.onEdit} onSave={props.onSave} editingTodo={props.editingTodo} />
                })

            }
        </>
    )
}
