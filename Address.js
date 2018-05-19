const typeChecker = require("./typeChecker");

class Address {
  constructor(data) {
    const tmp = typeof data === "object" ? data : {};

    this._getStreet = typeChecker("string", "", "street");
    this._getCity = typeChecker("string", "", "city");

    this.street = this._getStreet(tmp.street);
    this.city = this._getCity(tmp.city);
  }

  inspect() {
    return JSON.stringify(this, null, 2);
  }
}

module.exports = Address;
