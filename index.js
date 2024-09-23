const bodyEl=document.querySelector('body')
bodyEl.addEventListener('mousemove',(event)=>{
const xpos=event.offsetX;
const ypos=event.offsetY;
const span=document.createElement('span');
span.style.left=xpos+'px';
span.style.top=ypos+'px';
const size=Math.random()*100;
span.style.width=size+'px';
span.style.height=size+'px';

bodyEl.appendChild(span);
setTimeout(()=>{
  span.remove();
},3000);

});