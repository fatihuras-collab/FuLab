'use strict';
const config=window.FULAB_CONFIG||{};
const menu=document.querySelector('.menu-toggle'),navigation=document.querySelector('#navigation');
function closeMenu(){if(!menu)return;menu.setAttribute('aria-expanded','false');navigation.classList.remove('open');}
menu?.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));navigation.classList.toggle('open',open);});
navigation?.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menu?.getAttribute('aria-expanded')==='true'){closeMenu();menu.focus();}});
document.addEventListener('click',e=>{if(!e.target.closest('.header'))closeMenu();});
window.matchMedia('(min-width: 981px)').addEventListener('change',closeMenu);
document.querySelector('#year').textContent=new Date().getFullYear();
const details=document.querySelector('#contact-details');
function contactLink(label,href){if(!details)return;const a=document.createElement('a');a.textContent=label;a.href=href;details.append(a);}
const email=typeof config.email==='string'&&/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(config.email)?config.email:'';
if(email)contactLink(email,'mailto:'+email);
if(config.phone)contactLink(config.phone,'tel:'+String(config.phone).replace(/[^+\d]/g,''));
if(config.whatsapp)contactLink('WhatsApp üzerinden iletişim','https://wa.me/'+String(config.whatsapp).replace(/\D/g,''));
const form=document.querySelector('#brief-form');
if(form){
 const need=form.elements.need,status=document.querySelector('#form-status');
 const interest=new URLSearchParams(location.search).get('ilgi');
 if([...form.elements.interest.options].some(o=>o.value===interest))form.elements.interest.value=interest;
 need.addEventListener('input',()=>need.setCustomValidity(''));
 function summary(){need.setCustomValidity(need.value.trim()?'':'Lütfen iyileştirmek istediğiniz süreci yazın.');if(!form.reportValidity())return null;const fields=[['Ad soyad','name'],['Şirket','company'],['E-posta','email'],['İlgi alanı','interest'],['Süreç','need'],['Araçlar','systems'],['Başlangıç','timing']];return 'FuLab — Proje Özeti\n\n'+fields.map(([label,key])=>label+': '+(form.elements[key].value.trim()||'Belirtilmedi')).join('\n\n')+'\n';}
 form.addEventListener('submit',e=>{e.preventDefault();const text=summary();if(!text)return;const url=URL.createObjectURL(new Blob(['\uFEFF'+text],{type:'text/plain;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download='FuLab-Proje-Ozeti.txt';document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);status.textContent='Proje özetiniz hazır. İndirme başlatıldı; bilgileriniz gönderilmedi.';});
 const mailButton=document.querySelector('#email-brief');
 if(email){mailButton.hidden=false;mailButton.addEventListener('click',()=>{const text=summary();if(!text)return;location.href='mailto:'+email+'?subject='+encodeURIComponent('FuLab proje görüşmesi')+'&body='+encodeURIComponent(text);status.textContent='E-posta uygulamanızda taslak açılması istendi. Göndermeden önce kontrol edin; bu işlem otomatik gönderim yapmaz.';});}
 const approval=document.querySelector('#brief-approval');
 function shareText(){const text=summary();if(!text)return null;if(!approval?.checked){status.textContent='Göndermeden önce bilgilerin doğruluğunu onaylayın.';approval?.focus();return null;}return text;}
 const whatsapp=document.querySelector('#whatsapp-brief');
 whatsapp?.addEventListener('click',e=>{const text=shareText();if(!text){e.preventDefault();return;}whatsapp.href='https://wa.me/'+String(config.whatsapp).replace(/\D/g,'')+'?text='+encodeURIComponent(text);status.textContent='WhatsApp’ta hazırlanan mesajı kontrol edip Gönder’e basın. Bu işlem otomatik gönderim yapmaz.';});
 const send=document.querySelector('#send-brief');let token='',sending=false;
 if(send&&/^https?:$/.test(location.protocol))fetch('api/assistant.php?action=status',{cache:'no-store',signal:AbortSignal.timeout(10000)}).then(r=>r.json()).then(j=>{if(j.ok&&j.email){token=j.token;send.hidden=false;document.querySelector('#mail-availability').hidden=true;}}).catch(()=>{});
 send?.addEventListener('click',async()=>{if(sending)return;const text=shareText();if(!text)return;const contact=form.elements.email.value.trim();if(!contact){status.textContent='E-posta gönderimi için dönüş adresinizi yazın.';form.elements.email.focus();return;}sending=true;send.disabled=true;status.textContent='Gönderiliyor…';try{const response=await fetch('api/assistant.php',{method:'POST',headers:{'Content-Type':'application/json','X-FuLab-Token':token},body:JSON.stringify({action:'lead',summary:text,name:form.elements.name.value.trim(),contact,approved:true,website:''}),signal:AbortSignal.timeout(45000)});const result=await response.json();if(!response.ok||!result.ok)throw new Error(result.message||'Gönderim tamamlanamadı.');status.textContent=result.message;}catch(error){status.textContent='Gönderim tamamlanamadı. Bilgileriniz korunuyor; WhatsApp seçeneğini kullanabilir veya tekrar deneyebilirsiniz.';}finally{sending=false;send.disabled=false;}});

}
