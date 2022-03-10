import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'pdf-stencil',
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
      baseUrl: '/pdf-stencil/',
      serviceWorker: null, // disable service workers
    },
  ],
};
