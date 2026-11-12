import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import test from 'node:test';

/**
 * Runs against `lib/`: the built entry, the generated term modules and the data files the build
 * copies are what a consumer loads.
 */
const SH = 'http://www.w3.org/ns/shacl#';

test('every term is an {id} in the SHACL namespace', async () => {
  const terms = await import('../lib/esm/ontologies/shacl.js');
  for (const name of ['NodeShape', 'PropertyShape', 'path', 'targetClass', 'datatype', 'minCount', 'ValidationReport']) {
    assert.deepEqual(terms[name], {id: SH + name}, name);
  }
  const ids = Object.values(terms).filter((t) => t && typeof t === 'object' && typeof t.id === 'string');
  assert.ok(ids.length >= 200, `${ids.length} terms`);
  for (const t of ids) assert.ok(t.id.startsWith(SH), t.id);
});

test('the built data is the W3C vocabulary, with the suggested prefix sh', () => {
  const data = readFileSync(new URL('../lib/esm/data/shacl.ttl', import.meta.url), 'utf-8');
  assert.match(data, /sh:\s+a owl:Ontology/);
  assert.match(data, /sh:NodeShape\s+a rdfs:Class/);
  const added = readFileSync(new URL('../lib/esm/data/shacl-added.ttl', import.meta.url), 'utf-8');
  assert.match(added, /vann:preferredNamespacePrefix "sh"/);
  assert.match(added, /vann:preferredNamespaceUri "http:\/\/www\.w3\.org\/ns\/shacl#"/);
});

test('the package entry loads and names itself', async () => {
  await import('../lib/esm/index.js');
  const {packageName} = await import('../lib/esm/package.js');
  assert.equal(packageName, '@_linked/shacl');
});
