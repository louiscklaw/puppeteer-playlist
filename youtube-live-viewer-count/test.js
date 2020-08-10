'use-strict'

const puppeteer = require('puppeteer')
const fs = require('fs')

// for test
// var https_www_example_com = 'https://www.example.com'
// var https_localhost = 'https://localhost:8080'
// var youtube_live_test = 'https://www.youtube.com/watch?v=EOBY5J0b9Uo'

var url_monitor = process.argv[2]
var json_store_filename = process.argv[3]

const launch_config = {
    defaultViewport:{
        width: 1920,
        height: 2080
    },
    ignoreHTTPSErrors: true
}

const formatViewerNumbers = (raw_viewer_count) => raw_viewer_count.replace(',','').replace(/(watching now|waiting)/,'').trim()

async function youtubeViewerCount(url) {
  const browser = await puppeteer.launch(launch_config)

  const page = await browser.newPage()

  await page.goto(url)

  try {
    var post = {
      raw: await page.$eval('.view-count', el=> el.innerHTML)
    }

  } catch (error) {
    console.log('cannot grep view-count')
    await page.screenshot( {
      path: 'current_youtube.png'
    } );

  }

  await browser.close()

  let viewer_count = formatViewerNumbers(post.raw)
  let time = new Date().toISOString()

  return { time, url, viewer_count }

}

youtubeViewerCount( url_monitor )
  .then(result => {
    console.log(result)
    let viewer_file_raw = fs.readFileSync('viewer_count.json',{encoding:'utf-8'})
    let viewer_count_all_json = JSON.parse(viewer_file_raw)
    let updated_viewer_count = [...viewer_count_all_json, result]

    fs.writeFileSync(json_store_filename,JSON.stringify(updated_viewer_count),{encoding:'utf-8'})
  })
