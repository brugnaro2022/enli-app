const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
module.exports = mongoose.connect('mongodb://localhost/enli');
// module.exports = mongoose.connect('mongodb://root:root123456@ds229118.mlab.com:29118/enli');

mongoose.Error.messages.general.required = 'O atributo {PATH} é obrigatório.'
mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'";
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é maior que o limite máximo de '{MAX}'";
mongoose.Error.messages.String.enum = "O '{VALUE}' não é valido para o atributo '{PATH}'";
