import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import prettier from 'eslint-config-prettier';

export default [
  js.configs.recommended,
  {
    files: ['src/**/*.ts'],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        project: './tsconfig.json',
      },
      globals: {
        console: 'readonly',
        window: 'readonly',
        document: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      'no-console': 0,
      'no-param-reassign': 'off',
      'no-underscore-dangle': 'off',
      'no-useless-constructor': 'off',
      '@typescript-eslint/no-inferrable-types': ['error', {
        ignoreParameters: true,
        ignoreProperties: true,
      }],
    },
  },
  {
    ignores: ['public/js/**'],
  },
  prettier,
];