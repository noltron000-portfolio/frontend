import tsParser from '@typescript-eslint/parser'
import tabbifyConfig from 'eslint-config-tabbify'
import globals from 'globals'

const config = [
	...tabbifyConfig,

	{
		files: [
			'**/*.ts',
			'**/*.mts',
			'**/*.cts',
			'**/*.tsx',
		],
	},

	{
		ignores: [
			'**/.next/',
			'**/.yarn/',
			'**/dist/',
			'**/drafts/',
			'**/generated/',
			'**/node_modules/',
			'**/next-env.d.ts',
		],
	},

	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
				JSX: 'readonly',
			},

			parser: tsParser,
			ecmaVersion: 'latest',
			sourceType: 'module',

			parserOptions: {
				project: './tsconfig.json',
				ecmaFeatures: {impliedStrict: true},
			},
		},
	},
]

export default config
