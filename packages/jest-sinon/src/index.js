import * as matchers from "sinon-matchers";

const jestExpect = global.expect;

if (jestExpect !== undefined) {
  jestExpect.extend(matchers);
} else {
  /* eslint-disable no-console */
  console.error("Unable to find Jest's global expect");
  /* eslint-enable no-console */
}
