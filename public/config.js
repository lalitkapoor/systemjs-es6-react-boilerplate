System.config({
  "paths": {
    "*": "*.js",
    "react-systemjs-es6-boilerplate/*": "lib/*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  }
});

System.config({
  "map": {
    "jsx": "npm:jsx-plugin@0.0.5",
    "react": "github:reactjs/react-bower@0.12.2",
    "npm:jsx-plugin@0.0.5": {
      "react-bower": "github:reactjs/react-bower@0.12.2"
    }
  }
});

