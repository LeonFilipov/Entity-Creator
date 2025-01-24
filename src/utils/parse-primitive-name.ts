// from camelCase to kebab-case
export const parsePrimitiveName = (primitiveName) => {
    return primitiveName.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
};