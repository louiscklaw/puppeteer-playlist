const fs = require( 'fs' );
const PNG = require( 'pngjs' ).PNG;
const pixelmatch = require( 'pixelmatch' );
const puppeteer = require( 'puppeteer' );
const child_process=require('child_process');

let SLACK_WEBHOOK=process.argv[2];
let width=1920;
let height=1080;
let alarm_threshold = 10000;


let page_name = 'pagechange-alert-visual-diff-tryout'
let text_to_send=`page changed ${page_name}`
let webhook=SLACK_WEBHOOK
let username='pagechange-alert-visual-diff-tryout'
let channel='#_debug'

let send_slack_msg_command_sample=`curl -X POST --data-urlencode 'payload={
  "channel": "#${channel}",
  "username": "${username}",
  "text": "${text_to_send}" }' ${webhook}`;

  let send_slack_msg_command = `curl https://hooks.slack.com/services/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 -X POST -H 'Content-type: application/json' --data '{"text":"pagechange-alert-visual-diff-tryout changed!"}'`

let send_slack_still_alive_msg_command=`curl -X POST --data-urlencode 'payload={
  "channel": "#${channel}",
  "username": "${username}",
  "text": "still alive" }' ${webhook}`;

( async () => {
  const browser = await puppeteer.launch({
    defaultViewport:{
        width: 1920,
        height: 1080
    },
    ignoreHTTPSErrors: true
  });
  const page = await browser.newPage();
  await page.goto( 'https://www.youtube.com/channel/UCUEJok-GiWaGlv5nIPwk-GQ' );
  await page.waitForTimeout(5 * 1000)
  await page.screenshot( { path: 'current_youtube.png'  } );

  await browser.close();

  const diff = new PNG( {
    width,
    height
  } );

  const example_png = PNG.sync.read( fs.readFileSync( 'youtube.png' ) );
  const current_example_png = PNG.sync.read( fs.readFileSync( 'current_youtube.png' ) );

  let matching_result = pixelmatch( example_png.data, current_example_png.data, diff.data, 1920, 1080, {
    threshold: 0.5
  } );

  fs.writeFileSync( 'difference.png', PNG.sync.write( diff ) );
  console.log(matching_result)

  if (matching_result > alarm_threshold){
    child_process.execSync(send_slack_msg_command);
  }else{
    child_process.execSync('hostname');
  }

} )();
