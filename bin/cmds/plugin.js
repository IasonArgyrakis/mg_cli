exports.command = 'plugin [plugName]' //this is the prompt help `[name]` defines the argv.na property
exports.aliases = 'pgin'
exports.desc = 'Create an new plugin'
exports.builder = {
  plugName: {
    default: ''
  }
}

const greenboard = require('../utils/greenboard.js');
const fs = require('fs');
const path = require('path');
const { check } = require('yargs');

const utils_filer=require('../utils/filer.js');




handler = function (argv) {

  if (argv.plugName === '') {

    console.log('Please provide a name for the Plugin (Vendor Defaults to MG_CLI)')
  }
  else {

    console.log(greenboard.write(argv.plugName))
    
    let pwd=process.env.PWD.toString();
    console.log(__dirname);

    let dirs=utils_filer.getfolderDirectories(__dirname+"/Templates/");

    for (let i = 0; i < dirs.length; i++) {

      //console.log(dirs[i])
      utils_filer.recurisive_dis(dirs[i]);
    }
    

    

     
    


  }

 



  }
  exports.handler = handler;
