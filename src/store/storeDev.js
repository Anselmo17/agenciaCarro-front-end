// crea um store do redux
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// redux block-ui
import reduxMiddleware from 'react-block-ui/reduxMiddleware';

// espera uma promise 
import promiseMiddleware from 'redux-promise-middleware';

// busca todos os meus reducers
import reducers from '../reducers/index';

//logger das informações
import logger from "redux-logger";

// juntas meus reducers
export default createStore(reducers,
  applyMiddleware(
    reduxMiddleware,
    promiseMiddleware,
    thunk,
    logger,
  )
);
