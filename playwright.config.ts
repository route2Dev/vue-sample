// playwright.config.ts
import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  // Look for test files in the "tests" directory, relative to this configuration file
  testDir: 'tests/e2e',

  // Each test is given 30 seconds
  timeout: 30000,

  // Forbid test.only on CI
  forbidOnly: !!process.env.CI,

  // Two retries for each test
  retries: 2,

  // Limit the number of workers on CI, use default locally
  //   workers: process.env.CI ? 2 : undefined,

  webServer: {
    command: 'npm run serve -- --port 3001',
    port: 3001,
    env: {
      coverage: '1',
    },
  },
  use: {
    // Configure browser and context here
    baseURL: 'http://localhost:3001',
  },
};
export default config;
