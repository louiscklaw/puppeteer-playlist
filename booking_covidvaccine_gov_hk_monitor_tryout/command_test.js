const child_process=require('child_process');

let page_name = 'page name'
let text_to_send=`page changed ${page_name}`
let webhook='https://hooks.slack.com/services/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'
let username='pagechange-alert-visual-diff-tryout'
let channel='#_debug'

let ENV_SLACK_HOOK_URL = process.env.SLACK_HOOK_URL

// curl -vLk https://hooks.slack.com/services/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 -X POST -H 'Content-type: application/json' --data '{"text":"Hello, World!"}'

let send_slack_msg_command=`curl ${ENV_SLACK_HOOK_URL} -X POST -H 'Content-type: application/json' --data '{"text":"Hello, World!"}'`;
console.log(send_slack_msg_command)

child_process.execSync(send_slack_msg_command);
