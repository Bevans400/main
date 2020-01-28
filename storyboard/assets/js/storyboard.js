const button = document.querySelector(".btn-start");
const button2 = document.querySelector(".btn-start2");
const button3 = document.querySelector(".btn-start3");
const button4 = document.querySelector(".btn-start4");
const button5 = document.querySelector(".btn-start5");
const container = document.querySelector(".container");
const portfolio = document.querySelector(".portfolio");


function changeView() { 
		$("div.portfolio").toggleClass("view2");
		$("button.btn-start").toggleClass("selected");
}

$(button).on("click", function(){
	$(changeView);
});

function changeView2() { 
		$("div.portfolio").toggleClass("view3");
		$("button.btn-start2").toggleClass("selected");
}

$(button2).on("click", function(){
	$(changeView2);
});

function changeView3() { 
		$("div.portfolio").toggleClass("view4");
		$("button.btn-start3").toggleClass("selected");
}

$(button3).on("click", function(){
	$(changeView3);
});

function changeView4() { 
		$("div.portfolio").toggleClass("view5");
		$("button.btn-start4").toggleClass("selected");
}

$(button4).on("click", function(){
	$(changeView4);
});

function viewBG() { 
		$("div.portfolio").toggleClass("vanish");
		$("button.btn-start5").toggleClass("selected");
}

$(button5).on("click", function(){
	$(viewBG);
});







