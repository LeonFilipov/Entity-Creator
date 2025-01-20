# Entity Creator CLI

A tool to automate the creation of entities following Domain-Driven Design (DDD) principles, including generating preconfigured entities, repositories, and value objects.

### What does this tool do ?

`create-entity` is a CLI designed to streamline the implementation of entities in DDD projects. Based on a JSON definition of the entity's attributes, it automatically generates:

- The entity class, using **Value Objects** to encapsulate attributes.
- Base repositories for persistence.
- Initial schemas for frameworks like Mongoose (MongoDB).
- Files organized within a DDD-compliant structure (`application`, `domain`, `infrastructure`).

### Key features

1. **Value Object Pattern:**
Each attribute is represented as a Value Object, encapsulating its validation and consistency logic. This ensures entities only contain valid data, promotes reuse, and avoids logic duplication.
2. **Mongoose Integration:**
Automatically generates initial schemas for Mongoose, reducing manual setup.
3. **DDD Organization:**
Each entity is structured into predefined folders:
- `/application`: Specific use cases.
- `/domain`: Core entity and value objects.
- `/infrastructure`: Repository implementations and persistence.

### How to use

1. You can use directly with the command: `npx github:LeonFilipov/Entity-Creator` with the flags:
  - `-f, --file <json file>`: The entity described in a json file. **(required)**
  - `-o, --output <path>`: The path to the output files. (optional)
2. **The JSON file should follow this template:**
```json
{
    "entity": {
        "name": "entityName",
        "collection": "entityNameInPlural",
        "attributes": [
            {
                "name": "attributeName1",
                "type": "String",
                "required": true
            },
            {
                "name": "attributeName2",
                "type": "String",
                "required": true,
                "unique": true
            }
        ]
    }
}
```
> [!WARNING]
> It’s important to follow the correct nomenclature:
> - The name attribute (e.g., entity.name) should be in camelCase and singular.
> - The collection attribute should be in plural.
> - The type should have the first letter capitalized.

3. **Example directory structure generated:** 
This will generate a directory structure as follow:
```sql
<path>/entityNameInPlural/
  ├── application/
  ├── domain/
  │   ├── entityName.ts
  │   ├── value-objects/
  │       ├── entityName-attributeName1.ts
  │       ├── entityName-attributeName2.ts
  ├── infrastructure/
  │   ├── persistence/
  │       ├── entityName-mongo-repository.ts
  │       ├── schemas/
  │           ├── entityName-schema.ts
```
### Next improvements
- [ ] **Fix camelCase attributes**
- [ ] **Template generation:** Command to generate `.json` template for new entities
- [ ] **Repository generation:** Automatically generate repositories for MongoDB.
- [ ] **Advanced documentation:** Provide more detailed examples, edge cases, and test cases.

### License
This project is licensed under the MIT License. See the [LICENSE]() file for more details.
