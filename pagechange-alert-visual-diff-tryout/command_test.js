const child_process=require('child_process');

let page_name = 'page name'
let text_to_send=`page changed ${page_name}`
let webhook='https://hooks.slack.com/services/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'
let username='pagechange-alert-visual-diff-tryout'
let channel='#_debug'

let send_slack_msg_command=`curl -X POST --data-urlencode 'payload={
  "channel": "#${channel}",
  "username": "${username}",
  "text": "${text_to_send}" }' ${webhook}`;


child_process.execSync(send_slack_msg_command);