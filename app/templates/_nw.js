//
// nw.js
// -------------------------------------------------------
//
// This file is used for the initialization of node-webkit
//

// nw.gui initialization
var nw = window.require("nw.gui");
var win = nw.Window.get();

// Set the devmode
if(nw.App.argv.slice(0) == "devmode"){
  win.showDevTools();
}
