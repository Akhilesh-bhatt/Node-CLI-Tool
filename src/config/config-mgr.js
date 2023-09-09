const chalk = require('chalk');
const { cosmiconfigSync } = require('cosmiconfig');
const configLoader = cosmiconfigSync('tool');
const schema = require('./schema.json')
const betterAjvErrors = require('better-ajv-errors').default;
const Ajv = require('ajv').default
const ajv = new Ajv();

module.exports = function getConfig() {
  const result = configLoader.search(process.cwd());  
  const valid = ajv.validate(schema, result.config);

  if(result){
    if(!valid){
      console.log(chalk.yellow("Invalid configuration was supplied!"));
      console.log(betterAjvErrors(schema, result.config, ajv.errors));
      process.exit(1);
    }
    console.log('Found Configuration', result.config);
    return result.config;
  }

  else{
    console.log(chalk.yellow('Could not find configuration, Using default'));
    return {port: 1234};
  }
  
}