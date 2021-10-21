// console.log('test'); - seeing if file is linked properly - check devtools
// remember - capitalisation is VeryImportant!!

const track = document.querySelector('.carousel__track');
// console.log(track); // this is the track with all the images

const slides = Array.from(track.children);
// console.log(slides); // these are the seperate images, in an array

const nextButton = document.querySelector('.carousel__button--right');
//console.log(nextButton)
const prevButton = document.querySelector('.carousel__button--left');
//console.log(prevButton)
 
const dotsNav = document.querySelector('.carousel__nav');
//console.log(dotsNav) // all the dots

const dots = Array.from(dotsNav.children);
//console.log(dots);

/**const slideSize = slides[0].getBoundingClientRect();
//console.log(slideSize);
const slideWidth = slideSize.width;
//console.log(slideSize);  **/
const slideWidth = slides[0].getBoundingClientRect().width;
//console.log(slideWidth);

// arrange the slides next to one another

/** put this into a loop, in a named function
slides[0].style.left = slideWidth * 0 + 'px';
slides[1].style.left = slideWidth * 1 + 'px';
slides[2].style.left = slideWidth * 2 + 'px';
slides[3].style.left = slideWidth * 3 + 'px';
slides[4].style.left = slideWidth * 4 + 'px';
**/
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
}

slides.forEach(setSlidePosition);


// when I click left, move slides to the left.
prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.prevElementSibling;
    const amountToMove = prevSlide.style.left;
    //move to the slide
    track.style.transform = 'translateX(' + amountToMove + ')';
    currentSlide.classList.remove('current-slide');
    prevSlide.classList.add('current-slide');

})  
// when I click right, move slides to the right.
nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const amountToMove = nextSlide.style.left;
    //move to the slide
    track.style.transform = 'translateX(-' + amountToMove + ')';
    currentSlide.classList.remove('current-slide');
    nextSlide.classList.add('current-slide');

})  
// when I click the nav indicators, move to that slide.
