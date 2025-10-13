import js from '@eslint/js';
import eslintPluginTypescript from '@typescript-eslint/eslint-plugin';
import eslintParserTypescript from '@typescript-eslint/parser';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintPluginImport from 'eslint-plugin-import';
import globals from 'globals';

export default [
  js.configs.recommended,
  {
    files: ['src/**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: eslintParserTypescript,
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        project: './tsconfig.json',
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
      },
    },
    plugins: {
      '@typescript-eslint': eslintPluginTypescript,
      prettier: eslintPluginPrettier,
      import: eslintPluginImport,
    },
    rules: {
      ...eslintPluginTypescript.configs.recommended.rules,
      'no-console': 0,
      'no-underscore-dangle': 'off',
      'no-useless-constructor': 'off',
      'prettier/prettier': 'error',
      '@typescript-eslint/no-inferrable-types': [
        2,
        {
          ignoreParameters: true,
          ignoreProperties: true,
        },
      ],
    },
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
  },
  eslintConfigPrettier,
  {
    ignores: ['dist/**'],
  },
];
