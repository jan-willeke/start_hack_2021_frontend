import React from "react";
import { ReactComponent as HomeOffice } from "../../Img/HomeOffice.svg";

export default function Leaderboard() {
    return <div className="container p-4">
        <h1 className="text-primary">Team Leaderboard</h1>
        <p className="larger">On this tab, you can see the results of this week's Friday Networking Hour event. You also have the option to see the other's project submissions and vote on your favourites.</p>
        <HomeOffice className="background-image" />
        
    </div>;
}