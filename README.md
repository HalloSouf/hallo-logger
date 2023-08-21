<div align="center">
  <br />
  <h1>HalloLogger 🌳</h1>
  <strong>Say hello to your console</strong>
  <br />
  <br />
  <p>
    <a href="https://www.typescriptlang.org/" target="_blank"><img src="https://img.shields.io/badge/-TypeScript-000?style=for-the-badge&logo=typescript"></a>
  </p>
</div>

## About 📘

Introducing HalloLogger, a straightforward yet powerful logger designed to bring clarity to your console output. With this logger, you can effortessly create organized and structued logs, making it easier than ever to track and understand your application's behavior. Say goodby to cluttered console screens 👋.

## Installation 📦

```bash
# With npm
npm install hallo-logger

# With yarn
yarn add hallo-logger
```

## Usage 🚀

### Basic debug messages

This package includes several debug messages that provide insights and create a clear picture of your application's behavior. You can add to these messages a prefix with the `prefix` option. This will help you identify the source of the message.

```ts
const HalloLogger = require('hallo-logger');

const logger = new HalloLogger({ prefix: 'Main' });
logger.ready('Application is ready to serve requests.');
logger.info('Server is listening on port 3000.');
logger.warn('Server is running in development mode.');
logger.error('Failed to connect to database.');
```

![image](https://github.com/HalloSouf/hallo-logger/assets/52331524/2706d12c-fc7b-4928-b674-381857f2d76d)

By default, the logger will output a message into the console with only the time of the message. However, you can also add the current date to the message by setting the `withDate` option to `true` when initializing the logger.

```js
const logger = new HalloLogger({ prefix: 'Main', withDate: true });
```

![image](https://github.com/HalloSouf/hallo-logger/assets/52331524/37e60b3a-924f-43a4-9d7f-115516506059)

### Ready message

The logger class does also have a static `appReady` method that can be used to log a ready message. This message will display some important information from the `package.json` file, such as the application's name and version. You can also add custom information properties to this message.

```js
const HalloLogger = require('hallo-logger');
const express = require('express');

// Get the application's start time
const startMs = Date.now();

// Express app
const app = express();
app.listen(8080);

// Ready message
HalloLogger.apReady(startMs, {
  '🚪 Port': ':8080',
  '🌳 Environment': 'development'
});
```

![image](https://github.com/HalloSouf/hallo-logger/assets/52331524/b693bbfe-0914-4ade-9967-f3135928604d)

> **Note:** For this example I used an example with a ExpressJS app. However, this method can be used with any type of application.

## License 📜

This proejct is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
