const left = document.getElementById('left-side');


const handleOnMove = e => {
   const p = e.clientX / window.innerWidth * 100;
   left.style.width = `${p}%`;
};

document.onmousemove = e => handleOnMove(e);
document.ontouchmove = e => handleOnMove(e.touches[0]);

//slider
const slider = document.querySelector('.slider');
const track = document.getElementById('image-track');
const history = document.querySelector('.history-container');
const timeLine = document.querySelector('.time-line-container');
let style = window.getComputedStyle(history);
let width = + style.getPropertyValue('width').slice(0, this.length - 2);
console.log(width);
let lastMousePosition = 0;
let mouseDown = false;
document.body.onmousedown = () => {
   mouseDown = true;
}
document.body.onmouseup = () => {
   mouseDown = false;
   track.dataset.mouseDownAt = lastMousePosition;
}
timeLine.addEventListener('mousedown', function(e){
   track.dataset.mouseDownAt = e.clientX;
   if(track.dataset.mouseDownAt != 0){
      track.dataset.mouseDownAt = lastMousePosition  + e.clientX;
   }
})
timeLine.addEventListener('mousemove', function(e){

   if(mouseDown){
      const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
      const maxDelta = width;
      const percentage = (mouseDelta/maxDelta) * 100;
      if(percentage > 0) return;
      if(percentage < -84) return;

      lastMousePosition = mouseDelta;
      console.log(percentage, mouseDelta, lastMousePosition);
      history.style.transform = `translate(${ percentage}%, 0%)`;

      
      
   }
})