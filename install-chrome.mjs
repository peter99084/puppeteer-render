// Note: This script is intended to be run in a Node.js environment.
// It downloads a specific version of Chromium that Puppeteer can use. 

import puppeteer from 'puppeteer';

(async () => {
  console.log('Installing Chromium...');
  const browserFetcher = puppeteer.createBrowserFetcher();
  const revision = '1095492';
  const revisionInfo = await browserFetcher.download(revision);
  console.log('✅ Chromium downloaded to:', revisionInfo.executablePath);
})();
 