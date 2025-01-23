import fs from "fs";

export const entityJsonParser = (filePath) => {   
    if (!fs.existsSync(filePath)) {
        console.error("❌ File does not exist");
        process.exit(1);
    }
    try {
        const entity_json = JSON.parse(fs.readFileSync(filePath, "utf-8"));
        
        if (!entity_json.entity) {
            console.error("❌ Please provide an entity");
            process.exit(1);
        }
        if (!entity_json.entity.collection) {
            console.error("❌ Please provide a collection");
            process.exit(1);
        }
        if (!entity_json.entity.name) {
            console.error("❌ Please provide a name");
            process.exit(1);
        }
        if (!entity_json.entity.attributes) {
            console.error("❌ Please provide attributes, if no attributes, provide an empty array");
            process.exit(1);
        }
        return entity_json;
    } catch (error) {
        throw new Error(`Error parsing json file: ${error.message}`);
    }
}