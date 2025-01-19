#!/usr/bin/env node
import { program } from "commander"
import fs from 'fs-extra'
import { generateEntity } from "./generators/generate-entity-class.js"
import { generateEntityValueObjects } from "./generators/generate-entity-value-objects.js"
import { generateEntitySchema } from "./generators/generate-entity-schema.js"

program
    .name("entity-generator")
    .version("1.0.0")
    .description("Generate entity from json file")
    .option("-f, --file <file>", "json file path")
    .option("-o, --output <output>", "output directory")
    .parse(process.argv);

if (!program.opts().file) {
    console.error("❌ Please provide json file path");
    process.exit(1);
}

let output_path = program.opts().output ?? "./app/contexts/morpheus/";

const file = program.opts().file;

const json = JSON.parse(fs.readFileSync(file, "utf-8"));

if (!json.entity) {
    console.error("❌ Please provide an entity");
    process.exit(1);
}

if (!json.entity.collection) {
    console.error("❌ Please provide a collection");
    process.exit(1);
}

output_path = `${output_path}/${json.entity.collection}`;

fs.mkdirSync(`${output_path}/application`, { recursive: true });

generateEntity(json.entity.name, json.entity.attributes, output_path);

generateEntityValueObjects(json.entity.name, json.entity.attributes, output_path);

generateEntitySchema(json.entity.name, json.entity.collection ,json.entity.attributes, output_path);
