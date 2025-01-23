import { entityJsonParser } from "../../../utils/entity-json-parser.js";

export const getCommanderParams = (program) => {
    const entity_json_path = program.opts().file;
    
    if (!entity_json_path) {
        console.error("❌ Please provide json file path");
        process.exit(1);
    }
    
    const output_path = program.opts().output ?? "./app/contexts/morpheus/";
    
    const entity_json = entityJsonParser(entity_json_path);
    
    return {
        entity_json,
        output_path
    }
}