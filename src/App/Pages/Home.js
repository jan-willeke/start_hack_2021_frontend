import React from "react";
import { ReactComponent as HomeOffice } from "../../Img/HomeOffice.svg";
import { NavLink } from "react-router-dom";

export default function Home() {
    return <div className="container p-4">
        <h1>We are HappiNetwork.</h1>
        <h3>Say goodbye to feeling isolated when working from home. Our tool enables remote teams to network and share knowledge in an effective and most importantly <span className="text-primary">fun</span> way.</h3>
        <h3>We help nurture collaboration and social relations within a company whether it's the first day of an employee or they are are a "veteran".</h3>
        <HomeOffice className="background-image" />
        <NavLink to="/questions" className="btn btn-primary mt-4 btn-lg">Start your networking journey</NavLink>
    </div>;
}