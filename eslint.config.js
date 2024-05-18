import antfu from '@antfu/eslint-config';
import stylistic from '@stylistic/eslint-plugin';

export default antfu(
  {
    react: true,
  },
  {
    files: ['**/*.tsx'],
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      'react/prop-types': 'off',
      '@stylistic/jsx-self-closing-comp': 'error',
    },
  },
  {
    rules: {
      'antfu/top-level-function': 'off',

      'curly': ['error', 'all'],

      'style/semi': ['error', 'always'],
      'style/member-delimiter-style': ['error', {}],
      'style/brace-style': ['error', '1tbs', { allowSingleLine: false }],

      'arrow-body-style': ['error', 'as-needed'],
    },
  },
);
