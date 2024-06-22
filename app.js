import { computerQuestions } from "./question.js";
const que = document.querySelector(".question");
const ans1 = document.querySelector(".ans1");
const ans2 = document.querySelector(".ans2");
const ans3 = document.querySelector(".ans3");
const ans4 = document.querySelector(".ans4");
const nextbtn = document.querySelector(".nextbtn");
let answer = document.querySelectorAll(".answer");

let i = 0;
let score = 0;

let quizcontainer = document.querySelector(".quiz-container");

nextbtn.style.display = "none";

let changeQA = () => {
	que.innerHTML = `Q${i + 1} : ${computerQuestions[i].question}`;

	ans1.innerHTML = `${computerQuestions[i].answers[0]}`;
	ans2.innerHTML = `${computerQuestions[i].answers[1]}`;
	ans3.innerHTML = `${computerQuestions[i].answers[2]}`;
	ans4.innerHTML = `${computerQuestions[i].answers[3]}`;

	// Reset the background color for all answer elements
	ans1.style.backgroundColor = "";
	ans2.style.backgroundColor = "";
	ans3.style.backgroundColor = "";
	ans4.style.backgroundColor = "";
	nextbtn.style.display = "none";
};

answer.forEach((e) => {
	e.addEventListener("click", (el) => {
		let clickAns = el.target.innerHTML;
		let correctAnswer = computerQuestions[i].correct_answer;
		if (clickAns == correctAnswer) {
			el.target.style.backgroundColor = "green";
			score++;
			setTimeout(() => {
				i++;
				if (i < computerQuestions.length) {
					changeQA();
				} else {
					// alert(`Your score is ${score} out of ${computerQuestions.length}`);
					let h3 = document.createElement("h3");
					h3.className = "result";
					h3.innerHTML = `Your score is ${score} out of ${computerQuestions.length} `;

					let okbtn = document.createElement("button");
					okbtn.className = "okbtn";
					okbtn.innerText = "OK";

					h3.appendChild(okbtn);

					quizcontainer.appendChild(h3);

					okbtn.addEventListener("click", () => {
						location.reload();
					});
					i = 0;
					score = 0;
				}
			}, 300);
			// nextbtn.style.display = "inline-block";
		} else {
			el.target.style.backgroundColor = "red";
			nextbtn.style.display = "inline-block";
		}
	});
});

nextbtn.addEventListener("click", () => {
	i++;
	if (i < computerQuestions.length) {
		changeQA();
	} else {
		// alert(`Your score is ${score} out of ${computerQuestions.length}`);
		let h3 = document.createElement("h3");
		h3.className = "result";
		h3.innerHTML = `Your score is ${score} out of ${computerQuestions.length} `;

		let okbtn = document.createElement("button");
		okbtn.className = "okbtn";
		okbtn.innerText = "OK";

		h3.appendChild(okbtn);

		quizcontainer.appendChild(h3);

		okbtn.addEventListener("click", () => {
			location.reload();
		});
		i = 0;
		score = 0;
	}
});

changeQA();
