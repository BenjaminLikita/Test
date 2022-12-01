let ulEl = document.getElementById("ul-el");
let buttonEl = document.getElementById("button-el");
let inputEl = document.getElementById("input-el");

buttonEl.addEventListener("click", function () {
	if (inputEl.value === "") {
		alert('Please input a value!!')
		// you don't need to return a value. Just return
		return;
	} else {
		// use the string.split method to split the string by space, then use a foreach loop to add each element.
		// You could even use a for each expression and extract the process as a function on it's own
		// let arr = [ 1, 2, 23, 'eden']
		let string = inputEl.value
		let splitter = string.split(" ")
		splitter.forEach(element => {
			let li = document.createElement('li')
			li.innerText = element
			let a = document.createElement('a')
			a.setAttribute('href', '#')
			a.textContent = "X"
			li.appendChild(a)
			ulEl.appendChild(li)
			inputEl.value = ""
		});
		// Here's a way you could approach this:
		// You could assign an id/class to the button that is somehow related to the value of the input or even just some increasing number
		// Put the input value in an element(probably p) or, even better, append the entire thing (button and text) together under an element.
		// Have a connection between the id/class of the button and the id/class of the input value i.e if you get the id of the button, you should be able to get the id of the elem from that
		// For example, I could say elID = btID + "-el" so if btID was "1", elID would be "1-el"
		// Then add an event listener to buttons that takes the id/class of the button, gets the id/class of the elem and deletes it.
		// parEl.innerHTML += `${inputEl.value}  <button>X</button>  <br>`;
		// inputEl.value = "";
	}
	//Don't name variables after letters. Have meaningful names to your variables
});
ulEl.addEventListener("click", deleteTask)
function deleteTask(e){
	if(e.target.hasAttribute('href')){
		if(confirm('Are you sure?')){
			let ele = e.target.parentElement
			ele.remove()
		}
	}
}
console.log(typeof inputEl.value);
// // I'm really bad at the dom and probably wouldn't have thought to use Nodes
// // But with a few changes to your code, I could get it working.
// // The important thing is you have to learn to think as a problem solver. There's no magical formula
// function myFunction(text) {
// 	let textNode = document.createTextNode(text);
// 	// I create a node out of the text. Simple

// 	let button = document.createElement("button");
// 	button.appendChild(document.createTextNode("X"));
// 	// This is code you already had

// 	let pTag = document.createElement("p");
// 	pTag.appendChild(textNode);
// 	pTag.appendChild(button);
// 	// Then I create a paragraph tag to contain both

// 	button.addEventListener("click", () => {
// 		pTag.remove();
// 	});
// 	// I then add the event listener to keep track of the paragraph and delete it when clicked

// 	document.body.appendChild(pTag);
// 	// Then you append the containing paragraph
// }
// let arr = ["man", "woman", "boy"]
// console.log(arr);
// let stringer = "apple is sweet"
// let splitt = stringer.split(" ")
// console.log(splitt);
// splitt.forEach( element => {
// 	console.log(element)
// });
