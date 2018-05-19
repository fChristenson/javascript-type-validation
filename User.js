const typeChecker = require("./typeChecker");
const Address = require("./Address");

class User {
  constructor(data) {
    const tmp = typeof data === "object" ? data : {};

    this._getName = typeChecker("string", "", "name");
    this._getAge = typeChecker("number", 0, "age");
    this._getFriends = typeChecker("array", [], "friends");

    this.name = this._getName(tmp.name);
    this.age = this._getAge(tmp.age);
    this.friends = this._getFriends(tmp.friends).map(
      friend => new User(friend)
    );
    this.address = new Address(tmp.address);
  }

  inspect() {
    return JSON.stringify(this, null, 2);
  }
}

module.exports = User;
