import fs from "fs-extra";
import { input } from "@inquirer/prompts";
import { entityJsonParser } from "../../../utils/entity-json-parser.js";

/**
 * 
 * @returns { Promise<{ entity_json: any, output_path: string }> }
 */
export const getInquirerParams = async () => {
    const entity_json_path = await input({
        type: 'text',
        name: 'entity-json',
        message: 'Please provide entity json:',
        default: './entity.json',
    });

    const output_path = await input({
        type: 'text',
        name: 'output-path',
        message: 'Please provide output path:',
        default: './app/contexts/morpheus/',
    });

    const entity_json = entityJsonParser(entity_json_path);

    return {
        entity_json,
        output_path
    }
}
