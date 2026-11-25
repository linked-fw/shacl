# @_linked/shacl

## 0.2.0

### Minor Changes

- [#3](https://github.com/linked-fw/shacl/pull/3) [`80e1834`](https://github.com/linked-fw/shacl/commit/80e1834758f3ec815c34315ca86d1813eb23bb6a) Thanks [@flyon](https://github.com/flyon)! - Builds on `@_linked/core` 3 (was `^2.48.0`) and `@_linked/cli` 2. The term modules are regenerated: each term is a plain `{id}` literal, and `ontologies/index` registers the ontology with its data through `registerOntologies`. The `ontologies/shacl.data` and `ontologies/shacl.register` modules are gone; `ontologies/shacl` keeps every term.

## 0.1.0

### Minor Changes

- [`0f4e3b9`](https://github.com/linked-fw/shacl/commit/0f4e3b9906d3a32564bb2a7d4bc75eed81389b84) Thanks [@flyon](https://github.com/flyon)! - The W3C SHACL vocabulary: the published Turtle, its suggested prefix `sh`, and an accessor for every term.
