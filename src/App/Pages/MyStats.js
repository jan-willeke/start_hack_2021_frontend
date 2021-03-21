import React from "react";
import { ReactComponent as HomeOffice } from "../../Img/HomeOffice.svg";
import { NavLink } from "react-router-dom";

export default function Home() {
    return <div className="container p-4">

        <h1 className="text-primary">My stats</h1>
        <p className="larger">You can find the number of connections you have, the quality of the time you have spent together,  <span className="text-primary">fun</span> way.</p>
        <HomeOffice className="background-image" />
        <NavLink to="/me" className="btn btn-primary mt-4 btn-lg">Start your PeerNet networking journey</NavLink>
    </div>;
}