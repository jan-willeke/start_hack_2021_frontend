import React from "react";
import { ReactComponent as NetworkDiverse } from "../../Img/NetworkDiverse.svg";
import { ReactComponent as OnboardNew } from "../../Img/OnboardNew.svg";
import { ReactComponent as SimilarInterests } from "../../Img/SimilarInterests.svg";
import { ReactComponent as WorkOnAProject } from "../../Img/WorkOnAProject.svg";
import Card from "../Components/Card";

export default function Options() {

    const submit = () => {
        console.log("Hello");
    }

    return <div className="container p-4 centre-img">
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
    </div>;
}