class Inspectable {
  inspect() {
    return JSON.stringify(this, null, 2);
  }
}

module.exports = Inspectable;
