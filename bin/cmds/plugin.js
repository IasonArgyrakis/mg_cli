exports.command = '<plugin_name> ' //this is the prompt help
exports.desc = 'Create an new plugin'
exports.builder = {
  plugin_name: {
    default: ''
  }
}

const greenboard=require('../greenboard.js');

handler=function(argv) {
    
    if(argv.plugin_name===''){
      
        console.log('Please provide a name for the Plugin (Vendor Defaults to MG_CLI)' )
    } 
    else{
       console.log(greenboard.write(argv))
       console.log(__dirname)
    } 
  
}
exports.handler=handler;