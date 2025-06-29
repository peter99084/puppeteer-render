// Note: This script is intended to be run in a Node.js environment.
// It downloads a specific version of Chromium that Puppeteer can use. 

import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

(async () => {
  console.log('Installing Chromium...');
  const browserFetcher = puppeteer.createBrowserFetcher();
  const revision = '1095492';
  const revisionInfo = await browserFetcher.download(revision);
  const chromeDir = path.dirname(revisionInfo.executablePath);
  const files = fs.readdirSync(chromeDir);
  console.log('Files in Chromium directory:', files);
  console.log('✅ Chromium downloaded to:', revisionInfo.executablePath);
  console.log('📁 Contents folder:', chromeDir);
})();
 