import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

// conecta nossa aplicaçao com o store
import { Provider } from 'react-redux';

// components design 
import CircularProgress from "@material-ui/core/CircularProgress";

// Components validation states
import ReduxBlockUi from "react-block-ui/redux";

// componentes Home
import Home from '../components/home';
import Consultant from '../components/consultants/consultant';
import MainCarros from '../components/carros/main-carros';
// import FormCarros from '../components/carros/formCarros';

// store ->  armazena todos os estados da aplicação
import store from '../store/store';

class App extends Component {
  render() {

    return (
      <Provider store={store}>

          {/* Rotemento das nossas rotas  */}
          <BrowserRouter>
          <ReduxBlockUi
          tag="div"
          block={[/_PENDING/]}
          unblock={[/_FULFILLED/, /_UNBLOCK/]}
          loader={
            <CircularProgress size={80} thickness={5} color="primary" />
          }
        >
            <Route exact path='/' component={Home} />
            <Route path='/Home' component={Home} />
            {/* passando as pros para o componete */}
            <Route path='/Carros/Cadastrar/:mode' component={MainCarros} exact={true} />
            {/* <Route path='/Carros/Cadastrar' render={(props) => <MainCarros {...props} mode='new' />} /> */}
            <Route path='/Carros' component={MainCarros} exact={true} />
            <Route path='/Consultant' component={Consultant} />
            </ReduxBlockUi>
          </BrowserRouter>
      </Provider>
    );
  }
}
export default App;
