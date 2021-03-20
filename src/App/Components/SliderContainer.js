import React from 'react';
import Grid from '@material-ui/core/Grid';

export default function SliderContainer(props) {


  return (
    <Grid container spacing={2}>
      <Grid item xs={2}>
        {props.onLeft}
      </Grid>
      <Grid item xs={8}>
        {props.children}
      </Grid>
      <Grid item xs={2}>
        {props.onRight}
      </Grid>
    </Grid>
  );
}