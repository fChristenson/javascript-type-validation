const typeChecker = require("./typeChecker");
const Inspectable = require("./Inspectable");

class Address extends Inspectable {
  constructor(data) {
    super(data);
    const tmp = typeof data === "object" ? data : {};

    this._getStreet = typeChecker("string", "", "street");
    this._getCity = typeChecker("string", "", "city");

    this.street = this._getStreet(tmp.street);
    this.city = this._getCity(tmp.city);
  }
}

module.exports = Address;
