const Manager = require("../index");

test("Can get manager name", () => {
  const obj = new Manager("Joe", 14, "joeschmo@gmail.com", 1800);

  expect(obj.getName()).toBe("Joe");
});

test("Can get manager id", () => {
  const obj = new Manager("Joe", 14, "joeschmo@gmail.com", 1800);

  expect(obj.getId()).toBe(14);
});

test("Can get manager email", () => {
  const obj = new Manager("Joe", 14, "joeschmo@gmail.com", 1800);

  expect(obj.getName()).toBe("Joe");
});
