const form = document.getElementById("form")
const first_name = document.getElementById("first_name")
const last_name = document.getElementById("last_name")
const email = document.getElementById("email")
const age = document.getElementById("age")
const password = document.getElementById("password")
const confirm_password = document.getElementById("confirm_password")

form.addEventListener("submit", (e)=>{
	e.preventDefault();
	let v = validate()
	console.log(v)
	return v
})

function containNum(i){
  let str = String(i);
  for( let i = 0; i < str.length; i++){
      if(!isNaN(str.charAt(i)) && !(str.charAt(i) === " ") ){
        return true;
      }
  }
  return false;
}

function validate(){	
	const first_name = document.getElementById("first_name").value.trim()
	const last_name = document.getElementById("last_name").value.trim()
	const username = document.getElementById("username").value.trim()
	const email = document.getElementById("email").value.trim()
	const age = document.getElementById("age").value.trim()
	const password = document.getElementById("password").value.trim()
	const confirm_password = document.getElementById("confirm_password").value.trim()
	let error = false
	e_num = 1
	if (password.length < 6){
		document.getElementById(`error1`).innerHTML = `
		<div class="error">
		Password must be more than 6 charcters
		</div>`

		error = true
	}
	if (password !== confirm_password){
		document.getElementById("error2").innerHTML = `
		<div class="error">
		Password do not match
		</div>`
		error = true
	}
	
	if (containNum(first_name) || containNum(last_name)){
		document.getElementById(`error3`).innerHTML = `
		<div class="error">
		First name or Last name must not contain numbers
		</div>`
		error = true
	}
	
	if (!isNaN(username[0]) || username.length < 6){
		document.getElementById(`error4`).innerHTML = `
		<div class="error">
			First letter of username must be a string and must be more than 6 charcters
		</div>`
		error = true
	}

	if (age<18 || age >60){
		document.getElementById(`error5`).innerHTML = `
		<div class="error">
			You must be 18 to 60 years old
		</div>`
		error = true
	}
	if(first_name[0] == first_name[0].toLowerCase() || last_name[0] == last_name[0].toLowerCase()){
		document.getElementById(`error6`).innerHTML = `
		<div class="error">
			First name or Last name must start with uppercase
		</div>`
		error = true
	}

	if (error == false){
		return true
	}else {
		return false
	}
}