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
navButtons.forEach(button=>button.addEventListener('click',event=>{
  event.stopPropagation();
  const key=button.dataset.menu;
  const wasOpen=button.classList.contains('active');
  closeMega();
  if(!wasOpen){button.classList.add('active');mega.innerHTML=`<div><span class="section-label">Explore</span><h3>${button.textContent.replace('⌄','').trim()}</h3></div><div class="mega-links">${menuData[key].map(item=>`<a href="#${key}">${item} <b>↗</b></a>`).join('')}</div>`;mega.classList.add('open');mega.setAttribute('aria-hidden','false')}
}));
document.addEventListener('click',event=>{if(!event.target.closest('.mega')&&!event.target.closest('.primary-nav'))closeMega()});
document.addEventListener('keydown',event=>{if(event.key==='Escape'){closeMega();document.querySelector('.search-panel').classList.remove('open')}});
document.querySelector('.announcement button').addEventListener('click',event=>event.currentTarget.parentElement.remove());
const searchPanel=document.querySelector('.search-panel');
document.querySelector('.search-open').addEventListener('click',()=>{searchPanel.classList.add('open');searchPanel.setAttribute('aria-hidden','false');setTimeout(()=>searchPanel.querySelector('input').focus(),200)});
document.querySelector('.search-close').addEventListener('click',()=>{searchPanel.classList.remove('open');searchPanel.setAttribute('aria-hidden','true')});
const institutionData=[
  ['01 / 05','Deemed-to-be University','MRIIRS','Research-led multidisciplinary education with a strong culture of innovation, global engagement and practical learning.','Faridabad campus','UG · PG · Doctoral'],
  ['02 / 05','State Private University','MRU','Industry-aligned programmes built around emerging technology, problem-solving and entrepreneurial thinking.','Faridabad campus','UG · PG · Doctoral'],
  ['03 / 05','Faculty of Dental Sciences','MRDC','Clinical education, advanced practice and community care supported by modern learning facilities.','Faridabad campus','UG · PG'],
  ['04 / 05','Flexible digital learning','MR Online','Career-relevant online degrees designed to bring quality higher education into working lives.','Learn from anywhere','UG · PG'],
  ['05 / 05','K–12 education network','MRIS','A future-focused school environment nurturing confident, curious and compassionate learners.','Delhi NCR campuses','Early years · Grade 12']
];
const feature=document.querySelector('.institution-feature');
document.querySelectorAll('.institution-switch button').forEach((button,index)=>button.addEventListener('click',()=>{
  document.querySelectorAll('.institution-switch button').forEach(item=>item.classList.remove('active'));button.classList.add('active');
  const item=institutionData[index];
  feature.querySelector('.institution-feature-content').innerHTML=`<span class="institution-number">${item[0]}</span><p class="institution-type">${item[1]}</p><h3>${item[2]}</h3><p class="institution-desc">${item[3]}</p><div class="institution-meta"><span>${item[4]}</span><span>${item[5]}</span></div><a href="#institutions">Discover ${item[2]} <b>↗</b></a>`;
}));
const menuToggle=document.querySelector('.menu-toggle');
menuToggle.addEventListener('click',()=>{const open=document.body.classList.toggle('menu-open');menuToggle.setAttribute('aria-expanded',String(open));if(open){mega.innerHTML=`<div><span class="section-label">Navigate</span><h3>Explore Manav Rachna</h3></div><div class="mega-links">${Object.keys(menuData).map(item=>`<a href="#${item}">${item[0].toUpperCase()+item.slice(1)} <b>↗</b></a>`).join('')}<a href="#outcomes">Placements <b>↗</b></a></div>`;mega.classList.add('open')}else closeMega()});

document.querySelectorAll('.notice-tabs button').forEach(button=>button.addEventListener('click',()=>{
  document.querySelectorAll('.notice-tabs button').forEach(item=>item.classList.remove('active'));
  button.classList.add('active');
  document.querySelectorAll('.notice-track article').forEach(card=>card.classList.toggle('hidden',button.dataset.notice!=='all'&&card.dataset.kind!==button.dataset.notice));
}));

function moveAchievers(direction){
  const track=document.querySelector('.achiever-track');
  const card=track.querySelector('article');
  track.scrollBy({left:direction*((card?.getBoundingClientRect().width||240)+16),behavior:'smooth'});
}
document.querySelector('.achiever-prev')?.addEventListener('click',()=>moveAchievers(-1));
document.querySelector('.achiever-next')?.addEventListener('click',()=>moveAchievers(1));

document.querySelectorAll('.program-tabs button').forEach(button=>button.addEventListener('click',()=>{
  document.querySelectorAll('.program-tabs button').forEach(item=>item.classList.remove('active'));
  button.classList.add('active');
  document.querySelector('.finder-form input')?.focus();
}));

const successStories=[
  {name:'Karan Aditya Ghoshal',role:'Business & Analytics · KPMG Canada',result:'60 LPA placement',badge:'60 LPA',image:'https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=1200',quote:'Manav Rachna helped me connect analytical thinking with real business challenges. Live projects, mentoring and the confidence to present ideas prepared me to contribute from my very first day.'},
  {name:'Ananya Kamra',role:'Cybersecurity · Palo Alto Networks',result:'54 LPA placement',badge:'54 LPA',image:'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1200',quote:'The learning went far beyond lectures. Industry challenges, technical practice and faculty guidance helped me develop the clarity and resilience needed to step confidently into cybersecurity.'},
  {name:'Sarthak Rastogi',role:'Technology · Spacetime',result:'55 LPA placement',badge:'55 LPA',image:'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1200',quote:'Building real solutions with multidisciplinary teams changed the way I approach complex problems. That experience gave me the technical depth and collaborative mindset I use every day.'},
  {name:'Deepanshu Sharma',role:'Engineering · Niagara',result:'30 LPA placement',badge:'30 LPA',image:'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200',quote:'Access to mentors, laboratories and industry-led projects gave me space to test ideas and learn from every iteration. It turned curiosity into practical engineering confidence.'}
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
    entry.target.textContent=target>=10000?`${Math.round(value/1000)}${suffix}`:`${value}${suffix}`;
    if(progress<1)requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);statObserver.unobserve(entry.target);
}),{threshold:.55});
heroStats.forEach(stat=>statObserver.observe(stat));
