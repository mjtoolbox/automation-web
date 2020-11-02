import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import CurrencyFormat from 'react-currency-format';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import { useStyles } from './styles';

// Generate Order Data
function createData(
  id,
  date,
  code,
  description,
  amount,
  category,
  confidence,
  gst
) {
  return { id, date, code, description, amount, category, confidence, gst };
}

const rows = [
  createData(
    0,
    'Apr 16, 2020',
    'BMC',
    'Costco',
    56.33,
    'advertising',
    0.9,
    2.5
  ),
  createData(
    1,
    'Apr 17, 2020',
    'PMC',
    'B.C. HYDRO-PAP',
    73.0,
    'hydro',
    0.93,
    2.12
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Transactions(props) {
  const classes = useStyles(props);
  return (
    <main className={classes.content}>
      <Container maxWidth='lg' className={classes.allcontainer}>
        <Paper className={classes.paper}>
          <React.Fragment>
            <Title>Transactions</Title>
            <Table size='small'>
              <TableHead>
                <TableRow>
                  <TableCell>Date</TableCell>
                  <TableCell>Code</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell align='right'>Amount</TableCell>
                  <TableCell>Category</TableCell>
                  <TableCell>Confidence</TableCell>
                  <TableCell align='right'>GST</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.date}</TableCell>
                    <TableCell>{row.code}</TableCell>
                    <TableCell>{row.description}</TableCell>
                    <TableCell align='right'>
                      <CurrencyFormat
                        value={row.amount}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'$'}
                        fixedDecimalScale={true}
                        decimalScale='2'
                      />
                    </TableCell>
                    <TableCell>{row.category}</TableCell>
                    <TableCell align='right'>
                      <CurrencyFormat
                        value={row.confidence}
                        displayType={'text'}
                        thousandSeparator={true}
                        fixedDecimalScale={true}
                        decimalScale='2'
                      />
                    </TableCell>
                    <TableCell align='right'>
                      <CurrencyFormat
                        value={row.gst}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'$'}
                        fixedDecimalScale={true}
                        decimalScale='2'
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className={classes.seeMore}>
              <Link color='primary' href='#' onClick={preventDefault}>
                See more orders
              </Link>
            </div>
          </React.Fragment>
        </Paper>
      </Container>
    </main>
  );
}
