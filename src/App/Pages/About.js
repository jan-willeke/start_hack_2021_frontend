import React from "react";
import { ReactComponent as HomeOffice } from "../../Img/HomeOffice.svg";

export default function About() {
    return <div className="container p-4">
        <h1>About Us.</h1>
        <HomeOffice className="background-image" />
        <h3>Take a few short surveys and we will match you with a network of other employees to help you grow and develop in the company.</h3>
        <p>All data submitted to PeerNet is not shared with anyone else and is simply used to find a fantastic group of coworkers with whom you can share knowledge, network and work on cool projects.</p>
    </div>;
}