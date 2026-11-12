import {linkedPackage} from '@_linked/core/utils/Package';

/** This package's own linked identity: a mirror of the W3C SHACL vocabulary. */
export const {
  linkedShape,
  linkedUtil,
  linkedOntology,
  registerPackageExport,
  registerPackageModule,
  getPackageShape,
  packageExports,
  packageName,
} = linkedPackage('@_linked/shacl', {mirrors: 'http://www.w3.org/ns/shacl#'});
