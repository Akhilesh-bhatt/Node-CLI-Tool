#!/usr/bin/env node
// const arg = require('arg');
import arg from 'arg';
import chalk from 'chalk';

try {
  const args = arg({
    "--start": Boolean,
    "--build": Boolean
  })
  // console.log(args);
  
  if(args["--start"]){
    console.log(chalk.whiteBright("starting the tool"));
  }  
} catch (e) {
  console.log(chalk.yellow(e.message));
  console.log();
  usage();
}

function usage() {
  console.log(`${chalk.whiteBright('tool [CMD]')}
  ${chalk.greenBright('--start')}\tStarts the app
  ${chalk.greenBright('--build')}\tBuilds the app`);
}