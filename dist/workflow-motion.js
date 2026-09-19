(() => {
 'use strict';
 const card=document.querySelector('.hero .workflow');
 const area=document.querySelector('.hero');
 if(!card||!area)return;
 const allowed=matchMedia('(hover:hover) and (pointer:fine) and (prefers-reduced-motion:no-preference) and (min-width:801px)');
 let frame=0,point=null;
 function reset(){cancelAnimationFrame(frame);frame=0;point=null;card.classList.remove('motion-active');card.style.removeProperty('--flow-x');card.style.removeProperty('--flow-y');}
 function configure(){reset();card.classList.toggle('motion-ready',allowed.matches);}
 area.addEventListener('pointermove',event=>{
   if(!allowed.matches||event.pointerType==='touch')return;
   point={x:event.clientX,y:event.clientY};
   if(frame)return;
   frame=requestAnimationFrame(()=>{frame=0;if(!point)return;const rect=area.getBoundingClientRect();const x=Math.max(-1,Math.min(1,(point.x-rect.left)/rect.width*2-1));const y=Math.max(-1,Math.min(1,(point.y-rect.top)/rect.height*2-1));card.style.setProperty('--flow-x',(-y*3).toFixed(2)+'deg');card.style.setProperty('--flow-y',(x*5).toFixed(2)+'deg');card.classList.add('motion-active');});
 });
 area.addEventListener('pointerleave',reset);area.addEventListener('pointercancel',reset);
 window.addEventListener('blur',reset);window.addEventListener('resize',reset);
 document.addEventListener('visibilitychange',()=>{if(document.hidden)reset();});
 allowed.addEventListener('change',configure);configure();
})();
