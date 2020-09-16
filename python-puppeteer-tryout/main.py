import asyncio
from pyppeteer import launch
import json

link_hash=[]
content_hash=[]

visited_hash=[]

async def fetchLink(url):
    browser = await launch({
      'headless': True,
      'ignoreHTTPSErrors': True,
      'defaultViewport':{
        'width': 1920,
        'height': 1080*10
      }
    })

    page = await browser.newPage()
    await page.goto(url)
    await page.screenshot({'path': 'test-screenshot.png'})

    fetched_links = await page.evaluate('''
    () => {
      let test_s = new Set()
      let b = document.querySelectorAll('a')
      let links = Array.prototype.map.call(b, obj => obj.href);

      return {links}
    }
    ''')

    links_from_page = fetched_links['links']
    uniq_links = set(sorted(links_from_page))

    print(list(uniq_links))
    # print(json.loads(dimensions))
    link_with_hash = zip(uniq_links, map(lambda x : getLinkHash(x), uniq_links))



    await browser.close()

async def main():
  # return await fetchLink("https://hktvmall.com")
  return await fetchLink("http://localhost:8080")

asyncio.get_event_loop().run_until_complete(main())
