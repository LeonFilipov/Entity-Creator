export const ENTITY_CLASS_TEMPLATE = `
export class {{className}} {
  constructor(
    {{#attributes}}
    public readonly {{attributeName}}: {{attributeType}},
    {{/attributes}}
  ) {}

  static fromPrimitives(plainData: Primitives<{{className}}>): {{className}} {
    return new {{className}}(
      {{#attributes}}
      new {{attributeType}}(plainData.{{primitiveName}}),
      {{/attributes}}
    )
  }

  toPrimitives(): Primitives<{{className}}> {
    return {
      {{#attributes}}
      {{primitiveName}}: this.{{attributeName}}.value,
      {{/attributes}}
    }
  }
}
`;