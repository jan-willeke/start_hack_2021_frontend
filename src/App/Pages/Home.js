import React from "react";
import { NavLink } from "react-router-dom";

export default function Home() {
    return <div className="container p-4">
        <h1>Community</h1>
        <h1>Diversity</h1>
        <h1>Innovation</h1>
        <h1 className="text-primary">We are PeerNet.</h1>
        <p className="larger">Say goodbye to feeling isolated when working from home. Our tool enables remote teams to network and share knowledge in an effective and most importantly <span className="text-primary">fun</span> way.</p>
        <p className="larger">Fill out a short questionnaire and our advanced networking algorithm will place you in a small group where you will meet other interesting people, learn together and work on cool projects.</p>

        <NavLink to="/me" className="btn btn-primary mt-4 btn-lg">Start your PeerNet networking journey</NavLink>

        <h2 className="mb-2 mt-5">More details:</h2>
        <p>Digitalization has already changed and will change companies forever.</p>
        <p>Our <b>employee-focused</b> application offers them the possibility to informally connect with peers. </p>
        <ul>
            <li>Adapting to new challenges is a key aspect to take advantage of the opportunities that arise from a digital world.</li>
            <li><b>Networking is essential</b> within companies. By connecting employees and employers and strengthening their social interactions, we’re not only improving the team structure and mindset, but this also yields many benefits for the company itself.</li>
            <li>Our goal is to improve the existing structure as well as strengthen the overall network by using a data driven approach.</li>
            <li>We achieve this utilising a set of advanced algorithms which analyse the network in diffeent ways based on the goals and aspirations of the employees, to find groups with similar interests, which will boost the efficiency of everyone involved.</li>
            <li>Not only does this provide means to make the workplace more social and attractive, especially for remote workers, but furthermore enables users to find a great, diverse team for any kind of project, based on required and oftentimes complementary skillsets.</li>
            <li>This is exceptionally important for new employees to support them in the early stages.</li>
            <li>Depending on the employee's goal, the algorithms employ various variables including hobbies and interests, personality type, skills, level of experience and mental state.</li>
            <li>The platform also provides <b>trackable, holistic metrics</b> on the company structure and employee wellbeing.</li>
            <li>Our principle is to make the software easily <b>accessible and intuitive</b> for everyone and run different advanced algorithms to guarantee the best network connections to every employee. We help you improving the workplace in every aspect with our own advanced matching algorithms, while keeping the balance between social preferences and work efficiency.</li>
        </ul>
    </div>;
}