/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  const stack = [];
  for (const c of tokens) {
      if (c === '+') {
          stack.push(stack.pop() + stack.pop());
      } else if (c === '-') {
          const a = stack.pop();
          const b = stack.pop();
          stack.push(b - a);
      } else if (c === '*') {
          stack.push(stack.pop() * stack.pop());
      } else if (c === '/') {
          const a = stack.pop();
          const b = stack.pop();
          stack.push(Math.trunc(b / a));
      } else {
          stack.push(parseInt(c));
      }
  }
  return stack.pop();
};