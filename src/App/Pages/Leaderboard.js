import React from "react";
import { ReactComponent as HomeOffice } from "../../Img/HomeOffice.svg";

export default function Leaderboard() {
    return <div className="container p-4">
        <h1 className="text-primary">Team Leaderboard</h1>
        <p className="larger">On this tab, you can see the results of this week's Friday Arduino robot building challenge. You also have the option to see the other's project submissions and vote on your favourites.</p>
        <HomeOffice className="background-image" />
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Team Name</th>
                    <th scope="col">Number of points</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>All Stars</td>
                    <td>46</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Ringmasters</td>
                    <td>32</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Inferno</td>
                    <td>16</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Coffee Addicts</td>
                    <td>10</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Challengers</td>
                    <td>8</td>
                </tr>
            </tbody>
        </table>
    </div>;
}