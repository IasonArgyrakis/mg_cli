exports.command = 'g []' //this is the prompt help `[name]` defines the argv.na property

exports.desc = 'Create an new plugin'
exports.help = 'Create an new plugin'
exports.builder = {
  no_config: {
    default: true
  },
  block: {
    default: false
  },
  model: {}

}



const path = require('path');
const fileRabit= require("filerabit")
const { check, config } = require('yargs');
const { Console, dir } = require('console');
const readline = require('readline');


function askQuestion(query) {
  const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
  });

  return new Promise(resolve => rl.question(query, ans => {
      rl.close();
      resolve(ans);
  }))
}

handler = function (argv) {
 
 

 
 console.log(argv);
  if(argv.block!==true){
    no_config=false
  }

  if (argv.no_config) {

    console.log('Please provide a name for the Plugin (Vendor Defaults to MG_CLI)')
    process.exit(1)
  }
  // else {

  //console.log(greenboard.write(argv.plugName))

  let pwd=process.env.PWD.toString();
  const ans = await askQuestion("Enter block ");

  console.log(pwd);


  let file_list=fileRabit.exploreNest(__dirname + "/Templates/Plugin/MG_CLI/plug-in-name/");


  console.log(file_list);
  
  
  let vars={VendorName:"MG_CLI",pluginName:"json"};
  //let vars={VendorName:"FireFox",pluginName:"is on Fire"};
  //let vars={VendorName:"Chorme",pluginName:"is the surfer"};
  




 fileRabit.createFileFromRelativePath('Block/Adminhtml/Items/Edit/Form.php',vars,__dirname)
  
}

  





  
exports.handler = handler;
