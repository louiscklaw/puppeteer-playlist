import os,sys
import asyncio
import json

from pyppeteer import launch

SRC_DIR=os.path.dirname(__file__)

PROJ_HOME=os.path.join(SRC_DIR,'..')
SRC_LIB=os.path.join(SRC_DIR,'lib')

sys.path.append(SRC_DIR)

from lib.pendingLink import *

link_hash=[]
content_hash=[]
visited_hash=[]

# async def fetchLink():
#     print('fetching {}'.format(url))

#     browser = await launch({
#       'headless': True,
#       'ignoreHTTPSErrors': True,
#       'defaultViewport':{
#         'width': 1920,
#         'height': 1080*10
#       }
#     })

#     page = await browser.newPage()

#     await page.goto(url)
#     await page.screenshot({'path': 'test-screenshot.png'})

#     fetched_links = await page.evaluate('''
#     () => {
#       let test_s = new Set()
#       let b = document.querySelectorAll('a')
#       let links = Array.prototype.map.call(b, obj => obj.href);
#       return {links}
#     }
#     ''')

#     links_from_page = fetched_links['links']
#     uniq_links = set(sorted(links_from_page))

#     for link in uniq_links:
#       addPendingLink(link)

#     return await browser.close()

from fetcher import *

async def fetchLink(url_to_scrape):

  browser = await initNewBrowser()
  page = await initNewPage(browser)

  addPendingLink(url_to_scrape)

  while getRemainingLinkCount() > 0:
    print('remaining link count {}'.format(getRemainingLinkCount()))
    fetch_link = getPendingLink()

    if fetch_link != '':
      await gotoUrl(page, fetch_link)
      fetch_result = await grepNewLink(page)

      links_from_page = fetch_result['links']
      uniq_links = set(sorted(links_from_page))

      for link in uniq_links:
        addPendingLink(link)

  await quitBrowser(browser)

async def main():
  if len(sys.argv) == 2:
    website=sys.argv[1]
    print('fetch website {}'.format(website))

    await fetchLink(website)

    # addPendingLink(website)

    # while getRemainingLinkCount() > 0:
    #   print('remaining link count {}'.format(getRemainingLinkCount()))
    #   fetch_link = getPendingLink()

    #   if fetch_link != '':
    #     await fetchLink(fetch_link)

  else:
    sys.exit(-1)


asyncio.get_event_loop().run_until_complete(main())
