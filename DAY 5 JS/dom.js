/*// Types of selector
// 1.Tag Selector :
let heading1 = document.getElementsByTagName("h1");
// HTMLCollection array
console.log(heading1[1]);

//2. Class Selector:
let cl = document.getElementsByClassName("a");
// htmlCollection Array
console.log(cl[0]);

//3.ID Selector:
let id = document.getElementById("b");
// it will return Single element and the first element
console.log(id);

// 4.QuerySelector (it works on all the three selectors)
let sel = document.querySelector("#b");
//it will return single element and the first element
console.log(sel);

// 5.Query Selector All
let d = document.querySelectorAll("#b");
//nodelist Array
console.log(d);*/

/*//Read operaion:
let head = document.querySelector("p");
console.log(head.textContent);

// write operation
head.textContent = "This is the new paragraph content";

let div = document.querySelector("div");
div.innerHTML = "<p>Hello from para</p>";
//div.textContent = <p>"hello from para"</p>;
// console.log(div.textContent);
console.log(div.innerHTML);*/

/*// add/remove/toggle case
let head = document.querySelector("h1");
console.log(head);

head.classList.add("color");
head.classList.add("border");
head.classList.add("background-color");
head.classList.remove("background-color");
head.classList.remove("border");
head.classList.toggle("background");

// styling
let p = document.querySelector("p");
p.style.color = "orchid";
p.style.backgroundcolor = "cornflowerblue";*/

/*// Creating element
let ul = document.createElement("ul");
let li1 = document.createElement("li1");
li1.textContent = "Item 1";
let li2 = document.createElement("li");
li2.textContent = "Item 2";
ul.appendChild(li1);
ul.appendChild(li2);
document.body.appendChild(ul);

let arr = ["Apple", "Banana", "Mango"];
arr.forEach((element) => {
  let li = document.createElement("li");
  li.textContent = element;
  ul.appendChild(li);
});*/

let form = document.querySelector("form");
form.addEventListener("Submit", () => {
  e.preventDefault();
  let name = document.querySelectorAll(input)[0];
  let feedback = document.querySelectorAll("input")[1];
  if (name.value === "") {
    alert("Name field is required");
    return;
  }
  if (feedback.length < 5) {
    alert("Feedback must be at least 5 characters long");
    return;
  }
  let result = document.querySelector(".result");
  result.textContent;
});
