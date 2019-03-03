let a = [1,2,3,4,5,6,7,8,9,10]
let total = "";
for (let i = 0; i < a.length; i++) {
  // total = total + parseInt(a[i], 10);
  total = total + a[i];
  }
console.log(total);
console.log(a.join(""));