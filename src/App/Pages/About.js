import React from "react";
import onboarding_1 from '../../Img/onboarding_1.png';
import graphic from '../../Img/graphic.png';

export default function About() {
    return <div className="container p-4">
        <h1>About Us.</h1>
        <h3>PeerNet is an employee-centric networking program.</h3>
        <img src={graphic} alt="how peernet works" className="peernet-img"/>
        <h3>Take a few short surveys and we will match you with a network of other employees to help you grow and develop in the company.</h3>
        <p>All data submitted to PeerNet is not shared with anyone else and is simply used to find a fantastic group of coworkers with whom you can share knowledge, network and work on cool projects.</p>
        <img src={onboarding_1} alt="background" className="network-img"/>
    </div>;
}