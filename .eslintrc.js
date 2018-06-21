module.exports = {
  "parser": "babel-eslint",
  "extends": ["standard"],
  "env": {
    "browser": false,
    "es6": true,
    "node": true
  },
  "rules": {
    "generator-star-spacing": ["error", {"before": true, "after": false}],
    "semi": [2, "always"],
    "space-before-function-paren": ["error", {
        "anonymous": "never",
        "named": "never",
        "asyncArrow": "always"
    }]
  }
}
