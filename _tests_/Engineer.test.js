const Engineer = require('../lib/Engineer');

describe("Engineer", () => {
    it("Can set GitHUb account via constructor", () => {
        const ghName = "GoldenArm";
        const employee = new Engineer("Ianthe", 1, "goldenarm@third.com", ghName);
        expect(employee.github).toBe(ghName);
    });

    it("Can get GitHub username via getGithub()", () => {
        const ghName = "GoldenArm";
        const employee = new Engineer("Ianthe", 1, "goldenarm@third.com", ghName);
        expect(employee.getGithub()).toBe(ghName);
    });
    
    it("getRole() should return \"Engineer\"", () => {
        const role = "Engineer";
        const employee = new Engineer("Ianthe", 1, "goldenarm@third.com", "GoldenArm");
        expect(employee.getRole()).toBe(role);
    });
});