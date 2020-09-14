const num1 = document.getElementById("num1") as HTMLInputElement;
const num2 = document.getElementById("num2") as HTMLInputElement;

const button = document.getElementById("submit") as HTMLButtonElement;

function add(num1: number, num2: number) {
	return num1 + num2;
}

button.addEventListener('click', () => {
	console.log(add(Number(num1.value), Number(num2.value)));
});