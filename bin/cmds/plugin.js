exports.command = 'g []' //this is the prompt help `[name]` defines the argv.na property

exports.desc = 'Create an new plugin'
exports.builder = {
  no_config: {
    default: true
  },
  block:{
    default: false
  },
  module:{
    default: false
  }
}

const greenboard = require('../utils/greenboard.js');

const path = require('path');
const { check, config } = require('yargs');

const utils_filer=require('../utils/filer.js');
const { Console } = require('console');




handler = function (argv) {
  console.log(argv);

  // if (argv.plugName === '') {

  //   console.log('Please provide a name for the Plugin (Vendor Defaults to MG_CLI)')
  // }
  // else {

    //console.log(greenboard.write(argv.plugName))
    
    //let pwd=process.env.PWD.toString();
   

    let dirs=utils_filer.getfolderDirectories(__dirname+"/Templates/Plugin/MG_CLI/plug-in-name/");
    
    for (let i = 0; i < dirs.length; i++) {
     utils_filer.recurisive_dis(dirs[i]);
    }
    
    //console.log(utils_filer.getTempalateFileList);
    let list=utils_filer.getTempalateFileList
    
    
    //utils_filer.createFileFromRelativePath('Block/Adminhtml/Items/Edit/Form.php');
    for (let i = 0; i < list.length; i++) {
    if(argv.no_config){
      utils_filer.createFileFromRelativePath(list[i],__dirname);
    }
    }
    


    

     
    


  

 



  }
  exports.handler = handler;
