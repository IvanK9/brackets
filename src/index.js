module.exports = function check(str, bracketsConfig) {

  let stack = [];

  if (str.length % 2 > 0) return false;

  for (let i = 0; i < str.length; i++) {

    let currentSym = str[i];
    let topStack = stack[stack.length - 1];

    bracketsConfig.forEach(function (item) {
      if (currentSym === item[0] && !stack.includes(item[1])) {
        stack.push(currentSym);
      } else if (stack.length === 0) {
        return false;
      } else if (currentSym === item[1] && item.includes(topStack)) {
        stack.pop();
      }
    });
  }
  return stack.length === 0;
};
