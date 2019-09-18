// importando dos tipos 
import {
  ADD_UM,
  MIN_UM,
  CONSULTANTS,
  SET_FIELD,
  RESET_FIELD,
  RESET_FIELDS,
  CARROS,
  SAVE_DATA,
  SNACKBAR_MESSAGE,
  DELETE_ID
} from './type';

// buscando os dados da api 
import api from '../api/api-carros';


// funcao de ações 
export const add = () => ({ type: ADD_UM });
export const min = () => ({ type: MIN_UM });


// lista todas as consultoras 
export const listConsultant = () => ({ type: CONSULTANTS });

export const listCarros = () => (dispatch) => {
  dispatch({
    type: CARROS,
    payload: {
      promise: async () => {
        const res = await api.getCarros();
        return res;
      }
    }
  });
};


export const saveData = (payload) => (dispatch) => dispatch({
  // geState usado para pegar os estados da aplicação 
  type: SAVE_DATA,
  payload: api.createCarros(payload)
});


// deleter car by id 
export const deleteById = (id) => (dispatch) => dispatch({
  type: DELETE_ID,
  payload: api.deleteById(id)
});

// seta novos valores 
export const setField = (payload) => ({
  type: SET_FIELD,
  payload
});

export const resetFields = (fields) => (dispatch) => dispatch({
  type: RESET_FIELDS,
  payload: fields
});

// reseta os valores dos campos 
export const resetField = () => (dispatch) => ({
  type: RESET_FIELD
});

// mensagem do snackbar
export const snackMessage = (payload) => (dispatch) => dispatch({
  type: SNACKBAR_MESSAGE,
  payload
});


