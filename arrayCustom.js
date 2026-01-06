var data = [
  "burger",
  "pizza",
  "pasta",
  "salad",
  "soup",
  "sandwich",
  "chicken",
  "beef",
  "fish",
  "seafood",
  "veggie",
  "fruit",
  "cake",
  "pie",
  "donut",
  "cookie",
  "ice cream",
  "yogurt",
  "smoothie",
  "juice",
  "tea",
  "coffee",
  "water",
  "soda",
  "wine",
  "beer",
  " spirits",
  "soft drinks",
  "sports drinks",
  "energy drinks",
  "juice",
  "smoothie",
  "tea",
  "coffee",
  "water",
  "soda",
  "wine",
  "beer",
  " spirits",
  "soft drinks",
  "sports drinks",
  "energy drinks",
];

// O(n)
function search(query) {
  var starttime = Date.now();
  for (i = 0; i < data.length; i++) {
    if (data[i] === query) {
      console.log("Found");
    }
  }
  for (i = 0; i < data.length; i++) {
    if (data[i] === query) {
      console.log("Found 2");
    }
  }
  var endtime = Date.now();
  console.log("Time taken: " + (endtime - starttime));
}

// O(1)
function findbyindix(arr, index) {
  var starttime = performance.now();
  console.log(arr[index]);
  var endtime = performance.now();
  console.log("Time taken: " + (endtime - starttime) + " ms");
}

// O(n^2)
let number = [1, 2, 3, 4];
function doubleForLoop(data) {
  var starttime = performance.now();
  for (i = 0; i < data.length; i++) {
    for (j = 0; j < data.length; j++) {
      console.log(data[i], data[j]);
    }
  }
  var endtime = performance.now();
  console.log("Time taken: " + (endtime - starttime) + " ms");
}

// doubleForLoop(number);
// search("burger");
// findbyindix(data,0);

// ========custom array methods========

class myArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  get(index) {
    return this.data[index];
  }

  pop() {
    delete this.data[this.length - 1];
    this.length--;
    return this.length;
  }

  delete(value) {
    let valueIndex;

    for (var i = 0; i < this.length; i++) {
      if (this.data[i] === value) {
        valueIndex = i;
        break;
      }
    }

    for (var i = valueIndex; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];
    this.length--;
    return this.length;
  }

  deleteByIndex(value) {
    for (var i = value; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];
    this.length--;
    return this.length;
  }
}

let arr = new myArray();
arr.push("data");
arr.push("data2");
arr.push("data3");
arr.push("data4");
// arr.delete("data2");


console.log(arr);
arr.deleteByIndex(2);
console.log(arr);
