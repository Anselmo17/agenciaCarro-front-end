import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

//libs
import _ from 'lodash';

//Links de Route
import { Link } from "react-router-dom";

// button
import Button from '@material-ui/core/Button';

//actions
// como o arquivo js é o index pode so setar a pasta 
import * as actions from '../../actions';

// MATERIAL UI COMPONENTS
import { withStyles } from '@material-ui/core/styles';

// styles
import styles from '../styles/styles';


// classes das Consultoras 
export class Consultant extends Component {


  // chamada quando monta o componente
  componentWillMount() {
    const { listConsultant } = this.props;

    // chama lista de consultoras assim que o componente é chamado
    listConsultant()
  };

  // manda o valor do campo
  handleChange = (event) => {
    const { setField } = this.props;

    // seta o valor no input
    this.setState({ input: event.target.value });
    
    // pega o campo e valor 
    const field = event.target.localName;
    const obj = { [field]: event.target.value };
    const parsedObj = _.cloneDeep(obj);
    setField(parsedObj);
  };



  render() {

    const { input, valor, consultants, add, min, classes } = this.props;

    return (
      <div>

        <h1>Consultoras</h1>

        {/* contador adiciona o botao + */}
        <h2>Contador: {valor}</h2>
        {/* botao para adicionar o contador */}
        <button onClick={() => add()}>
          +
        </button>
        <button onClick={() => min()}>
          -
        </button>


        {/* Teste consultora */}
        <br />
        <label>Nome : {input}</label>
        <br/>
        <input
          onChange={this.handleChange}
          type="text"
          value={input}
        />


        {/* listando as consultoras */}
        <h2>Consultoras Premiadas</h2>
        <ol>
          {
            consultants.map((c) => {
              return <li key={c.code}>{c.name}</li>
            })
          }
        </ol>
        <br />

        {/* Botao para voltar a tela inicial */}
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
        >
          <Link to='/'
            className={classes.links}
          >Pagina Inicial</Link>
        </Button>

      </div >
    );
  }
};

// funcao de mapeamento
const mapStateToProps = state => ({
  valor: state.valores.valor,
  consultants: state.valores.consultants,
  input: state.valores.input
});

export default compose(
  withStyles(styles, { withTheme: true }),
  connect(mapStateToProps, actions)
)(Consultant);