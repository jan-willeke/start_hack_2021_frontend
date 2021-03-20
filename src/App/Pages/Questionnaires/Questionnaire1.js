import React from 'react';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import { NavLink } from "react-router-dom";
import { ReactComponent as NetworkDiverse } from "../../../Img/NetworkDiverse.svg";
import SliderContainer from "../../Components/SliderContainer";

export default function Questionnaire1() {

  const [value, setValue] = React.useState(0.5);

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="container p-4">
      <div className="card">
        <h1 className="card-header">Expand your horizons</h1>
        <div className="card-body">
          <h2 class="card-title">Fill out this short survey and get assigned to a group of diverse people across the company</h2>
          <NetworkDiverse className="card-img-top img-small" />
          <Typography gutterBottom>How supported do you feel at work?</Typography>
          <SliderContainer onLeft="Not at all" onRight="Very">
            <Slider value={value} onChange={handleChange} min={0.0} max={1.0} step={0.01} />
          </SliderContainer>
          <NavLink to="/questions" className="btn btn-primary mt-4 btn-lg">Let's go!</NavLink>
        </div>
      </div>
    </div>
  );
}