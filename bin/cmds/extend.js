exports.command = 'e []' //this is the prompt help `[name]` defines the argv.na property

exports.desc = 'Extend layouts with phtml templates '
exports.help = 'https://github.com/IasonArgyrakis/mg_cli/blob/main/README.md#quickstart'
exports.builder = {
  no_config: {
    default: true
  },
  // block: {
  //   default: true
  // },

}




const fileRabit = require("filerabit");
const chalk = require('chalk');
const yargs = require("yargs");
const { argv } = require("process");
const fs = require('fs');
const paths = require("path");
const { start } = require("repl");





const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});


handler = function (argv) {

  

  if (argv.debug) {
    console.log(argv);
    console.log(process.cwd());
   
  }
  console.log(findModuleInfo())
  

  





  process.exit(1)
}


function findModuleInfo()
{
  let data
  console.log("looking for "+chalk.yellow("'registration.php'"))
  try {
     data = fs.readFileSync('./registration.php',{encoding:'utf8', flag:'r'});
    
  } catch (e) {
    console.log(e)
    if(e.errno=-4058){
    console.log(chalk.red("Registration not found make one first") )
    process.exit(1)}
  }

   let Vendor_Module=ParseRegisterFile(data).split("_")
  return { VendorName: Vendor_Module[0], moduleName: Vendor_Module[1] }
 
  
  function ParseRegisterFile(fileContent){
   let moduleRegex=/('+(([A-Z])+([A-z]*))+_+(([A-Z])+([A-z]*))+')/g
   found=fileContent.match(moduleRegex);
  
   if(found==null){ console.log(chalk.red("Module Name Apears to be incorect") );process.exit(1)}
  else
     return found[0].slice(1,-1)

  }

}













exports.handler = handler;
