// import { httpNoCache } from '../utils/http';
import axios from 'axios';

const http = process.env.API || 'http://localhost:8082'

class CarrosApi {

  static getCarros() {
    return new Promise((resolve, reject) => {
      axios
        .get(`${http}/carros`)
        .then(function (res) {
          if (res.status === 204) resolve([]);
          else resolve([...res.data]);
        })
        .catch((err) => {
          reject({ ...err });
        });
    });
  }


  static createCarros(data) {
    return new Promise((resolve, reject) => {
      axios.post(`${http}/carros/cadastrar`, data)
        .then(function (res) {
          if (res.status >= 200 && res.status <= 207)
            resolve(true);
        })
        .catch((err) => {
          reject({ ...err });
        });
    });
  }

  static deleteById(id) {
    return new Promise((resolve, reject) => {
      axios
        .delete(`${http}/carros/delete/${id}`)
        .then(function (res) {
          if (res.status === 204) resolve({});
          else resolve(res.data);
        })
        .catch((err) => {
          reject({ ...err });
        });
    });
  }
}

export default CarrosApi;
