#!/usr/bin/env node
const arg = require('arg');
const chalk = require('chalk');
const path = require('path');
const pkgUp = require('pkg-up');

try {
  const args = arg({
    "--start": Boolean,
    "--build": Boolean
  })
  const pkgPath = pkgUp.sync({cwd: process.cwd()});
  const pkg = require(pkgPath);
  
  if(pkg.tool){
    console.log('Found Configuration', pkg.tool);
  }

  else{
    console.log(chalk.yellow('Could not find configuration, Using default'));
  }
  
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