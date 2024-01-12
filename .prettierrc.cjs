module.exports = {
	plugins: ['prettier-plugin-sort-imports'],
	printWidth: 120,
	semi: true,
	singleQuote: true,
	tabWidth: 2,
	trailingComma: 'es5',
	useTabs: true,
	overrides: [
		{
			files: ['*.css', '*.scss'],
			options: {
				parser: 'scss',
				tabWidth: 2,
				useTabs: false,
			},
		},
	],
};
