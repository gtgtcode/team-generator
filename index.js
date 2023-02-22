class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return "Employee";
  }
}

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name);
    super(id);
    super(email);
    this.officeNumber = officeNumber;
  }

  getOfficeNum() {
    return this.officeNumber;
  }

  getRole() {
    return "Manager";
  }
}

module.exports = Employee;
