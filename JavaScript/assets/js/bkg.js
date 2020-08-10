/* eslint-disable no-undef */
function submitLogin() {
	let name = document.querySelector("#name").value;
	let name1 = document.querySelector("#name");
	let pwd = document.querySelector("#pwd").value;
	let pwd1 = document.querySelector("#pwd");
	let feedback = document.querySelector("#fdbck");
	$nameError = `<small style='color:red;'>User name is invalid</small>`;
	$pwdError = `<small style='color:red;'> Please enter a password with min of 6 characters containing only Alpha numeric characters and/or @ symbol </small>`;

	if (Validate.user(name)) {
		name1.classList.remove("is-invalid");
		name1.classList.add("is-valid");
	} else {
		name1.classList.add("is-invalid");
		name1.classList.remove("is-valid");
		feedback.innerHTML = $nameError;
		setTimeout(() => (feedback.innerHTML = ""), 5000);
	}

	if (Validate.password(pwd)) {
		pwd1.classList.remove("is-invalid");
		pwd1.classList.add("is-valid");
	} else {
		pwd1.classList.add("is-invalid");
		pwd1.classList.remove("is-valid");
		feedback1.innerHTML = $pwdError;
		setTimeout(() => (feedback1.innerHTML = ""), 6000);
	}

	if (Validate.user(name) && Validate.password(pwd)) {
		alert(`Successfully logged in as : ${name}`);
		document.querySelector("#loginForm").reset();
		name1.classList.remove("is-valid");
		pwd1.classList.remove("is-valid");
	}
}

let btn = document.querySelector("#submit");

btn.addEventListener("click", (e) => {
	e.preventDefault();
	submitLogin();
});
