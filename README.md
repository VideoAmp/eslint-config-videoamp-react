# eslint-config-videoamp-react
[![Build Status](https://semaphoreci.com/api/v1/projects/ef174a25-ef92-40f9-88be-8acf6f0b01e1/1361593/badge.svg)](https://semaphoreci.com/videoamp/eslint-config-videoamp-react)
[![npm version](https://badge.fury.io/js/eslint-config-videoamp-react.svg)](https://badge.fury.io/js/eslint-config-videoamp-react)

This package uses ESLint to enforce VideoAmp's code style and provides an extended configuration of our base rules (found at [`eslint-config-videoamp`](https://github.com/VideoAmp/eslint-config-videoamp)) for our React.js projects.

If you are looking for our extended configuration for Node.js projects, see [`eslint-config-videoamp-node`](https://github.com/VideoAmp/eslint-config-videoamp-node).

## Install
### `yarn`
```sh
yarn add --dev eslint-config-videoamp-react eslint
```
### `npm`
```sh
npm install --save-dev eslint-config-videoamp-react eslint
```

## Usage
Add `"extends": "videoamp-react"` to your `.eslintrc`.

### Configuration for Webpack
Below is an example `.eslintrc` configured to work with Webpack module resolution:
```json
{
    "extends": ["videoamp-react"],
    "settings": {
        "import/resolver": {
            "webpack": {
                "config": "<PATH_TO_WEBPACK_CONFIG>"
            }
        }
    }
}

```

## Resources
- [ESLint config docs](http://eslint.org/docs/user-guide/configuring#extending-configuration-files)
- [`eslint-plugin-react`](https://github.com/yannickcr/eslint-plugin-react)
- [`eslint-plugin-jsx-a11y`](https://github.com/evcohen/eslint-plugin-jsx-a11y)
- [`eslint-plugin-css-modules`](https://github.com/atfzl/eslint-plugin-css-modules)
- [`eslint-plugin-jest`](https://github.com/facebook/jest/tree/master/packages/eslint-plugin-jest)

## Contributing
You can make sure this module lints with itself using `yarn lint`.
