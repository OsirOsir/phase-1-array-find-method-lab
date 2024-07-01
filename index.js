// code your solution here


function superbowlWin(collection) {
 const yearW = collection.find(years => years.result === "W")

 if( yearW) {
  return yearW.year
 } else {
  return undefined
 }
}
// console.log(superbowlWin(record));