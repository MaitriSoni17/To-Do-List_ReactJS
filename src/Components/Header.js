import React from "react";
import PropTypes from 'prop-types';
import '../App.css';

export default function Header(props) {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-warning sticky-top">
                <div className="container-fluid d-flex justify-content-center">
                    <h1 className="navbar-brand fs-1 text-white">{props.title}</h1>
                </div>
            </nav>
        </>
    );
}


Header.propTypes = {
    title: PropTypes.string,
}
