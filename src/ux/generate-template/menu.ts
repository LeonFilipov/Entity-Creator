import { Template } from "../../class/template";
import { TEMPLATE_ATTRIBUTES } from "../../utils/get-template-attributes";
import { askForTemplateData } from "./prompts";

export const generateTemplate = async () => {
    const { fileName, name, collection } = await askForTemplateData();

    Template.createFile(fileName, name, collection, TEMPLATE_ATTRIBUTES);

    console.log('✅ Template generated successfully!');
}