exports.command = 'p []' //this is the prompt help `[name]` defines the argv.na property

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
    var docArguments = { VendorName: "MGCLI", moduleName: "Json", blockextends: undefined, blockclass: undefined, cwd: process.cwd() };
    var module_profile = JSON.stringify(docArguments);
    console.log(module_profile);

    fs.writeFile("module-profile.json", module_profile, 'utf8', function (err) {
        if (err) {
            console.log("An error occured while writing JSON Object to File.");
            return console.log(err);
        }

        console.log("JSON file has been saved.");
    });

    switch (typeof argv.find) {
        case "boolean":
            //look for registration .php
            
            break;
    
        default:
            break;
    }
    switch (typeof argv.save) {
        case "sa":
            //look for registration .php
            
            break;
    
        default:
            break;
    }
    

    // console.log(vars)
    //Make vendorname Ca

}









exports.handler = handler;
