import React from 'react';
import clsx from 'clsx';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Balance from './Balance';
import Transdash from './Transdash';
import Link from '@material-ui/core/Link';
import { useStyles } from './styles';

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link
        color='inherit'
        href='https://mjtoolbox.wordpress.com/'
        target='_blank'
      >
        One Small Steps
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Dashboard(props) {
  const classes = useStyles(props);
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Container maxWidth='lg' className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={12} className={classes.papercontainer}>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Balance title='BMO CHQ' amount='1000' updated='Dec 31, 2020' />
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3} className={classes.pcontainer}>
              <Paper className={fixedHeightPaper}>
                <Balance title='BMO MC' amount='111' updated='Dec 31, 2020' />
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3} className={classes.pcontainer}>
              <Paper className={fixedHeightPaper}>
                <Balance
                  title='BMO Personal'
                  amount='2000'
                  updated='Dec 31, 2020'
                />
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3} className={classes.pcontainer}>
              <Paper className={fixedHeightPaper}>
                <Balance title='PC MC' amount='1001' updated='Dec 31, 2020' />
              </Paper>
            </Grid>
          </Grid>

          {/* Recent Transactions */}
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Transdash />
            </Paper>
          </Grid>
        </Grid>
        <Box pt={4}>
          <Copyright />
        </Box>
      </Container>
    </main>
  );
}
