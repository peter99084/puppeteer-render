#!/usr/bin/env bash
set -o errexit

echo "▶ Installing dependencies..."
npm install

echo "▶ Installing Chromium for Puppeteer..."
node install-chrome.mjs
if [ $? -ne 0 ]; then
  echo "Error: Failed to install Chromium for Puppeteer."
  exit 1
fi
