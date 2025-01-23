import { input } from '@inquirer/prompts';
import fs from 'fs';

export const askForEntityJson = async () => {
    const entity_json_path = await input({
        message: 'Please provide entity json:',
        default: './entity.json',
        validate: async (input) => {
            if (!fs.existsSync(input)) return '❌ File does not exist';
            
            return true;
        }
    });

    return entity_json_path;
}

export const askForOutputPath = async () => {
    const output_path = await input({
        message: 'Please provide output path:',
        default: './app/contexts/morpheus/',
    });

    return output_path;
}