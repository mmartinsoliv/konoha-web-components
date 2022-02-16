import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'konoha-web-components',
  globalStyle: 'src/base/global.css',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
