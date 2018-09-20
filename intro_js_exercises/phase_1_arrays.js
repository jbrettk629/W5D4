Array.prototype.unique = function (){
  return this.filter(function(value, index, self){
    return self.indexOf(value) === index ;
  } );
};
const array = [1,2,2,3,1,5,7];
console.log(array.unique());

function twoSum (arr) {
  let sum = [];
  for (let i = 0; i < arr.length-1; i ++) {
    for (let j = i + 1; j < arr.length; j ++) {
      if (arr[i] + arr[j] === 0) {
        sum.push(i, j);
      }
    }
  } 
  return sum;
}
const arr = [1,1,2,6,-2,-1];
console.log(twoSum(arr));


function transpose(array) {
    return array.reduce((prev, next) => next.map((item, i) =>
        (prev[i] || []).concat(next[i])
    ), []);
}


const matrix = [[1, 2, 3], 
                [4, 5, 6], 
                [7, 8, 9]];
                
console.log(transpose(matrix));