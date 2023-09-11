/* require('colors');

const showMenu = async () => {

    return new Promise(resolve => {

        console.clear();


        console.log(`${'1.'.green} Create Task`);
        console.log(`${'2.'.green} List Tasks`);
        console.log(`${'3.'.green} List Completed Tasks`);
        console.log(`${'4.'.green} List Pending Tasks`);
        console.log(`${'5.'.green} Complete Task`);
        console.log(`${'6.'.green} Delete Task`);
        console.log(`${'0.'.green} Quit\n`);

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question('Select an Option: ', (opt) => {
            readline.close();
            resolve(opt);
        })
    });
}

const pause = () => {

    return new Promise(resolve => {

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question(`\nPress ${'Enter'.green} to continue`, (opt) => {
            readline.close();
            resolve();
        })
    });
}

module.exports = {
    showMenu,
    pause
} */