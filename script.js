var btnEl = document.getElementsByClassName("btn")
	let slides = document.getElementById("slide")
	let slidee = document.getElementsByClassName("k")

	btnEl[0].onclick = function (){
		slides.style.transform = "translatex(0px)"
	}
	btnEl[1].onclick = function (){
		slides.style.transform = "translatex(-1880px)"
	}
	btnEl[2].onclick = function (){
		slides.style.transform = "translatex(-3760px)"
	}
	btnEl[3].onclick = function (){
		slides.style.transform = "translatex(-5640px)"
	}



	/*---------------------second-slider---------------------*/


	let thumbnail = document.getElementsByClassName("product-subitem")
	let slider = document.getElementById("sliders-n")
	let prevBtn = document.getElementById("slide-left")
	let nextBtn = document.getElementById("slide-right")

	prevBtn.addEventListener("click", ()=>{
		
		slider.scrollLeft -= 200;
	})



	nextBtn.addEventListener("click", ()=>{
		slider.scrollLeft += 200;
	})

	const maxScrollLeft = slider.scrollWidth - slider.clientWidth
	function autoPlay(){
		if(slider.scrollLeft >(maxScrollLeft - 1)){
			slider.scrollLeft -= maxScrollLeft;
		}
		else{slider.scrollLeft += 1;}
	}
	let play = setInterval(autoPlay, 50) 



/*************************email validation *************************************** */let emailValue = document.getElementById("email")

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




/**********xxxxxxxxxx***************email validation ******************xxxxxxx********************* */


