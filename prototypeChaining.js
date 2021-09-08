// Prototype Chaining
function Stack(content = []) {
  this.stack = [...content];
}

Stack.prototype.pop = function () {
  const value = this.stack[0];
  this.stack.splice(0, 1);
  return value;
};

Stack.prototype.push = function (value) {
  this.stack.splice(0, 0, value);
};

// Classes

class Stack {
  constructor(content = []) {
    this.stack = [...content];
  }

  pop () {
    const value = this.stack[0];
    this.stack.splice(0, 1);
    return value;
  }

  push (value) {
    this.stack(0, 0, value);
  }
}
