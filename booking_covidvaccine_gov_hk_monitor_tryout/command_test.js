const child_process=require('child_process');

let page_name = 'page name'
let text_to_send=`page changed ${page_name}`
let webhook='https://hooks.slack.com/services/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'
let username='pagechange-alert-visual-diff-tryout'
let channel='#_debug'

// curl -vLk https://hooks.slack.com/services/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 -X POST -H 'Content-type: application/json' --data '{"text":"Hello, World!"}'

let send_slack_msg_command=`curl https://hooks.slack.com/services/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 -X POST -H 'Content-type: application/json' --data '{"text":"Hello, World!"}'`;


child_process.execSync(send_slack_msg_command);