

const consultants = [
  {
    code: 345580,
    name: 'Maria Gislaine Silva'
  },
  {
    code: 566899,
    name: 'Geonilda Gusmão'
  },
  {
    code: 890055,
    name: 'Marta Queiros Gusmão'
  },
  {
    code: 788800,
    name: 'Marciana Pereira'
  },
  {
    code: 345590,
    name: 'Santos Carlos Dumond'
  },
  {
    code: 789070,
    name: 'Mario Sergio Soares'
  },
  // 
  {
    code: 456090,
    name: 'Clarice Pereira'
  },
  {
    code: 789020,
    name: 'Mario Sergio Soares'
  },
  {
    code: 340060,
    name: 'Joaquim Narciso Santos'
  },
  {
    code: 789050,
    name: 'Soares Nascimento'
  },
  {
    code: 444499,
    name: 'Joao Santos'
  },
  {
    code: 670088,
    name: 'Ana da Silva'
  },
  {
    code: 456689,
    name: 'Pedro Carlos Santos'
  },
  {
    code: 113399,
    name: 'Marciana Cassia Silva'
  }
];

const carros = [
  {
    anoCarro: 2016,
    created: "2019-08-01T19:58:55.000Z",
    idCarro: 37229,
    idMarca: 1,
    marcaDescricao: "CHEVETT",
    placa: "YYU - 1010",
    'index.marca': "CHEVROLET"
  },
  {
    anoCarro: 2020,
    created: "2019-08-05T19:58:55.000Z",
    idCarro: 37109,
    idMarca: 1,
    marcaDescricao: "JIPE",
    placa: "PPP - 9090",
    'index.marca': "FORD"
  },
  {
    anoCarro: 2018,
    created: "2019-08-08T19:58:55.000Z",
    idCarro: 30009,
    idMarca: 3,
    marcaDescricao: "MONZA",
    placa: "TRR - 0880",
    'index.marca': "FIAT"
  },
  {
    anoCarro: 2010,
    created: "2019-05-20T19:58:55.000Z",
    idCarro: 34409,
    idMarca: 4,
    marcaDescricao: "CORSA",
    placa: "QOP - 5580",
    'index.marca': "FORD"
  },
  {
    anoCarro: 2015,
    created: "2019-10-20T19:58:55.000Z",
    idCarro: 38809,
    idMarca: 4,
    marcaDescricao: "KOMBI",
    placa: "GHU - 1080",
    'index.marca': "WOLKSWAGEM"
  },
  {
    anoCarro: 2001,
    created: "2019-10-28T19:58:55.000Z",
    idCarro: 23300,
    idMarca: 2,
    marcaDescricao: "PALIO",
    placa: "DRL - 3506",
    'index.marca': "WOLKSWAGEM"
  }
];

const years = [
  2001, 2002, 2003, 2004, 2005, 2008, 2010,
  2011, 2012, 2013, 2015, 2016, 2017,
  2018, 2019, 2020
]

const typeCar = [
  { typeId: 1, typeName: 'Ford' }, { typeId: 2, typeName: 'Fiat' },
  { typeId: 3, typeName: 'Wolkswagem' }, { typeId: 4, typeName: 'Chevrolet' }
]

module.exports = {
  consultants,
  carros,
  years,
  typeCar
};