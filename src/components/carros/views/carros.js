import React from 'react';

// componentes
import TableCarros from '../tableCarros/tableCarros';
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

// icons
import AddCircle from '@material-ui/icons/AddCircleOutline';

//Links de Route
import { Link } from "react-router-dom";

const Carros = ({ listCarros, classes, handle }) => {

  return (
    <div className={classes.body}>
      <h1
        style={{
          color: 'white',
          background: 'black',
          maxWidth: '300px',
          fontWeight: '600',
          fontFamily: "sans-serif",
          borderRadius: '10px',
          textAlign: 'center'
        }}
      >Lista de Carros</h1>


      {/* Botao para voltar a tela inicial */}
      <Grid container className={classes.fixBtn}
        justify="space-between"
      >
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          style={{ cursor: 'pointer' }}
        >
          <Link to='/carros/cadastrar/new'
            className={classes.links}
          >
            Cadastrar
            <AddCircle style={{
              textAlign: 'center',
              verticalAlign: 'middle',
              marginLeft: '5px',
              curso: 'pointer'
            }} />
          </Link>
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
        >
          <Link to='/'
            className={classes.links}
          >voltar home</Link>
        </Button>
      </Grid>

      {/* Tabela que expoe lista de carros */}
      <Grid container >
        <TableCarros
          listCarros={listCarros}
          handle={handle}
        />
      </Grid>


    </div>
  );
};

export default (Carros);



