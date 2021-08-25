exports.command = 'g []' //this is the prompt help `[name]` defines the argv.na property
 
exports.desc = 'ng equivalalent for magento2 \n \n https://github.com/IasonArgyrakis/mg_cli/blob/main/README.md#quickstart'
exports.help = 'https://github.com/IasonArgyrakis/mg_cli/blob/main/README.md#quickstart'
exports.builder = {
  no_config: {
    default: true
  },
  // block: {
  //   default: true
  // },

}




const fileRabit = require("filerabit")
const chalk = require('chalk');
const yargs = require("yargs");
const { argv } = require("process")





const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});


handler = function (argv) {



  if (argv.debug) {
    console.log(argv);
    console.log(process.env.PWD);
  }

  var docArguments = { VendorName: "MGCLI", moduleName: "Json", blockextends: undefined, blockclass: undefined,options:{exclude:undefined} };
  // console.log(vars)
  //Make vendorname Ca

if(argv.register){
  console.log(chalk.yellow("Registering Module as:"));
  console.log(chalk.yellow("       Vendor:",docArguments.VendorName));
  console.log(chalk.yellow("       Module:",docArguments.moduleName));
  RegisterModule(docArguments)
  process.exit(1)

}

  switch (typeof argv.e) {
    case "undefined":
      docArguments.blockextends = "";
      break;

    case "boolean":
      docArguments.blockextends = true;
      
      break;

    case "string":
      
      docArguments.blockextends = " extends " + JSON.stringify(argv.e)
      break;

    case "array":
      console.log(chalk.yellow("mg_cli does not yet support multiple block extension sorry...."));
      process.exit(1)
      break;

    default:
      break;
  }



  switch (typeof argv.b) {
    case "boolean":
      console.log(chalk.red("You Have to define a class name as 'mg g --b yourBlockName' "));
      process.exit(1)
      break;

    case "string":
      docArguments.blockclass = argv.b
      MakeBlocks(docArguments)
      break;

    case "array":
      console.log(chalk.red("mg_cli does not yet support multiple block creation sorry...."));
      process.exit(1)

    default:
      break;
  }

  switch (typeof argv.ctrlr) {
    case "boolean":
      docArguments.blockclass = "Index"
      console.log(chalk.red("You Have to define a class name as 'mg g --ctr yourControlerName' "));

      break;

    case "string":
      docArguments.blockclass = argv.ctrlr
      MakeControler(docArguments)
      break;

    case "array":
      console.log(chalk.red("mg_cli does not yet support multiple block creation sorry...."));
      process.exit(1)

    default:
      break;
  }

  switch (typeof argv.hlpr) {
    
    case "boolean":
      docArguments.blockclass = "Data"
      MakeHelper(docArguments)
      

      break;

    case "string":
    case "array":
      console.log(chalk.red("you can only make a helper using --h  'use mg cli --h'  "));
      

    default:
      process.exit(1)
      break;
  }

  switch (typeof argv.mdl) {
    case "boolean":
      console.log(chalk.red("You Have to define a class name as 'mg g --mdl yourModelName' "));

      break;

    case "string":
      docArguments.blockclass = argv.mdl
      MakeControler(docArguments)
      break;

    case "array":
      console.log(chalk.red("mg_cli does not yet support multiple Model creation sorry...."));
      process.exit(1)

    default:
      break;
  }

  switch (typeof argv.hlpr) {
    
    case "boolean":
      docArguments.blockclass = "Data"
      console.log(chalk.green("Helper Default Name"+docArguments.blockclass));
      MakeHelper(docArguments)
      

      break;

    case "string":
      console.log(chalk.yellow("Helper will be renamed to: "+argv.hlpr));
      docArguments.blockclass = argv.hlpr
      MakeHelper(docArguments)
      break;
    case "array":
      console.log(chalk.red("you can only make a helper using --h  'use mg cli --h'  "));
      

    default:
      process.exit(1)
      break;
  }







  process.exit(1)
}










function MakeBlocks(vars) {
  console.log(chalk.yellow("Making Blocks/"))
  if(vars.blockextends){
    vars.blockextends=" extends \\Magento\\Framework\\View\\Element\\Template"
  }
  
  let file_list = fileRabit.exploreNest(__dirname + "/Templates/Block-Cli/");
  for (let index = 0; index < file_list.length; index++) {
    let element = file_list[index];
    fileRabit.createFileFromRelativePath(element, vars, __dirname + "/Templates/Block-Cli/")

  }
 
}

function MakeControler(vars) {
  console.log(chalk.yellow("Making Controler/"))
  if(vars.blockextends){
  vars.blockextends = " extends \\Magento\\Framework\\App\\Action\\Action"
  }

  let file_list = fileRabit.exploreNest(__dirname + "/Templates/Controler-Cli/");
  for (let index = 0; index < file_list.length; index++) {
    let element = file_list[index];
    fileRabit.createFileFromRelativePath(element, vars, __dirname + "/Templates/Controler-Cli/")

  }
  
}

function MakeModel(vars) {
  console.log(chalk.yellow("Making Model/"))
  if(vars.blockextends){
    vars.blockextends = " extends \\Magento\\Framework\\Model\\AbstractModel"
    }

  let file_list = fileRabit.exploreNest(__dirname + "/Templates/Model-Cli/");
  for (let index = 0; index < file_list.length; index++) {
    let element = file_list[index];
    fileRabit.createFileFromRelativePath(element, vars, __dirname + "/Templates/Model-Cli/")

  }
  
}

//obs
function MakeObserver(vars) {
  console.log(chalk.yellow("Making Observer/"))
  if(vars.blockextends){
    vars.blockextends = " extends \\Magento\\Framework\\Event\\ObserverInterface"
    }

  let file_list = fileRabit.exploreNest(__dirname + "/Templates/Observer-Cli/");
  for (let index = 0; index < file_list.length; index++) {
    let element = file_list[index];
    fileRabit.createFileFromRelativePath(element, vars, __dirname + "/Templates/Observer-Cli/")

  }
  
}

//helper
function MakeHelper(vars) {
  console.log(chalk.yellow("Making Helper/"))
   vars['blockclass']="Helper";
   
  
  let file_list = fileRabit.exploreNest(__dirname + "/Templates/Helper-Cli/");
  for (let index = 0; index < file_list.length; index++) {
    let element = file_list[index];
    fileRabit.createFileFromRelativePath(element, vars, __dirname + "/Templates/Helper-Cli/")

  }
  MakeEtc(vars,"Helper-Cli/");
  
}

function MakeEtc(vars,bundle) {
  console.log(chalk.yellow("Making Etc/"))
  //if budnle is defined it uses the subfolder bundle
  //when naming a new bundle use the orginal folder tempalate 
  if(bundle!=undefined){
    bundle="bundle/"+bundle
    vars.keepOriginalName=true;
    //vars.blockclass=undefined;    
  }
  else{bundle=""}
  

  let file_list = fileRabit.exploreNest(__dirname + "/Templates/Etc-Cli/"+bundle);
  console.log(file_list)
  for (let index = 0; index < file_list.length; index++) {
    let element = file_list[index];
    fileRabit.createFileFromRelativePath(element, vars, __dirname + "/Templates/Etc-Cli/")

  }
 
}


function RegisterModule(vars) {
  vars.keepOriginalName=true;

  let file_list = fileRabit.exploreNest(__dirname + "/Templates/Composer-Cli/");
  for (let index = 0; index < file_list.length; index++) {
    let element = file_list[index];
    fileRabit.createFileFromRelativePath(element, vars, __dirname + "/Templates/Composer-Cli/")

  }
}








exports.handler = handler;
