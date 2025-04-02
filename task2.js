// На сторінці index.html знаходяться поля зазначені коментарем Task2
// При введені імені користувача в поле #userNameInput та натиску на кнопку
// #getUserButton потрібно зробити запит Fetch за посиланням - https://jsonplaceholder.typicode.com/users
// Віднайти користувача із введеним ім'ям, отримати місто його проживанння та
// відобразити у тезі #userCity
// Запустити програму потрібно за допомогою Live Server
// Перевірити правильність програми - команда node tests/task2.test.js

const input = document.getElementById("userNameInput");
const button = document.getElementById("getUserButton");
const city = document.getElementById("userCity");

button.addEventListener("click", () => {
	const userName = input.value;
	fetch("https://jsonplaceholder.typicode.com/users")
		.then((res) => {
			return res.json();
		})
		.then((data) => {
			const user = data.find((element) => element.name === userName);
			if (user) {
				const userCity = user.address.city;
				city.textContent = `${userCity}`;
			}
		});
});
