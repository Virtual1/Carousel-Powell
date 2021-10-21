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

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}

const updateDots = (currentDot, targetDot) => {
    
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
}

const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
    if (targetIndex === 0) {
        prevButton.classList.add('is-hidden');
        nextButton.classList.remove('is-hidden');

    } else if (targetIndex === slides.length - 1) {
        prevButton.classList.remove('is-hidden');
        nextButton.classList.add('is-hidden');
    }   else {
        prevButton.classList.remove('is-hidden');
        nextButton.classList.remove('is-hidden');
    }
}

// when I click left, move slides to the left.
prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const prevDot = currentDot.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide);

    moveToSlide(track, currentSlide, prevSlide);
    updateDots(currentDot, prevDot);
    hideShowArrows(slides, prevButton, nextButton, prevIndex);
})  

//this is how we figured the above out:

// when I click right, move slides to the right.
nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const nextDot = currentDot.nextElementSibling; 
    const nextIndex = slides.findIndex(slide => slide === nextSlide);

    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
    hideShowArrows(slides, prevButton, nextButton, nextIndex);
    /**    const amountToMove = nextSlide.style.left;
    //move to the slide
    track.style.transform = 'translateX(-' + amountToMove + ')';
    currentSlide.classList.remove('current-slide');
    nextSlide.classList.add('current-slide');
    **/
})  

 //since we repeat for next + prev, this section is generalised and used above. //
// when I click the nav indicators, move to that slide.

dotsNav.addEventListener ('click', e => {
//what indicator was clicked on?
    const targetDot = e.target.closest('button');

  //  console.log(targetDot);

  //  console.log('test1');
    if (!targetDot) return;
  //  console.log('test2');

    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
 // console.log(targetIndex);
    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
    hideShowArrows(slides, prevButton, nextButton, targetIndex);


})