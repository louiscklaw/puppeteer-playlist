import os,sys
import asyncio
import json

from pyppeteer import launch

SRC_DIR=os.path.dirname(__file__)

PROJ_HOME=os.path.join(SRC_DIR,'..')
SRC_LIB=os.path.join(SRC_DIR,'lib')

sys.path.append(SRC_LIB)

from pendingLink import *
from fetcher import *
from time import sleep

link_hash=[]
content_hash=[]
visited_hash=[]


async def fetchLink(url_to_scrape):

  browser = await initNewBrowser()
  page = await initNewPage(browser)

  addPendingLink(url_to_scrape)

  while getRemainingLinkCount() > 0:
    print('remaining link count {}'.format(getRemainingLinkCount()))
    fetch_link = getPendingLink()

    if fetch_link != '':
      sleep(1)
      await gotoUrl(page, fetch_link)
      fetch_result = await grepNewLink(page)

      links_from_page = fetch_result['links']
      uniq_links = set(sorted(links_from_page))

      for link in uniq_links:
        addPendingLink(link)

    print('number of page visited {}'.format(getVisitedHashCount()))

  await quitBrowser(browser)

async def main():
  if len(sys.argv) == 2:
    website=sys.argv[1]
    print('fetch website {}'.format(website))

    await fetchLink(website)

  else:
    sys.exit(-1)


asyncio.get_event_loop().run_until_complete(main())
