const Employee = require('../lib/Employee');

describe("Employee", () => {
    it("Can instantiate instance of Employee", () => {
        const employee = new Employee();
        expect(typeof (employee)).toBe("object");
    });

    it("Can set name via constructor arguments", () => {
        const nameVal = "Gideon";
        const employee = new Employee(nameVal);
        expect(employee.eName).toBe(nameVal);
    });

    it("Can set id via constructor argument", () => {
        const idValue = 1;
        const employee = new Employee("Gideon", idValue);
        expect(employee.id).toBe(idValue);
    });

    it("Can set email via constructor argument", () => {
        const emailVal = "cavalier@ninth.com";
        const employee = new Employee("Gideon", 1, emailVal);
        expect(employee.email).toBe(emailVal);
    });

    it("Can get name via getName()", () => {
        const nameVal = "Gideon";
        const employee = new Employee(nameVal);
        expect(employee.getName()).toBe(nameVal);
    });

    it("Can get id via getId()", () => {
        const idVal = 1;
        const employee = new Employee("Gideon", idVal);
        expect(employee.getId()).toBe(idVal);
    });

    it("Can get email via getEmail()", () => {
        const emailVal = "cavalier@ninth.com";
        const employee = new Employee("Gideon", 1, emailVal);
        expect(employee.getEmail()).toBe(emailVal);
    });

    it("getRole() should return \"Employee\"", () => {
        const roleVal = "Employee";
        const employee = new Employee("Gideon", 1, "cavalier@ninth.com");
        expect(employee.getRole()).toBe(roleVal);
    });
});
