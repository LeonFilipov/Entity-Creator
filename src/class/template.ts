import { readFileSync, writeFileSync } from 'fs';

type Property<T> = {
    type: T;
    [key: string]: any;
}

type Attribute<T> = {
    name: string;
    properties: Property<T>;
}

export class Template {
    constructor(
        public readonly name: string,
        public readonly collection: string,
        public readonly attributes: Array<Attribute<any>>,
    ) {
        attributes.forEach(this.validateAttribute);
    }

    static fromFile(fileName): Template{
        const file = readFileSync(`${fileName}.json`, 'utf-8');
        const { name, collection, attributes } = JSON.parse(file);
        return new Template(name, collection, attributes);
    }

    static createFile(
        fileName: string,
        name: string,
        collection: string,
        attributes: Array<Attribute<any>>,
    ): void {
        const template = new Template(name, collection, attributes);
        const file = JSON.stringify({ entity: template}, null, 2);
        writeFileSync(`./${fileName}.json`, file, 'utf-8');
    }

    private validateAttribute(attribute: Attribute<any>): void {
        if (!attribute.name) {
            console.log("❌ Attribute name is required");
            process.exit(1);
        }

        if (!attribute.properties) {
            console.log("❌ Attribute properties are required");
            process.exit(1);
        }

        if (!attribute.properties.type) {
            console.log("❌ Attribute type is required");
            process.exit(1);
        }
    }
}