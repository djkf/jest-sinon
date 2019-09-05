/* eslint-disable no-console */
import * as matchers from "sinon-matchers";

const jestExpect = global.expect;

if (jestExpect !== undefined) {
  jestExpect.extend(matchers);
} else {
  console.error("Unable to find Jest's global expect");
}
