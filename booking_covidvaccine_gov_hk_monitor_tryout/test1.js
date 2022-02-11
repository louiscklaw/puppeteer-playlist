const fs = require( 'fs' );
const PNG = require( 'pngjs' ).PNG;
const pixelmatch = require( 'pixelmatch' );
const puppeteer = require( 'puppeteer' );
const child_process=require('child_process');

let SLACK_WEBHOOK=process.argv[2];
let width=1284;
let height=302;
let alarm_threshold = 1;


let page_name = 'booking_covidvaccine_gov_hk_monitor_tryout'
let text_to_send=`page changed ${page_name}`
let webhook=SLACK_WEBHOOK
let username='booking_covidvaccine_gov_hk_monitor_tryout'
let channel='#_debug'

let send_slack_msg_command_sample=`curl -X POST --data-urlencode 'payload={
  "channel": "#${channel}",
  "username": "${username}",
  "text": "${text_to_send}" }' ${webhook}`;

// let send_slack_msg_command = `curl https://hooks.slack.com/services/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 -X POST -H 'Content-type: application/json' --data '{"text":"https://booking.covidvaccine.gov.hk/centre/index_tc.html changed!"}'`

let monitor_url = 'https://booking.covidvaccine.gov.hk/centre/index_tc.html'

let ENV_SLACK_HOOK_URL = process.env.SLACK_HOOK_URL
let send_slack_msg_helloworld = `curl ${ENV_SLACK_HOOK_URL} -X POST -H 'Content-type: application/json' --data '{"text":"send_slack_msg_helloworld"}'`
let send_slack_msg_command = `curl ${ENV_SLACK_HOOK_URL} -X POST -H 'Content-type: application/json' --data '{"text":"https://booking.covidvaccine.gov.hk/centre/index_tc.html changed!"}'`

child_process.execSync(send_slack_msg_helloworld);

let send_slack_still_alive_msg_command=`curl -X POST --data-urlencode 'payload={
  "channel": "#${channel}",
  "username": "${username}",
  "text": "still alive" }' ${webhook}`;

( async () => {
  const browser = await puppeteer.launch({
    defaultViewport:{
        width: 1920,
        height: 1080 * 7
    },
    ignoreHTTPSErrors: true
  });
  const page = await browser.newPage();
  await page.goto( monitor_url );
  await page.waitForTimeout(5 * 1000)

  for (let i = 0; i < 30; i++){
    const elements = await page.$x('/html/body/div[1]/main/article/div/div[3]/div/div[2]/div/div[5]/div[3]/table['+i+']')
    if (elements[0]){
      await elements[0].screenshot({path: `${i}.png`})
    }else{
      console.log('skip empty element')
    }
    
  }


  await browser.close();

  const diff = new PNG( {width,    height  } );

  const example_png = PNG.sync.read( fs.readFileSync( 'last_screenshot_7.png' ) );
  const current_example_png = PNG.sync.read( fs.readFileSync( '7.png' ) );

  let matching_result = pixelmatch( example_png.data, current_example_png.data, diff.data, width, height, { threshold: 0.2  } );

  fs.writeFileSync( 'difference_7.png', PNG.sync.write( diff ) );
  console.log(matching_result)

  if (matching_result > alarm_threshold){
    console.log('send alert message')
    child_process.execSync(send_slack_msg_command);
  }else{
    child_process.execSync('hostname');
  }

} )();
