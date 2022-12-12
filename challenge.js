class Stack {
  constructor() {
  this.Arr = [];
  }
  push(number) {
    // your code here
    return this.Arr.push( number );
  }
  
  pop() {
    // your code here
    if ( this.Arr.length !== 0 ) {
      return this.Arr.pop();
    }
  }
  
  min() {
    // your code here
    if ( this.Arr.length !== 0 ) {
      return Math.min.apply( Math, this.Arr );
   }
  }
}

const stack = new Stack()
stack.push(3)
stack.push(5)
console.log(stack.min())
// => 3

stack.pop()
stack.push(7)
console.log(stack.min())
// => 3

stack.push(2)
console.log(stack.min())
// => 2

stack.pop()
console.log(stack.min())
// => 3

module.exports = Stack
