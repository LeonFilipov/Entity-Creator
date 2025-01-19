import { ENTITY_CLASS_TEMPLATE } from '../templates/template-entity-class.js';
import fs from 'fs-extra';
import Mustache from 'mustache';

export const generateEntity = (entityName, attributes, path) => {
    const className = entityName.charAt(0).toUpperCase() + entityName.slice(1);
    const attributesArray = attributes.map(attribute => ({
      attributeName: attribute.name,
      primitiveName: attribute.name,
      attributeType: `${className}${attribute.name.charAt(0).toUpperCase() + attribute.name.slice(1)}`,
    }));
  
    const rendered = Mustache.render(ENTITY_CLASS_TEMPLATE, {
      className,
      attributes: attributesArray,
    });
  
    fs.outputFileSync(`${path}/domain/${entityName}.ts`, rendered);
    
    console.log(`✅ Class ${entityName}.ts has been created!`);
};