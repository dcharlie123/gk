function random(max, min) {
  Math.floor(Math.random() * (max - min) + min);
}
function randomNumInArr(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}
export {random,randomNumInArr}
