import React from "react";
import Slider from '@material-ui/core/Slider';
import SliderContainer from "../Components/SliderContainer";
import axios from 'axios';
import Select from 'react-select'
import { useHistory } from "react-router-dom";

export default function Questionnaire() {

    const history = useHistory();

    function makeChoice(tag) {
        return {label: tag.name, value: tag.id};
    }

    React.useEffect(() => {
        axios.get("https://starthack-backend.herokuapp.com/proglangs/").then(res => {
            setProglangs(res.data.map(makeChoice));
        })
        axios.get("https://starthack-backend.herokuapp.com/hobbies/").then(res => {
            setHobbies(res.data.map(makeChoice));
        })
        axios.get("https://starthack-backend.herokuapp.com/skills/").then(res => {
            setSkills(res.data.map(makeChoice));
        })
    }, [])

    function submitForm() {
        let formData = JSON.parse(JSON.stringify(userInfo));
        formData.email = "person@example.com";
        formData.name = "Jan";
        // Send form to backend
        axios.put("https://starthack-backend.herokuapp.com/users/1/", formData)
            .then(() => history.push("/options"))
            .catch(() => alert("Please enter an answer for all the required fields"));
    }


    const [skills, setSkills] = React.useState([]);
    const [proglangs, setProglangs] = React.useState([]);
    const [hobbies, setHobbies] = React.useState([]);

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

    React.useEffect(() => {
        console.log(userInfo);
    }, [userInfo])

    return (
        <div className="container p-4">
            <h1 className="text-primary">Welcome, example user</h1>
            <h2>Please fill out this short questionnaire</h2>
            <div className="survey my-5">
                <h5 >🧑🏽‍🤝‍🧑🏽 How supported do you feel at work?</h5>
                <SliderContainer onLeft="Not at all" onRight="Very">
                    <Slider value={userInfo.ment_supp} onChange={(_, val) => setUserInfo({ ...userInfo, ment_supp: val })} min={0.0} max={1.0} step={0.01} />
                </SliderContainer>
                <h5 >😔 How overwhelmed are you feeling at the moment?</h5>
                <SliderContainer onLeft="Not at all" onRight="Very">
                    <Slider value={userInfo.overwhelmed} onChange={(_, val) => setUserInfo({ ...userInfo, overwhelmed: val })} min={0.0} max={1.0} step={0.01} />
                </SliderContainer>
                <h5 >😟 How anxious are you feeling these days?</h5>
                <SliderContainer onLeft="Not at all" onRight="Very">
                    <Slider value={userInfo.anxiety} onChange={(_, val) => setUserInfo({ ...userInfo, anxiety: val })} min={0.0} max={1.0} step={0.01} />
                </SliderContainer>
                <h5 >🏃‍♀️ How many hours of exercise do you get per week?</h5>
                <SliderContainer onLeft="Less than 1 hour" onRight="10 hours+">
                    <Slider value={userInfo.exercise} onChange={(_, val) => setUserInfo({ ...userInfo, exercise: val })} min={0.0} max={1.0} step={0.01} />
                </SliderContainer>
                <h5 >💤 How many hours of sleep do you get per night?</h5>
                <SliderContainer onLeft="Less than 5 hours" onRight="10 hours+">
                    <Slider value={userInfo.sleep} onChange={(_, val) => setUserInfo({ ...userInfo, sleep: val })} min={0.0} max={1.0} step={0.01} />
                </SliderContainer>
                <h5 >🖨️ How many years have you been working at the company?</h5>
                <SliderContainer onLeft="Less than 1 year" onRight="15 years+">
                    <Slider value={userInfo.comp_exp} onChange={(_, val) => setUserInfo({ ...userInfo, comp_exp: val })} min={0.0} max={1.0} step={0.01} />
                </SliderContainer>
                <h5 >👩‍💻 How many years of experience do you have in the current field you are working in?</h5>
                <SliderContainer onLeft="Less than 1 year" onRight="15 years+">
                    <Slider value={userInfo.field_exp} onChange={(_, val) => setUserInfo({ ...userInfo, field_exp: val })} min={0.0} max={1.0} step={0.01} />
                </SliderContainer>
                <h5 >🎉 Are you more of an introvert or extrovert?</h5>
                <SliderContainer onLeft="Introvert" onRight="Extrovert">
                    <Slider value={userInfo.intro_extro} onChange={(_, val) => setUserInfo({ ...userInfo, intro_extro: val })} min={0.0} max={1.0} step={0.01} />
                </SliderContainer>
                <h5 >💻 Would you like to focus more on improving interpersonal, soft skills or more technical, hard skills?</h5>
                <SliderContainer onLeft="Soft skills" onRight="Hard skills">
                    <Slider value={userInfo.soft_hard_learn} onChange={(_, val) => setUserInfo({ ...userInfo, soft_hard_learn: val })} min={0.0} max={1.0} step={0.01} />
                </SliderContainer>
                <h5 >🤔 As a team member, what is your greatest strength? Interpersonal soft skills or more technical hard skills?</h5>
                <SliderContainer onLeft="Soft skills" onRight="Hard skills">
                    <Slider value={userInfo.soft_hard_already} onChange={(_, val) => setUserInfo({ ...userInfo, soft_hard_already: val })} min={0.0} max={1.0} step={0.01} />
                </SliderContainer>
                <br />
                <h2 className="my-5">To what extent do you agree with the following statements:</h2>
                <h5 >😊 I trust my team</h5>
                <SliderContainer onLeft="Completely disagree" onRight="Completely agree">
                    <Slider value={userInfo.trust} onChange={(_, val) => setUserInfo({ ...userInfo, trust: val })} min={0.0} max={1.0} step={0.01} />
                </SliderContainer>
                <h5 >🤛 I feel like I have friends at work</h5>
                <SliderContainer onLeft="Completely disagree" onRight="Completely agree">
                    <Slider value={userInfo.friendship} onChange={(_, val) => setUserInfo({ ...userInfo, friendship: val })} min={0.0} max={1.0} step={0.01} />
                </SliderContainer>
                <h5 >🤗 I know people I could comfortably ask for help at work</h5>
                <SliderContainer onLeft="Completely disagree" onRight="Completely agree">
                    <Slider value={userInfo.help} onChange={(_, val) => setUserInfo({ ...userInfo, help: val })} min={0.0} max={1.0} step={0.01} />
                </SliderContainer>
                <h5 >👨‍💼 I know people I could go to for career related advice at work</h5>
                <SliderContainer onLeft="Completely disagree" onRight="Completely agree">
                    <Slider value={userInfo.advice} onChange={(_, val) => setUserInfo({ ...userInfo, advice: val })} min={0.0} max={1.0} step={0.01} />
                </SliderContainer>

                <h5 >📈 Select some skills you would like to improve at</h5>
                <Select options={skills} className="my-2" isMulti onChange={(_, val) => setUserInfo({ ...userInfo, skills_to_learn: userInfo.skills_to_learn.concat(val?.option?.value ? [val.option.value] : []) })}/>
                <h5 >💪 Select some skills you think you are strong at</h5>
                <Select options={skills} className="my-2" isMulti onChange={(_, val) => setUserInfo({ ...userInfo, skills_already: userInfo.skills_already.concat(val?.option?.value ? [val.option.value] : []) })}/>
                <h5 >🚲 Choose some hobbies that you enjoy</h5>
                <Select options={hobbies} className="my-2"isMulti onChange={(_, val) => setUserInfo({ ...userInfo, hobbies: userInfo.hobbies.concat(val?.option?.value ? [val.option.value] : []) })}/>
                <h5 >🖥️ Choose some programming languages that you enjoy using</h5>
                <Select options={proglangs} className="my-2" isMulti onChange={(_, val) => setUserInfo({ ...userInfo, prog_langs: userInfo.prog_langs.concat(val?.option?.value ? [val.option.value] : []) })}/>
                <button className="btn btn-primary mt-5 btn-lg" onClick={() => submitForm()}>Let's go!</button>
            </div>
        </div>
    );
}