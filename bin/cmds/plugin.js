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


  //let file_list=fileRabit.exploreNest(__dirname + "/Templates/Plugin/MG_CLI/plug-in-name/");


  //console.log(list);
  
  
  let vars={VendorName:"BigBrownFox",pluginName:"undertheBridge"};
  //let vars={VendorName:"FireFox",pluginName:"is on Fire"};
  //let vars={VendorName:"Chorme",pluginName:"is the surfer"};
  




 fileRabit.createFileFromRelativePath('Block/Adminhtml/Items/Edit/Form.php',vars,__dirname)
  
}

  





  
exports.handler = handler;
