module.exports = {
	parser: 'vue-eslint-parser',
	parserOptions: {
		parser: '@typescript-eslint/parser',
	},
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:vue/vue3-recommended', 'prettier'],
	plugins: ['@typescript-eslint', 'unicorn', 'prefer-arrow', 'import', 'vue'],
	ignorePatterns: ['dist/', 'jsSrc/'],
	overrides: [
		{
			files: ['./**/*.ts'],
			parser: '@typescript-eslint/parser',
			plugins: ['@typescript-eslint'],
		},
		{
			files: ['./**/*.vue'],
		},
	],
	rules: {
		'vue/multi-word-component-names': 'off',
		'@typescript-eslint/no-namespace': 'off',
		'@typescript-eslint/no-this-alias': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
	},
};
