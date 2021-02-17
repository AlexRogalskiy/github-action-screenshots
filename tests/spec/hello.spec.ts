import { expect, it } from './hello.folio';

it('hello world', ({hello, world}) => {
  console.debug("Running simple test #1 with params:", hello, world);
  expect(`${hello}, ${world}!`).toBe('Hello, World!');
});

it('hello test', ({hello, test}) => {
  console.debug("Running simple test #2 with params:", hello, test);
  expect(`${hello}, ${test}!`).toBe('Hello1, Test!');
});
