import fs from 'fs-extra';
import Mustache from 'mustache';
import { ENTITY_SCHEMA } from '../templates/template-entity-schema.js';

export const generateEntitySchema = (entityName, collection, attributes, output) => {
    const className = entityName.charAt(0).toUpperCase() + entityName.slice(1);
    const attributeArray = attributes.map((attribute) => {
        const { name, properties } = attribute;

        return {
            primitiveName: name,
            properties: JSON.stringify(properties).replace(/"([^"]+)":/g, '$1:').replace(/"/g, ''),
        }
    });

    const rendered = Mustache.render(ENTITY_SCHEMA, {
        className,
        attributes: attributeArray,
        collection,
    });

    fs.outputFileSync(`${output}/infrastructure/persistence/schemas/${entityName}-schema.ts`, rendered);

    console.log(`✅ Schema ${entityName}-schema.ts has been created!`);
};