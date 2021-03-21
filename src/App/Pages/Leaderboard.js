import React from "react";
import { ReactComponent as HomeOffice } from "../../Img/HomeOffice.svg";
import { NavLink } from "react-router-dom";

export default function Leaderboard() {
    return <div className="container p-4">
        <h1 className="text-primary">This week's Team Leaderboard</h1>
        <p className="larger">Say goodbye to feeling isolated when working from home. Our tool enables remote teams to network and share knowledge in an effective and most importantly <span className="text-primary">fun</span> way.</p>
        <HomeOffice className="background-image" />
        
    </div>;
}