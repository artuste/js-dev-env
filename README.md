# JavaScript Development Environment Starter Kit
[![Build Status](https://travis-ci.org/artuste/js-dev-env.svg?branch=master)](https://travis-ci.org/artuste/js-dev-env)

It's demo application based on ECMAScript 6 module, Webpack, npm scripts.
It could be used as a starter kit for new javascript projects.

## Features
* npm scripts
* development & production configurations
* mock API using JSON for dev purposes
* distribution application ready for production

## Tech Stack
* ES6 modules
* Babel transpiler
* Webpack module bundler
* Mocha testing
* Chai asserts

## NPM Scripts

### Run application
```
npm start
```
### Lint
```
npm run lint
npm run lint:watch
```

### Security check
```
npm run security-check
```

### Expose the application
```
npm run localtunnel
```

### Testing
```
npm test
npm test:watch
```

### Mock API
```
# Generate mock data
npm run generate-mock-data

# Run JSON Server
npm run start-mockap
```

### Build
```
npm run build
```

### Deploy
```
# Deploy application on surge server
npm run build
```

## License
MIT
