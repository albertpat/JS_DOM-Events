console.log("Script attached");
/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"
const node1 = document.getElementById("node1");
node1.textContent = "I used the getElementById(“node1”) method to access this";
// Select Node #2 and change the text to: "I used the getElementByClassName("node2") method to access this" */
const node2 = document.getElementsByClassName("node2")[0];
node2.textContent =
  "I used the getElementByClassName(node2) method to access this";
// Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these" */
const myH3 = document.getElementsByTagName("h3");
for (const element of myH3) {
  element.textContent =
    "I used the getElementByTagName(h3) method to access all of these";
}
/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

// TODO: Create a paragraph element using this document.createElement() and put this text inside "This node was created using the createElement() method"
const newPara = document.createElement("p");
newPara.textContent = "This node was created using the createElement() method";
// TODO: Append the created node to the parent node using the element.appendChild() method
const parent = document.querySelector("#parent");
parent.appendChild(newPara);
// TODO: Create a <a> element using this document.createElement() and put this text inside "I am a <a> tag"
const newA = document.createElement("a");
newA.textContent = "I am a <a> tag";
// BONUS: Add a link href to the <a>

// TODO: Insert the created <a> in the parent but before the <p> you just created using the element.insertBefore() method
parent.insertBefore(newA, newPara);
newA.href = "#";
/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"
const container3 = document.querySelector("#exercise-container3");
const oldChild = document.querySelector("#N1");

const newNode = document.createElement("p");
newNode.textContent = "New Child Node";
// TODO: Remove the "New Child Node"
container3.replaceChild(newNode, oldChild);
newNode.remove();
/*----------- Exercise #4: LIST ITEMS ----------- */
// Use the following array of values to generate a list on the DOM

let list = [
  "apples",
  "bananas",
  "carrots",
  "dragon fruit",
  "eggplant",
  "fish",
  "grapes",
  "honey",
  "ice bag",
  "juice (any kind)",
];

// TODO: Create an unordered list element
const ul = document.createElement("ul");
// TODO: Iterate over the array values, and create a list item element for each
list.forEach((item) => {
  let li = document.createElement("li");
  li.textContent = item;
  ul.appendChild(li);
});
// TODO: Append the new list items to the unordered list element

// TODO: Append the unordered list to the `div#container` under exercise 4
document.querySelector("#container").appendChild(ul);
/*----------- Exercise #5: DOM EVENTS --------------*/

// TODO: write a function called "show" which creates a new div with an alerting message to the user with this message
// -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
// This div should be a 'modal' that covers the main content on the screen
// BONUS: The modal popup should be able to be closed. Refactor for this functionality
const myButtom = document.querySelector("#btn")
myButtom.addEventListener("click", show);

function show() {
  let modalContainer = document.createElement("div");
  let modalCard = document.createElement("div");
  let myH2 = document.createElement("h2");
  let p = document.createElement("p");
  let clostBtn = document.createElement("button");

  myH2.textContent = "Modal head";
  p.textContent = "Modal text";
  clostBtn.textContent = "close";

  modalContainer.appendChild(modalCard);
  modalCard.append(myH2,p,clostBtn);
  document.body.appendChild(modalContainer);
  modalCard.classList.add("modal-card");
  modalContainer.id = "modal";
  
    clostBtn.onclick = function() {
        document.body.removeChild(modalContainer);
    };
    modalCard.appendChild(clostBtn);
}

