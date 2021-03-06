import React from "react";
import { NavLink } from "react-router-dom";

export default function MyStats() {
    return <div className="container p-4 rounded-box">

        <h1 className="text-primary">My stats</h1>
        <p className="larger">You can find information about your connections, your previous Teams, your previous projects and your Rewards here.</p>
        <p className="larger">My Team for the Week</p>
        <ul>
            <li>Elisa</li>
            <li>John</li>
            <li>Marian</li>
            <li>Peter</li>
        </ul>
        <p>Slack channel link(in case auto addition did not work):</p>
        <p>https://a1marketing.slack.com/team/SHGJFGJA8</p>
        <p className="larger">My Past Projects</p>
        <ul>
            <li>Elisa</li>
            <li>John</li>
            <li>Marian</li>
            <li>Peter</li>
        </ul>
        <p className="larger">My previous Projects</p>
        <ul>
            <li className="mt-4">Team name: Ultimate4 <span className="btn btn-primary">Details</span></li>
            <li className="mt-4">Team name: NoPainNoGain <span className="btn btn-primary">Details</span></li>
            <li className="mt-4">Team name: AcetheMaze <span className="btn btn-primary">Details</span></li>
        </ul>
        <p className="larger">Team Rewards</p>
        <p>UBER Eats $10 Voucher</p>
        <p>1 More Day Off</p>
        <NavLink to="/" className="btn btn-primary mt-4 btn-lg">Settings</NavLink>
    </div>;
}