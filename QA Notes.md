# Testing

## Static Testing

### Dev Dependencies

Install the dependencies with:

```console
npm install --save-dev eslint eslint-config-prettier husky lint-staged npm-run-all prettier eslint-plugin-jest @babel/preset-env
```

### Scripts

Add the following scripts to your project [`package.json`](package.json):

```json
{
    ...,
    "build": "babel src --out-dir dist",
    "test": "jest --coverage",
    "prettier": "prettier --ignore-path .gitignore --write \"**/*.+(js|jsx|ts|tsx|json)\"",
    "format": "npm run prettier -- --write",
    "check-format": "npm run prettier -- --list-different",
    "lint": "eslint --ignore-path .gitignore --ext .js,.jsx,.ts,.tsx .",
    "validate": "npm-run-all --parallel check-format lint build",
    "husky-install": "husky install"
}
```

### Babel

See [`.babelrc`](.babelrc)

We configure [Babel](https://babeljs.io/docs/en/) to specify the version of Javascript we would like to work with.

### ESlint

See [`.eslintrc`](.eslintrc)

We install [ESLint](https://eslint.org/) with NPM or Yarn as a dev dependency (see [Dev Dependencies](###dev-dependencies)).

The default configuration for ESLint is that they are going to parse your files as if they are Ecmascript 5. However, our file are written in the latest version of JS. Therefore, we need configure ESLint to parse our files properly.

In summary, we configure ESlint on:

1. the type of Javascript it's going to parse
2. the ESLint built-in recommended rules configuration (`"extends":`) and specify/override some of them in `"rules":`
3. the environment where the javascript is going to run

Tool configuration:

1. Install ESlint on your tool e.g. VSCode (it gives you highlights and fixes options)
2. You can also get auto fixes by running the following command:

```console
npx eslint . --fix
```

#### Prettier

We use [`Prettier`](https://prettier.io/) to format our code.

We install it as a dev dependency (see [Dev Dependencies](###dev-dependencies)).

We add to our [`.eslintrc`](.eslintrc) the recommended config(`eslint-config-prettier`) when using ESLint alonside Pretter. This is to avoid conflicts.

See the `prettier`, `format` & `check-format` scripts.

If we want to add a specific configuration for pretter, we could add a `.prettierrc` file to our code base.

We also configure our tool's plugin. For VSCode, the important steps & configurations are:

1. Install the [Prettier plugin](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) from the VSCode menu
2. Set it as the default code formatter:

```json
"editor.defaultFormatter": "esbenp.prettier-vscode",
```

2. Configure format on save:

```json
"editor.formatOnSave": true,
```

### Husky

See [`.husky`](.husky/)

It's nice that we can run our validate script to check if everything is going well in our project and that we're not making any static mistakes.

It would be nicer to run this script everytime before somebody commits any code to Git. For that matter, We:

1. Install a package called [`husky`](https://github.com/typicode/husky).
2. Add a `husky-install` script to your [`package.json`](package.json):

```json
"script": {
  ...,
  "husky-install": "husky install,
  ...
}
```

3. Run `npm run husky-install`
4. Add a pre-commit hook to run the validate script with the following command:
```console
npx husky add .husky/pre-commit "npm run validate"
```

### Lintstaged (Optional)

See [`.lintstagedrc`](.lintstagedrc)

In case we don't have an editor with an integrated format on save functionality, we can use a tool called [Lintstaged](https://github.com/okonet/lint-staged#readme) to rewrite our files before a commit.

Simply add `lintstaged` into the precommit command of Husky and configure it with a [`.lintstagedrc`](.lintstagedrc).

## Jest

- Install Jest through NPM or Yarn
- Add a test script
- Update the validate script to also run the test script
