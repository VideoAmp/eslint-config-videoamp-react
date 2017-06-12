const reactRules = [
    "./rules/plugins/react",
    "./rules/plugins/react-a11y",
    "./rules/plugins/css-modules",
    "./rules/plugins/jest",
].map(require.resolve);

module.exports = {
    "extends": ["videoamp"].concat(reactRules),
};
