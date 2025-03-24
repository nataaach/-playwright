import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  use: {
    headless: false,  
    viewport: { width: 1280, height: 720 },
    video: 'retain-on-failure',
    trace: 'on',
    browserName: 'chromium', 
  },
});
