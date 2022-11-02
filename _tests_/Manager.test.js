const Manager = require('../lib/Manager');

describe("Manager", () => {
    it("Can set office number from constructor", () => {
        const officeNum = "Mithraeum";
        const employee = new Manager("John", 1, "emperor@first.com", officeNum);
        expect(employee.officeNumber).toBe(officeNum);
    });

    it("Can get office number username via getOfficeNumber()", () => {
        const officeNum = "Mthraeum";
        const employee = new Manager("John", 1, "emperor@first.com", officeNum);
        expect(employee.getOfficeNumber()).toBe(officeNum);
    });

    it("getRole() should return \"Manager\"", () => {
        const role = "Manager";
        const employee = new Manager("John", 1, "emperor@first.com", "Mithraeum");
        expect(employee.getRole()).toBe(role);
    });
});

