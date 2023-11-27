# Vite React Redux TypeScript Templet

[![npm Version](https://img.shields.io/npm/v/@chowdhury/vite-react-redux-ts-starter.svg)](https://www.npmjs.com/package/@chowdhury/vite-react-redux-ts-starter)
[![npm Downloads](https://img.shields.io/npm/dt/@chowdhury/vite-react-redux-ts-starter.svg)](https://www.npmjs.com/package/@chowdhury/vite-react-redux-ts-starter)
[![Socket Badge](https://socket.dev/api/badge/npm/package/@chowdhury/vite-react-redux-ts-starter)](https://socket.dev/npm/package/@chowdhury/vite-react-redux-ts-starter)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Code Style](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://prettier.io/)
[![GitHub Build Status](https://github.com/habibulmursaleen/vite-react-ts-starter/actions/workflows/ci.yml/badge.svg)](https://github.com/habibulmursaleen/vite-react-ts-starter/actions)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)
[![GitHub Releases](https://img.shields.io/github/release/habibulmursaleen/vite-react-ts-starter.svg)](https://github.com/habibulmursaleen/vite-react-ts-starter/releases)

A minimalistic Vite-based starter template for building React applications with TypeScript. This starter kit provides a well-configured development environment and includes essential tools and shadcn/ui libraries for efficiently developing and maintaining your React projects.

## Features

- **Vite**: A fast and efficient build tool for front-end development.
- **React**: A popular JavaScript library for building user interfaces.
- **TypeScript**: A statically typed superset of JavaScript for improved code quality.
- **Redux Toolkit**: A library for managing application state.
- **React-Redux**: Official React bindings for Redux.
- **Tailwind CSS**: A utility-first CSS framework for quickly styling your components.
- **ESLint and Prettier**: airbnb linting is used for code linting and formatting to maintain code consistency.
- **Jest and Testing Library**: For writing and running tests.
- **Playwright**: For end-to-end testing.
- **Husky and lint-staged**: For pre-commit code quality checks.
- **Commitlint**: For ensuring consistent commit messages.
- **Shadcn/ui**: For modern UI components build on top of RadixUI and TailwindCSS. 

# Getting Started

## Installation

To install and use this package, you can follow these simple steps:

1. **Install Node.js**: Ensure you have Node.js and npm (Node Package Manager) installed on your system. You can download and install them from [nodejs.org](https://nodejs.org/).

2. **Create a New Project**: Use the following command to create a new project using this package:

   ```bash
   npx @chowdhury/vite-react-redux-ts-starter my-app
   cd my-app
   npm install
   ```

3. **Run the development server:**:

   ```bash
   npm run dev
   ```

This will start the development server, and your app will be available at http://localhost:5173.

## Available Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the application for production.
- `npm run start:dev`: Start the application in development mode.
- `npm run lint`: Lint the code using ESLint.
- `npm run test`: Run tests using Jest.
- `npm run format`: Format the code using Prettier.
- `npm run preview`: Preview the production build locally.
- `npm run precommit`: Run linting and formatting checks before committing.

## Configuration

- The `tsconfig.json` file is configured for TypeScript.
- ESLint and Prettier configurations are defined in `.eslintrc.js` and `.prettierrc.js`.
- Tailwind CSS configuration is located in `tailwind.config.js`.
- Browserslist configuration is available in `browserslist`.

## Folder Structure

```
src
├── app
│   ├── hooks.ts
│   └── store.ts
├── assets
│   └── img
├── components
│   ├── form
│   ├── layouts
│   └── ui
      ├── button (checkout from here https://ui.shadcn.com/docs/components/button)
├── features
│   ├── counter
│      ├── counterAPI.ts
│      ├── counterSlice.ts
│      └── counterSlice.spec.ts
├── hooks
│   ├── README.md
├── page
│   ├── README.md
├── routes
│   ├── README.md
├── styles
│   ├── tailwind
├── Test
│   ├─ tests-example
│     ├── App.test.tsx
├── types
│   ├── README.md
├── utils
│   ├── README.md
├── App.css
├── App.tsx
├── index.css
├── main.tsx                            # app entry
├── setupTests.ts
├── vite-env.d.ts
```

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

## License

This starter template is open-source and available under the MIT License.

## Contributing

If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request. I welcome contributions from the community!

## Credits

This starter template is created and maintained by S M Habibul Mursaleen Chowdhury.
