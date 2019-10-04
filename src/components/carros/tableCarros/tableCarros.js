import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

// components
import Button from '@material-ui/core/Button';

//blocks
//import CircularProgress from '@material-ui/core/CircularProgress';
// import ReduxBlockUi from 'react-block-ui/redux';

//icons 
import DeleteIcon from '@material-ui/icons/Delete';

// stilização
const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  button: {
    margin: theme.spacing(1),
  },
  contents: {
    alignContent: 'center',
    fontSize: 10
  }
}));


// COMPONENTE TABLE
const TableCarros = ({ listCarros, handle }) => {


  // ordernar a list data
  const orderBy = (listCarros) => {
    const cars = listCarros.sort(function (a, b) {
      if (a.created > b.created) {
        return 1;
      }
      if (a.created < b.created) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
    return cars;
  }



  const classes = useStyles();

  const formatDate = (date) => {
    const dateFinally = new Date(date);
    const response = dateFinally.toLocaleDateString();
    return response;
  }

  return (
    <Paper className={classes.root}>
      {/* <ReduxBlockUi
        tag='div'
        block={[/_REJECTED/]}
        unblock={[/_FULFILLED/, /_REJECTED/]}
        loader={<CircularProgress size={80} thickness={5} color='primary' />}
      > */}
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <StyledTableCell>Descrição do Carro</StyledTableCell>
              <StyledTableCell align="right">Placa</StyledTableCell>
              <StyledTableCell align="right">Marca do Carro</StyledTableCell>
              <StyledTableCell align="right">Ano do Carro</StyledTableCell>
              <StyledTableCell align="right">Entrada</StyledTableCell>
              <StyledTableCell align="right">action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listCarros && listCarros.length > 0 ? orderBy(listCarros).map((car, index) => (
              <StyledTableRow key={index} className={classes.contents}>
                <StyledTableCell component="th" scope="row">
                  {car.marcaDescricao}
                </StyledTableCell>
                <StyledTableCell align="right">{car.placa}</StyledTableCell>
                <StyledTableCell align="right">{car['index.marca']}</StyledTableCell>
                <StyledTableCell align="right">{car.anoCarro}</StyledTableCell>
                <StyledTableCell align="right">{formatDate(car.created)}</StyledTableCell>
                <StyledTableCell align="right">
                  <Button variant="contained"
                    color="secondary"
                    className={classes.button}
                    onClick={() => handle.deleteById(car.idCarro)}
                  >
                    <DeleteIcon
                      fontSize="small"
                    />
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            )) : <StyledTableRow>
                <StyledTableCell align="center"></StyledTableCell>
                <StyledTableCell align="center"></StyledTableCell>
                <StyledTableCell align="center">Nenhum Dado Encontrado</StyledTableCell>
              </StyledTableRow>}
          </TableBody>
        </Table>
      {/* </ReduxBlockUi> */}
    </Paper>
  );
}

export default TableCarros;