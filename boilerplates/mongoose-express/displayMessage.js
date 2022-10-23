const chalk = require("chalk")
const { createSpinner } = require("nanospinner");
const chalkAni = require("chalk-animation");
let spinner;



exports.endMessage = (port) => {
    require('dns').lookup(require('os').hostname(), function (err, add, fam) {
        

       console.log(chalk.cyanBright("server started on ") + chalk.magentaBright.bold.underline(`http://${add}:${port}`))
      })
      
}


exports.loading = (msg) =>  { spinner = createSpinner(msg).start()};

exports.stopLoading = (msg) => { spinner.success({text: msg})}