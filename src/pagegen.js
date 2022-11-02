
const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

function buildEmployee(employees) {
  let employeeCard = '';
  employees.forEach(element => {
    switch (element.getRole()) {
      case 'Manager':
        employeeCard += `
          <div class="col-sm">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title" id="manager-name">${element.getName()}</h5>
                  <h6 class="card-subtitle mb-2 text-muted" id="title">Manager</h6>
                  <p class="card-text" id="identification">ID: ${element.getId()}</p>
                  <p class="card-text" id="office-number">Office Number: ${element.getOfficeNumber()}</p>
                  <p class="card-text" id="email-intro">Email address: <a href="mailto:${element.getEmail()}" class="card-link" id="email">${element.getEmail()}</a></p>
                </div>
              </div>
          </div>
        `
        break;
      case 'Engineer':
        employeeCard += `
          <div class="col-sm">
            <div class="card" style="width: 18rem;">
              <div class="card-body">
                <h5 class="card-title" id="manager-name">${element.getName()}</h5>
                <h6 class="card-subtitle mb-2 text-muted" id="title">Engineer</h6>
                <p class="card-text" id="identification">ID: ${element.getId()}</p>
                <p class="card-text" id="github-intro">Github: <a href="https://www.github.com/${element.getGithub()}" class="card-link" id="github">${element.getGithub()}</a></p>
                <p class="card-text" id="email-intro">Email address: <a href="mailto:${element.getEmail()}" class="card-link" id="email">${element.getEmail()}</a></p>
              </div>
            </div>
          </div>
          `
        break;

      case 'Intern':
        employeeCard += `
          <div class="col-sm">
            <div class="card" style="width: 18rem;">
              <div class="card-body">
                <h5 class="card-title" id="manager-name">${element.getName()}</h5>
                <h6 class="card-subtitle mb-2 text-muted" id="title">Intern</h6>
                <p class="card-text" id="identification">ID: ${element.getId()}</p>
                <p class="card-text" id="school">School: ${element.getSchool()}</p>
                <p class="card-text" id="email-intro">Email address: <a href="mailto:${element.getEmail()}" class="card-link" id="email">${element.getEmail()}</a></p>
              </div>
            </div>
          </div>
        `
        break;

    }
  });
  return employeeCard;
}

function buildPage(employees) {
  return `
<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
            <title>Team Page</title>
          </head>

          <body>
            <div class="jumbotron">
              <h1 class="display-4">Team Page</h1>
              <p class="lead">Meet our employees</p>
            </div>
            <div class="container">
              <div class="row">
                ${buildEmployee(employees)}
              </div>
            </div>
          </body>
        </html>
        `
}

module.exports = buildPage;