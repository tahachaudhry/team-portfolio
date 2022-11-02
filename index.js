const inquirer = require('inquirer');
const fs = require('fs');

const buildPage = require('./src/pagegen');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const team = [];

const employeeQuestions = [
    {
        type: "list",
        name: "role",
        message: "What is the employee's role?",
        choices: [
            "Manager",
            "Engineer",
            "Intern",
        ],
    },
];

const engineerQuestions = [
    {
        type: 'input',
        name: 'eName',
        message: 'Enter name: ',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter employee email address: ',
        validate: (answer) => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            if (!emailRegex.test(answer)) {
                return "Please provide a valid email address."
            }
            return true
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'Enter ID: ',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter employee GitHub username: ',
    },
];

const managerQuestions = [
    {
        type: 'input',
        name: 'eName',
        message: 'Enter name: ',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter employee email address: ',
        validate: (answer) => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            if (!emailRegex.test(answer)) {
                return "Please provide a valid email address."
            }
            return true
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'Enter ID: ',
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'Enter office number: ',
    },
];

const internQuestions = [
    {
        type: 'input',
        name: 'eName',
        message: 'Enter name: ',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter employee email address: ',
        validate: (answer) => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            if (!emailRegex.test(answer)) {
                return "Please provide a valid email address."
            }
            return true
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'Enter ID: ',
    },
    {
        type: 'input',
        name: 'school',
        message: 'Enter school name: ',
    },
];

const nextEmployee = {
    type: "confirm",
    name: "addEmployee",
    message: "Would you like to add another employee?",
    default: false
};

async function nextEmployeeFunc() {
    try {
        const checkForNext = await inquirer.prompt(nextEmployee);
        if (checkForNext.addEmployee) {
            await createTeam();
        } 
    } catch (err) {
        console.log(err.name + " in nextEmployeeFunc");
    }
}

async function createTeam() {
    try {
        const userInput = await inquirer.prompt(employeeQuestions);

        switch (userInput.role) {
            case "Manager":
                try {
                    const managerInput = await inquirer.prompt(managerQuestions);
                    const { eName, id, email, officeNumber } = managerInput;

                    let manager = new Manager(eName, id, email, officeNumber);
                    team.push(manager);

                } catch (err) {
                    console.log(err.name + " in manager creation");
                }
                break;
            case "Engineer":
                try {
                    const engineerInput = await inquirer.prompt(engineerQuestions);
                    const { eName, id, email, github } = engineerInput;

                    let engineer = new Engineer(eName, id, email, github);
                    team.push(engineer);

                } catch (err) {
                    console.log(err.name + " in engineer creation");
                }
                break;
            case "Intern":
                try {
                    const internInput = await inquirer.prompt(internQuestions);
                    const { eName, id, email, school } = internInput;

                    let intern = new Intern(eName, id, email, school);
                    team.push(intern);

                } catch (err) {
                    console.log(err.name + " in intern creation");
                }
                break;
        }
    } catch (err) {
        console.log(err.name + " in team creation");
    } finally {
        await nextEmployeeFunc();

    }
}

async function createTeamPageHTML() {
    await createTeam();

    fs.writeFile('team-page-generated.html', buildPage(team), (err) =>
        err ? console.log(err) : console.log('Successfully created team page!')
    );
}

createTeamPageHTML();