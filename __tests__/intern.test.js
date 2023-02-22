const { Employee, Intern } = require("../components/employee");

test("Can get intern name", () => {
  const obj = new Intern(
    "Joe",
    14,
    "joeschmo@gmail.com",
    "University of Richmond"
  );

  expect(obj.getName()).toBe("Joe");
});

test("Can get intern id", () => {
  const obj = new Intern(
    "Joe",
    14,
    "joeschmo@gmail.com",
    "University of Richmond"
  );

  expect(obj.getId()).toBe(14);
});

test("Can get intern email", () => {
  const obj = new Intern(
    "Joe",
    14,
    "joeschmo@gmail.com",
    "University of Richmond"
  );

  expect(obj.getName()).toBe("Joe");
});

test("Can get intern GitHub", () => {
  const obj = new Intern(
    "Joe",
    14,
    "joeschmo@gmail.com",
    "University of Richmond"
  );

  expect(obj.getSchool()).toBe("University of Richmond");
});

test("Can get intern role", () => {
  const obj = new Intern(
    "Joe",
    14,
    "joeschmo@gmail.com",
    "University of Richmond"
  );

  expect(obj.getRole()).toBe("Intern");
});
