import { Project } from 'ts-morph';

export const solveImports = () => {
    const project = new Project({
        tsConfigFilePath: 'tsconfig.json',
    });
    
    project.addSourceFilesAtPaths('app/**/*.ts');
    
    project.getSourceFiles().forEach(sourceFile => {
        sourceFile.fixMissingImports();
    });
    
    project.saveSync();
}