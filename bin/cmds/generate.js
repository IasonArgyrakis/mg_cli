
exports.command = 'g []' //this is the prompt help `[name]` defines the argv.na property

exports.desc = 'Dynamicaly generate Blocks Controllers Helpers etc... '
exports.help = 'https://github.com/IasonArgyrakis/mg_cli/blob/main/README.md#quickstart'
exports.builder = {
  b: {
    desc:" @toDo "
  },

}




const fileRabit = require("filerabit");
const chalk = require('chalk');
const yargs = require("yargs");
const { argv } = require("process");
const fs = require('fs');
const paths = require("path");





const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});


handler = function (argv) {

  

  if (argv.debug) {
    console.log(argv);
    console.log(process.cwd());
  }
  

  var docArguments = { VendorName: "", moduleName: "", blockextends: undefined, blockclass: undefined,cwd:process.cwd() };
 
  // console.log(vars)
  //Make vendorname Ca

  




  switch (typeof argv.e) {
    case "undefined":
      docArguments.blockextends = "";
      break;

    case "boolean":
      docArguments.blockextends = true;

      break;

    case "string":
      let extension=argv.e;
      docArguments.blockextends = " extends " + JSON.stringify(extension).slice(1,-1)
      break;

    case "array":
      console.log(chalk.yellow("mg_cli does not yet support multiple block extension sorry...."));
      process.exit(1)
      
  }
  
  switch (typeof argv.create) {
    
    case "boolean":
        if( argv.create && typeof argv.vendor != "undefined" && typeof argv.module != "undefined"){
          docArguments.VendorName = argv.vendor;
          docArguments.moduleName = argv.module;

          console.log(chalk.yellow("       Vendor:",docArguments.VendorName));
          console.log(chalk.yellow("       ModuleName:",docArguments.moduleName));

          MakeVendorModule(docArguments);
        }
         
        break;
        
        case "string":
        console.log(chalk.red("Undefined --vendor or/and --module. You must define both when --create"))
        console.log(chalk.yellow("ex: mg g --create --vendor VendorName --module ModuleName"))
      

  }
  
  console.log(chalk.blue("Looking for ")+chalk.yellow("registartion.php"))
  Object.assign(docArguments,findModuleInfo())


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
      process.exit(1);
      break;
  }

  switch (typeof argv.ctrlr) {
    case "boolean":
      docArguments.blockclass = "Index"
      MakeControler(docArguments)

      break;

    case "string":
      docArguments.blockclass = argv.ctrlr
      MakeControler(docArguments)
      break;

    case "array":
      console.log(chalk.red("mg_cli does not yet support multiple block creation sorry...."));
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
      break;
  }

  switch (typeof argv.obsrvr) {

    case "boolean":
      docArguments.blockclass = "Data"
      console.log(chalk.green("Helper Default Name"+docArguments.blockclass));
      MakeObservers(docArguments)


      break;

    case "string":
      console.log(chalk.yellow("Helper will be renamed to: "+argv.obsrvr));
      docArguments.blockclass = argv.obsrvr
      MakeObserver(docArguments)

    case "array":
      console.log(chalk.red("you can only make one Observer"));
      break;


  }

  switch (typeof argv.helpr) {
    case "boolean":
      docArguments.blockclass = "Data"
      console.log(chalk.green("Helper Default Name: "+docArguments.blockclass));
      MakeHelper(docArguments);


      break;

    case "string":
      console.log(chalk.yellow("Helper will be renamed to: "+argv.helpr));
      docArguments.blockclass = argv.helpr
      MakeHelper(docArguments)
      break;
      case "array":
        console.log(chalk.red("you can only make one Helper"));
        break;
  }







  process.exit(1)
}










function MakeBlocks(vars) {
  console.log(chalk.yellow("Making Blocks/"))
  console.log( vars.blockextends );
  if(typeof vars.blockextends=="boolean"){
    vars.blockextends=" extends \\Magento\\Framework\\View\\Element\\Template"
  }
  console.log(vars);

  let file_list = fileRabit.exploreNest(__dirname + "/Templates/Block-Cli/");
  for (let index = 0; index < file_list.length; index++) {
    let element = file_list[index];
    fileRabit.createFileFromRelativePath(element, vars, __dirname + "/Templates/Block-Cli/")

  }

}

function MakeControler(vars) {
  console.log(chalk.yellow("Making Controler/"))
  if(typeof vars.blockextends=="boolean"){
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
    if(typeof vars.blockextends=="boolean"){
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
  if(typeof vars.blockextends=="boolean"){
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


  let file_list = fileRabit.exploreNest(__dirname + "/Templates/Helper-Cli/");
  for (let index = 0; index < file_list.length; index++) {
    let element = file_list[index];
    fileRabit.createFileFromRelativePath(element, vars, __dirname + "/Templates/Helper-Cli/")

  }
  //MakeEtc(vars,"Helper-Cli/");

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

function MakeVendorModule( vars ) {

    fs.mkdir(vars.VendorName,{ recursive: true }, (err) => {
        console.log(err)
    });
    fs.mkdir(vars.VendorName+'/'+vars.moduleName,{ recursive: true }, (err) => {
    console.log(err)
  });
  try {
    process.chdir(vars.VendorName+'/'+vars.moduleName);
    
  } catch (error) {
    console.log(error)
    
  }
 
  RegisterModule( vars );
}

function findModuleInfo()
{
  let data
  //console.log("looking for "+chalk.yellow("'registration.php'"))
  try {
     data = fs.readFileSync('./registration.php',{encoding:'utf8', flag:'r'});
    
  } catch (e) {
    //console.log(e)
    if( e.errno == -4058){
    console.log(chalk.red("Registration not found make one first") )
    console.log(chalk.yellow("mg g --create --vendor VendorName --module ModuleName") )
    process.exit(1)}
  }

   let Vendor_Module=ParseRegisterFile(data).split("_")



  return { VendorName: Vendor_Module[0], moduleName: Vendor_Module[1] }
 
  
  function ParseRegisterFile(fileContent){
   let moduleRegex=/('+(([A-Z])+([A-z]*))+_+(([A-Z])+([A-z]*))+')/g
   found=fileContent.match(moduleRegex);
  
   if(found==null){
      console.log(chalk.red("Module Name Apears to be incorect")+"\n"+chalk.yellow("Check register.php") );process.exit(1)
  }
  else{
  console.log(chalk.yellow("registartion.php")+chalk.green(" found"))
     return found[0].slice(1,-1)}

  }

}









exports.handler = handler;
