const User = require("./User");

const data = { name: 1, age: [], friends: {} };

const user = new User(data);

console.log(user);
console.log("--------------------------");

const data2 = {
  name: "foo",
  age: 12,
  friends: [],
  address: {
    street: "foo",
    city: "bar"
  }
};

const user2 = new User(data2);

console.log(user2);
console.log("--------------------------");
console.log();
