# Vite React TypeScript Starter

A minimalistic Vite-based starter template for building React applications with TypeScript. This starter kit provides a well-configured development environment and includes essential tools and libraries for efficiently developing and maintaining your React projects.

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

## Getting Started

1. **Clone the repository**:

```bash
git clone https://github.com/your-username/vite-react-ts-starter.git
```

2. **Install dependencies:**:

```bash
cd vite-react-ts-starter
npm install
```

3. **Run the development server:**:

```bash
npm run dev
```

This will start the development server, and your app will be available at http://localhost:3000.

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

## License

This starter template is open-source and available under the MIT License.

## Contributing

If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request. I welcome contributions from the community!

## Credits

This starter template is created and maintained by S M Habibul Mursaleen Chowdhury.
