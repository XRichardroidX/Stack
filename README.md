# Stack

This is a data structure and algorithm question in JavaScript which was solved using the stack data structure.

## How to solve this challenge?

1. Read the "Challenge description" below.
2. Make changes to the [challenge.js](./challenge.js) file.
3. Commit your changes.
4. Wait for the result of the "GitHub Classroom Workflow" action. If it is green - congratulations, you solved this challenge! If not - try again!
5. _You can watch an example of how to solve a challenge in the video linked in the theoretical lesson preceding this challenge._

## Challenge description

### Min Stack

Create a Stack that contains the standard push and pop methods. It should also contain another method min that returns the minimum number in the Stack.

#### Extra Credit

All operations should take O(1) time.

#### Example

This is an example of a test case:

```
const stack = new Stack()

stack.push(3)
stack.push(5)
console.log(stack.min())
// => 3

stack.pop
stack.push(7)
console.log(stack.min())
// => 3

stack.push(2)
console.log(stack.min())
// => 2

stack.pop
console.log(stack.min())
// => 3

```

Get stuck and need some hint?
Check below link:

*https://gitlab.com/microverse/guides/coding_challenges/hints/blob/master/challenges/basic-data-structures/min-stack.md*

### Troubleshooting

If you cannot see any auto-grading workflows on the [Actions](../../actions) page, learn how to fix it in [this repo](https://github.com/microverse-students/autograding-troubles-js/blob/main/README.md).
