const reactRules = [
    "./rules/plugins/react",
    "./rules/plugins/react-a11y",
    "./rules/plugins/css-modules",
    "./rules/plugins/jest",
].map(require.resolve);

module.exports = {
    "extends": ["videoamp"].concat(reactRules),
    "parser": "babel-eslint",
    "env": {
        browser: true,
        commonjs: true,
        es6: true,
        jest: true,
        node: true,
    },
    "parserOptions": {
        ecmaVersion: 2017,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
            generators: true,
            experimentalObjectRestSpread: true,
        },
    },
};
