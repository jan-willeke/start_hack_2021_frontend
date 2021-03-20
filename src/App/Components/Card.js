import React from "react";
import { NavLink } from "react-router-dom";

export default function Card(props) {
    return (
        <div className="card col-12 col-md-5 m-0 p-0 question-card m-4">
            <div className="card-header h3">
                {props.linkPath ? <NavLink to={props.linkPath} className="card-link">{props.header}</NavLink> : props.header}
            </div>
            <div className="card-body">
                {props.children}
            </div>
        </div>
    );
}
