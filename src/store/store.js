// aqui definimos qual config ele vai pega para usar na aplicação

// Se tiver variavel igual a production pega a primeira config
// se nao pega a desenvolvimento 
if(process.env.NODE_ENV === 'production') {
  module.exports = require('./storePrd');
} else {
  module.exports = require('./storeDev');
}
