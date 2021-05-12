---
marp: false
---

# Testing

## Static Testing

### Dev Dependencies

Install the dependencies with:

```shell
npm install --save-dev eslint eslint-config-prettier husky lint-staged npm-run-all prettier eslint-plugin-jest @babel/preset-env
```

### Scripts

Add the following scripts to your project `package.json`:

```json
{
  ...,
  "prettier": "prettier --ignore-path .gitignore --write \"**/*.+(js|json)\"",
  "format": "npm run prettier -- --write",
  "check-format": "npm run prettier -- --list-different",
  "lint": "eslint --ignore-path .gitignore --ext .js,.ts,.tsx .",
  "validate": "npm-run-all --parallel check-format lint"
}
```

### Babel

See `.babelrc`

We configure Babel to specify the version of Javascript we would like to work with.

### ESlint

See `.eslintrc`

We install ESLint with NPM or Yarn as a dev dependency (see [###-Dev-Dependencies](Dev Dependencies)).

The default configuration for ESLint is that they are going to parse your files as if they are Ecmascript 5. However, our file are written in the latest version of JS. Therefore, we need configure ESLint to parse our files properly.

In summary, we specify configure ESlint on:

- the type of Javascript it's going to parse
- the ESLint built-in recommended rules configuration (`"extends":`) and specify/override some of them in `"rules":`
- the environment where the javascript is going to run
- etc.

Tool configuration:

- Install ESlint on your tool e.g. VSCode (it gives you highligh and fixes options)
- You can also get auto fixes by running the following command:

```shell
npx eslint . --fix
```

#### Prettier

We use `Prettier` to format our code.

We install it as a dev dependency

We add into our `.eslintrc` the recommended config (`eslint-config-prettier`) when using prettier alonside in order to avoid conflict between both of them (ESLint & Prettier).

See the `prettier`, `format` & `check-format` scripts.

If we want to add a specific configuration for pretter, we can add a `.prettierrc` file to our code base.

We also configure our tool (e.g. VScode) plugin. Important configuration is:

- install the plugin for the VSCode menu
- set it as the default code formatter: `"editor.defaultFormatter": "esbenp.prettier-vscode"`
- configure format on save: `"editor.formatOnSave": true`

### Husky

See `.huskyrc`

It's nice that we can run our validate script to check if everything is going well in our project and we're not making any static mistakes.

It would be good to run this script everytime before somebody commits any code to Git.

For that matter:

1. we install a package called `Husky`.
2. List the files in `.git/hooks/`
3. Rename `.git/hooks/pre-commit.sample` -> `.git/hooks/pre-commit`:

```shell
cp .git/hooks/pre-commit.sample .git/hooks/pre-commit
```

-or-

```shell
mv .git/hooks/pre-commit.sample .git/hooks/pre-commit
```

4. Create a Husky configuration file (`.huskyrc`) give it the script to run before every commit (See the file): In this case, it's the validate script.

## Lintstaged

See `.lintstagedrc`
