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


    //Make New pluginVendor Direcotry

    // fs.mkdir(path.join(process.env.PWD, 'MG_CLI'), { recursive: true }, (err) => {
    //   if (err) {
    //     return console.error(err);
    //   }
    //   console.log('MG_CLI made');
    // });


    //Make Plugin module Diractory 

    // console.log(fs.mkdir(path.join(process.env.PWD, 'MG_CLI/' + argv.plugName), (err) => {
    //   if (err && err.errno==-17) {
    //     return console.log(greenboard.error("plugin already existis"));
    //   }
    //   console.log('PLug Directory created successfully!');
    // }));    

    pluginRootFolder = process.env.PWD + '/MG_CLI/' + argv.plugName + '/';
    console.log(pluginRootFolder);

    //console.log(__dirname);
    const dree = require('dree');
    dree.scanAsync(__dirname + '/Templates/Plugin/MG_CLI/plug-in-name/')
      .then(function (tree) {

        let children = tree.children;
        for (let i = 0; i < children.length; i++) {
          recurisiveChildren(children[i])
        }



      });
  }

  //Populate it based on the tempalate

  function recurisiveChildren(obj) {
    //if directory keep digiing
    if (obj.type === "directory") {
      let children = obj.children;
      for (let i = 0; i < children.length; i++) {

        recurisiveChildren(children[i])
      }
    }
    else {  
      createFileFromRelativePath(obj.relativePath)

      // fs.readFile(obj.path, 'utf8' , (err, data) => {
      //   if (err) {
      //     console.error(err)
      //     return
      //   }

      //   //make file into tempalte
      //   var template = Handlebars.compile(data);
      //   template({ VendorName, pluginName: argv.plugName })


      // })
    }

    //@todo Add this also as a command cfrp
    function createFileFromRelativePath(RelativePath) {

      RelativePath_Arr = RelativePath.split("/");
      console.log(RelativePath_Arr);
      //Define the path to berelative from where the cli was called  `process.env.PWD`
      let newDirPath = './'
      for (let i = 0; i < RelativePath_Arr.length; i++) {
        newDirPath = RelativePath_Arr[i] + "/"
        if (i !== RelativePath_Arr.length - 1) {
          fs.mkdir(path.join(process.env.PWD,newDirPath), (err) => {
            if (err && err.errno==-17) {
              return console.error("Skiped Folder Exists");
            }
            console.log('made ' +newDirPath );
          });
        } else {
          // @todo Make file

        }



      }
    }
  }



  }
  exports.handler = handler;
