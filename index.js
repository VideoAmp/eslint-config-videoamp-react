module.exports = {
    "extends": [
        "videoamp",
        "./rules/plugins/react",
        "./rules/plugins/react-a11y",
        "./rules/plugins/css-modules",
    ].map(require.resolve),
};
