// Progressive enhancement only. Every page and navigation link is rendered as HTML.
document.querySelectorAll('[data-choice-group]').forEach(group=>{
  const buttons=[...group.querySelectorAll('[data-choice]')];
  const panels=[...group.querySelectorAll('[data-choice-panel]')];
  const choose=value=>{
    buttons.forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.choice===value)));
    panels.forEach(panel=>{panel.hidden=panel.dataset.choicePanel!==value;});
  };
  group.querySelector('[data-choice-controls]').hidden=false;
  buttons.forEach(button=>button.addEventListener('click',()=>choose(button.dataset.choice)));
  if(buttons.length)choose(buttons[0].dataset.choice);
});
document.querySelectorAll('[data-device]').forEach(button=>{
  button.addEventListener('click',()=>{
    document.querySelectorAll('[data-device]').forEach(item=>item.setAttribute('aria-pressed',String(item===button)));
    document.querySelectorAll('[data-preview-device]').forEach(panel=>{panel.hidden=panel.dataset.previewDevice!==button.dataset.device;});
  });
});

// Carry an explicit class or service choice into its demonstration request form.
const demoParameters=new URLSearchParams(location.search);
for(const [parameter,id] of [['class','demo-class'],['service','demo-service']]){
  const select=document.getElementById(id);
  const value=demoParameters.get(parameter);
  if(select&&value&&[...select.options].some(option=>option.value===value))select.value=value;
}

document.querySelectorAll('.mobile-nav, .demo-mobile, .example-more').forEach(menu=>{
  menu.addEventListener('keydown',event=>{if(event.key==='Escape'){menu.open=false;menu.querySelector('summary').focus();}});
  menu.addEventListener('click',event=>{if(event.target.closest('a[href]'))menu.open=false;});
  document.addEventListener('click',event=>{if(menu.open&&!menu.contains(event.target))menu.open=false;});
});

const occasion=document.getElementById('demo-occasion');
if(occasion&&demoParameters.get('occasion'))occasion.value=demoParameters.get('occasion').slice(0,160);

// Native dialogs keep keyboard focus inside the image viewer and restore it on close.
const gallery=document.querySelector('.gallery-dialog');
if(gallery){
  const images=[...document.querySelectorAll('[data-gallery-image]')];let current=0;
  const display=index=>{
    current=(index+images.length)%images.length;
    const source=images[current].querySelector('img');
    const large=gallery.querySelector('img');large.src=images[current].href;large.alt=source.alt;
    gallery.querySelector('p').textContent=source.alt;
    gallery.querySelector('[data-gallery-position]').textContent=`${current+1} of ${images.length}`;
  };
  images.forEach((link,index)=>link.addEventListener('click',event=>{
    if(event.ctrlKey||event.metaKey||event.shiftKey||event.altKey)return;
    event.preventDefault();display(index);gallery.showModal();gallery.querySelector('[data-gallery-close]').focus();
  }));
  gallery.querySelector('[data-gallery-close]').addEventListener('click',()=>gallery.close());
  gallery.querySelector('[data-gallery-prev]').addEventListener('click',()=>display(current-1));
  gallery.querySelector('[data-gallery-next]').addEventListener('click',()=>display(current+1));
  gallery.addEventListener('keydown',event=>{if(event.key==='ArrowLeft'||event.key==='ArrowRight'){event.preventDefault();display(current+(event.key==='ArrowLeft'?-1:1));}});
  gallery.addEventListener('click',event=>{if(event.target===gallery){const r=gallery.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)gallery.close();}});
  gallery.querySelector('[data-gallery-position]').setAttribute('aria-live','polite');
}

document.querySelectorAll('[data-day]').forEach(button=>{
  button.addEventListener('click',()=>{
    document.querySelectorAll('[data-day]').forEach(item=>item.setAttribute('aria-pressed',String(item===button)));
    let count=0;
    document.querySelectorAll('[data-class-day]').forEach(row=>{
      row.hidden=button.dataset.day!=='all'&&row.dataset.classDay!==button.dataset.day;
      if(!row.hidden)count++;
    });
    document.querySelector('[data-schedule-status]').textContent=`${count} classes shown${button.dataset.day==='all'?'':` on ${button.dataset.day}`}.`;
  });
});

document.querySelectorAll('[data-demo-form]').forEach(form=>{
  const date=form.querySelector('input[type="date"]');
  if(date) {const today=new Date();date.min=`${today.getFullYear()}-${String(today.getMonth()+1).padStart(2,'0')}-${String(today.getDate()).padStart(2,'0')}`;}
  form.addEventListener('submit',event=>{
    event.preventDefault();
    if(!form.reportValidity())return;
    const data=Object.fromEntries(new FormData(form));
    const type=form.dataset.demoType;
    const summary=type==='olive'?`${data.occasion?data.occasion+' · ':''}${data.guests}, ${data.date} at ${data.time}`:type==='form'?`${data.class} · ${data.experience}`:data.service;
    const feedback=form.querySelector('.form-feedback');
    feedback.textContent=`Request preview ready for ${data.name}: ${summary}. In a live website, this would continue to the business’s agreed inquiry or booking service. Nothing has been sent or booked.`;
    feedback.focus();
  });
});

const inquiry=document.querySelector('[data-inquiry]');
if(inquiry) {
  const feedback=inquiry.querySelector('.form-feedback');
  const output=inquiry.querySelector('.brief-output');
  const briefArea=output.querySelector('textarea');
  let brief='';
  const query=new URLSearchParams(location.search);
  const serviceNames={website:'Business website','follow-up':'Inquiry follow-up','missed-calls':'Missed-call text replies',reviews:'Review requests',seo:'On-page SEO'};
  const exampleNames={'olive-and-ember':'Olive & Ember','current-electric':'Current Electric','form-studio':'Form Studio','clearflow-plumbing':'Clearflow Plumbing','ridgeline-roofing':'Ridgeline Roofing'};
  const interest=serviceNames[query.get('interest')]||exampleNames[query.get('example')];
  if(interest){const context=inquiry.querySelector('[data-inquiry-context]');if(context){context.hidden=false;context.textContent=`You’re asking about: ${interest}`;const field=inquiry.querySelector('[name="interest"]');field.defaultValue=interest;field.value=interest;}}
  const announce=message=>{feedback.textContent=message;feedback.focus();};
  inquiry.addEventListener('submit',async event=>{
    event.preventDefault();
    if(!inquiry.reportValidity())return;
    const data=Object.fromEntries(new FormData(inquiry));
    const labels={name:'Name',business:'Business',email:'Email',phone:'Phone',businessType:'Business type',website:'Current website',need:'Looking for',message:'Additional notes',interest:'Interested in'};
    brief='Website inquiry for SkipManual\n\n'+Object.entries(data).filter(([,value])=>String(value).trim()).map(([key,value])=>`${labels[key]||key}: ${String(value).trim()}`).join('\n')+'\n\nBase website package: $249/month. Scope and terms to be agreed.';
    briefArea.value=brief;
    const endpoint=inquiry.dataset.endpoint;
    const email=inquiry.dataset.email;
    if(!endpoint) {
      output.hidden=false;
      if(email) {
        let emailLink=output.querySelector('[data-email-link]');
        if(!emailLink) {emailLink=document.createElement('a');emailLink.className='button';emailLink.dataset.emailLink='';emailLink.textContent='Open email draft';output.querySelector('.actions').prepend(emailLink);}
        emailLink.href=`mailto:${email}?subject=${encodeURIComponent(`Website inquiry: ${data.business}`)}&body=${encodeURIComponent(brief)}`;
        announce('Your brief is ready. Open the email draft below, then send it from your email application. Nothing has been sent yet.');
      } else announce('Your brief is ready to copy or save. Online inquiries aren’t open yet, so nothing has been sent.');
      return;
    }
    const submit=inquiry.querySelector('[type="submit"]');
    const previous=submit.innerHTML;
    submit.disabled=true;submit.textContent='Sending…';inquiry.setAttribute('aria-busy','true');
    try {
      const response=await fetch(endpoint,{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify({...data,source:'skipmanual-website'}),signal:AbortSignal.timeout(15000)});
      if(!response.ok)throw new Error('not-accepted');
      // The endpoint contract requires explicit acceptance, not merely a successful page response.
      const result=await response.json();
      if(result.success!==true)throw new Error('not-confirmed');
      output.hidden=true;inquiry.reset();announce('Your inquiry has been sent. Thank you for telling us about your business.');
    } catch {
      output.hidden=false;
      announce('We couldn’t confirm that your inquiry was sent. Your details are still here. Please try again, or save your brief below.');
    } finally {submit.disabled=false;submit.innerHTML=previous;inquiry.removeAttribute('aria-busy');}
  });
  inquiry.querySelector('[data-copy]').addEventListener('click',async()=>{
    try {await navigator.clipboard.writeText(brief);announce('Brief copied. Nothing has been sent.');}
    catch {feedback.textContent='Automatic copying is unavailable. Your brief is selected below; use your device’s copy command.';briefArea.focus();briefArea.select();}
  });
  inquiry.querySelector('[data-download]').addEventListener('click',()=>{
    const url=URL.createObjectURL(new Blob([brief],{type:'text/plain;charset=utf-8'}));
    const link=document.createElement('a');link.href=url;link.download='skipmanual-website-brief.txt';document.body.append(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);
    announce('Your brief download is ready. Nothing has been sent.');
  });
}

// Keep forms inert without JavaScript; a default GET must never put entered details into a URL.
document.querySelectorAll('[data-js-submit]').forEach(button=>{button.disabled=false;});
