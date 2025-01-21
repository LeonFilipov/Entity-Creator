#!/usr/bin/env node
import { program } from "commander"
import { getCommanderParams } from "../commands/create-entity/params/params-commander.js"
import { executeEntityGenerator } from "../commands/create-entity/index.js"

const getCommanderProgram = () => {
    const program = new Command();

    program
        .name("entity-generator")
        .version("1.0.0")
        .description("Generate entity from json file")
        .option("-f, --file <json-file>", "json file path")
        .option("-o, --output <output-path>", "Output directory")
        .parse(process.argv);

    return program;
}

const programCommander = getCommanderProgram();

const { entity_json, output_path } = getCommanderParams(programCommander);

executeEntityGenerator(entity_json, output_path);