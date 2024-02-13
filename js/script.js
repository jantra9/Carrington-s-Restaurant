const slideImage= document.querySelectorAll(".slide-image");
const slidesContainer= document.querySelector(".slides-container");
const nextBtn=document.querySelector(".next-btn");
const prevBtn=document.querySelector(".prev-btn");
const navigationDots= document.querySelector(".navigation-dots");

let numberOfImages=slideImage.length;
let currentSlide=0;
let slideWidth= slideImage[0].clientWidth;

function init(){
    slideImage.forEach((img,i)=>{
        img.style.left = i * 100 +"%";
    });
    slideImage[0].classList.add("active");
    createNavigationDots();
};

init();

//Create nav dots
function createNavigationDots(){
    for(let i=0; i< numberOfImages; i++){
        const dot = document.createElement("div");
        dot.classList.add("single-dot");
        navigationDots.appendChild(dot);
        dot.addEventListener("click",() =>{
            goToSlide(i);
        })
    }
    navigationDots.children[0].classList.add("active");
};

//next btn
nextBtn.addEventListener('click',()=>{
    if(currentSlide>= numberOfImages-1){
        goToSlide(0);
        
        return;
    }
    currentSlide++;
    goToSlide(currentSlide);
});

function goToSlide(slideNumber) {
    slidesContainer.style.transform = "translateX(-" + slideWidth * slideNumber + "px)";
  };


//previous btn  
prevBtn.addEventListener('click',()=>{
    if(currentSlide<= 0){
        goToSlide(numberOfImages-1);
    
        return;
    }
    currentSlide--;
    goToSlide(currentSlide);
});

function goToSlide(slideNumber) {
    slidesContainer.style.transform = "translateX(-" + slideWidth * slideNumber + "px)";
    currentSlide=slideNumber;
    setActiveClass();
  };

//setActiveClass
function setActiveClass(){
    let currentActive= document.querySelector(".slide-image.active");
    currentActive.classList.remove("active");
    slideImage[currentSlide].classList.add("active");

    //set active class for nag dots
    let currentDot= document.querySelector(".single-dot.active");
    currentDot.classList.remove("active");
    navigationDots.children[currentSlide].classList.add('active');
}