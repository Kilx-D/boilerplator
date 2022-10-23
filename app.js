import chalk from 'chalk';
import canime from 'chalk-animation';



import selection from './selection.js';
import picker from "./picker.cjs";


const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms))

const welcome = async() => {
    let welcomeText = canime.rainbow(
        "Boilerplate picker \n"
    )
    await sleep();
    
    welcomeText.stop();

    console.log(chalk.magenta(`
    This is a boilerplate picker.
    Pick a option for a boilerplate project.`))

    let cta = canime.rainbow(`
    pick an option now
    `)
        await sleep();
    cta.stop();
}

const instruction = async({folderName}) => {
    console.log(`
    Now begin typing \n
    \t ${chalk.cyan(`cd ${folderName}`)} \n
    \t ${chalk.cyan(`npm install`)} \n
    \t ${chalk.cyan("npm run start")} \n`)

    let goodbye = canime.rainbow("Happy Hacking!");
    await sleep();
    goodbye.stop();
}


await welcome();
let item = await selection();
await picker(item);
await instruction(item)