import { select } from '@inquirer/prompts'
import { createEntityMain } from './ux/create-entity/menu.js'

const main = async () => {
    console.clear();
    
    const options = [
        { name: 'Create entity', value: createEntityMain },
        // { name: 'Generate entity', value: generateEntity() },
    ]
    
    const action = await select({
        message: 'What would you like to do?',
        choices: options,
    })

    action();
}

main();