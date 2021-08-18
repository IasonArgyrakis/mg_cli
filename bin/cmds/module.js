exports.command = 'g []' //this is the prompt help `[name]` defines the argv.na property

exports.desc = 'Create an new plugin'
exports.help = 'Create an new plugin'
exports.builder = {
  // no_config: {
  //   default: true
  // },
  // block: {
  //   default: true
  // },
  b:{
    default: true
  }
}




const fileRabit= require("filerabit")
let pwd=process.env.PWD.toString();




const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});


handler = function (argv) {
 
 

 
  console.log(argv);
  console.log(pwd);
  
  let vars={VendorName:"MG_CLI",pluginName:"json",blockclass:argv.b};


  
  if(typeof argv.b == "boolean"){
    console.log("You Have to define a class name as 'mg g --b yourBlockName' ");
    process.exit(1)
  }
  if(typeof argv.b == "string"){
    vars.b=argv.b
  }
  if(typeof argv.b == "array"){
    console.log("mg_cli does not yes support multiple block creation sorry....");
    process.exit(1)

  }


    if(typeof argv.e == "undefined"){
      vars.blockextends="";
    }
    if(typeof argv.e == "boolean"){
      vars.blockextends=" extends \Magento\Backend\Block\Widget\Grid\Container"
    }
    if(typeof argv.e == "string"){
      vars.blockextends=" extends "+argv.e
    }
    if(typeof argv.e == "array"){
      console.log("mg_cli does not yes support multiple block extension sorry....");
      process.exit(1)
    }
    MakeBlocks(vars)
    process.exit(1)
  }
 
  
   



  
 
  

function MakeBlocks(vars)
{
  console.log(vars)
  let file_list=fileRabit.exploreNest(__dirname + "/Templates/Block-Cli/");
  console.log(file_list);
  for (let index = 0; index < file_list.length; index++) {
    let element = file_list[index];
    fileRabit.createFileFromRelativePath(element,vars,__dirname + "/Templates/Block-Cli/")
    
  }
    
    

  
}

  





  
exports.handler = handler;
