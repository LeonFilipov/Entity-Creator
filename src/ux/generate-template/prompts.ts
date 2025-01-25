import { input } from '@inquirer/prompts';
import { Mongoose } from 'mongoose';



export const askForTemplateData = async () => {
    const fileName = await input({
        message: 'Please, enter the name of the file:',
        default: 'entity',
    });
    const name = await input({
        message: 'Now, enter the name of the entity (camelCase):',
    });
    const collection = await input({
        message: 'What is the collection of the template?',
    });

    return { fileName, name, collection };
}
