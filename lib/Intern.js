const Employee = require('./Employee');

class Intern extends Employee {
    constructor(eName, id, email, school) {
        super(eName, id, email);

        this.school = school;
    }

    getRole() {
        return 'Intern';
    }

    getSchool() {
        return this.school;
    }
}

module.exports = Intern;
