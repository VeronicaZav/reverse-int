module.exports = function reverse (n) {
  let num = Math.abs(n);
  let a = num.toString();
  return Number([...a].reverse().join(""));
}