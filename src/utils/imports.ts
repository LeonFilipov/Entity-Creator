import { Project } from 'ts-morph';

export const solveImports = () => {
    console.log('💡 Solving imports...');

    const project = new Project({
        tsConfigFilePath: 'tsconfig.json',
    });
    
    project.addSourceFilesAtPaths('app/**/*.ts');
    
    project.getSourceFiles().forEach(sourceFile => {
        try {
            sourceFile.fixMissingImports();
        } catch (error) {
            console.error(`❌ Error while fixing imports in ${sourceFile.getFilePath()}`);
            console.error(error);
        }
    });
    
    project.saveSync();

    console.log('✅ Imports solved!');
}