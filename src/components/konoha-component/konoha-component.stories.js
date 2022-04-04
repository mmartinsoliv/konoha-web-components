import readme from './readme.md';

export default {
  title: 'Konoha Component',
  parameters: {
    markdown: readme,
  },
};

export const Default = () => `
  <konoha-component first="Millie" middle="Bobby" last="Brown"></konoha-component>
`;