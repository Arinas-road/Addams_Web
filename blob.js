const blob = document.querySelector('.blob');
document.body.onpointermove = e => {
   const {clientX, clientY} = e;
   blob.style.left = `${e.pageX}px`;
   blob.style.top = `${e.pageY}px`;
}