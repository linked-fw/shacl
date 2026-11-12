# @_linked/shacl

The [W3C Shapes Constraint Language (SHACL)](https://www.w3.org/TR/shacl/) vocabulary for Linked:
the vocabulary as Turtle and an accessor for every one of its terms. The package mirrors
`http://www.w3.org/ns/shacl#` and holds only its terms.

## Terms

```ts
import * as sh from '@_linked/shacl/ontologies/shacl';

sh.NodeShape;   // {id: 'http://www.w3.org/ns/shacl#NodeShape'}
sh.targetClass; // {id: 'http://www.w3.org/ns/shacl#targetClass'}
```

`ontologies/shacl` has one named export per term the vocabulary declares, each an `{id}` with the
term's full IRI. `ontologies/shacl.register` registers the ontology with its data; the package
entry imports it. `@_linked/core` keeps the SHACL terms it builds shapes with
(`@_linked/core/ontologies/shacl`); this package is the full vocabulary, for an app or a store
that needs all of it. `linked generate-ontology` writes the modules from the data
(`package.json` `"linkedOntologies"`), and `linked build` fails when they are stale; never edit
them by hand.

## The data

`src/data/shacl.ttl` is the W3C's own file, `https://www.w3.org/ns/shacl.ttl` (version of
2017-07-20), unchanged. Its suggested prefix (`vann:preferredNamespacePrefix "sh"`,
`vann:preferredNamespaceUri`) is in `src/data/shacl-added.ttl`, the same place as in the other
standard-vocabulary packages. The package never adds a term to the namespace that SHACL does not
define.

## Development

```bash
npx linked build    # checks the ontology modules, compiles, copies the data into lib/
npm test            # runs against lib/
```

## Data license

The package code is MIT licensed (see `LICENSE`). The bundled ontology data is the W3C SHACL
vocabulary and is not covered by the MIT license: it remains under the W3C Software and Document
License, https://www.w3.org/copyright/software-license-2023/. See `NOTICE`.
