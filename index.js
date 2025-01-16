function calculateSeconds() {

	const hours = document.getElementById("hours").value;


	if (!hours || hours < 0) {
		document.getElementById("result").textContent =
			"Введите коректное количество часов.";
		return;
	}

	const seconds = hours * 60 * 60;

	document.getElementById("result").textContent =
		`В ${hours} часах ${seconds} секунд.`;
}
