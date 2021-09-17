#!/usr/bin/env node

const commander = require("commander");
const util = require("./util");
const container = require("./app/@Container");
const component = require("./app/@component");

const program = new commander.Command();

program.version("1.0.0").name("gatto").description("React CLI");

program
  .command("@skeleton")
  .alias("make:skeleton")
  .argument("<name>")
  .description("Creates React skeleton project")
  .action((name) => {
    util.writeToFile(name, "hocus pocus");
  });
program
  .command("@component")
  .alias("make:component")
  .argument("<name>")
  .description("Creates React component")
  .action((name) => {
    component.createComponent(name);
  });
program
  .command("@container")
  .alias("make:container")
  .argument("<name>")
  .description("Creates React container")
  .action((name) => {
    container.createContainer(name);
  });
program
  .command("proj")
  .description("Returns")
  .action(() => {
    console.log(__dirname);
  });

program.parse(process.argv);
