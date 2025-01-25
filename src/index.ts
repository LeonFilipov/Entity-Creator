import { select } from '@inquirer/prompts'
import { createEntityMain } from './ux/create-entity/menu.js'
import { generateTemplate } from './ux/generate-template/menu.js';

const main = async () => {
    console.clear();
    
    const options = [
        { name: 'Create entity', value: createEntityMain },
        { name: 'Generate template file', value: generateTemplate },
    ]
    
    const action = await select({
        message: 'What would you like to do?',
        choices: options,
    })

    action();
}

main();