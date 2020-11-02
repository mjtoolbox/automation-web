import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import CurrencyFormat from 'react-currency-format';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Balance(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>{props.title}</Title>
      <Typography component='p' variant='h4'>
        <CurrencyFormat
          value={props.amount}
          displayType={'text'}
          thousandSeparator={true}
          prefix={'$'}
        />
      </Typography>
      <Typography color='textSecondary' className={classes.depositContext}>
        {props.updated}
      </Typography>
      <div>
        <Link color='primary' href='#' onClick={preventDefault}>
          View Detail
        </Link>
      </div>
    </React.Fragment>
  );
}
