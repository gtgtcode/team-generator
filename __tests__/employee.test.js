const { Employee } = require("../components/employee");

test("Can get employee name", () => {
  const obj = new Employee("Joe", 14, "joeschmo@gmail.com");

  expect(obj.getName()).toBe("Joe");
});

test("Can get employee id", () => {
  const obj = new Employee("Joe", 14, "joeschmo@gmail.com");

  expect(obj.getId()).toBe(14);
});

test("Can get employee email", () => {
  const obj = new Employee("Joe", 14, "joeschmo@gmail.com");

  expect(obj.getEmail()).toBe("joeschmo@gmail.com");
});

test("Can get employee role", () => {
  const obj = new Employee("Joe", 14, "joeschmo@gmail.com");

  expect(obj.getRole()).toBe("Employee");
});
