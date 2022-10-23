import inquirer from 'inquirer';
import list from './list.cjs';

export default async function selection (){
    const option = await inquirer.prompt({
        name: "tech_option",
        type: 'list',
        message: "Pick a technology \n",
        choices: list
    })

    const folderName = await inquirer.prompt({
        name: "folder_name",
        type: 'input',
        message: "What would you like to name this folder?",
        default() {
            return "idk"
        }
    })


    return {
        tech: option["tech_option"],
        folderName: folderName["folder_name"]
    }
}
