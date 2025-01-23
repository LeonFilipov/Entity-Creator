import fs from 'fs';
import { generateEntity } from '../../generators/generate-entity-class.js';
import { generateEntityValueObjects } from '../../generators/generate-entity-value-objects.js';
import { generateEntitySchema } from '../../generators/generate-entity-schema.js';

export const executeEntityGenerator = async (entity_json, output_path) => {
    output_path = `${output_path}/${entity_json.entity.collection}`;
    
    try {
        fs.mkdirSync(`${output_path}/application`, { recursive: true });
    } catch (error) {
        console.error(`Error creating directory: ${output_path}/application`);
    }
    
    generateEntity(entity_json.entity.name, entity_json.entity.attributes, output_path);
    
    generateEntityValueObjects(entity_json.entity.name, entity_json.entity.attributes, output_path);
    
    generateEntitySchema(entity_json.entity.name, entity_json.entity.collection ,entity_json.entity.attributes, output_path);
}