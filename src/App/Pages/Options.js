import React from "react";
import { ReactComponent as NetworkDiverse } from "../../Img/NetworkDiverse.svg";
import { ReactComponent as OnboardNew } from "../../Img/OnboardNew.svg";
import { ReactComponent as SimilarInterests } from "../../Img/SimilarInterests.svg";
import { ReactComponent as WorkOnAProject } from "../../Img/WorkOnAProject.svg";
import Card from "../Components/Card";

export default function Options() {

    const [showPopup, setShowPopup] = React.useState(false);

    const submit = () => {
        console.log(showPopup);
        setShowPopup(true);
    }

    return <div className="container p-4 centre-img">
        {showPopup ? <div>
            <h1>Here are some groups you should join:</h1>
            <h3>The Lunch Runners</h3>
            <p>https://a1marketing.slack.com/team/U3435349B</p>
            <h3>Casual Coffee Chat</h3>
            <p>https://a1marketing.slack.com/team/GKSJHKJF4</p>
            <h3>Foodie Group</h3>
            <p>https://a1marketing.slack.com/team/SHGJFGJA8</p>
            <h3>The Clojurians</h3>
            <p>https://a1marketing.slack.com/team/U1H63D8SZ</p>
            <br/>
            <h1>Here are some groups you should join:</h1>
            <h3>The Lunch Runners</h3>
            <p>https://a1marketing.slack.com/team/U3435349B</p>
            <h3>Casual Coffee Chat</h3>
            <p>https://a1marketing.slack.com/team/GKSJHKJF4</p>
            <h3>Foodie Group</h3>
            <p>https://a1marketing.slack.com/team/SHGJFGJA8</p>
            <h3>The Clojurians</h3>
            <p>https://a1marketing.slack.com/team/U1H63D8SZ</p>

            <small>This is an example output</small>
        </div> : null}
        {showPopup ? null :
            <div>
                <h1 className="mb-4">I would like to...</h1>
                <div className="centre-img row">
                    <Card header="Network with a diverse group of people across the company" onClick={submit}>
                        <NetworkDiverse className="questions-feature-img" />
                    </Card>
                    <Card header="Find a group of people with similar interests for in depth discussions" onClick={submit}>
                        <SimilarInterests className="questions-feature-img" />
                    </Card>
                    <Card header="Join a project group and build something cool together" onClick={submit}>
                        <WorkOnAProject className="questions-feature-img" />
                    </Card>
                    <Card header="Meet people in the company and onboard as a new starter" onClick={submit}>
                        <OnboardNew className="questions-feature-img" />
                    </Card>
                </div>
            </div>
        }
    </div>;
}