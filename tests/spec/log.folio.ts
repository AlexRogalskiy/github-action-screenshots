import { folio as base } from 'folio';
import * as fs from 'fs';

const fixtures = base.extend<{ saveLogsOnFailure: void }>();

fixtures.saveLogsOnFailure.init(async ({testInfo}, runTest) => {
    const logs = [];
    console.debug = (...args) => logs.push(args.map(String).join(''));
    await runTest();
    if (testInfo.status !== testInfo.expectedStatus)
      fs.writeFileSync(testInfo.outputPath('logs.txt'), logs.join('\n'), 'utf8');
  },
  {auto: true}
);

export const folio = fixtures.build();
