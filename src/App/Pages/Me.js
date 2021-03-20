import React from "react";
import { NavLink } from "react-router-dom";

export default function Me() {
    return <div className="container p-4">
        <h1>Your profile</h1>
        <h3>Welcome John</h3>
        <NavLink to="/questions" className="btn btn-primary mt-4 btn-lg">Start your networking journey</NavLink>
    </div>;
}