const { createSpinner } = require("nanospinner");
const  {execSync}  = require('child_process');
const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms))


module.exports = async function picker ({tech, folderName})  {
    const spinner = createSpinner("Creating the boilerplate folder (might take a few seconds)").start();
    await sleep();

    

    execSync(`${__dirname}/selector.sh ${folderName} ${tech} ${__dirname}`)
    spinner.success({text: "Folder Created!"})
}
