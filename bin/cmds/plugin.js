exports.command = 'g []' //this is the prompt help `[name]` defines the argv.na property

exports.desc = 'Create an new plugin'
exports.help = 'Create an new plugin'
exports.builder = {
  no_config: {
    default: true
  },
  block: {},
  model: {}

}



const path = require('path');
const fileRabit= require("filerabit")
const { check, config } = require('yargs');
const { Console, dir } = require('console');




handler = function (argv) {
 
 

 
 console.log(argv);

  // if (argv.plugName === '') {

  //   console.log('Please provide a name for the Plugin (Vendor Defaults to MG_CLI)')
  // }
  // else {

  //console.log(greenboard.write(argv.plugName))

  //let pwd=process.env.PWD.toString();


  let list=fileRabit.exploreNest(__dirname + "/Templates/Plugin/MG_CLI/plug-in-name/");


  console.log(list);


  //fileRabit.createFileFromRelativePath('Block/Adminhtml/Items/Edit/Form.php');
  for (let i = 0; i < list.length; i++) {
    let type = list[i].split("/")
    console.log(type[0])
    if (argv.no_config) {



      if (type[0]=="Block" && argv.block != undefined) {
        fileRabit.createFileFromRelativePath(list[i], __dirname);
      }


      if (type[0]=="Model" && argv.model != undefined) {
        fileRabit.createFileFromRelativePath(list[i], __dirname);
      }
    }


  
}
    
    


    

     
    


  

 



  }
exports.handler = handler;
