var yeoman = require('yeoman-generator');

module.exports = yeoman.generators.Base.extend({
  method1: function () {
    console.log('Soy el primer elemento de la cadena');
  },
  method2: function () {
    console.log('method 2 just ran');
  }
});
