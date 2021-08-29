import { useState, useEffect } from 'react';

import Cat from '../../Components/Cat';
import Dog from '../../Components/Dog';
import Fox from '../../Components/Fox';

import {
  handleImgCat,
  handleImgDog,
  handleImgFox,
} from '../../services/get-url.js';
import {
  CAT_UPDATE_INTERVAL,
  DOG_UPDATE_INTERVAL,
  FOX_UPDATE_INTRVAL,
} from '../../helpers/constants';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { Typography, Paper } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 0,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function HomePage() {
  const classes = useStyles();

  const [imgCat, setImgCat] = useState({});
  const [imgDog, setImgDog] = useState({});
  const [imgFox, setImgFox] = useState({});

  useEffect(() => {
    handleImgCat(setImgCat);
    const catTimerID = setInterval(() => {
      handleImgCat(setImgCat);
    }, CAT_UPDATE_INTERVAL);
    return () => {
      clearInterval(catTimerID);
    };
  }, []);

  useEffect(() => {
    handleImgDog(setImgDog);
    const dogItmerID = setInterval(() => {
      handleImgDog(setImgDog);
    }, DOG_UPDATE_INTERVAL);
    return () => {
      clearInterval(dogItmerID);
    };
  }, []);

  useEffect(() => {
    handleImgFox(setImgFox);
    const foxTimerID = setInterval(() => {
      handleImgFox(setImgFox);
    }, FOX_UPDATE_INTRVAL);
    return () => {
      clearInterval(foxTimerID);
    };
  }, []);

  return (
    <>
      <Container>
        <div className={classes.root}>
          <Typography variant="body1" alighn="center">
            HOME PAGE
          </Typography>

          <Grid container spacing={3} justify="center">
            <ul>
              <Grid item sm>
                <Paper>
                  <li className={classes.paper}>
                    <Cat img={imgCat} />
                  </li>
                </Paper>
              </Grid>

              <Grid item sm>
                <Paper>
                  <li className={classes.paper}>
                    <Dog img={imgDog} />
                  </li>
                </Paper>
              </Grid>

              <Grid item sm={4} md={4} xs={4}>
                <Paper>
                  <li className={classes.paper}>
                    <Fox img={imgFox} />
                  </li>
                </Paper>
              </Grid>
            </ul>
          </Grid>
        </div>
      </Container>

      {/* /* =================== */}

      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs>
            <Paper className={classes.paper}>xs</Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>xs</Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>xs</Paper>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs>
            <Paper className={classes.paper}>xs</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>xs=6</Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>xs</Paper>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
