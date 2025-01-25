import { readFileSync, write, writeFileSync } from 'fs';

type Attribute<T> = {
    name: string;
    type: T;
    [key: string]: any;
}

export class Template {
    constructor(
        public readonly name: string,
        public readonly collection: string,
        public readonly attributes: Array<Attribute<any>>,
    ) {}

    static fromFile(fileName): Template{
        const file = readFileSync(`${fileName}.json`, 'utf-8');
        const { name, collection, attributes } = JSON.parse(file);
        return new Template(name, collection, attributes);
    }

    static createFile(
        fileName: string,
        name: string,
        collection: string,
        attributes: Array<any>,
    ): void {
        const template = new Template(name, collection, attributes);
        const file = JSON.stringify({ entity: template}, null, 2);
        writeFileSync(`./${fileName}.json`, file, 'utf-8');
    }
}