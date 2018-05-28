const typeChecker = require("./typeChecker");
const Address = require("./Address");
const Inspectable = require("./Inspectable");

class User extends Inspectable {
  constructor(data) {
    super(data);
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
}

module.exports = User;
