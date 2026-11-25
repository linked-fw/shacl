---
"@_linked/shacl": minor
---

Builds on `@_linked/core` 3 (was `^2.48.0`) and `@_linked/cli` 2. The term modules are regenerated: each term is a plain `{id}` literal, and `ontologies/index` registers the ontology with its data through `registerOntologies`. The `ontologies/shacl.data` and `ontologies/shacl.register` modules are gone; `ontologies/shacl` keeps every term.
