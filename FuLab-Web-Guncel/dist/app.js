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
 function summary(){need.setCustomValidity(need.value.trim()?'':'Lütfen iyileştirmek istediğiniz süreci yazın.');if(!form.reportValidity())return null;const fields=[['Ad soyad','name'],['Şirket','company'],['E-posta','email'],['İlgi alanı','interest'],['Süreç','need'],['Araçlar','systems'],['Başlangıç','timing']];return 'FuLab — Proje Özeti\n\n'+fields.map(([label,key])=>label+': '+(form.elements[key].value.trim()||'Belirtilmedi')).join('\n\n')+'\n\nBu özet cihazınızda oluşturulmuştur; FuLab’a gönderilmemiştir.\n';}
 form.addEventListener('submit',e=>{e.preventDefault();const text=summary();if(!text)return;const url=URL.createObjectURL(new Blob(['\uFEFF'+text],{type:'text/plain;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download='FuLab-Proje-Ozeti.txt';document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);status.textContent='Proje özetiniz hazır. İndirme başlatıldı; bilgileriniz gönderilmedi.';});
 const mailButton=document.querySelector('#email-brief');
 if(email){mailButton.hidden=false;mailButton.addEventListener('click',()=>{const text=summary();if(!text)return;location.href='mailto:'+email+'?subject='+encodeURIComponent('FuLab proje görüşmesi')+'&body='+encodeURIComponent(text);status.textContent='E-posta uygulamanızda taslak açılması istendi. Göndermeden önce kontrol edin; bu işlem otomatik gönderim yapmaz.';});}
}
