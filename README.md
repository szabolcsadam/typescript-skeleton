Fundamental **TypeScript** project template

#### Testing

Run `npm run test:watch` it will run test after each change. Ideal for TDD or testing just in time.

#### Running

To run your code without having to build it just execute `npm run dev`

#### Testing

Run `npm run test` it will run all test once and stops. Default for CI/CD most common environments.

If you want also the coverage report then use `npm run test:coverage` .

#### Build and run

The standard `npm start` will run de build process before, so you can deploy the source code alone.

This way you can automate the deployment with the former release script.

### 🤖 Scripts

Here you have a recap of the available scripts

```json
  "scripts": {
    "start": "node ./dist/main.js",
    "test": "jest",
    "build": "tsc -p tsconfig.json",
    "dev": "ts-node ./src/main.ts",
    "test:dev": "jest --watch",
    "test:coverage": "jest --coverage",
    "ts-node": "ts-node",
    "format": "prettier --write \"./**/*.{ts,json}\"",
    "lint": "eslint src --ext .ts",
    "lint:fix": "npm run lint -- --fix",
  }
```

### 💅 Code style with Prettier

- Installed and configured prettier

### 📐 Code linting with esLint

- Installed and configured eslint to work with prettier

### 🧪 Code tested with Jest

- Installed and configured **jest** to run specs
- Configured to conform with **eslint**
- Uses `ts-jest` to work natively with **TypeScript**
