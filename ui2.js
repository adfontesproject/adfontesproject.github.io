/* Ad Fontes UI2 */
(function(){ var __css='/* ---- Menú deslizante: translúcido, redondeado, texto claro ---- */\nhtml .drawer{ background:rgba(28,27,24,.75)!important; -webkit-backdrop-filter:blur(18px) saturate(1.2); backdrop-filter:blur(18px) saturate(1.2); border-right:1px solid rgba(255,255,255,.08)!important; border-radius:0 22px 22px 0!important; box-shadow:12px 0 40px rgba(0,0,0,.3)!important; color:#efe7d6!important; }\nhtml .drawer .drawer-head{ border-bottom:1px solid rgba(255,255,255,.08)!important; }\nhtml .drawer .drawer-head, html .drawer .drawer-head *{ color:#efe7d6!important; }\nhtml .drawer .drawer-head small{ color:var(--gold-light,#c79a3e)!important; }\nhtml .drawer-nav a{ color:#e9e1d2!important; display:flex!important; align-items:center; gap:.85rem; padding:.72rem .7rem; border-radius:12px; }\nhtml .drawer-nav a:hover{ background:rgba(255,255,255,.08)!important; color:#fff!important; }\nhtml .drawer a .ic{ width:21px; height:21px; display:inline-flex!important; align-items:center; justify-content:center; color:var(--gold-light,#c79a3e)!important; font-size:0!important; flex:0 0 auto; }\nhtml .drawer a .ic svg{ width:21px!important; height:21px!important; display:block; }\nhtml .drawer .drawer-foot{ border-top:1px solid rgba(255,255,255,.08)!important; color:rgba(239,231,214,.5)!important; }\n/* zona secundaria (Instalar / Sugerencias) abajo */\n#af-sec2{ margin-top:auto; padding-top:.5rem; border-top:1px solid rgba(255,255,255,.08); }\n#af-sec2 a{ color:#cbc2b0!important; font-size:.9rem; display:flex!important; align-items:center; gap:.85rem; padding:.6rem .7rem; border-radius:12px; }\n#af-sec2 a:hover{ background:rgba(255,255,255,.06)!important; }\n#af-sec2 a .ic{ color:#b3a991!important; }\n\n/* ---- Panel de colores: muestras ---- */\n#thememenu button{ display:flex!important; align-items:center; gap:.6rem!important; text-align:left; }\n#thememenu button .af-dot{ width:24px; height:24px; border-radius:50%; flex:0 0 auto; border:1px solid rgba(0,0,0,.18); position:relative; }\nhtml[data-theme="dark"] #thememenu button .af-dot{ border-color:rgba(255,255,255,.2); }\n#thememenu button.af-on{ outline:2px solid var(--gold,#b0842f); outline-offset:-1px; }\n#thememenu button.af-on .af-dot:after{ content:\'\\2713\'; position:absolute; inset:0; display:flex; align-items:center; justify-content:center; color:#fff; font-size:.78rem; text-shadow:0 1px 2px rgba(0,0,0,.6); }\n/* fuente de lectura */\n.af-fontsec{ margin-top:.7rem; padding-top:.5rem; border-top:1px solid var(--line,#ece2cc); }\n.af-fontsec .hd{ font-family:\'Inter\',sans-serif; font-size:.68rem; letter-spacing:.12em; text-transform:uppercase; color:var(--soft,#8a7f68); margin:.1rem 0 .45rem; padding:0 .2rem; }\n.af-font{ display:flex!important; align-items:center; gap:.55rem; width:100%; border:none; background:none; cursor:pointer; padding:.5rem .55rem!important; border-radius:10px; color:var(--ink,#1c1c1c); font-family:\'Inter\',sans-serif; font-size:.82rem; }\n.af-font:hover{ background:var(--line,#ece2cc); }\n.af-font .af-fd{ width:34px; font-size:1.1rem; color:var(--ink,#1c1c1c); flex:0 0 auto; }\n.af-font.on{ color:var(--gold,#b0842f); }\n.af-font.on .af-fd{ color:var(--gold,#b0842f); }\n\n/* ---- Fuente de lectura aplicada ---- */\nhtml[data-font="sans"] p, html[data-font="sans"] li, html[data-font="sans"] blockquote{ font-family:\'Inter\',system-ui,sans-serif!important; }\nhtml[data-font="leg"]  p, html[data-font="leg"]  li, html[data-font="leg"]  blockquote{ font-family:\'Trebuchet MS\',\'Segoe UI\',Verdana,sans-serif!important; }\n\n/* ---- Modal de planes: nubecita translúcida ---- */\n.pm-card{ background:rgba(249,244,234,.82)!important; -webkit-backdrop-filter:blur(16px) saturate(1.1); backdrop-filter:blur(16px) saturate(1.1); border:1px solid rgba(255,255,255,.4)!important; }\nhtml[data-theme="dark"] .pm-card{ background:rgba(26,24,20,.82)!important; border:1px solid rgba(255,255,255,.1)!important; }';
 var s=document.getElementById('af-ui2'); if(!s){ s=document.createElement('style'); s.id='af-ui2'; s.textContent=__css; (document.head||document.documentElement).appendChild(s); }
})();
(function(){
  var W='viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"';
  var IC={
    'index.html':'<svg '+W+'><path d="M3 9.5 12 3l9 6.5"/><path d="M5 10v10h14V10"/></svg>',
    'biblioteca.html':'<svg '+W+'><path d="M2 4h7a3 3 0 0 1 3 3v13a2.5 2.5 0 0 0-2.5-2.5H2z"/><path d="M22 4h-7a3 3 0 0 0-3 3v13a2.5 2.5 0 0 1 2.5-2.5H22z"/></svg>',
    'notas.html':'<svg '+W+'><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/></svg>',
    'comunidad.html':'<svg '+W+'><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4L3 21l1.1-3.2A8.4 8.4 0 1 1 21 11.5z"/></svg>',
    'estudios.html':'<svg '+W+'><path d="M12 2 2 7l10 5 10-5-10-5z"/><path d="m2 17 10 5 10-5"/><path d="m2 12 10 5 10-5"/></svg>',
    'sugerencias.html':'<svg '+W+'><path d="M22 12h-6l-2 3h-4l-2-3H2"/><path d="M5.5 5.5 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.5-6.5a2 2 0 0 0-1.8-1H7.3a2 2 0 0 0-1.8 1z"/></svg>'
  };
  var INST='<svg '+W+'><path d="M12 15V3"/><path d="m7 8 5-5 5 5"/><path d="M4 14v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4"/></svg>';
  function enhanceNav(){
    var nav=document.querySelector('.drawer-nav'); if(!nav) return;
    nav.querySelectorAll('a').forEach(function(a){
      var href=(a.getAttribute('href')||'').split('?')[0].split('#')[0];
      var ic=a.querySelector('.ic'); if(!ic) return;
      if(a.classList.contains('af-inst-link')){ if(!ic.querySelector('svg')) ic.innerHTML=INST; }
      else if(IC[href] && !ic.querySelector('svg')){ ic.innerHTML=IC[href]; }
    });
    var drawer=nav.closest('.drawer')||nav.parentElement;
    var sec=document.getElementById('af-sec2');
    if(!sec){ sec=document.createElement('div'); sec.id='af-sec2'; var foot=drawer.querySelector('.drawer-foot'); drawer.insertBefore(sec, foot||null); }
    var navInst=nav.querySelector('a.af-inst-link'); if(navInst) navInst.style.display='none';
    if(!sec.querySelector('.af-inst2')){ var ai=document.createElement('a'); ai.className='af-inst2'; ai.href='#'; ai.innerHTML='<span class="ic">'+INST+'</span>Instalar app'; ai.addEventListener('click',function(e){ e.preventDefault(); if(window.__instalarApp) window.__instalarApp(); }); sec.appendChild(ai); }
    var adm=document.getElementById('af-admin-link'); if(adm && adm.parentElement!==sec) sec.appendChild(adm);
  }
  var DOT={'Claro':'#f6f1e7','Oscuro cálido':'#241d15','Oscuro carbón':'#16191d','Oscuro tinta':'#131722'};
  function setFont(f){ try{ localStorage.setItem('af_fuente',f); }catch(e){} if(f==='serif') document.documentElement.removeAttribute('data-font'); else document.documentElement.setAttribute('data-font',f); mark(); }
  window.__afSetFont=setFont;
  function mark(){
    var f=localStorage.getItem('af_fuente')||'serif';
    document.querySelectorAll('.af-font').forEach(function(b){ b.classList.toggle('on', b.getAttribute('data-f')===f); });
    var dark=document.documentElement.getAttribute('data-theme')==='dark';
    var tone=document.documentElement.getAttribute('data-tone')||'carbon';
    var lbl=!dark?'Claro':(tone==='calida'?'Oscuro cálido':tone==='tinta'?'Oscuro tinta':'Oscuro carbón');
    document.querySelectorAll('#thememenu button').forEach(function(b){ if(b.classList.contains('af-font'))return; b.classList.toggle('af-on', b.textContent.trim()===lbl); });
  }
  function enhanceTheme(){
    var tm=document.getElementById('thememenu'); if(!tm || tm.__ui2) return;
    tm.querySelectorAll('button').forEach(function(b){ var t=b.textContent.trim(); if(b.querySelector('.af-dot'))return; var d=document.createElement('span'); d.className='af-dot'; d.style.background=DOT[t]||'#888'; b.insertBefore(d,b.firstChild); });
    var fs=document.createElement('div'); fs.className='af-fontsec';
    fs.innerHTML='<div class="hd">Fuente de lectura</div>'
      +'<button class="af-font" data-f="serif" onclick="__afSetFont(\'serif\')"><span class="af-fd" style="font-family:Georgia,serif">Abcg</span> Serif clásica</button>'
      +'<button class="af-font" data-f="sans" onclick="__afSetFont(\'sans\')"><span class="af-fd" style="font-family:Inter,sans-serif">Abcg</span> Moderna</button>'
      +'<button class="af-font" data-f="leg" onclick="__afSetFont(\'leg\')"><span class="af-fd" style="font-family:Trebuchet MS,sans-serif">Abcg</span> Alta legibilidad</button>';
    tm.appendChild(fs);
    tm.__ui2=1; mark();
  }
  try{ var f0=localStorage.getItem('af_fuente'); if(f0 && f0!=='serif') document.documentElement.setAttribute('data-font',f0); }catch(e){}
  try{ new MutationObserver(mark).observe(document.documentElement,{attributes:true,attributeFilter:['data-theme','data-tone']}); }catch(e){}
  var n=0, iv=setInterval(function(){ enhanceNav(); enhanceTheme(); if(++n>20) clearInterval(iv); },300);
  if(document.readyState!=='loading'){ enhanceNav(); enhanceTheme(); } else document.addEventListener('DOMContentLoaded', function(){ enhanceNav(); enhanceTheme(); });
})();
