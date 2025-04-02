// Завдання: отримання даних про користувачів
// За допомогою засобі Fetch отримати інформацію про користувачів
// за посиланням - https://jsonplaceholder.typicode.com/users
// Імена користувачів відобразити в ненумерованому списку ul.usersList,
// який створений у файлі index.html
// Запустити програму за допомогою Live Server
// Перевірити за допомогою команди npm tests/task1.test.js

const url = "https://jsonplaceholder.typicode.com/users";
const ul = document.querySelector(".usersList");

fetch(url)
	.then((res) => {
		return res.json();
	})
	.then((data) => {
		data.forEach((user) => {
			const li = document.createElement("li");
			li.textContent = user.name;
			ul.append(li);
		});
	});
