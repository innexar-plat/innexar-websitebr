#!/usr/bin/env node
'use strict';
const fs = require('fs');
const path = require('path');

const configPath = path.join(
  process.cwd(),
  'node_modules/next-intl/dist/esm/production/config.js'
);

const patch = [
  "import { createRequire } from 'module';",
  "import path from 'path';",
  "const require = createRequire(import.meta.url);",
  "const config = require(path.join(process.cwd(), 'i18n', 'request.cjs'));",
  'export default config;',
].join('\n');

fs.writeFileSync(configPath, patch, 'utf8');
console.log('Patched next-intl config for Docker runtime');
