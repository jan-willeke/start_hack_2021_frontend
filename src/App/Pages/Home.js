import React from "react";
import { ReactComponent as HomeOffice } from "../../Img/HomeOffice.svg";
import { NavLink } from "react-router-dom";

export default function Home() {
    return <div className="container p-4">
        <h1>Community</h1>
        <h1>Diversity</h1>
        <h1>Innovation</h1>
        <h1 className="text-primary">We are PeerNet.</h1>
        <p className="larger">Say goodbye to feeling isolated when working from home. Our tool enables remote teams to network and share knowledge in an effective and most importantly <span className="text-primary">fun</span> way.</p>
        <p className="larger">Fill out a short questionnaire and our advanced networking algorithm will place you in a small group where you will meet other interesting people, learn together and work on cool projects.</p>
        <HomeOffice className="background-image" />
        <NavLink to="/me" className="btn btn-primary mt-4 btn-lg">Start your PeerNet networking journey</NavLink>
    </div>;
}