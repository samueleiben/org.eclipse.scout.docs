/*
 * Copyright (c) 2022 BSI Business Systems Integration AG.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Distribution License v1.0
 * which accompanies this distribution, and is available at
 * https://www.eclipse.org/org/documents/edl-v10.html
 *
 * Contributors:
 *     BSI Business Systems Integration AG - initial API and implementation
 */
const baseConfig = require('@eclipse-scout/cli/scripts/webpack-lib-defaults');
module.exports = (env, args) => {
  args.resDirArray = [];
  const config = baseConfig(env, args);

  config.entry = {
    'widgets-heatmap-esm': './src/main/js/index.js'
  };
  Object.assign(config.externals, {
    'jquery': {
      module: 'jquery',
      root: 'jQuery'
    },
    '@eclipse-scout/core': {
      module: '@eclipse-scout/core',
      root: 'scout'
    },
    'leaflet': {
      module: 'leaflet',
      root: 'leaflet'
    }
  });

  return config;
};
