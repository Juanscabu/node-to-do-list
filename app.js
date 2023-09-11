const { inquirerMenu, pause } = require('./helpers/inquirer');

require('colors');

const main = async () => {
    let opt = '';
    do {
        opt = await inquirerMenu();
        await pause();
    } while (opt !== '0');
}

main();