const menuData={
  about:['About Manav Rachna','Our Legacy','Vision & Mission','Leadership','Values & Strengths','Accreditations & Rankings','Equity & Inclusion','MR Impact'],
  academics:['Find a Program','Undergraduate Programs','Postgraduate Programs','Doctoral Programs','Engineering & Technology','Computer Applications','Leadership & Management','Allied Health Sciences','Design','Commerce & Economics','Law','Sciences'],
  admissions:['Apply Now','Admission Process','Eligibility, Courses & Fees','MRNAT 2026','Financial Aid & Scholarships','Education Loan','Download Brochure','International Admissions','Connect with an Expert','Hostel & Transport','FAQs'],
  research:['Research Overview','Research Clusters','Global Research Initiatives','Research Technology','Innovation','Incubation','Centres of Excellence','Awards & Accomplishments','Funding Opportunities','Research Support','Journals'],
  global:['International Collaborations','MR Global Connect','Beyond the Borders','Global Mobility Programs'],
  campus:['Life @ Manav Rachna','Sports @ MR','Beyond Academics','Clubs & Extra-Curriculars','Campus Facilities','Hostel','Transport','Student Support','Virtual Tour'],
  placements:['Placements Overview','Corporate Resource & Career Development','Top Placements','Placement Records','Major Recruiters','Placement Statistics','Recruiter Testimonials']
};
const mega=document.querySelector('.mega');
const navButtons=document.querySelectorAll('.primary-nav [data-menu]');
function closeMega(){mega.classList.remove('open');mega.setAttribute('aria-hidden','true');navButtons.forEach(button=>button.classList.remove('active'))}
function openMega(button){
  const key=button.dataset.menu;
  closeMega();
  button.classList.add('active');mega.innerHTML=`<div class="mega-intro"><span class="section-label">Explore</span><h3>${button.textContent.trim()}</h3><p>Discover programmes, opportunities and essential information across the Manav Rachna ecosystem.</p><a href="#${key}">View ${key} overview <b>↗</b></a></div><div class="mega-links">${menuData[key].map(item=>`<a href="#${key}"><span>${item}</span><b>↗</b></a>`).join('')}</div>`;mega.classList.add('open');mega.setAttribute('aria-hidden','false');
}
navButtons.forEach(button=>{button.addEventListener('mouseenter',()=>openMega(button));button.addEventListener('focus',()=>openMega(button));});
document.querySelector('.site-header').addEventListener('mouseleave',closeMega);
document.addEventListener('click',event=>{if(!event.target.closest('.mega')&&!event.target.closest('.primary-nav'))closeMega()});
document.addEventListener('keydown',event=>{if(event.key==='Escape'){closeMega();document.querySelector('.search-panel').classList.remove('open')}});
document.querySelector('.announcement button').addEventListener('click',event=>event.currentTarget.parentElement.remove());
const searchPanel=document.querySelector('.search-panel');
document.querySelector('.search-open').addEventListener('click',()=>{searchPanel.classList.add('open');searchPanel.setAttribute('aria-hidden','false');setTimeout(()=>searchPanel.querySelector('input').focus(),200)});
document.querySelector('.search-close').addEventListener('click',()=>{searchPanel.classList.remove('open');searchPanel.setAttribute('aria-hidden','true')});
const institutionData=[
  ['01 / 05','Deemed-to-be University','MRIIRS','Research-led multidisciplinary education with a strong culture of innovation, global engagement and practical learning.','Faridabad campus','UG · PG · Doctoral','assets/campus-hero.png'],
  ['02 / 05','State Private University','MRU','Industry-aligned programmes built around emerging technology, problem-solving and entrepreneurial thinking.','Faridabad campus','UG · PG · Doctoral','assets/campus-walkthrough.png'],
  ['03 / 05','Faculty of Dental Sciences','MRDC','Clinical education, advanced practice and community care supported by modern learning facilities.','Faridabad campus','UG · PG','assets/mr/65715f09c1e2c1701928713.webp'],
  ['04 / 05','Flexible digital learning','MR Online','Career-relevant online degrees designed to bring quality higher education into working lives.','Learn from anywhere','UG · PG','assets/mr/65852b70b49151703226224.webp'],
  ['05 / 05','K–12 education network','MRIS','A future-focused school environment nurturing confident, curious and compassionate learners.','Delhi NCR campuses','Early years · Grade 12','assets/mr/65852b93520c11703226259.webp']
];
const feature=document.querySelector('.institution-feature');
document.querySelectorAll('.institution-switch button').forEach((button,index)=>button.addEventListener('click',()=>{
  document.querySelectorAll('.institution-switch button').forEach(item=>item.classList.remove('active'));button.classList.add('active');
  const item=institutionData[index];
  const institutionImage=feature.querySelector('.institution-feature-image');
  institutionImage.src=item[6];institutionImage.alt=`${item[2]} institution campus`;
  feature.querySelector('.institution-feature-content').innerHTML=`<span class="institution-number">${item[0]}</span><p class="institution-type">${item[1]}</p><h3>${item[2]}</h3><p class="institution-desc">${item[3]}</p><div class="institution-meta"><span>${item[4]}</span><span>${item[5]}</span></div><a href="#institutions">Discover ${item[2]} <b>↗</b></a>`;
}));
const menuToggle=document.querySelector('.menu-toggle');
menuToggle.addEventListener('click',()=>{const open=document.body.classList.toggle('menu-open');menuToggle.setAttribute('aria-expanded',String(open));if(open){mega.innerHTML=`<div><span class="section-label">Navigate</span><h3>Explore Manav Rachna</h3></div><div class="mega-links">${Object.keys(menuData).map(item=>`<a href="#${item}">${item[0].toUpperCase()+item.slice(1)} <b>↗</b></a>`).join('')}<a href="#outcomes">Placements <b>↗</b></a></div>`;mega.classList.add('open')}else closeMega()});

document.querySelectorAll('.notice-tabs button').forEach(button=>button.addEventListener('click',()=>{
  document.querySelectorAll('.notice-tabs button').forEach(item=>item.classList.remove('active'));
  button.classList.add('active');
  document.querySelectorAll('.notice-track article').forEach(card=>card.classList.toggle('hidden',button.dataset.notice!=='all'&&card.dataset.kind!==button.dataset.notice));
}));
document.querySelectorAll('.update-tabs button').forEach(button=>button.addEventListener('click',()=>{
  document.querySelectorAll('.update-tabs button').forEach(item=>{item.classList.remove('active');item.setAttribute('aria-selected','false')});
  button.classList.add('active');button.setAttribute('aria-selected','true');
  const kind=button.dataset.update||'all';
  document.querySelectorAll('.update-grid article').forEach(card=>card.hidden=kind!=='all'&&card.dataset.kind!==kind);
}));

function moveAchievers(direction){
  const track=document.querySelector('.achiever-track');
  const card=track.querySelector('article');
  track.scrollBy({left:direction*((card?.getBoundingClientRect().width||240)+16),behavior:'smooth'});
}
document.querySelector('.achiever-prev')?.addEventListener('click',()=>moveAchievers(-1));
document.querySelector('.achiever-next')?.addEventListener('click',()=>moveAchievers(1));

const programmeImages={
  all:['assets/fresh-engineering-lab.png','assets/indian/notice-business.png','assets/indian/notice-law.png','assets/indian/notice-design.png','assets/indian/research-biotech.png','assets/indian/news-culture.png','assets/indian/research.png','assets/indian/news-convocation.png'],
  ug:['assets/indian/academic-ug.png','assets/indian/campus-community-2026.png','assets/indian/notice-law.png','assets/indian/notice-design.png','assets/indian/research-biotech.png','assets/indian/news-culture.png','assets/indian/research.png','assets/indian/news-convocation.png'],
  pg:['assets/indian/research-incubator.png','assets/indian/academic-pg.png','assets/indian/notice-law.png','assets/indian/notice-design.png','assets/indian/research-biotech.png','assets/indian/news-culture.png','assets/indian/research.png','assets/indian/news-convocation.png'],
  doctoral:['assets/indian/research.png','assets/indian/research-incubator.png','assets/indian/notice-law.png','assets/indian/research-biotech.png','assets/indian/academic-phd.png','assets/indian/research.png','assets/indian/research-biotech.png','assets/indian/research-incubator.png'],
  online:['assets/indian/academic-pg.png','assets/indian/notice-business.png','assets/indian/notice-law.png','assets/indian/notice-design.png','assets/indian/news-culture.png','assets/indian/news-convocation.png','assets/indian/research.png','assets/indian/academic-ug.png']
};
function updateProgrammeCards(level){
  document.querySelectorAll('.discipline-grid a').forEach((card,index)=>{
    card.hidden=level!=='all'&&!card.dataset.levels.split(' ').includes(level);
    const image=programmeImages[level]?.[index];
    if(image) card.style.setProperty('--card-image',`url('${image}')`);
  });
}
document.querySelectorAll('.program-tabs button').forEach(button=>button.addEventListener('click',()=>{
  document.querySelectorAll('.program-tabs button').forEach(item=>item.classList.remove('active'));
  button.classList.add('active');
  document.querySelectorAll('.program-tabs button').forEach(item=>item.setAttribute('aria-selected',String(item===button)));
  const level=button.dataset.level;
  updateProgrammeCards(level);
  const select=document.querySelector('.finder-form select');
  if(select){const labels={all:'All study levels',ug:'Undergraduate',pg:'Postgraduate',doctoral:'Doctoral',online:'Online'};select.value=labels[level];}
}));

const successStories=[
  {name:'Karan Aditya Ghoshal',role:'Business & Analytics · KPMG Canada',result:'60 LPA placement',badge:'60 LPA',image:'assets/indian/achiever-1.jpg',quote:'Manav Rachna helped me connect analytical thinking with real business challenges. Live projects, mentoring and the confidence to present ideas prepared me to contribute from my very first day.'},
  {name:'Ananya Kamra',role:'Cybersecurity · Palo Alto Networks',result:'54 LPA placement',badge:'54 LPA',image:'assets/indian/achiever-2.jpg',quote:'The learning went far beyond lectures. Industry challenges, technical practice and faculty guidance helped me develop the clarity and resilience needed to step confidently into cybersecurity.'},
  {name:'Sarthak Rastogi',role:'Technology · Spacetime',result:'55 LPA placement',badge:'55 LPA',image:'assets/indian/achiever-3.jpg',quote:'Building real solutions with multidisciplinary teams changed the way I approach complex problems. That experience gave me the technical depth and collaborative mindset I use every day.'},
  {name:'Deepanshu Sharma',role:'Engineering · Niagara',result:'30 LPA placement',badge:'30 LPA',image:'assets/indian/achiever-4.jpg',quote:'Access to mentors, laboratories and industry-led projects gave me space to test ideas and learn from every iteration. It turned curiosity into practical engineering confidence.'}
];
let activeSuccess=0;
const successButtons=[...document.querySelectorAll('[data-success]')];
function showSuccess(index){
  activeSuccess=(index+successStories.length)%successStories.length;
  const story=successStories[activeSuccess];
  document.querySelector('#success-quote').textContent=story.quote;
  document.querySelector('#success-name').textContent=story.name;
  document.querySelector('#success-role').textContent=story.role;
  document.querySelector('#success-result').textContent=story.result;
  document.querySelector('#success-badge').textContent=story.badge;
  const image=document.querySelector('#success-image');image.src=story.image;image.alt=story.name;
  document.querySelector('#success-count').textContent=`${String(activeSuccess+1).padStart(2,'0')} / ${String(successStories.length).padStart(2,'0')}`;
  successButtons.forEach((button,i)=>{button.classList.toggle('active',i===activeSuccess);button.setAttribute('aria-selected',String(i===activeSuccess));});
}
successButtons.forEach((button,index)=>button.addEventListener('click',()=>showSuccess(index)));
document.querySelector('#success-prev')?.addEventListener('click',()=>showSuccess(activeSuccess-1));
document.querySelector('#success-next')?.addEventListener('click',()=>showSuccess(activeSuccess+1));

const heroStats=document.querySelectorAll('[data-count]');
const statObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{
  if(!entry.isIntersecting||entry.target.dataset.played)return;
  entry.target.dataset.played='true';
  const target=Number(entry.target.dataset.count),duration=1300,start=performance.now();
  const suffix=entry.target.dataset.suffix||'';
  function tick(now){
    const progress=Math.min((now-start)/duration,1),value=Math.round(target*(1-Math.pow(1-progress,3)));
    const display=suffix==='k+'?Math.round(value/1000):entry.target.dataset.pad?String(value).padStart(Number(entry.target.dataset.pad),'0'):value.toLocaleString('en-IN');
    entry.target.textContent=`${display}${suffix}`;
    if(progress<1)requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);statObserver.unobserve(entry.target);
}),{threshold:.55});
heroStats.forEach(stat=>statObserver.observe(stat));
