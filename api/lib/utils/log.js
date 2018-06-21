const chalk = require('chalk');

const styles = {
  log: chalk.bold,
  info: chalk.bold.blue,
  error: chalk.bold.red,
  warn: chalk.bold.yellow,
  success: chalk.bold.green
};

module.exports = {
  log(message, ...args) {
    console.log(styles.log(` 💡  ${message}`, ...args));
  },

  info(message, ...args) {
    console.log(styles.info(` ℹ️  ${message}`, ...args));
  },

  error(err, stack = false, ...args) {
    console.log(styles.error(` ❗  ${err}`, ...args));
    if (stack && err.stack) console.log(styles.error(` ❗ ${err.stack}`, ...args));
  },

  warn(message, ...args) {
    console.log(styles.warn(` ⚠️  ${message}`, ...args));
  },

  success(message, ...args) {
    console.log(styles.success(` ✅  ${message}`, ...args));
  }
};
