// One continuous timeline drives scene cuts, message reveals, seeking and pause.
document.querySelectorAll('[data-customer-film]').forEach(film=>{
 const theater=film.querySelector('[data-film-theater]');
 const stories=[...film.querySelectorAll('[data-film-journey]')];
 const choices=[...film.querySelectorAll('[data-journey]')];
 const chapters=[...film.querySelectorAll('[data-film-chapter]')];
 const play=film.querySelector('[data-film-play]'),seek=film.querySelector('[data-film-seek]');
 const motion=matchMedia('(prefers-reduced-motion: reduce)');
 const duration=42, chapterLength=7;
 let current=stories.find(s=>s.dataset.filmJourney===film.dataset.initial)||stories[0];
 let time=0,playing=false,frame=0,last=0,activeIndex=-1,autoUsed=false,visible=false;
 film.dataset.enhanced='true';
 film.querySelectorAll('[data-film-controls], [data-film-chapters]').forEach(c=>c.hidden=false);
 const format=t=>`0:${String(Math.floor(t)).padStart(2,'0')}`;
 const render=()=>{
  const index=Math.min(5,Math.floor(time/chapterLength));
  const scenes=[...current.querySelectorAll('[data-film-scene]')];
  if(index!==activeIndex){
   scenes.forEach((s,i)=>s.hidden=i!==index);
   chapters.forEach((b,i)=>b.setAttribute('aria-pressed',String(i===index)));
   activeIndex=index;
  }
  const local=time-index*chapterLength;
  scenes[index].querySelectorAll('[data-enter]').forEach(b=>{
   const shown=local>=Number(b.dataset.enter)||motion.matches;
   b.classList.toggle('is-upcoming',!shown);
   b.setAttribute('aria-hidden',String(!shown));
  });
  // The photograph's movement follows the same clock, including after seeking.
  scenes[index].style.setProperty('--film-zoom',motion.matches?'1':String(1+local*.005));
  seek.value=String(time);seek.style.setProperty('--progress',`${time/duration*100}%`);
  seek.setAttribute('aria-valuetext',`${Math.floor(time)} seconds of ${duration} seconds. ${scenes[index].dataset.chapterTitle}`);
  film.querySelector('[data-film-time]').textContent=`${format(time)} / 0:42`;
 };
 const setPlaying=value=>{
  playing=value;film.dataset.playing=String(value);
  play.setAttribute('aria-label',value?'Pause animation':time>=duration?'Replay animation':'Play animation');
  film.querySelector('[data-film-play-icon]').textContent=value?'Ⅱ':time>=duration?'↺':'▶';
  film.querySelector('[data-film-play-label]').textContent=value?'Pause':time>=duration?'Replay':'Play';
  cancelAnimationFrame(frame);
  if(value){last=performance.now();frame=requestAnimationFrame(tick);}
 };
 const tick=now=>{
  if(!playing)return;
  time=Math.min(duration,time+Math.min((now-last)/1000,.25));last=now;render();
  if(time>=duration)setPlaying(false);else frame=requestAnimationFrame(tick);
 };
 const select=id=>{
  setPlaying(false);current=stories.find(s=>s.dataset.filmJourney===id)||stories[0];
  stories.forEach(s=>s.hidden=s!==current);choices.forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.journey===current.dataset.filmJourney)));
  const scenes=[...current.querySelectorAll('[data-film-scene]')];
  chapters.forEach((b,i)=>b.querySelector('[data-chapter-label]').textContent=scenes[i].dataset.chapterTitle);
  film.querySelector('[data-film-service]').href=`/services/${current.dataset.service}/`;
  time=0;activeIndex=-1;render();setPlaying(false);
 };
 const start=()=>{autoUsed=true;if(time>=duration)time=0;render();setPlaying(true);};
 play.addEventListener('click',()=>{autoUsed=true;if(playing)setPlaying(false);else start();});
 film.querySelector('[data-film-replay]').addEventListener('click',()=>{time=0;start();});
 seek.addEventListener('input',()=>{autoUsed=true;setPlaying(false);time=Number(seek.value);render();setPlaying(false);});
 chapters.forEach((b,i)=>b.addEventListener('click',()=>{autoUsed=true;setPlaying(false);time=i*chapterLength+Math.min(5.5,chapterLength-.1);render();setPlaying(false);}));
 choices.forEach(b=>b.addEventListener('click',()=>{autoUsed=true;select(b.dataset.journey);if(!motion.matches)start();}));
 const expand=film.querySelector('[data-film-expand]');
 if(!theater.requestFullscreen)expand.hidden=true;
 else expand.addEventListener('click',async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else await theater.requestFullscreen();}catch{expand.hidden=true;}});
 document.addEventListener('fullscreenchange',()=>expand.setAttribute('aria-label',document.fullscreenElement?'Exit full screen':'View animation full screen'));
 document.addEventListener('visibilitychange',()=>{if(document.hidden)setPlaying(false);});
 motion.addEventListener('change',()=>{setPlaying(false);render();});
 // Pause when the player leaves view; returning does not restart the story.
 if('IntersectionObserver'in window)new IntersectionObserver(entries=>{
  visible=entries[0].isIntersecting&&entries[0].intersectionRatio>=.3;
  if(!visible)setPlaying(false);
  else if(!autoUsed&&!motion.matches&&!document.hidden)start();
 },{threshold:[0,.3]}).observe(theater);
 document.querySelectorAll('a[href="#see-it-work"]').forEach(a=>a.addEventListener('click',()=>{select(a.dataset.startFilm||'missed-call');autoUsed=false;if(visible&&!motion.matches)start();}));
 select(film.dataset.initial);
});
