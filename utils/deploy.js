const {exec} = require('child_process')

const CommandList = []

CommandList.push("npm run build")
CommandList.push("npm run not-found-patch")
CommandList.push("npm run github-pages")

exec(CommandList.join(" && "))