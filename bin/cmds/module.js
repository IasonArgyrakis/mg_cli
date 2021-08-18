exports.command = 'g []' //this is the prompt help `[name]` defines the argv.na property

exports.desc = ''
exports.help = 'Use `mg g --b '
exports.builder = {
  // no_config: {
  //   default: true
  // },
  // block: {
  //   default: true
  // },

}




const fileRabit = require("filerabit")
let pwd = process.env.PWD.toString();
const chalk = require('chalk');
const { Console } = require("console")





const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});


handler = function (argv) {



  if (argv.debug) {
    console.log(argv);
    console.log(pwd);
  }

  var vars = { VendorName: "MG_CLI", pluginName: "json", blockextends: undefined, blockclass: undefined };
  // console.log(vars)
  //Make vendorname Ca

if(argv.register){
  console.log("Registering Module as:");
  console.log("Vendor:",vars.VendorName);
  console.log("Module:",vars.pluginName);
  RegisterModule(vars)
  process.exit(1)

}

  switch (typeof argv.e) {
    case "undefined":
      vars.blockextends = "";
      break;

    case "boolean":
      vars.blockextends = " extends \Magento\Backend\Block\Widget\Grid\Container"
      break;

    case "string":
      console.log(chalk.yellow('mg_cli cant read backslashes yet sorry....'));
      vars.blockextends = " extends " + JSON.stringify(argv.e)
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
      break;

    case "string":
      vars.blockclass = argv.b
      MakeBlocks(vars)
      break;

    case "array":
      console.log(chalk.red("mg_cli does not yet support multiple block creation sorry...."));
      process.exit(1)

    default:
      break;
  }

  switch (typeof argv.ctr) {
    case "boolean":
      console.log(chalk.red("You Have to define a class name as 'mg g --ctr yourControlerName' "));

      break;

    case "string":
      vars.blockclass = argv.ctr
      MakeControler(vars)
      break;

    case "array":
      console.log(chalk.red("mg_cli does not yet support multiple block creation sorry...."));
      process.exit(1)

    default:
      break;
  }

  switch (typeof argv.mdl) {
    case "boolean":
      console.log(chalk.red("You Have to define a class name as 'mg g --mdl yourModelName' "));

      break;

    case "string":
      vars.blockclass = argv.mdl
      MakeControler(vars)
      break;

    case "array":
      console.log(chalk.red("mg_cli does not yet support multiple Model creation sorry...."));
      process.exit(1)

    default:
      break;
  }







  process.exit(1)
}










function MakeBlocks(vars) {
  console.log(vars)

  let file_list = fileRabit.exploreNest(__dirname + "/Templates/Block-Cli/");
  for (let index = 0; index < file_list.length; index++) {
    let element = file_list[index];
    fileRabit.createFileFromRelativePath(element, vars, __dirname + "/Templates/Block-Cli/")

  }
}
function MakeControler(vars) {
  console.log(vars)

  let file_list = fileRabit.exploreNest(__dirname + "/Templates/Controler-Cli/");
  for (let index = 0; index < file_list.length; index++) {
    let element = file_list[index];
    fileRabit.createFileFromRelativePath(element, vars, __dirname + "/Templates/Controler-Cli/")

  }
}
function MakeEtc(vars) {

  let file_list = fileRabit.exploreNest(__dirname + "/Templates/Etc-Cli/");
  for (let index = 0; index < file_list.length; index++) {
    let element = file_list[index];
    fileRabit.createFileFromRelativePath(element, vars, __dirname + "/Templates/Etc-Cli/")

  }
}
function MakeModel(vars) {

  let file_list = fileRabit.exploreNest(__dirname + "/Templates/Model-Cli/");
  for (let index = 0; index < file_list.length; index++) {
    let element = file_list[index];
    fileRabit.createFileFromRelativePath(element, vars, __dirname + "/Templates/Model-Cli/")

  }
}
function RegisterModule(vars) {

  let file_list = fileRabit.exploreNest(__dirname + "/Templates/Composer-Cli/");
  console.log("--");
  console.log(file_list);
  for (let index = 0; index < file_list.length; index++) {
    let element = file_list[index];
    fileRabit.createFileFromRelativePath(element, vars, __dirname + "/Templates/Composer-Cli/")

  }
}








exports.handler = handler;
