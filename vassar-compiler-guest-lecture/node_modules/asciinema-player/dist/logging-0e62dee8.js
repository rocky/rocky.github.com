function parseNpt(time) {
  if (typeof time === "number") {
    return time;
  } else if (typeof time === "string") {
    return time.split(":").reverse().map(parseFloat).reduce((sum, n, i) => sum + n * Math.pow(60, i));
  } else {
    return undefined;
  }
}
function debounce(f, delay) {
  let timeout;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    clearTimeout(timeout);
    timeout = setTimeout(() => f.apply(this, args), delay);
  };
}
function throttle(f, interval) {
  let enableCall = true;
  return function () {
    if (!enableCall) return;
    enableCall = false;
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    f.apply(this, args);
    setTimeout(() => enableCall = true, interval);
  };
}

class DummyLogger {
  log() {}
  debug() {}
  info() {}
  warn() {}
  error() {}
}
class PrefixedLogger {
  constructor(logger, prefix) {
    this.logger = logger;
    this.prefix = prefix;
  }
  log(message) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    this.logger.log(`${this.prefix}${message}`, ...args);
  }
  debug(message) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }
    this.logger.debug(`${this.prefix}${message}`, ...args);
  }
  info(message) {
    for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }
    this.logger.info(`${this.prefix}${message}`, ...args);
  }
  warn(message) {
    for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
      args[_key4 - 1] = arguments[_key4];
    }
    this.logger.warn(`${this.prefix}${message}`, ...args);
  }
  error(message) {
    for (var _len5 = arguments.length, args = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
      args[_key5 - 1] = arguments[_key5];
    }
    this.logger.error(`${this.prefix}${message}`, ...args);
  }
}

export { DummyLogger as D, PrefixedLogger as P, debounce as d, parseNpt as p, throttle as t };
