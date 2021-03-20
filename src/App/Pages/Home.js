import React from "react";
import {ReactComponent as HomeOffice} from "../../Img/HomeOffice.svg";

export default function Home() {
    return <div className="container m-4">
        <h1>We are HappiNetwork.</h1>
        <h3>Say goodbye to feeling isolated when working from home. Our tool enables remote teams to network and share knowledge in an effective and most importantly <span className="text-primary">fun</span> way.</h3>
        <HomeOffice className="background-image"/>
        <button className="btn btn-primary mt-4 p-2">Start your networking journey</button>
    </div>;
}