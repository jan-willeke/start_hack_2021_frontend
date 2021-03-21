import React from "react";
import { ReactComponent as HomeOffice } from "../../Img/HomeOffice.svg";
import { NavLink } from "react-router-dom";

export default function IdeaHub() {
    return <div className="container p-4">
        <h1 className="text-primary">Idea Hub</h1>
        <p className="larger">Here you can post suggestions about anything directly or indirectly related to your company. You also have the option to vote on suggestions proposed by your fellow peers. <br></br> <span className="text-primary">Democracy nurtures innovation.</span></p>
       
        <HomeOffice className="background-image" />
        <NavLink to="/" className="btn btn-primary mt-4 btn-lg">Post a Suggestion</NavLink>
    </div>;
}