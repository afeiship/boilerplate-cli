#!/usr/bin/env node
const { Command } = require('commander');
const chalk = require('chalk');

// next packages:
require('@jswork/next');
require('@jswork/next-absolute-package');

const { version } = nx.absolutePackage();
const program = new Command();
const exec = require('child_process').execSync;

program.version(version);

program
  .option('-d, --debug', 'only show cmds, but not clean.')
  .parse(process.argv);

nx.declare({
  statics: {
    init() {
      const app = new this();
      app.start();
    }
  },
  methods: {
    init() {},
    start() {
      console.log(chalk.green('🚗 hello cli.'));
    }
  }
});
