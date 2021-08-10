exports.command = 'plugin [plugName]' //this is the prompt help `[name]` defines the argv.na property
exports.aliases = 'pgin'
exports.desc = 'Create an new plugin'
exports.builder = {
  plugName: {
    default: ''
  }
}

const greenboard = require('../greenboard.js');
const fs = require('fs');
const path = require('path');
const { check } = require('yargs');

handler = function (argv) {

  if (argv.plugName === '') {

    console.log('Please provide a name for the Plugin (Vendor Defaults to MG_CLI)')
  }
  else {

    console.log(greenboard.write(argv.plugName))
    console.log(process.env.PWD)
    //Make plugin Direcotry

    
    
    // fs.mkdir(path.join(process.env.PWD, 'MG_CLI'), { recursive: true }, (err) => {
    //   if (err) {
    //     return console.error(err);
    //   }
    //   console.log('MG_CLI made');
    // });

    // console.log(fs.mkdir(path.join(process.env.PWD, 'MG_CLI/' + argv.plugName), (err) => {
    //   if (err && err.errno==-17) {
    //     return console.log(greenboard.error("plugin already existis"));
    //   }
    //   console.log('PLug Directory created successfully!');
    // }));

    //Describe the template 
    
    pluginRoot= 'MG_CLI/' + argv.plugName;
    fs.readdir(testFolder, (err, files) => {
      files.forEach(file => {
        console.log(file);
      });
    });

  }

}
exports.handler = handler;