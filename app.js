//initial npm packages
const fs = require('fs');
const yargs = require('yargs');
const chalk = require('chalk');
const inquirer = require('inquirer');
const promisify = require('promisify');



//Player class
class PlayerCreate {
    constructor(style, name) {
        this.style = styleSelect(style);
        this.name = name;
    }
    attackMonster(monster) {
        if (this.style.attack > monster.defense) {
            console.log('You have killed this monster. + 5xp');
        } else {
            console.log('You are not strong enough to hurt this monster.');
        }
    }
}

//Monster template
class MonsterCreate {
    constructor(level, name, atk, def) {
        this.level = level;
        this.name = name;
        this.attack = atk;
        this.defense = def;
    }
}

const styleSelect = function (style) {
    const characterStyle = fs.readFileSync('characterClasses.json');
    const stringCharStyle = characterStyle.toString();
    const charJSON = JSON.parse(stringCharStyle);
    
    for (let i = 0; i < charJSON.length; i++) {

        if (style === charJSON[i].className) {
            return charJSON[i];
        } else {
            return style = console.log(chalk.red('Not a valid character style.'));
        }
    }
}





// Player class selection...
inquirer.prompt([
        {
        message: 'You wake up alone in the woods... It is just before dawn... you look around and you see a weapon a few feet away from you...(please type: \'sword\' \'bow\' \'staff\'.',
        name: 'weapon'
    },
    {
        message: 'What is your name?',
        name: 'name'
    }
]).then(response => {
    if (response === 'sword') {
        //need to link response to pick character class.
    } else if (response === 'bow') {
        //need to link response to pick character class.
    } else {
        //need to link response to pick character class.
    }
    const mainChar = new PlayerCreate(response.weapon, response.name);
    console.log(mainChar);
})




const slime = new MonsterCreate(1, 'slime', 1, 1);


