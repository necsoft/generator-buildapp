var yeoman = require('yeoman-generator');

module.exports = yeoman.generators.Base.extend({
  start_and_prompting: function () {
    console.log('The Buildapp - Project generator');

    // Done for async
    var done = this.async();
    //Prompt
    var prompts = [{
      name: 'appName',
      message: 'What is your project name?'
    }];
    this.prompt(prompts, function (props) {
      this.appName = props.appName;
      done();
    }.bind(this));
  },
  //Crea las estructuras de las carpetas
  scaffold_folders: function () {
    // Crea la carpeta con el nombre del proyecto
    this.mkdir(this.appName);
    this.mkdir(this.appName+"/app");
    this.mkdir(this.appName+"/app/static");
    this.mkdir(this.appName+"/app/static/img");
    this.mkdir(this.appName+"/app/static/stylesheets");
    this.mkdir(this.appName+"/app/static/fonts");
  },
  copy_files: function(){
    this.copy("_main.html", this.appName+"/app/main.html");
    this.copy("_nw.js", this.appName+"/app/nw.js");
    this.copy("_package.json", this.appName+"/package.json");
    this.copy("_gruntfile.js", this.appName+"/gruntfile.js");
  }
});
