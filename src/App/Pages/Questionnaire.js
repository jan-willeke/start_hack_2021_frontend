import React from "react";
import { NavLink } from "react-router-dom";
import Slider from '@material-ui/core/Slider';
import SliderContainer from "../Components/SliderContainer";

export default function Questionnaire() {

    const [userInfo, setUserInfo] = React.useState({
        "id": 1,
        "name": "",
        "email": "",
        "ment_supp": 0.5,
        "overwhelmed": 0.5,
        "anxiety": 0.5,
        "trust": 0.5,
        "friendship": 0.5,
        "help": 0.5,
        "advice": 0.5,
        "sleep": 0.5,
        "exercise": 0.5,
        "comp_exp": 0.5,
        "field_exp": 0.5,
        "intro_extro": 0.5,
        "soft_hard_learn": 0.5,
        "soft_hard_already": 0.5,
        "skills_to_learn": [],
        "skills_already": [],
        "hobbies": [],
        "prog_langs": []

    });

    return (
        <div className="container p-4">
            <h1 className="text-primary">Welcome</h1>
            <h2>Please fill out this short questionnaire</h2>
            <div className="survey my-5">
                <h5 gutterBottom>How supported do you feel at work?</h5>
                <SliderContainer onLeft="Not at all" onRight="Very">
                    <Slider value={userInfo.ment_supp} onChange={(_, val) => setUserInfo({ ...userInfo, ment_supp: val })} min={0.0} max={1.0} step={0.01} />
                </SliderContainer>
                <h5 gutterBottom>How overwhelmed are you feeling at the moment?</h5>
                <SliderContainer onLeft="Not at all" onRight="Very">
                    <Slider value={userInfo.overwhelmed} onChange={(_, val) => setUserInfo({ ...userInfo, overwhelmed: val })} min={0.0} max={1.0} step={0.01} />
                </SliderContainer>
                <h5 gutterBottom>How anxious are you feeling these days?</h5>
                <SliderContainer onLeft="Not at all" onRight="Very">
                    <Slider value={userInfo.anxiety} onChange={(_, val) => setUserInfo({ ...userInfo, anxiety: val })} min={0.0} max={1.0} step={0.01} />
                </SliderContainer>
                <h5 gutterBottom>How many hours of exercise do you get per week?</h5>
                <SliderContainer onLeft="Less than 1 hour" onRight="10 hours+">
                    <Slider value={userInfo.exercise} onChange={(_, val) => setUserInfo({ ...userInfo, exercise: val })} min={0.0} max={1.0} step={0.01} />
                </SliderContainer>
                <h5 gutterBottom>How many years have you been working at the company?</h5>
                <SliderContainer onLeft="Less than 1 year" onRight="15 years+">
                    <Slider value={userInfo.comp_exp} onChange={(_, val) => setUserInfo({ ...userInfo, comp_exp: val })} min={0.0} max={1.0} step={0.01} />
                </SliderContainer>
                <h5 gutterBottom>How many years of experience do you have in the current field you are working in?</h5>
                <SliderContainer onLeft="Less than 1 year" onRight="15 years+">
                    <Slider value={userInfo.field_exp} onChange={(_, val) => setUserInfo({ ...userInfo, field_exp: val })} min={0.0} max={1.0} step={0.01} />
                </SliderContainer>
                <h5 gutterBottom>Are you more of an introvert or extrovert?</h5>
                <SliderContainer onLeft="Introvert" onRight="Extrovert">
                    <Slider value={userInfo.intro_extro} onChange={(_, val) => setUserInfo({ ...userInfo, intro_extro: val })} min={0.0} max={1.0} step={0.01} />
                </SliderContainer>
                <h5 gutterBottom>Would you like to focus more on improving interpersonal, soft skills or more technical, hard skills?</h5>
                <SliderContainer onLeft="Soft skills" onRight="Hard skills">
                    <Slider value={userInfo.soft_hard_learn} onChange={(_, val) => setUserInfo({ ...userInfo, soft_hard_learn: val })} min={0.0} max={1.0} step={0.01} />
                </SliderContainer>
                <h5 gutterBottom>As a team member, what is your greatest strength? Interpersonal soft skills or more technical hard skills?</h5>
                <SliderContainer onLeft="Soft skills" onRight="Hard skills">
                    <Slider value={userInfo.soft_hard_already} onChange={(_, val) => setUserInfo({ ...userInfo, soft_hard_already: val })} min={0.0} max={1.0} step={0.01} />
                </SliderContainer>
                <br />
                <h2 className="my-5">To what extent do you agree with the following statements:</h2>
                <h5 gutterBottom>I trust my team</h5>
                <SliderContainer onLeft="Completely disagree" onRight="Completely agree">
                    <Slider value={userInfo.trust} onChange={(_, val) => setUserInfo({ ...userInfo, trust: val })} min={0.0} max={1.0} step={0.01} />
                </SliderContainer>
                <h5 gutterBottom>I feel like I have friends at work</h5>
                <SliderContainer onLeft="Completely disagree" onRight="Completely agree">
                    <Slider value={userInfo.friendship} onChange={(_, val) => setUserInfo({ ...userInfo, friendship: val })} min={0.0} max={1.0} step={0.01} />
                </SliderContainer>
                <h5 gutterBottom>I know people I could comfortably ask for help at work</h5>
                <SliderContainer onLeft="Completely disagree" onRight="Completely agree">
                    <Slider value={userInfo.help} onChange={(_, val) => setUserInfo({ ...userInfo, help: val })} min={0.0} max={1.0} step={0.01} />
                </SliderContainer>
                <h5 gutterBottom>I know people I could go to for career related advice at work</h5>
                <SliderContainer onLeft="Completely disagree" onRight="Completely agree">
                    <Slider value={userInfo.advice} onChange={(_, val) => setUserInfo({ ...userInfo, advice: val })} min={0.0} max={1.0} step={0.01} />
                </SliderContainer>
                <NavLink to={{
                    pathname:'/options',
                    state:userInfo  
                }} className="btn btn-primary mt-5 btn-lg">Let's go!</NavLink>
            </div>
        </div>
    );
}