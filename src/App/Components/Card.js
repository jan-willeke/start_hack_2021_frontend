import React from "react";

export default function Card(props) {
    return (
        <div className="card m-3 card-small">
            <h3 className="card-header">{props.header}</h3>
            <div className="card-body">
                {props.children}
            </div>
        </div>
    );
}
