import { folio as base } from './log.folio';

export { expect } from 'folio';

// Define test fixtures |hello|, |world| and |test|.
type TestFixtures = {
  hello: string;
  world: string;
  test: string;
};
const fixtures = base.extend<TestFixtures>();

fixtures.hello.init(async ({}, run) => {
  // Set up fixture.
  const value = 'Hello';
  // Run the test with the fixture value.
  await run(value);
  // Clean up fixture.
});

fixtures.world.init(async ({}, run) => {
  await run('World');
});

fixtures.test.init(async ({}, run) => {
  await run('Test');
});

const folio = fixtures.build();

export const it = folio.it;
