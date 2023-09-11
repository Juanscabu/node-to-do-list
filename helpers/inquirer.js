const inquirer = require('inquirer');
require('colors');

const questions = [
    {
        type: 'list',
        name: 'option',
        message: 'What do you want to do?',
        choices: [{
            value: '1',
            name: `${'1.'.green} Create Task`
        },
        {
            value: '2',
            name: `${'2.'.green} List Tasks`
        },
        {
            value: '3',
            name: `${'3.'.green} List Completed Tasks`
        },
        {
            value: '4',
            name: `${'4.'.green} List Pending Tasks`
        },
        {
            value: '5',
            name: `${'5.'.green} Complete Task`
        },
        {
            value: '6',
            name: `${'6.'.green} Delete Task`
        },
        {
            value: '0',
            name: `${'0.'.green} Quit\n`
        },
        ]
    }
]

const inquirerMenu = async () => {
    console.clear();
    console.log('==============================='.green);
    console.log('========Select an Option======='.green);
    console.log('===============================\n'.green);

    const { option } = await inquirer.prompt(questions);
    return option;
}

const pause = async () => {
    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `\nPress ${'Enter'.green} to continue`
        }
    ];
    console.log('\n');
    await inquirer.prompt(question);
}

module.exports = {
    inquirerMenu,
    pause
}