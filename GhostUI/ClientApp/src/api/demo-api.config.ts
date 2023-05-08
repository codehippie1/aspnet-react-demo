import { defineConfig } from 'orval';

export default defineConfig({
  storefile: {
    input: {
      target: '../../../openapi.json',
    },
    output: {
      target: 'demo-api.ts',
      client: 'react-query',
      override: {
        useDates: true,
        useTypeOverInterfaces: true,
        mutator: {
          path: './custom-axios.ts',
          name: 'baseAxiosInstance',
        },
      },
    }
  },
});