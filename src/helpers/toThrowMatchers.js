import path from 'path';

/**
 * A hack to get around the Package entry points used by jest 
 */
const toThrowMatchers = require(`${path.dirname(require.resolve('expect'))}/toThrowMatchers.js`).default;

export default toThrowMatchers;

