import os,sys
from pprint import pprint

from pyppeteer import launch
import asyncio

async def initNewBrowser():
  browser = await launch({
    'headless': True,
    'ignoreHTTPSErrors': True,
    'defaultViewport':{
      'width': 1920,
      'height': 1080*3
    }
  })
  return browser

async def initNewPage(browser):
  page = await browser.newPage()
  await page.setDefaultNavigationTimeout(0)
  return page

async def gotoUrl(page, url):
  await page.goto(url)
  await page.screenshot({'path': 'test-screenshot.png'})
  return page

async def grepNewLink(page):
  fetched_links = await page.evaluate('''
  () => {
    let test_s = new Set()
    let b = document.querySelectorAll('a')
    let links = Array.prototype.map.call(b, obj => obj.href);
    return {links}
  }
  ''')
  return fetched_links

async def quitBrowser(browser):
  return await browser.close()


def helloworld():
  print('helloworld {}'.format(__file__))
