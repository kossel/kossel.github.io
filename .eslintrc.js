module.exports = {
  "env": {
    "browser": true,
    "es6": true,
  },
  "plugins": [
    "react",
  ],
  "globals": {
    "graphql": false,
  },
  "parserOptions": {
    "sourceType": "module",
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true,
    },
  },
  "extends": ["airbnb", "plugin:prettier/recommended"],
  "rules": {
    "react/forbid-prop-types": 0,
    "import/no-extraneous-dependencies": 0,
    "react/prefer-stateless-function": [0, { "ignorePureComponents": true }],
    "jsx-a11y/anchor-is-valid": [ "error", {
      "components": [ "Link" ],
      "specialLink": [ "hrefLeft", "hrefRight", "to" ],
      "aspects": [ "noHref", "invalidHref", "preferButton" ]
    }],
    "react/no-danger": 0,
    "react/destructuring-assignment": 0,
    "react/prop-types": 0,
    "react/require-default-props": 0,
    "no-unused-vars": 1,
    "react/jsx-one-expression-per-line": 0,
    "max-len": 0,
  }
}
