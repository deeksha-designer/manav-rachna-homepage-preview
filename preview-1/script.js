const programs={undergraduate:[['Engineering & Technology','⌘'],['Computer Applications','◫'],['Management & Leadership','△'],['Allied Health Sciences','✚'],['Design','◇'],['Commerce & Economics','◒'],['Law','⚖'],['Media & Humanities','◉']],postgraduate:[['MBA & Management','△'],['M.Tech Engineering','⌘'],['MCA & Computing','◫'],['Public Health','✚'],['Clinical Psychology','◎'],['Media Studies','◉'],['Economics','◒'],['Design Futures','◇']],doctoral:[['Engineering Research','⌘'],['Computer Science','◫'],['Management Studies','△'],['Health Sciences','✚'],['Social Sciences','◎'],['Economics & Commerce','◒'],['Media Research','◉'],['Design Research','◇']],online:[['Online BBA','△'],['Online BCA','◫'],['Online MBA','◒'],['Online MCA','⌘'],['Professional Certificates','◇'],['Executive Education','◎'],['Career Upskilling','↗'],['View all online','＋']]};
const menuData={
about:{title:'About Manav Rachna',copy:'Three decades of education built around knowledge, innovation and service.',groups:[['Our Story',['About Manav Rachna','Founder’s vision & mission','Our legacy','Values & strengths']],['Leadership & Governance',['Leadership team','President’s message','Governance','Equity & inclusion']],['Recognition',['Rankings & accreditations','Awards & accomplishments','The ripple effect','Media coverage']]]},
academics:{title:'Academics & Programs',copy:'Find the right field, qualification and institution for your ambitions.',groups:[['Study Level',['Undergraduate programs','Postgraduate programs','Doctoral programs','Diplomas & certificates','Online degrees']],['Schools & Fields',['Engineering & technology','Management & commerce','Health & dental sciences','Design, law & media','Computer applications']],['Academic Resources',['Academic calendar','Teaching & learning','Curriculum framework','Library','Student ERP']]]},
research:{title:'Research & Innovation',copy:'Interdisciplinary work that connects discovery with real-world impact.',groups:[['Discover Research',['Research clusters','Global initiatives','Research projects','Publications & journals']],['Create & Innovate',['Innovation & incubation','Centres of excellence','Technology platforms','Patents & outcomes']],['Engage With Us',['Funding opportunities','Industry partnerships','Research support','360 Info Collaboration']]]},
experience:{title:'Life @ Manav Rachna',copy:'A connected campus where learning continues far beyond the classroom.',groups:[['Campus Life',['Campus walkthrough','Sports @ MR','Clubs & societies','Arts & culture']],['Student Support',['Hostels & dining','Health & wellbeing','Anti-ragging','Career guidance']],['Stay Connected',['News & events','Student stories','Alumni network','Give @ MR']]]},
global:{title:'International',copy:'Study, collaborate and grow through a worldwide academic network.',groups:[['Global Learning',['Global mobility programs','Study abroad','Exchange programs','International internships']],['Collaborations',['International partners','Global research','Visiting faculty','Partner with us']],['International Students',['International admissions','Visa guidance','Arrival support','Life in Faridabad']]]}};
const grid=document.getElementById('programGrid');function renderPrograms(level){grid.innerHTML=programs[level].map(([name,icon])=>`<a class="program-card" href="#programs"><span class="program-icon">${icon}</span><h3>${name}</h3><span>↗</span></a>`).join('')}renderPrograms('undergraduate');document.querySelectorAll('.program-tabs button').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.program-tabs button').forEach(b=>b.classList.remove('active'));btn.classList.add('active');renderPrograms(btn.dataset.level)}));
const mega=document.getElementById('megaMenu');function openMenu(key){const m=menuData[key];mega.innerHTML=`<div class="mega-intro"><small>Explore Manav Rachna</small><h3>${m.title}</h3><p>${m.copy}</p><div class="mega-feature"><span>2027–28</span><strong>Admissions are now open</strong><a href="#admissions">View admission details</a></div></div><div class="mega-groups">${m.groups.map(([heading,links])=>`<div class="mega-group"><h4>${heading}</h4>${links.map(x=>`<a href="#">${x}</a>`).join('')}</div>`).join('')}</div><div class="mega-quick"><span>Quick access</span><a href="#programs">Find a program</a><a href="#admissions">Apply now</a><a href="#experience">Plan a campus visit</a></div>`;mega.classList.add('open');mega.setAttribute('aria-hidden','false');mega.dataset.current=key}let closeTimer;document.querySelectorAll('[data-menu]').forEach(btn=>{btn.addEventListener('mouseenter',()=>{clearTimeout(closeTimer);openMenu(btn.dataset.menu)});btn.addEventListener('focus',()=>openMenu(btn.dataset.menu))});document.getElementById('desktopNav').addEventListener('mouseleave',()=>{closeTimer=setTimeout(()=>{if(!mega.matches(':hover'))mega.classList.remove('open')},180)});mega.addEventListener('mouseenter',()=>clearTimeout(closeTimer));mega.addEventListener('mouseleave',()=>{closeTimer=setTimeout(()=>mega.classList.remove('open'),180)});
document.getElementById('menuBtn').addEventListener('click',()=>{const b=document.getElementById('menuBtn');const opened=!mega.classList.contains('open');b.setAttribute('aria-expanded',opened);if(opened)openMenu('academics');else mega.classList.remove('open')});const search=document.getElementById('searchOverlay');document.getElementById('searchBtn').addEventListener('click',()=>{search.classList.add('open');search.setAttribute('aria-hidden','false');setTimeout(()=>search.querySelector('input').focus(),50)});document.getElementById('closeSearch').addEventListener('click',()=>{search.classList.remove('open');search.setAttribute('aria-hidden','true')});document.addEventListener('keydown',e=>{if(e.key==='Escape'){search.classList.remove('open');mega.classList.remove('open')}});
document.getElementById('stickyMenu').addEventListener('click',()=>{openMenu('academics');window.scrollTo({top:0,behavior:'smooth'})});

const walkthrough=document.querySelector('.walkthrough');
const campusVideo=walkthrough?.querySelector('.campus-video');
const campusPlay=walkthrough?.querySelector('.play-button');
if(campusVideo&&campusPlay){
  campusPlay.addEventListener('click',async()=>{
    walkthrough.classList.add('is-playing');
    try{await campusVideo.play()}catch(error){walkthrough.classList.remove('is-playing')}
  });
  campusVideo.addEventListener('ended',()=>walkthrough.classList.remove('is-playing'));
}

/* Fast, viewport-triggered statistic counters */
(()=>{
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  const counters=[...document.querySelectorAll('[data-count]')];
  const format=value=>value.toLocaleString('en-IN');
  const animate=el=>{
    if(el.dataset.counted)return;
    el.dataset.counted='true';
    const target=Number(el.dataset.count),suffix=el.dataset.suffix||'',duration=720,start=performance.now();
    const tick=now=>{
      const progress=Math.min((now-start)/duration,1),ease=1-Math.pow(1-progress,3);
      el.textContent=`${format(Math.round(target*ease))}${suffix}`;
      if(progress<1)requestAnimationFrame(tick);else el.textContent=`${format(target)}${suffix}`;
    };
    requestAnimationFrame(tick);
  };
  const counterObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){animate(entry.target);counterObserver.unobserve(entry.target)}}),{threshold:.35,rootMargin:'0px 0px -8% 0px'});
  counters.forEach(counter=>counterObserver.observe(counter));
})();

/* Progressive scroll-reveal motion */
(()=>{
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  document.documentElement.classList.add('reveal-ready');
  const sections=[...document.querySelectorAll('main > section, main > .impact-strip, footer')];
  const staggered=[...document.querySelectorAll('.quick-paths a,.program-card,.institution-card,.admission-steps article,.metric-grid>div,.achiever-grid article,.number-grid article,.news-grid article,.footer-top>div')];
  sections.forEach(el=>el.classList.add('scroll-reveal'));
  staggered.forEach((el,index)=>{
    el.classList.add('scroll-reveal','scroll-reveal-item');
    el.style.setProperty('--reveal-delay',`${(index%4)*75}ms`);
  });
  const revealObserver=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },{threshold:.12,rootMargin:'0px 0px -7% 0px'});
  document.querySelectorAll('.scroll-reveal').forEach(el=>revealObserver.observe(el));
})();
