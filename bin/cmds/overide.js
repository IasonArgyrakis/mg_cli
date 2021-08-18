exports.command = 'm []' //this is the prompt help `[name]` defines the argv.na property

exports.desc = 'Create an new plugin'
exports.help = 'Create an new plugin'
exports.builder = {
    no_config: {
        default: true
    },
    block: {
        default: false
    },
    b: {
        default: false
    },
}





const fileRabit = require("filerabit")




const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


handler = function (argv) {



    let file_list = fileRabit.exploreNest(process.env.PWD.toString());


    console.log(file_list)
    composer = false;


    for (let index = 0; index < file_list.length; index++) {
        const fileName = array[index];
        if (fileName == "composer.json") { composer = true }
    }
    if(composer){
        console.log("Composer file found you may make ")
    }






}








exports.handler = handler;
