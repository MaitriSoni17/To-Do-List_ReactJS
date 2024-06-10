import React, { useState } from "react";
import '../App.css';
export default function AddToDo(props) {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [date, setDate] = useState("");
    const [eDate, seteDate] = useState("");
    const [status, setStatus] = useState("");
    const submit = (e) => {
        e.preventDefault(); // Page will not refresh
        if (!title || !desc || !date || !eDate || !status) {
            alert("Please fill all the fields!!");
        }
        else {
            props.addTodo(title, desc, date, eDate, status);
            setTitle("");
            setDesc("");
            setDate("");
            seteDate("");
            setStatus("");
        }
    }
    return (
        <>
            <form className="mb-5 mt-4 w-75" onSubmit={submit}>
                <h1 className="mb-4 text-center">Add Task</h1>
                <div className="mb-4">
                    <label htmlFor="title" className="form-label ms-3 fs-4">Task Title</label>
                    <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} className="form-control rounded-pill shadow p-2 ps-4 fs-5" id="title" placeholder="Title" />
                </div>
                <div className="mb-4">
                    <label htmlFor="desc" className="form-label ms-3 fs-4">Task Description</label>
                    <input type="text" value={desc} onChange={(e) => { setDesc(e.target.value) }} className="form-control rounded-pill shadow p-2 ps-4 fs-5" id="desc" placeholder="Description" />
                </div>
                <div className="mb-4">
                    <label htmlFor="sDate" className="form-label ms-3 fs-4">Task Start Date</label>
                    <input type="date" value={date} onChange={(e) => { setDate(e.target.value) }} className="form-control rounded-pill shadow p-2 ps-4 fs-5 pe-3" id="sDate" placeholder="" />
                </div>
                <div className="mb-4">
                    <label htmlFor="eDate" className="form-label ms-3 fs-4">Task End Date</label>
                    <input type="date" value={eDate} onChange={(e) => { seteDate(e.target.value) }} className="form-control rounded-pill shadow p-2 ps-4 fs-5 pe-3" id="eDate" placeholder="" />
                </div>
                <div className="mb-4">
                    <label htmlFor="status" className="form-label ms-3 fs-4">Task Status</label>
                    <select class="form-select rounded-pill shadow p-2 ps-4 fs-5 pe-3" id="status" value={status} onChange={(e) => { setStatus(e.target.value) }}>
                        <option value="Not Started" selected>Not Started</option>
                        <option value="Temporary Paused">Temporary Paused</option>
                        <option value="Working">Working</option>
                        <option value="Completed">Completed</option>
                    </select>
                </div>
                <div className="text-center mt-5">
                    <button type="submit" className="btn btn-success rounded-pill p-2 px-4 fs-5 shadow"><i class="bi bi-plus-lg pe-2 fs-5"></i>Add Task</button>
                </div>
            </form>
        </>
    );
}
