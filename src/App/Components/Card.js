import React from "react";

export default function Card(props) {
    return (
        <div className="card col-12 col-md-5 m-0 p-0 question-card m-4">
            <div className="card-header h3">
                {props.header}
            </div>
            <div className="card-body">
                {props.children}
            </div>
        </div>
    );
}
