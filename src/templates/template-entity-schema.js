export const ENTITY_SCHEMA = `
const {{className}}Schema = new mongoose.Schema<Primitives<{{className}}>>(
	{
		{{#attributes}}
		{{primitiveName}}: {{{properties}}},
		{{/attributes}}
	},
	{
		collection: '{{collection}}',
	}
);

export const {{className}}Model = mongoose.model<Primitives<{{className}}>>('{{className}}', {{className}}Schema);
`