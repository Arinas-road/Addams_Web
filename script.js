const header = document.querySelector('.header');
const checkHeader = setInterval(()=>{
   let scrollPosition = Math.round(window.scrollY);
   if(scrollPosition > 1000){
      header.classList.add('sticky');
   } else{
      header.classList.remove('sticky');
   }
}, 300);
// window.addEventListener('scroll', checkHeader);




//Images
const imageSection = document.querySelector('.body-images-section');
const imageContainer = document.querySelector('.body-images');
const imageAll = document.querySelectorAll('.image');
const imagesPosition = imageContainer.getBoundingClientRect();
let percentage;
// imageContainer.style.marginRight = `${- 10 *  imagesPosition.width}px`
function imageMove(e){
   const [entry] = e;

   if(entry.isIntersecting){
      document.addEventListener('scroll', function(e){
         e.preventDefault();
         percentage = (imagesPosition.top / (window.scrollY + imagesPosition.top))* 100;
         imageContainer.style.left = `${window.scrollY - imagesPosition.top}px`;
         for(const image of imageContainer.getElementsByClassName("image")) {
            image.animate({
               objectPosition: `${percentage}% center`
            }, { duration: 1200, fill: "forwards" });
          }
        });
   }else{
      return;
   }
}
const imageObserver = new IntersectionObserver(imageMove, {
   root: null,
   threshold: 0.01,
})
imageObserver.observe(imageSection)


