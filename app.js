//initial npm packages
const fs = require('fs');
const yargs = require('yargs');
const chalk = require('chalk');
const inquirer = require('inquirer');


//Character creation
const RpgCharCreate = function (style, name, race, sex) {
    this.style = applyStyle(style);
    this.name = name;
    this.race = race;
    this.sex = sex;

}

const applyStyle = function (style) {
    const characterStyle = fs.readFileSync('characterClasses.json');
    const stringCharStyle = characterStyle.toString();
    const charJSON = JSON.parse(stringCharStyle);
    
    for (let i = 0; i < charJSON.length; i++) {

        if (style === charJSON[i].className) {
            return charJSON[i];
        } else {
            console.log('Not a valid character style.');
        }
    }
}

const troy = new RpgCharCreate('Ranger', 'Troy', 'nord', 'male');

console.log(troy);

