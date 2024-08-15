# Screeps-Typescript-Starter (Customized)

I adjusted & simplified the official [screeps-typescript-starter](https://github.com/screepers/screeps-typescript-starter) by:

-   removing the testing capabilities
-   removing or replacing some pre-sets (.editorconfig, .prettierrc, .gitignore, .gitattributes, .vscode/, .devcontainer/, .eslintrc.js)

Problems:

-   could not figure out how to make @rollup/plugin-babel work to transpile modern JS (ESNext) to older ES2018 (such as `Array.prototype.at()`)
