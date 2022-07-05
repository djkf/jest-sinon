import path from 'path';

/**
 * A hack to get around the Package entry points used by jest 
 */
const spyMatchers = require(`${path.dirname(require.resolve('expect'))}/spyMatchers.js`).default;

export default spyMatchers;

