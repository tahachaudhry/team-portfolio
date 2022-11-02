const Intern = require('../lib/Intern');

describe("Intern", () => {
    it("Can set school from constructor", () => {
        const school = "Ninth House";
        const employee = new Intern("Harrow", 9, "ninthdaughter@ninth.com", school);
        expect(employee.school).toBe(school);
    });

    it("can get school via getSchool()", () => {
        const school = "Ninth House";
        const employee = new Intern("Harrow", 9, "ninthdaughter@ninth.com", "Ninth House");
        expect(employee.getSchool()).toBe(school);
    });

    it("getRole() should return \"Intern\"", () => {
        const role = "Intern";
        const employee = new Intern("Harrow", 9, "ninthdaughter@ninth.com", "Ninth House");
        expect(employee.getRole()).toBe(role);
    });
});