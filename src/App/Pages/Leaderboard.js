import React from "react";
import { ReactComponent as HomeOffice } from "../../Img/HomeOffice.svg";
import { NavLink } from "react-router-dom";

export default function Leaderboard() {
    return <div className="container p-4">
        <h1 className="text-primary">This week's Team Leaderboard</h1>
        <p className="larger">On this tab, you can see the results of this week's Friday Networking Hour event.</p>
        <HomeOffice className="background-image" />
        
    </div>;
}