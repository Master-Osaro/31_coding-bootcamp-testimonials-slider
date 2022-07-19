//Declare variables
const previousBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const userImage = document.querySelector('.card-img');
const testimony = document.querySelector('.card-text__testimony');
const personName = document.querySelector('.name');
const jobTitle = document.querySelector('.role');

//Event listeners
previousBtn.addEventListener("click", () => swiper.prev());
nextBtn.addEventListener("click", () => swiper.next());

document.addEventListener("keydown", (event) => {
	if (event.key === "ArrowRight") {
		swiper.next();
	} else if (event.key === "ArrowLeft") {
		swiper.prev();
	}
});


const testimonials = [
	{
		name: "Tanya Sinclair",
		jobTitle: "UX Engineer",
		testimony:
			"“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”",
		image: "./images/image-tanya.jpg",
	},
	{
		name: "John Tarkpor",
		jobTitle: "Junior Front-end Developer",
		testimony:
			"“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”",
		image: "./images/image-john.jpg",
	},
];

//helper function to use gsap animation
function animate_text_img() {
    gsap.fromTo(".card-img", {duration : 1, x:300, ease:'back'}, {duration : 1, x:0, ease:'back'});
    gsap.fromTo(".card-text", {duration : 1, y:-300, ease:'back'}, {duration : 1, y:0, ease:'back'});
}

function update_testimonials(index) {
    personName.innerText = testimonials[index].name;
    jobTitle.innerText = testimonials[index].jobTitle;
    testimony.innerText = testimonials[index].testimony;
	userImage.src = testimonials[index].image;
    animate_text_img();
}

function swipe() {
    let index = 0;
    return {
		next: () => {
			if (index < testimonials.length - 1) {
				index++;
			} else {
				index = 0;
			}
			update_testimonials(index);
		},
		prev: () => {
			if (index > 0) {
				index--;
			} else {
				index = testimonials.length - 1;
			}
			update_testimonials(index);
		},
	};
}

const swiper = swipe();