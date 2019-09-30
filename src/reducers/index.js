import { combineReducers } from 'redux';

//libs
import _ from 'lodash';

// actions 
import {
  ADD_UM, MIN_UM, CONSULTANTS, CARROS, SAVE_DATA, SET_FIELD,
  RESET_FIELD, RESET_FIELDS, SNACKBAR_MESSAGE
} from '../actions/type';

// mock consultants
import { consultants } from '../mocks/listData';



// states reducers 
const stateDefault = {
  fields: {
    anoCarro: '',
    marcaCarro: '',
    modeloCarro: '',
    placa: ''
  },
  valor: 0,
  input: '',
  consultants: [],
  carros: [],
  snackbarOpen: false,
  successCreated: false,
  error: false
};


// set chave e valor dos campos 
const mergeFields = (fields, payload) => {
  let updatedFields = { ...fields };
  if (payload.overwrite)
    _.set(updatedFields, payload.field, payload.value);
  else
    _.merge(updatedFields, { [payload.field]: payload.value });

  return updatedFields;
}

// limpas os campos passados 
const resetFields = (fields, payload) => {

  if (payload) {
    const payloadType = payload.constructor.name.toLowerCase();
    switch (payloadType) {
      case 'array': {
        const payloadFieldsInitialValues = payload.reduce((result, item) => {
          const doesFieldHasInitialState = _.has(stateDefault.fields, item);
          if (doesFieldHasInitialState) {
            result[item] = stateDefault.fields[item];
          }
          return result;
        }, {});
        const updatedFields = { ...fields, ...payloadFieldsInitialValues };
        return updatedFields;
      }
      case 'string': {
        const doesFieldHasInitialState = _.has(stateDefault.fields, payload);
        if (doesFieldHasInitialState) {
          const updatedState = { ...fields, [payload]: stateDefault.fields[payload] };
          return updatedState;
        }
        break;
      }
      default: {
        return stateDefault.fields;
      }
    }
  } else {
    return stateDefault.fields;
  }

};


// funcao reducers 
const valoresReducers = (state = stateDefault, action) => {
  const { payload } = action;

  switch (action.type) {
    case ADD_UM:
      return {
        ...state,
        valor: (state.valor < 0) ? 0 : state.valor + 1,
      }
    case MIN_UM:
      return {
        ...state,
        valor: (state.valor <= 0) ? 0 : state.valor - 1,
      }
    case CONSULTANTS:
      return {
        ...state,
        consultants: consultants,
      }

    // busca lista carros no banco 
    case `${CARROS}_FULFILLED`:
      return {
        ...state,
        carros: payload,
      }
    case `${SAVE_DATA}_FULFILLED`:
      return {
        ...state,
        successCreated: true
      };
    case SET_FIELD:
      return {
        ...state,
        fields: mergeFields(state.fields, payload),
      }
    case RESET_FIELD:
      return {
        ...stateDefault,
      }
    case RESET_FIELDS:
      return {
        ...state,
        fields: resetFields(state.fields, payload)
      }
    case SNACKBAR_MESSAGE:
      return {
        ...state,
        snackbarOpen: payload.snackbarOpen,
        error: !payload.error ? false : payload.error
      }
    default:
      return state;
  };
}

const rootReducers = combineReducers({
  valores: valoresReducers
});

export default rootReducers;

