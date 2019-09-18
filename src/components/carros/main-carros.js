import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { bindActionCreators } from 'redux';

//COMPONENT SNACKBAR
//import SnackBar from '../comon/snack';

// MATERIAL UI COMPONENTS
import { withStyles } from '@material-ui/core/styles';

// styles
import styles from '../styles/styles';


//actions
// quando o arquivo buscado é o index so precisamos setar 
//a pasta se precisar passar o nome do arquivo
import * as listActions from '../../actions/index';

// componentes 
import Carros from './views/carros';
import FormCarros from './views/formCarros';

class MainCarros extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {
      snackbarOpen: false
    }
  }

  handleClose() {
    this.setState({ snackBarOpen: false });
  }

  componentWillMount() {
    const { actions } = this.props;
    // chama lista de carros
    actions.listCarros();
  };

  componentDidMount() {
    const { resetField } = this.props.actions;
    // reseta os estados da aplicações
    resetField();
  }

  get handles() {
    return {
      submitSave: this.submitData,
      change: this.handleChange,
      handleClose: this.handleClose,
      deleteById: this.deleteById
    };
  }

  // cadastra os dados 
  submitData = () => {
    const { actions, fields } = this.props;

    const params = {
      modeloCarro: fields.modeloCarro,
      anoCarro: fields.anoCarro,
      marcaCarro: fields.marcaCarro,
      placa: fields.placa
    }

    // salva os dados e limpas os campos 
    actions.saveData(params)
      .then((res) => {

        // chama a funcao do snackBar para da mensagem de sucesso 
        if (res.value) {
          console.log(' Cadastrado com sucesso')

          const snack = {
            snackbarOpen: true
          }
          actions.snackMessage(snack);

          // limpa a lista de campos 
          actions.resetFields(['modeloCarro', 'anoCarro', 'marcaCarro', 'placa']);
        }
      })
      .catch((e) => {
        const snack = {}
        snack.snackbarOpen = true;
        snack.error = true;

        actions.snackMessage(snack);
      });
  }

  // delete por id 
  deleteById = (id) => {
    const { actions } = this.props;

    actions.deleteById(id)
      .then((res) => {
        console.log('Deletado com sucesso', res)

        // deleta o elemento e chama a lista de dados novamente 
        actions.listCarros()
      })
      .catch((e) => {
        console.log('Erro ocorrido na deleção', e)
      });
  }

  // manda o valor do campo
  handleChange = async (event) => {
    const { actions } = this.props;


    // pega o campo e valor 
    const payload = {};
    payload.field = event.target.name;
    payload.value = event.target.value

    actions.setField(payload);
  };


  // fecha snack
  handleClose = () => {
    const { actions } = this.props;
    actions.snackMessage({ snackbarOpen: false });
  }

  render() {
    const {
      carros,
      classes,
      fields,
      snackbarOpen,
      error,
      match
    } = this.props;

    const mode = match.params.mode;

    if (mode && mode === 'new') {
      return (
        <FormCarros
          classes={classes}
          listCarros={carros}
          handle={this.handles}
          fields={fields}
          snack={snackbarOpen}
          error={error}
        />
      );
    }

    else {
      return (
        <Carros
          classes={classes}
          listCarros={carros}
          handle={this.handles}
        />
      );
    }

  }
}

const mapStateToProps = state => ({
  valor: state.valores.valor,
  consultants: state.valores.consultants,
  carros: state.valores.carros,
  fields: state.valores.fields,
  snackbarOpen: state.valores.snackbarOpen,
  error: state.valores.error
});

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        ...listActions,
      },
      dispatch
    )
  };
}

MainCarros.propTypes = {
  classes: PropTypes.object,
  actions: PropTypes.object,
  handlers: PropTypes.object,
};

export default compose(
  withStyles(styles, { withTheme: true }),
  connect(mapStateToProps, mapDispatchToProps))(MainCarros);