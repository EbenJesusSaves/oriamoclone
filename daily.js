
let emailValue1 = document.getElementById("email")
let clikableBtn = document.getElementById("emialsender")
let sunBtn = document.getElementById("emialsender")






function emailTest (){
  let valueque = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
if(valueque.test(emailValue1.value)){
	
	emailValue1.style.borderColor ="green"
	emailValue1.value = "You have  successfully subscribed"
	emailValue1.style.color= "green"
	sunBtn.innerText ="Subscribed"
	sunBtn.style.background= "green"
	return true
}
else{ 
	emailValue1.style.borderColor ="red"
	emailValue1.value = "Enter a valid Email Address"
	emailValue1.style.color= "red"
}
return false

	
}

clikableBtn.addEventListener("click",emailTest)
