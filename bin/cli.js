#!/usr/bin/env node

const { argv } = require('yargs')




require('yargs/yargs')(process.argv.slice(2))
  //.middleware(showlogo)
  .commandDir('cmds')
  
  .demandCommand()
  //.help()
  .argv 

  