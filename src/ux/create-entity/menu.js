import { askForEntityJson, askForOutputPath } from './prompts.js';
import { entityJsonParser } from '../../utils/entity-json-parser.js';
import { executeEntityGenerator } from '../../commands/create-entity/index.js';

export const createEntityMain = async () => {
    const entity_json_path = await askForEntityJson();
    
    const output_path = await askForOutputPath();

    const entity_json = entityJsonParser(entity_json_path);

    executeEntityGenerator(entity_json, output_path);
}