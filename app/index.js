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
    },{
      name: 'description',
      message: 'Description for the project'
    },{
      name: 'has_frame',
      type: 'confirm',
      message: 'Has frame?'
    },{
      name: 'has_toolbar',
      type: 'confirm',
      message: 'Has toolbar?'
    },{
      name : 'is_resizable',
      type: 'confirm',
      message: 'Is resizable?'
    }];
    this.prompt(prompts, function (props) {
      this.appName = props.appName;
      this.description = props.description;
      this.has_frame = props.has_frame;
      done();
    }.bind(this));
  },
  //Crea las estructuras de las carpetas
  scaffold_folders: function () {
    // Crea la carpeta con el nombre del proyecto
    this.mkdir(this.appName);
    this.mkdir(this.appName+"/app");
    this.mkdir(this.appName+"/app/static");
    this.mkdir(this.appName+"/app/static/images");
    this.mkdir(this.appName+"/app/static/fonts");
    this.mkdir(this.appName+"/app/js");
    this.mkdir(this.appName+"/app/js/modules");
    this.mkdir(this.appName+"/app/views");
    this.mkdir(this.appName+"/app/views/partials");
    this.mkdir(this.appName+"/app/stylesheets");
    this.mkdir(this.appName+"/app/stylesheets/stylus");
  },
  copy_files: function(){
    //Context for the templating
    var context = {
      site_name : this.appName,
      description : this.description,
      has_frame : this.has_frame,
      has_toolbar: this.has_toolbar,
      is_resizable: this.is_resizable,
    };

    //Project Files
    this.copy("_gruntfile.js", this.appName+"/gruntfile.js");
    this.template("_package.json", this.appName+"/package.json",context);
    this.copy("_README.md", this.appName+"/README.md");
    this.copy("_.gitignore",this.appName+"/.gitignore");

    //Node-webkit
    this.copy("_nw.js", this.appName+"/app/nw.js");
    this.copy("_main.html", this.appName+"/app/views/main.html");

    //Stylesheets
    this.copy("_source.styl",this.appName+"/app/stylesheets/stylus/source.styl");

    //Views
    this.copy("_index.html",this.appName+"/app/views/index.html");

    //Javascripts
    this.copy("_index.js",this.appName+"/app/js/index.js");
  }
});
