const reactRules = [
    "./rules/plugins/react",
    "./rules/plugins/react-a11y",
    "./rules/plugins/css-modules",
].map(require.resolve);

module.exports = {
    "extends": ["videoamp"].concat(reactRules),
};
