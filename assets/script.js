const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let banner = document.getElementById('banner');
let bannerImg = document.getElementsByClassName('banner-img');
let slideText = document.getElementsByClassName('slide-text');
// let dots = document.querySelectorAll('.dots');
let dots = document.getElementsByClassName('dots');
let dotTemp;

let count = 0;

function infinity(isUp, num, list) {
	if (isUp) {
		if (num < list.length-1){
			num++;
		}else {
			num = 0;
		}
	}else {
		if (num > 0){
			num--;
		}else {
			num = list.length-1;
		}
	}
	return num;
}

/*  Façon Numéros 1  */ 

// function refreshDisplay(num) {
// 	slideText[0].innerHTML = slides[num].tagLine;
// 	bannerImg[0].src = `./assets/images/slideshow/${slides[num].image}`;

// 	dots[0].innerHTML= "";
// 	slides.forEach((slide, key) => {
// 		let dot = document.createElement('p');
// 		dots[0].appendChild(dot);
// 		if (key == count) {
// 			dot.className='dot active';
// 		}else {
// 			dot.className='dot';
// 		}
// 	});
// }

/*  Façon Numéros 2  */ 

slides.forEach(() => {
	let dot = document.createElement('p');
	dots[0].appendChild(dot);
	dot.classList.add('dot');
});

function refreshDisplay(num) {
	slideText[0].innerHTML = slides[num].tagLine;
	bannerImg[0].src = `./assets/images/slideshow/${slides[num].image}`;

	if (dotTemp){
		dotTemp.classList.toggle('active');
	}
	dotTemp = dots[0].children[count]

	dots[0].children[count].classList.toggle('active');
}

function turnLeft(){
	count = infinity(false, count, slides);
	refreshDisplay(count);
}

function turnRight(){
	count = infinity(true, count, slides);
	refreshDisplay(count);
}

refreshDisplay(count);
