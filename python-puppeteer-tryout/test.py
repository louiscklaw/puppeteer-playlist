#!/usr/bin/env python3

import os,sys
from pprint import pprint

import asyncio
from pyppeteer import launch

def test():
  browser = await launch()
  page = await browser.newPage()
  await page.goto('https://example.com')
  await page.screenshot({'path': 'example.png'})

  dimensions = await page.evaluate('''() => {
      return {
          width: document.documentElement.clientWidth,
          height: document.documentElement.clientHeight,
          deviceScaleFactor: window.devicePixelRatio,
      }
  }''')

  print(dimensions)
  # >>> {'width': 800, 'height': 600, 'deviceScaleFactor': 1}
  await browser.close()

def main():
  print('helloworld')
  test()


if __name__ == '__main__':
  asyncio.get_event_loop().run_until_complete(main())