import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

//Componentes 
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

//styles
import styles from '../components/styles/styles';


//CARDS
import CardsConsultant from './cards/card-consultant';
import CardCarros from './cards/card-carros';

// MATERIAL UI COMPONENTS
import { withStyles } from '@material-ui/core/styles';

//actions
// quando o arquivo buscado é o index so precisamos setar 
//a pasta se precisar passar o nome do arquivo
import * as actions from '../actions';

class Home extends Component {

  // funcao que executa assim que monta os componentes
  componentWillMount() {

  };


  render() {
    const { classes } = this.props;

    return (
      <div className={classes.body}>
        <div className={classes.root}>

          {/* Titulo da tela */}
          <Grid container className={classes.root} spacing={3}>
            <Grid item xs={12}>

              {/* Título da Home  */}
              {/* <Grid item xs={12}> */}
              <Paper className={classes.paper}>
                <h1
                  style={{ textAlign: 'center', 
                  color: 'white',
                  borderRadius:'8px',
                  background: 'black',
                  fontSize: 40
                 }}
                >
                  Bemvindo a Home
                </h1>
              </Paper>
              {/* </Grid> */}

              {/* Cards tela principal */}
              {/* <Paper className={classes.root} style={{ marginTop: '80px' }}> */}
                <Grid container={true} className={classes.root} spacing={8} >
                  <Grid item xs={6} sm={6}>
                    <CardsConsultant />
                  </Grid>
                  <Grid item xs={6} sm={6}>
                    <CardCarros />
                  </Grid>
                  {/* <Grid item xs={4} sm={4}>
                   
                  </Grid> */}
                </Grid>
              {/* </Paper> */}


            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

// funcao que mapeia os dados na aplicação
const mapStateToProps = state => ({
  valor: state.valores.valor,
  consultants: state.valores.consultants,
  carros: state.valores.carros,
});

// exportar nossa aplicacao com dados mapeados
// utilizei o compose para juntar todos todas as propriedades 
export default compose(
  withStyles(styles, { withTheme: true }),
  connect(mapStateToProps, actions)
)(Home);