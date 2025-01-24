import fs from 'fs-extra';
import Mustache from 'mustache';
import { ENTITY_VALUE_OBJECT_TEMPLATE } from '../templates/template-entity-value-object';
import { parsePrimitiveName } from '../utils/parse-primitive-name';

export const generateEntityValueObjects = (entityName, attributes, path) => {
    const className = entityName.charAt(0).toUpperCase() + entityName.slice(1);
    
    const typesArray = [{
        attributeName: 'Id',
        primitiveName: '_id',
        type: 'String',
    }]

    attributes.forEach(attribute => {
        typesArray.push({
            attributeName: attribute.name.charAt(0).toUpperCase() + attribute.name.slice(1),
            primitiveName: attribute.name,
            type: attribute.type.charAt(0).toUpperCase() + attribute.type.slice(1),
        })
    });

    
    typesArray.forEach(({ attributeName, primitiveName, type }) => {
        const rendered = Mustache.render(ENTITY_VALUE_OBJECT_TEMPLATE, {
            className,
            attributeName,
            type,
        });
        
        if (primitiveName[0] === '_') primitiveName = primitiveName.slice(1);
        primitiveName = parsePrimitiveName(primitiveName);
        const fileName = `${entityName}-${primitiveName}.ts`;
        
        fs.outputFileSync(`${path}/domain/value-objects/${fileName}`, rendered);
        
        console.log(`✅ Value object ${fileName} has been created!`);
    });
};