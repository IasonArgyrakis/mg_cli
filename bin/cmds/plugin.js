exports.command = 'plugin [plugName]' //this is the prompt help `[name]` defines the argv.na property
exports.aliases = 'pgin'
exports.desc = 'Create an new plugin'
exports.builder = {
  plugName: {
    default: ''
  }
}

const greenboard = require('../greenboard.js');
const fs = require('fs');
const path = require('path');
const { check } = require('yargs');




handler = function (argv) {

  if (argv.plugName === '') {

    console.log('Please provide a name for the Plugin (Vendor Defaults to MG_CLI)')
  }
  else {

    console.log(greenboard.write(argv.plugName))
    console.log(process.env.PWD)
    //Make plugin Direcotry

    
    
    // fs.mkdir(path.join(process.env.PWD, 'MG_CLI'), { recursive: true }, (err) => {
    //   if (err) {
    //     return console.error(err);
    //   }
    //   console.log('MG_CLI made');
    // });


    //Make Plugin Root folder Populate it based on the tempalate
    // console.log(fs.mkdir(path.join(process.env.PWD, 'MG_CLI/' + argv.plugName), (err) => {
    //   if (err && err.errno==-17) {
    //     return console.log(greenboard.error("plugin already existis"));
    //   }
    //   console.log('PLug Directory created successfully!');
    // }));    
    
    pluginRootFolder= process.env.PWD+'/MG_CLI/' + argv.plugName+'/';
    console.log(pluginRootFolder);
  
    console.log(__dirname);
    const dree = require('dree');   
    dree.scanAsync(__dirname+'/Templates/Plugin/MG_CLI/plug-in-name/')
      .then(function (tree) {
        
        let children=tree.children;
        for (let i = 0; i < children.length; i++) {
          recurisiveChildren(children[i])
        }

        
        
      });
  } 

  function recurisiveChildren(obj){
    if(obj.type==="directory"){
    let children=obj.children;
        for (let i = 0; i < children.length; i++) {
          console.log(children[i])
          recurisiveChildren(children[i])
        }
      }
      else{
        fs.readFile('/Users/joe/test.txt', 'utf8' , (err, data) => {
          if (err) {
            console.error(err)
            return
          }
          console.log(data)
        })
      }
  }

  

}
exports.handler = handler;