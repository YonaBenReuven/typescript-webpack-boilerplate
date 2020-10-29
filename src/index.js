const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");

const button = document.getElementById("submit");
// woof woof
function add(num1, num2) {
	return num1 + num2;
}

button.addEventListener('click', () => {
	console.log(add(num1.value, num2.value));
});