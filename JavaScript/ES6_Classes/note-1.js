// ES6 Classes

/*
// Using Methods in a Class
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  // Methods
  hello() {
    return `Hello ${this.firstName}!`;
  }

  howOld() {
    return `${this.firstName} ${this.lastName} is ${this.age} years old.`;
  }
}

let registeredUser = new User('Clark', 'Doxon', 35);
// -----------------------------------------------------
registeredUser.hello(); // Hello Clark!
registeredUser.howOld(); // Clark Doxon is 35 years old.
// -----------------------------------------------------
*/


// Static methods

/* Static method is defined on the class level so you can 
   call them directly using the class name. 
class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  static hello(firstName, lastName) {
    return `Hello ${firstName} ${lastName}!`;
  }
}

let registeredUser = new User('Clark', 'Doxon');
// --------------------------------------------------------------
registeredUser.firstName;       // Clark
registeredUser.lastName;        // Doxon
User.hello('Clark', 'Doxon');   // Hello Clark Doxon!
registeredUser.hello();         // TypeError: is not a function
// --------------------------------------------------------------
*/

// Class Inheritance

// The new class can inherit another class, 
// in which case you can use the inherited methods in the new class. 
// Use the extends keyword to extend the class.
class User {
  constructor(name) {
    this.firstName = name;
  }

  hello() {
    return `Hello ${this.firstName}!`;
  }
}

class UserHobby extends User {
  constructor(name, hobby) {
    super(name); // Calling it you get access to all the properties and methods of the User  class.
    this.hobby = hobby;
  }

  userHobby() {
    return `${this.hello()} You enjoy ${this.hobby}.`;
  }
}

let infoUser = new UserHobby('Clark', 'cooking');
// ------------------------------------------------------------------
infoUser.userHobby(); // Hello Clark! You enjoy cooking.
// ------------------------------------------------------------------
