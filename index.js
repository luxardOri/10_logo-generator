// Call the libraries we are going to be using
const fs = require('fs');
const inquirer = require('inquirer');
const { Svg } = require('./lib/shapes');
//const generateLogo = require('./lib/shapes');

// Ask user questions about the logo they want to generate
const questions = [{
    type: 'list',
    message: 'What should the shape of your logo be?',
    name: 'shape',
    choices: ['circle','triangle','square']
},{
    type: 'input',
    message: 'What should the background color be?',
    name: 'bgColor'
},{
    type: 'input',
    message: 'What letters should the logo display? (Please enter up to 3 characters)',
    name: 'text'
},{
    type: 'input',
    message: 'What should the text color be?',
    name: 'textColor'
}];

//function to write the logo.svg file
function writeToFile(fileName, data) {
    fs.writeFileSync("./examples/"+fileName, data)
    console.log("Generated logo.svg");
}

//function to initialize app
function init() {
    inquirer.prompt(questions)
    //.then((response) => {
    .then(({ shape,bgColor,text,textColor }) => {
        //console.log(response);
        const logo = new Svg(text,textColor,shape,bgColor).render();
        //const logo = generateLogo(response);

        writeToFile("logo.svg",logo);
});

}

// Function call to initialize app
init();
