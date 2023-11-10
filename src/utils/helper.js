function compareTime(t1,t2){
  let x1 = new Date(t1)
  let x2 = new Date(t2)
  return x1>x2
}

module.exports = {
  compareTime
}