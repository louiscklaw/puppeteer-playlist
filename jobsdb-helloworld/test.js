const puppeteer = require( 'puppeteer' );

( async () => {
  const browser = await puppeteer.launch({
    defaultViewport:{
        width: 1920,
        height: 5080
    },
    ignoreHTTPSErrors: true
  });
  const page = await browser.newPage();

  await page.goto( 'https://hk.jobsdb.com/hk/jobs/information-technology/1?Key=qa' );
  await page.screenshot( {
    path: 'jobsdb_qa.png'
  } );

  await browser.close();
} )();
