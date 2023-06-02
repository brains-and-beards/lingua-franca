module.exports = {
	"singleQuote": true,
	"bracketSpacing": true,
	"semi": false,
	"printWidth": 100,
	"arrowParens": "avoid",
	"trailingComma": "none",
	"importOrder": ["<THIRD_PARTY_MODULES>", "^[./]"],
	"importOrderSeparation": true,
	"importOrderSortSpecifiers": true,
	"plugins": ["prettier-plugin-astro", "prettier-plugin-svelte", "prettier-plugin-tailwindcss"],
	"pluginSearchDirs": false
}
