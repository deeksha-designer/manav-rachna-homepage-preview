const triggers=[...document.querySelectorAll('.desktop-nav [data-menu]')];
const megaWrap=document.querySelector('.mega-wrap');
const panels=[...document.querySelectorAll('.mega')];
const menuButton=document.querySelector('.menu-btn');
const drawer=document.querySelector('.mobile-drawer');
const drawerClose=document.querySelector('.drawer-close');

function openMega(name){
  triggers.forEach(button=>button.classList.toggle('active',button.dataset.menu===name));
  panels.forEach(panel=>panel.classList.toggle('active',panel.id===`mega-${name}`));
  megaWrap.classList.add('open');
  megaWrap.setAttribute('aria-hidden','false');
}
function closeMega(){
  triggers.forEach(button=>button.classList.remove('active'));
  panels.forEach(panel=>panel.classList.remove('active'));
  megaWrap.classList.remove('open');
  megaWrap.setAttribute('aria-hidden','true');
}
triggers.forEach(button=>button.addEventListener('click',event=>{
  event.stopPropagation();
  button.classList.contains('active')?closeMega():openMega(button.dataset.menu);
}));
document.addEventListener('click',event=>{if(!event.target.closest('.mega-wrap')&&!event.target.closest('.desktop-nav'))closeMega()});
document.addEventListener('keydown',event=>{if(event.key==='Escape'){closeMega();closeDrawer()}});

function openDrawer(){drawer.classList.add('open');drawer.setAttribute('aria-hidden','false');menuButton.setAttribute('aria-expanded','true');document.body.classList.add('menu-open')}
function closeDrawer(){drawer.classList.remove('open');drawer.setAttribute('aria-hidden','true');menuButton.setAttribute('aria-expanded','false');document.body.classList.remove('menu-open')}
menuButton.addEventListener('click',()=>drawer.classList.contains('open')?closeDrawer():openDrawer());
drawerClose.addEventListener('click',closeDrawer);
document.querySelector('.quick-menu').addEventListener('click',openDrawer);
drawer.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeDrawer));

function wireScroller(trackSelector,previousSelector,nextSelector,cardSelector){
  const track=document.querySelector(trackSelector);
  if(!track)return;
  const move=direction=>{
    const cards=[...track.querySelectorAll(cardSelector)];
    if(cards.length<2)return;
    const gap=parseFloat(getComputedStyle(track).columnGap)||0;
    const cardWidth=cards[0].getBoundingClientRect().width;
    const step=cardWidth+gap;
    const visible=Math.max(1,Math.floor((track.clientWidth+gap)/step));
    const lastIndex=Math.max(0,cards.length-visible);
    const current=Math.min(lastIndex,Math.max(0,Math.round(track.scrollLeft/step)));
    const target=current+direction<0?lastIndex:current+direction>lastIndex?0:current+direction;
    const origin=cards[0].offsetLeft;
    track.scrollTo({left:cards[target].offsetLeft-origin,behavior:'smooth'});
  };
  document.querySelector(previousSelector)?.addEventListener('click',()=>move(-1));
  document.querySelector(nextSelector)?.addEventListener('click',()=>move(1));
}
wireScroller('.notice-scroller','.notice-prev','.notice-next','article');
wireScroller('.institution-track','.institution-prev','.institution-next','.institution-card');
wireScroller('.research-track','.research-prev','.research-next','a');
const achievers=document.querySelector('.achievers');
if(achievers){[...achievers.children].forEach(card=>achievers.append(card.cloneNode(true)))}
wireScroller('.achievers','.placement-prev','.placement-next','article');

document.querySelector('.finder')?.addEventListener('submit',event=>event.preventDefault());
document.querySelectorAll('.path-chips button').forEach(button=>button.addEventListener('click',()=>{
  document.querySelector('.finder input').value=button.textContent;
  document.querySelector('.finder input').focus();
}));

document.querySelectorAll('.academic-card').forEach(card=>card.addEventListener('click',event=>{
  const isTouchLike=window.matchMedia('(hover: none)').matches;
  if(isTouchLike||event.target.closest('span')){
    event.preventDefault();
    const willOpen=!card.classList.contains('is-open');
    document.querySelectorAll('.academic-card.is-open').forEach(item=>item.classList.remove('is-open'));
    card.classList.toggle('is-open',willOpen);
  }
}));

const knowledgeFiles=['65fd618ad9e081711104394.webp','65fd63af53cba1711104943.webp','692837ec450cf1764243436.webp','6928381fce9241764243487.webp','69283834b37c81764243508.webp','692838481bf1c1764243528.webp','69283864ef93b1764243556.webp','6928387c0a1051764243580.webp','6928388e7cf501764243598.webp','692838a21d3131764243618.webp','692838d1a71741764243665.webp','692838e8dd0451764243688.webp','692838fd2e3871764243709.webp','692839101404b1764243728.webp','6928392596c491764243749.webp','6928393c541fa1764243772.webp','692839537db481764243795.webp','692839669780f1764243814.webp','69283978bc8c71764243832.webp','6928399020ed91764243856.webp','692839b255eee1764243890.webp','692839c97fdae1764243913.webp','692839e0d422c1764243936.webp','692839f23b7e61764243954.webp','69283a09909b41764243977.webp','69283a2129b411764244001.webp','69283a353b77a1764244021.webp','69283a4bd44971764244043.webp','69283a61570841764244065.webp','69283a75136531764244085.webp','69283a87d5fde1764244103.webp','69283a9cbff431764244124.webp','69283ab2460d31764244146.webp','69283accf029f1764244172.webp','69283ae38e30e1764244195.webp','69283af672d571764244214.webp','69283b08c472a1764244232.webp','69283b1e2911b1764244254.webp','69283b31b3e221764244273.webp','69283b4b44d3a1764244299.webp','69283b5f9567a1764244319.webp','69283b70c75c71764244336.webp','69283b81242021764244353.webp','69283b91165341764244369.webp','69283b91b67731764244369.webp','69283ba5743981764244389.webp','69283bbecf0821764244414.webp'];
const knowledgeTrack=document.querySelector('[data-logo-library="all"]');
if(knowledgeTrack){
  const logos=knowledgeFiles.map((file,index)=>`<img src="assets/mr/knowledge/${file}" alt="Manav Rachna knowledge partner ${index+1}" loading="lazy">`).join('');
  knowledgeTrack.innerHTML=logos+logos;
  knowledgeTrack.classList.add('logo-loop');
}
const corporateTrack=document.querySelector('.logo-row');
if(corporateTrack){corporateTrack.innerHTML+=corporateTrack.innerHTML;corporateTrack.classList.add('logo-loop')}

const counters=document.querySelectorAll('[data-count]');
const counterObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{
  if(!entry.isIntersecting||entry.target.dataset.counted)return;
  const element=entry.target; element.dataset.counted='true';
  const target=Number(element.dataset.count); const prefix=element.dataset.prefix||''; const suffix=element.dataset.suffix||'';
  const started=performance.now(); const duration=1200;
  const draw=now=>{const progress=Math.min((now-started)/duration,1);const value=Math.round(target*(1-Math.pow(1-progress,3)));element.textContent=prefix+value.toLocaleString('en-IN')+suffix;if(progress<1)requestAnimationFrame(draw)};
  requestAnimationFrame(draw);
}),{threshold:.45});
counters.forEach(counter=>counterObserver.observe(counter));

// Progressive section reveals: enabled only when motion is welcome and JS is active.
const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if(!reduceMotion&&'IntersectionObserver' in window){
  document.documentElement.classList.add('reveal-ready');
  const revealGroups=[
    '.notice-scroller article',
    '.academic-showcase .academic-card',
    '.institution-track .institution-card',
    '.admissions-cards a',
    '.research-track>a',
    '.sports-mosaic>*',
    '.placement-stats>div',
    '.achievers>article',
    '.about-impact-stats>div',
    '.happening-layout article',
    '.footer-grid>div'
  ];
  const revealElements=new Set([
    ...document.querySelectorAll('main .section>.shell, main .section>.about-impact, main .section>.knowledge'),
    ...revealGroups.flatMap(selector=>[...document.querySelectorAll(selector)])
  ]);
  revealGroups.forEach(selector=>{
    document.querySelectorAll(selector).forEach((element,index)=>{
      element.style.setProperty('--reveal-delay',`${Math.min(index%6,5)*70}ms`);
    });
  });
  revealElements.forEach(element=>element.classList.add('scroll-reveal'));
  const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{
    if(!entry.isIntersecting)return;
    entry.target.classList.add('is-revealed');
    revealObserver.unobserve(entry.target);
  }),{rootMargin:'0px 0px -9% 0px',threshold:.08});
  revealElements.forEach(element=>revealObserver.observe(element));
}
