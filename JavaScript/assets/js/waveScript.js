// window.onload = function () {
// 	let elem = document.querySelector(".load");
// 	elem.style.transition = "opacity 1s";
// 	setTimeout(function () {
// 		elem.style.display = 'none';
// 		// elem.style.opacity = 0;
// 		// elem.style.zIndex = 0;
// 	}, 1000);
// };

document.addEventListener("DOMContentLoaded", () => {
	let elem = document.querySelector(".load");
	elem.style.transition = "opacity 1s";
	setTimeout(function () {
		elem.style.display = "none";
	}, 3000);
});
/* ======Date======= */

function myDate() {
	
	// eslint-disable-next-line no-unused-expressions
	let updateTime = (k) => { k < 10 ? (k = "0" + k) : null ; return k; };

	function dayth(v) {
		if (num === 1 || num === 21 || num === 31) {
			return v + "st";
		} else if (num === 2 || num === 22) {
			return v + "nd";
		} else if (num === 3 || num === 23) {
			return v + "rd";
		} else {
			return v + "th";
		}
	}

	// let updateDay = (l) => {
	// 	l < 10 ? (l = "0" + l) : "";
	// 	return l;
	// };

	let months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	],
		days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

	const displayDay = document.querySelector("#day");
	const displayTime = document.querySelector("#time");

	let date = new Date();

	let year = date.getFullYear();
	let month = date.getMonth();
	let day = date.getDay();
	let num = date.getDate();
	let hour = date.getHours();
	let min = date.getMinutes();
	let sec = date.getSeconds();
	// let ms = ((date.getMilliseconds() / 10).toFixed(0));	

	hour = updateTime(hour);
	min = updateTime(min);
	sec = updateTime(sec);
	num = dayth(num);

	displayDay.innerHTML = year + " - " + months[month] + " - " + days[day] + " - " + num;
	displayTime.innerHTML = hour + " : " + min + " : " + sec;

	setTimeout(function () {
		myDate();
	}, 1000);
}

myDate();

/* ==========================FETCH=========================== */
async function doShit() {
	// let url = "https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits";

	// let response = await fetch(url);

	// let commits = await response.json();
	// // alert(commits[0].author.login);
	// console.log(commits[1].author);

	// let response = await fetch("https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits");

	// let text = await response.text(); // read response body as text

	// console.log(text.slice(0, 80) + "...");

	let response = await fetch("https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits");

	// get one header
	console.log(response.headers.get("Content-Type"));
	for (let [key, value] of response.headers) {
		console.log(`${key} = ${value}`);
	}
}
doShit();

// fetch("https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits")
// 	.then((response) => response.json())
// 	.then((commits) => console.log(commits[0].author));


// let worker = {
// 	name : 'john',
// 	surname : 'doe',
// };

// async function doShit1() {
// 	let response = await fetch("./index", {
// 		method: "POST",
// 		headers: {
// 			"Content-Type": "application/json;charset=utf-8",
// 		},
// 		body: JSON.stringify(worker),
// 	});

// 	let result = await response.json();
// 	console.log(result.message);
// }
// doShit1();

/* ==========================FETCH=========================== */
const btn = document.querySelector('#button');
const subInput = document.querySelector('input');
const result = document.querySelector('#result');

function render(json) {
	const post = json.data.children;
	return `<ol>
		${
		post.map(
			post => `<li>${post.data.title}
				<a href=${post.data.url} target='_blank'>Link</a>`
		).join('')}
		</ol>`;
}

async function fetch5(sub) {
	const URL = `https://www.reddit.com/r/${sub}/top/.json?limit=5`;
	try {
		const fetchResult = fetch(new Request(URL, { method: 'GET', cache: 'reload' }));
		const response = await fetchResult;
		if (response.ok) {
			const jsonData = await response.json();
			result.innerHTML = render(jsonData);
		} else {
			result.innerHTML = `Response.status: ${response.status}`;
		}
	} catch (e) {
		result.innerHTML = e;
	}
}

btn.addEventListener('click', () => {
	fetch5(subInput.value);
});