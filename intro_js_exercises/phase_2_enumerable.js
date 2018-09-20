Array.prototype.myEach = function (func) {
  for (let i = 0; i < this.length; i++) {
    func(this[i]);
  }
};

function addTwo(num) {
  return num + 2;
}
[1, 2, 3].myEach(addTwo);

Array.prototype.myMap = function(func) {
  const result = [];

    this.myEach( el => result.push(func(el)));

  return result;
};

const ending = [1, 2, 3].myMap(addTwo);
console.log(ending);

Array.prototype.myReduce = function(func, initialValue) {
    let arr = this;
    if (!initialValue) {
      initialValue = arr[0];
      arr = arr.slice(1);
    }
    arr.myEach( el => initialValue = func(initialValue, el));
    return initialValue;
};

const result = [1, 2, 3].myReduce((total, item) => total + item);
console.log(result);

