let myArray = [];

function displayArray() {
  const arrayDisplay = document.getElementById("arrresult");
  arrayDisplay.innerHTML = "";
  for (let i = 0; i < myArray.length; i++) {
    const element = document.createElement("div");
    element.className = "array-item";
    element.textContent = myArray[i];
    arrayDisplay.appendChild(element);
  }
}
function addElement() {
  const arrayInput = document.getElementById("input").value;
  if (arrayInput) {
    myArray.push(arrayInput);
    displayArray();
    document.getElementById("input").value = "";
  }
}
function push() {
  myArray.push(prompt("Write element to push in array.."));
  displayArray();
  document.getElementById("msg").textContent =
    "Push() array method add element in last.";
}
function pop() {
  myArray.pop();
  displayArray();
  document.getElementById("msg").textContent =
    "Pop() array method remove element in last.";
}
function shift() {
  myArray.shift();
  displayArray();
  document.getElementById("msg").textContent =
    "shift() array method remove element in start.";
}
function unshift() {
  myArray.unshift(prompt("Write element to unshift in array.."));
  displayArray();
  document.getElementById("msg").textContent =
    "Unshift() array method add element in start.";
}
function slice() {
  const start = parseInt(prompt("Enter start index for slice:"));
  const end = parseInt(prompt("Enter end index for slice:"));
  const slicedArray = myArray.slice(start, end);
  alert("Sliced Array: " + slicedArray);
}

function splice() {
  const index = parseInt(prompt("Enter index to splice:"));
  const count = parseInt(prompt("Enter number of elements to remove:"));
  const removedItems = myArray.splice(index, count);
  alert("Removed items: " + removedItems);
  displayArray();
}