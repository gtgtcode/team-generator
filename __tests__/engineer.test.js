const { Employee, Engineer } = require("../components/employee");

test("Can get engineer name", () => {
  const obj = new Engineer(
    "Joe",
    14,
    "joeschmo@gmail.com",
    "https://github.com/github"
  );

  expect(obj.getName()).toBe("Joe");
});

test("Can get engineer id", () => {
  const obj = new Engineer(
    "Joe",
    14,
    "joeschmo@gmail.com",
    "https://github.com/github"
  );

  expect(obj.getId()).toBe(14);
});

test("Can get engineer email", () => {
  const obj = new Engineer(
    "Joe",
    14,
    "joeschmo@gmail.com",
    "https://github.com/github"
  );

  expect(obj.getName()).toBe("Joe");
});

test("Can get engineer GitHub", () => {
  const obj = new Engineer(
    "Joe",
    14,
    "joeschmo@gmail.com",
    "https://github.com/github"
  );

  expect(obj.getGitHub()).toBe("https://github.com/github");
});

test("Can get engineer role", () => {
  const obj = new Engineer(
    "Joe",
    14,
    "joeschmo@gmail.com",
    "https://github.com/github"
  );

  expect(obj.getRole()).toBe("Engineer");
});
