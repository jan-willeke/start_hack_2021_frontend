import React from "react";
import { ReactComponent as MeetOthers } from "../../Img/MeetOthers.svg";
import { ReactComponent as Ideas } from "../../Img/Ideas.svg";
import { ReactComponent as Learn } from "../../Img/Learn.svg";
import Card from "../Components/Card";

export default function Questions() {
    return <div className="container p-4 centre-img">
        <div className="centre-img row">
            <h1 className="mb-4">What are your aims</h1>
            <Card header="Learn new things" linkPath="/q1">
                <Learn className="questions-feature-img" />
            </Card>
            <Card header="Find a group with a common passion" linkPath="/q2">
                <Ideas className="questions-feature-img" />
            </Card>
            <Card header="Network with a wider group" linkPath="/q3">
                <MeetOthers className="questions-feature-img" />
            </Card>
        </div>
    </div>;
}