"use strict";

/*let firstName = "David";
let lastName = "Benard";
let years = "20";
console.log(`${firstName} ${lastName} is ${years} years old.`);

[1,2,3].forEach(alert);

let name = prompt('What is your name?', "");
console.log(`Hello, ${name}!`);*/

/*let isGreater = 4 > 1;
let result = prompt('Is 4 greater than 1', '')
if (result == 'no'){
alert ('You are wrong!');
} else {
    alert ('You are right')
}*/
// console.log(typeof isGreater)

/*let allowAccess;
let age = prompt("how old are you?", 18);
allowAccess = age <= 3 ? "Hi Baby" : age < 18 ? "hello" : age < 100 ? "Greetings" : "what an unusal age";
console.log(allowAccess);

// While Loop
let i = 0;
while (i < 3) {
	console.log(i);
	i++;
}

let j = 4;
do {
	console.log(j);
	j++;
} while (j < 10);

// For loop
for (let k = 0; k < 3; k++) {
	console.log(k);
}*/

//Switch statement
/*let q = 9;
switch (q) {
	case 9:
		console.log("below10");
		break;
	case 99:
		console.log("below100");
		break;
	case 999:
		console.log("below1000");
		break;
	case 9999:
		console.log("below10000");
		break;
	default:
		console.log("above calculated value");
}*/

// Function with parameter
/*function showMessage(text, from = "Nigeria") {
	console.log("Hello " + text + " from " + from);
}

function showPrime(n) {
	for (let v = 2; v < n; v++) {
		if (!isPrime(v)) continue;
		console.log(v);
	}

	function isPrime(n) {
		for (let v = 2; v < n; v++) {
			if (n % v == 0) return false;
		}
		return true;
	}
}*/

// Callback Functions
/*function ask(question, yes, no) {
	if (confirm(question)) yes();
	else no();
}

ask(
	"do you agree?",
	function () {
		console.log(`you agreed`);
	},
	function () {
		console.log(`you cancelled the execution.`);
	},
);*/

/*function showOk() {
	console.log(`you agreed.`);
}

function showCancel() {
	console.log(`you cancelled the execution.`);
}

ask("Do you agree?", showOk, showCancel);

function sum(a , b) {
	return a + b;
}*/

const sum = (a, b) => a + b;

// OBJECTS
/*let worker = {
	name: "john",
	age: 45,
	isAdmin: true,
};
worker.name = "peter";
worker.surname = "doe";
worker["age"] = "21"
worker.sister = "Amanda";
worker.brother = "James";
delete worker["isAdmin"];

for (let key in worker) {
	console.log(worker[key])
}

let repayment = {
	John: 200,
	Bola: 400,
	steve: 120,
}

let add = 0;
for (let key in repayment) {
	add += repayment[key];
	console.log(add)
}

Object.assign(worker, repayment);
console.log(worker)*/

/*let multiplyNumeric = (obj) => {
	for (let key in obj) {
		if (typeof obj[key] == "number") {
			obj[key] *= 2;
			console.log(obj[key]);
		}
	}
};*/

// multiplyNumeric(worker);

/*let user = { name: "Admin1" };
let admin = { name: "Admin2" };

function sayHi() {
	console.log(this.name);
}

// use the same function in two objects
user.f = sayHi;
admin.f = sayHi;
worker.f = sayHi;

user.f();
admin.f();
worker["f"]();*/

/*let user = {
	firstName: "Ilya",
	sayHi() {
		let arrow = () => alert(this.firstName);
		arrow();
	},
};

user.sayHi();*/

// CONSTRUCTOR

function User(name) {
    this.name = name;
    this.isAdmin = false;
}

let govtWorker = new User("Jack", true);

console.log(govtWorker["name"]);

document.body.style.background = "red";
setTimeout(() => (document.body.style.background = ""), 1000);

// setInterval(() => blink.hidden = !blink.hidden, 700);

// let div = document.createElement('div');
// div.className = "alert";
// div.innerHTML = "<strong>Hi there!</strong> You've read an important message.";

// document.body.append(div);

/* ================================================================================= */
let data = {
    Fish: {
        trout: {},
        salmon: {},
    },

    Tree: {
        Huge: {
            sequoia: {},
            oak: {},
        },
        Flowering: {
            "apple tree": {},
            magnolia: {},
        },
    },
};

const alert = document.querySelector("#alert");
const ul = document.querySelector("ul");

let $alert1 = `<div class="alert">
				<strong>Hi there!</strong> You've read an important message.
			  </div>`;

alert.insertAdjacentHTML("afterbegin", $alert1);

setTimeout(() => alert.remove(), 5000);

//  UNORDERED LIST using fragment

/*const getListContent = () => {
	let fragment = new DocumentFragment();
	ul.style.listStyleType = "none";

	for (let y = 1; y <= 4; y++) {
		let li = document.createElement("li");
		li.append(y);
		fragment.append(li);
	}
	return fragment;
};

ul.append(getListContent());

//  UNORDERED LIST using Array

const getListItem = () => {
	let result = [];

	for (let x = 4; x >= 1; x--) {
		let li = document.createElement("li");
		li.append(x);
		result.push(li);
	}

	return result;
};
ul.append(...getListItem());*/

/* ================================================================================= */
input.oninput = function() {
    result.innerHTML = input.value;
};

/* ================================================================================= */

let form = document.forms.calculator;

form.money.oninput = calculate;
form.months.onchange = calculate;
form.interest.oninput = calculate;

function calculate() {
    let initial = +form.money.value;
    if (!initial) return;

    let interest = form.interest.value * 0.01;

    if (!interest) return;

    let years = form.months.value / 12;
    if (!years) return;

    let result = Math.round(initial * (1 + interest * years));

    let height = (result / form.money.value) * 100 + "px";
    document.getElementById("height-after").style.height = height;
    document.getElementById("money-before").innerHTML = form.money.value;
    document.getElementById("money-after").innerHTML = result;
}

calculate();

/* ================================================================================= */
// Array
let fruits = ["Apple", "Orange", "Plum"];
fruits.push("Peach", "Pineapple"); //adds to the end of an array
fruits.unshift("gold", "silver"); //adds to the beginning of an array
fruits.shift("Orange"); //removes the first element from an array
fruits.pop("Plum"); //removes the last element from an array
console.log(fruits);

fruits.splice(0, 2, "hello");
//best
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//Do not use for-in in an array.
// for (let key in fruits) {
// 	console.log(fruits[key]);
// }

let army = {
    minAge: 18,
    maxAge: 27,
    canJoin(user) {
        return user.age >= this.minAge && user.age < this.maxAge;
    },
};

let users = [{
    age: 16
}, {
    age: 20
}, {
    age: 23
}, {
    age: 30
}];

let soldiers = users.filter(army.canJoin, army);

for (let v = 0; v < soldiers.length; v++) {
    console.log(soldiers[v].age);
}

/* =========================================================== */
let john = {
    name: "John",
    surname: "Smith",
    id: 1
};
let pete = {
    name: "Pete",
    surname: "Hunt",
    id: 2
};
let mary = {
    name: "Mary",
    surname: "Kane",
    id: 2
};

let humans = [john, pete, mary];

let humansMapped = humans.map((human) => ({
    fullName: `${human.name} ${human.surname}`,
    id: human.id,
}));

console.log(humansMapped[0].fullName);

/* ========================FETCH=================================== */

// const inputs = document.getElementById("helloWorld").elements;

// for (let i = 0; i < inputs.length; i++) {
// 	if (inputs[i].nodeName === "INPUT" && inputs[i].type === "text") {
// 		inputs[i].value.toLocaleUpperCase();
// 		console.log(inputs)
// 	}
// }

/* ========================Date=================================== */

function myDate() {

    let updateTime = (k) => {
        k < 10 ? (k = "0" + k) : "";
        return k;
    }
    let updateDay = (l) => {
        l < 10 ? (l = "0" + l) : "";
        return l;
    };

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
            "December"
        ],
        days = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ]

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

    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);


    displayDay.innerHTML = year + " - " + months[month] + " - " + days[day] + " - " + num + "th";
    displayTime.innerHTML = hour + " : " + min + " : " + sec;

    setTimeout(function() {
        myDate();
    }, 1000);
}

myDate();

/* ========================To-Do=================================== */
let todoAdd = document.querySelector("#todoAdd");

todoAdd.addEventListener("click", function() {
    //SELECT ELEMENT
    let todoInput = document.querySelector("#todoInput").value,
        newLi = document.createElement("li"),
        textNode = document.createTextNode(todoInput),
        todoList = document.querySelector("#todoList");

    if (todoInput === "") return false;

    // CREATEBUTTON
    let done = document.createElement("button");
    done.innerHTML = "&#10006";
    done.className = "delete";

    // DELETE
    done.addEventListener("click", function() {
        this.parentNode.className = this.parentNode.className + "fadeOut";
        console.log(this.parentNode)
        this.parentNode.parentNode.removeChild(this.parentNode);
    });

    //APPEND
    newLi.appendChild(textNode);
    newLi.appendChild(done);
    todoList.appendChild(newLi);

    document.querySelector("#todoInput").value = "";
});

/* ========================Arrow=================================== */
const years = [1990, 1965, 1982, 1937];

let age6 = years.map(el => 2016 - el);
console.log(age6);

age6 = years.map((el, index) => `Age element ${index + 1}: ${2020 - el}.`);
console.log(age6);

age6 = years.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age element ${index + 1}: ${age}.`
});
console.log(age6);


// GOOGLE INPUT FORM TYPE
// JavaScript is used for toggling loading state
var form2 = document.querySelector('form');
form2.onsubmit = function(event) {
    event.preventDefault();
    form2.classList.add('signed');
};

/* ============================================================= */
    //   const fileInput = document.querySelector('#file');
    //   const fileList = document.querySelector('#file-list');

    //   fileInput.addEventListener('change', updateFileList);

    //   function updateFileList() {
    //     while(fileList.firstChild) {
    //       fileList.removeChild(fileList.firstChild);
    //     }

    //     let curFiles = fileInput.files;

    //     if(!(curFiles.length === 0))  {
    //       console.log('test');
    //       for(let i = 0; i < curFiles.length; i++) {
    //         const listItem = document.createElement('li');
    //         listItem.textContent = 'File name: ' + curFiles[i].name + '; file size ' + returnFileSize(curFiles[i].size) + '.';
    //         fileList.appendChild(listItem);
    //       }
    //     }
    //   }

    //   function returnFileSize(number) {
    //     if(number < 1024) {
    //       return number + 'bytes';
    //     } else if(number >= 1024 && number < 1048576) {
    //       return (number/1024).toFixed(1) + 'KB';
    //     } else if(number >= 1048576) {
    //       return (number/1048576).toFixed(1) + 'MB';
    //     }
    //   }

    /* ================================================= */
    

const btn = document.querySelector("#btn-toggle");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
const currentTheme = localStorage.getItem("theme");

if (currentTheme == "dark") {
	document.body.classList.toggle("dark-theme");
} else if (currentTheme == "light") {
	document.body.classList.toggle("light-theme");
}

btn.addEventListener("click", function () {
	if (prefersDarkScheme.matches) {
		document.body.classList.toggle("light-theme");
		var theme = document.body.classList.contains("light-theme") ? "light" : "dark";
	} else {
		document.body.classList.toggle("dark-theme");
		var theme = document.body.classList.contains("dark-theme") ? "dark" : "light";
	}
	localStorage.setItem("theme", theme);
});


// https://gist.github.com/thegitfather/9c9f1a927cd57df14a59c268f118ce86