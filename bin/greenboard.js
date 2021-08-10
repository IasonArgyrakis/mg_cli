const chalk = require("chalk");
const boxen = require("boxen");
const boxenOptions = {
    padding: 1,
    margin: 1,
    borderStyle: "round",
    borderColor: "green",
    backgroundColor: "#555555"
};


const write=(text)=> {
    let greeting = chalk.white.bold(text);
    return boxen(greeting, boxenOptions)
}

exports.write = write