/* Ad Fontes UI2 */
(function(){ var __css='/* ---- Menú deslizante: translúcido, redondeado, texto claro ---- */\nhtml .drawer{ background:rgba(28,27,24,.75)!important; -webkit-backdrop-filter:blur(18px) saturate(1.2); backdrop-filter:blur(18px) saturate(1.2); border-right:1px solid rgba(255,255,255,.08)!important; border-radius:0 22px 22px 0!important; box-shadow:12px 0 40px rgba(0,0,0,.3)!important; color:#efe7d6!important; }\nhtml .drawer .drawer-head{ border-bottom:1px solid rgba(255,255,255,.08)!important; }\nhtml .drawer .drawer-head, html .drawer .drawer-head *{ color:#efe7d6!important; }\nhtml .drawer .drawer-head small{ color:var(--gold-light,#c79a3e)!important; }\nhtml .drawer-nav a{ color:#e9e1d2!important; display:flex!important; align-items:center; gap:.85rem; padding:.72rem .7rem; border-radius:12px; }\nhtml .drawer-nav a:hover{ background:rgba(255,255,255,.08)!important; color:#fff!important; }\nhtml .drawer a .ic{ width:21px; height:21px; display:inline-flex!important; align-items:center; justify-content:center; color:var(--gold-light,#c79a3e)!important; font-size:0!important; flex:0 0 auto; }\nhtml .drawer a .ic svg{ width:21px!important; height:21px!important; display:block; }\nhtml .drawer .drawer-foot{ border-top:1px solid rgba(255,255,255,.08)!important; color:rgba(239,231,214,.5)!important; }\n/* zona secundaria (Instalar / Sugerencias) abajo */\n#af-sec2{ margin-top:auto; padding-top:.5rem; border-top:1px solid rgba(255,255,255,.08); }\n#af-sec2 a{ color:#cbc2b0!important; font-size:.9rem; display:flex!important; align-items:center; gap:.85rem; padding:.6rem .7rem; border-radius:12px; }\n#af-sec2 a:hover{ background:rgba(255,255,255,.06)!important; }\n#af-sec2 a .ic{ color:#b3a991!important; }\nhtml .drawer-nav a.af-hoy{ color:var(--gold-light,#c79a3e)!important; font-weight:700!important; }\nhtml .drawer-nav a.af-hoy .ic{ color:var(--gold-light,#c79a3e)!important; }\n\n/* ===== Paletas de tema (Color x Estilo) ===== */\nhtml[data-theme="light"][data-tone="oro"]{ --paper:#f3eee2!important; --card:#faf6ec!important; --ink:#1a1a1a!important; --ink2:#413b30!important; --soft:#8a7d61!important; --faint:#a99a78!important; --gold:#b0842f!important; --gold-light:#c89b5a!important; --line:#e3d9c4!important; --line2:#d8ccb2!important; }\nhtml[data-theme="light"][data-tone="verde"]{ --paper:#f1efe6!important; --card:#fbfaf4!important; --ink:#14201f!important; --ink2:#2f433f!important; --soft:#6f8079!important; --faint:#9aa39c!important; --gold:#2e5b5b!important; --gold-light:#3a7070!important; --line:#dde3dd!important; --line2:#d0d8d0!important; }\nhtml[data-theme="dark"][data-tone="azul"]{ --paper:#0e2433!important; --card:#152f40!important; --ink:#e6dcc8!important; --ink2:#c3bca9!important; --soft:#8a95a0!important; --faint:#6f7d88!important; --gold:#c89b5a!important; --gold-light:#dcb06e!important; --line:#24415a!important; --line2:#2f4f6a!important; }\nhtml[data-theme="dark"][data-tone="carbon"]{ --paper:#1a1a1a!important; --card:#2e343a!important; --ink:#e7e2d9!important; --ink2:#cfcabf!important; --soft:#9a9ea1!important; --faint:#7e8285!important; --gold:#c89b5c!important; --gold-light:#dcb06e!important; --line:#3a4249!important; --line2:#454e56!important; }\n\n/* ===== Selector de tema (2 niveles) ===== */\n#thememenu .tp-hd{ font-family:\'Inter\',sans-serif; font-size:.64rem; letter-spacing:.14em; text-transform:uppercase; color:var(--soft,#8a7f68); font-weight:700; margin:.5rem 0 .5rem; }\n#thememenu .tp-hd:first-child{ margin-top:.1rem; }\n#thememenu .tp-seg{ display:flex; gap:.45rem; margin-bottom:.3rem; }\n#thememenu .tp-seg button{ flex:1; display:flex!important; align-items:center; justify-content:center; gap:.45rem; padding:.55rem; border:1px solid var(--line,#ece2cc)!important; background:transparent; color:var(--ink,#1c1c1c); border-radius:11px; font-family:\'Inter\',sans-serif; font-size:.9rem; font-weight:600; cursor:pointer; text-align:center!important; }\n#thememenu .tp-seg button .dot{ width:14px; height:14px; border-radius:50%; border:1px solid rgba(128,128,128,.4); flex:0 0 auto; }\n#thememenu .tp-seg button.on{ background:var(--gold,#b0842f)!important; color:#fff!important; border-color:var(--gold,#b0842f)!important; }\n#thememenu .tp-est{ display:flex; flex-direction:column; gap:.5rem; }\n#thememenu .tp-e{ display:block!important; width:100%; text-align:left!important; border:1px solid var(--line,#ece2cc)!important; background:transparent; border-radius:12px; padding:.6rem .7rem; cursor:pointer; font-family:\'Inter\',sans-serif; }\n#thememenu .tp-e:hover{ border-color:var(--gold,#b0842f)!important; }\n#thememenu .tp-e.on{ border-color:var(--gold,#b0842f)!important; box-shadow:inset 0 0 0 1.5px var(--gold,#b0842f); }\n#thememenu .tp-e .tnm{ font-family:Georgia,serif; font-weight:600; font-size:.92rem; color:var(--ink,#1c1c1c); }\n#thememenu .tp-e .tds{ font-size:.68rem; color:var(--soft,#8a7f68); margin:.12rem 0 .45rem; }\n#thememenu .tp-e .tmini{ display:flex; height:16px; border-radius:5px; overflow:hidden; border:1px solid rgba(128,128,128,.25); }\n#thememenu .tp-e .tmini i{ flex:1; }\n\n/* fuente de lectura */\n.af-fontsec{ margin-top:.9rem; padding-top:.6rem; border-top:1px solid var(--line,#ece2cc); }\n.af-fontsec .hd{ font-family:\'Inter\',sans-serif; font-size:.64rem; letter-spacing:.14em; text-transform:uppercase; color:var(--soft,#8a7f68); margin:.1rem 0 .45rem; padding:0 .1rem; font-weight:700; }\n.af-font{ display:flex!important; align-items:center; gap:.55rem; width:100%; border:none; background:none; cursor:pointer; padding:.5rem .55rem!important; border-radius:10px; color:var(--ink,#1c1c1c); font-family:\'Inter\',sans-serif; font-size:.82rem; }\n.af-font:hover{ background:var(--line,#ece2cc); }\n.af-font .af-fd{ width:34px; font-size:1.1rem; color:var(--ink,#1c1c1c); flex:0 0 auto; }\n.af-font.on{ color:var(--gold,#b0842f); }\n.af-font.on .af-fd{ color:var(--gold,#b0842f); }\n\n/* ---- Fuente de lectura aplicada ---- */\nhtml[data-font="sans"] p, html[data-font="sans"] li, html[data-font="sans"] blockquote{ font-family:\'Inter\',system-ui,sans-serif!important; }\nhtml[data-font="leg"]  p, html[data-font="leg"]  li, html[data-font="leg"]  blockquote{ font-family:\'Trebuchet MS\',\'Segoe UI\',Verdana,sans-serif!important; }\n\n/* ---- Tamaño del texto ---- */\n.af-sizesec{ margin-top:.7rem; padding-top:.6rem; border-top:1px solid var(--line,#ece2cc); }\n.af-sizesec .hd{ font-family:\'Inter\',sans-serif; font-size:.64rem; letter-spacing:.14em; text-transform:uppercase; color:var(--soft,#8a7f68); margin:.1rem 0 .45rem; padding:0 .1rem; font-weight:700; }\n.af-sizes{ display:flex; gap:.4rem; }\n.af-sz{ flex:1; border:1px solid var(--line,#ece2cc)!important; background:transparent; color:var(--ink,#1c1c1c); border-radius:10px; padding:.35rem .2rem; cursor:pointer; font-family:Georgia,serif; line-height:1; display:flex!important; align-items:center; justify-content:center; }\n.af-sz:hover{ border-color:var(--gold,#b0842f)!important; }\n.af-sz.on{ border-color:var(--gold,#b0842f)!important; color:var(--gold,#b0842f); box-shadow:inset 0 0 0 1.5px var(--gold,#b0842f); }\nhtml[data-size="sm"] p, html[data-size="sm"] li, html[data-size="sm"] blockquote{ font-size:.96rem!important; line-height:1.62!important; }\nhtml[data-size="lg"] p, html[data-size="lg"] li, html[data-size="lg"] blockquote{ font-size:1.2rem!important; line-height:1.78!important; }\nhtml[data-size="xl"] p, html[data-size="xl"] li, html[data-size="xl"] blockquote{ font-size:1.4rem!important; line-height:1.82!important; }\n\n/* ---- Modal de planes: nubecita translúcida ---- */\n.pm-ov{ background:rgba(10,10,12,.40)!important; -webkit-backdrop-filter:blur(4px); backdrop-filter:blur(4px); }\n.pm-card{ background:rgba(249,244,234,.55)!important; -webkit-backdrop-filter:blur(30px) saturate(1.4); backdrop-filter:blur(30px) saturate(1.4); border:1px solid rgba(255,255,255,.6)!important; border-radius:24px!important; box-shadow:0 24px 70px rgba(0,0,0,.30)!important; }\nhtml[data-theme="dark"] .pm-card{ background:rgba(32,29,23,.50)!important; border:1px solid rgba(255,255,255,.14)!important; box-shadow:0 24px 70px rgba(0,0,0,.5)!important; }\n\n/* ---- Configurador de plan personalizado en oscuro ---- */\nhtml[data-theme="dark"] #vCfg{ color:var(--ink)!important; }\nhtml[data-theme="dark"] #vCfg .opt{ background:var(--card)!important; color:var(--ink2)!important; border:1px solid var(--line2)!important; }\nhtml[data-theme="dark"] #vCfg .opt.on{ background:var(--gold)!important; color:#17130c!important; border-color:var(--gold)!important; }\nhtml[data-theme="dark"] #vCfg .opt.dis{ background:var(--card)!important; color:var(--faint)!important; }\nhtml[data-theme="dark"] #vCfg .btn{ background:var(--gold)!important; color:#17130c!important; }';
 var s=document.getElementById('af-ui2'); if(!s){ s=document.createElement('style'); s.id='af-ui2'; s.textContent=__css; (document.head||document.documentElement).appendChild(s); }
})();
(function(){
  function normTheme(){
    var t={}; try{ t=JSON.parse(localStorage.getItem('af_tema')||'{}')||{}; }catch(e){}
    var mode=(t.mode==='dark'||t.mode==='oscuro')?'dark':'light';
    var valid=mode==='dark'?['azul','carbon']:['oro','verde'];
    var tone=(valid.indexOf(t.tone)>=0)?t.tone:valid[0];
    var h=document.documentElement;
    h.setAttribute('data-theme',mode); h.setAttribute('data-tone',tone);
    try{ localStorage.setItem('af_tema',JSON.stringify({mode:mode,tone:tone})); }catch(e){}
  }
  normTheme();

  var ESTILOS={
    light:[
      { id:'oro',   nm:'Pergamino y Oro', ds:'Pureza · Gracia · Cristo', cols:['#f3eee2','#faf6ec','#c89b5a','#8b5a3c','#1a1a1a'] },
      { id:'verde', nm:'Lino y Verde',    ds:'Esperanza · Nuevo Pacto',   cols:['#f1efe6','#fbfaf4','#2e5b5b','#c89b5a','#14201f'] }
    ],
    dark:[
      { id:'azul',   nm:'Azul Profundo y Oro', ds:'Dios · Su Palabra · Cristo',      cols:['#0e2433','#152f40','#c89b5a','#2e5b5b','#e6dcc8'] },
      { id:'carbon', nm:'Carbón y Ámbar',      ds:'Serenidad · Contraste · Reposo', cols:['#1a1a1a','#2e343a','#6b6f72','#c89b5c','#3a5a6b','#e7e2d9'] }
    ]
  };
  function curTheme(){ return document.documentElement.getAttribute('data-theme')==='dark'?'dark':'light'; }
  function curTone(){ return document.documentElement.getAttribute('data-tone')||ESTILOS[curTheme()][0].id; }
  function setTheme(mode,tone){
    var valid=ESTILOS[mode].map(function(e){return e.id;});
    if(valid.indexOf(tone)<0) tone=valid[0];
    var h=document.documentElement; h.setAttribute('data-theme',mode); h.setAttribute('data-tone',tone);
    try{ localStorage.setItem('af_tema',JSON.stringify({mode:mode,tone:tone})); }catch(e){}
    renderPicker();
  }
  window.setTema=function(mode,tone){ var m=(mode==='dark'||mode==='oscuro')?'dark':'light'; setTheme(m,tone); };

  function buildPicker(){
    var tm=document.getElementById('thememenu'); if(!tm || tm.__ui2p) return;
    tm.__ui2p=1; tm.innerHTML='';
    var hd1=document.createElement('div'); hd1.className='tp-hd'; hd1.textContent='Color';
    var seg=document.createElement('div'); seg.className='tp-seg';
    seg.innerHTML='<button data-mode="light"><span class="dot" style="background:#f3eee2"></span>Claro</button>'
                 +'<button data-mode="dark"><span class="dot" style="background:#0e2433"></span>Oscuro</button>';
    seg.addEventListener('click',function(ev){ var b=ev.target.closest('button'); if(!b)return; setTheme(b.getAttribute('data-mode'), ESTILOS[b.getAttribute('data-mode')][0].id); });
    var hd2=document.createElement('div'); hd2.className='tp-hd'; hd2.textContent='Estilo';
    var est=document.createElement('div'); est.className='tp-est'; est.id='tp-est';
    tm.appendChild(hd1); tm.appendChild(seg); tm.appendChild(hd2); tm.appendChild(est);
    var fs=document.createElement('div'); fs.className='af-fontsec';
    fs.innerHTML='<div class="hd">Fuente de lectura</div>'
      +'<button class="af-font" data-f="serif"><span class="af-fd" style="font-family:Georgia,serif">Abcg</span> Serif clásica</button>'
      +'<button class="af-font" data-f="sans"><span class="af-fd" style="font-family:Inter,sans-serif">Abcg</span> Moderna</button>'
      +'<button class="af-font" data-f="leg"><span class="af-fd" style="font-family:Trebuchet MS,sans-serif">Abcg</span> Alta legibilidad</button>';
    fs.querySelectorAll('.af-font').forEach(function(b){ b.addEventListener('click',function(){ setFont(b.getAttribute('data-f')); }); });
    tm.appendChild(fs);
    /* selector de tamaño */
    var ss=document.createElement('div'); ss.className='af-sizesec';
    ss.innerHTML='<div class="hd">Tamaño del texto</div><div class="af-sizes">'
      +'<button class="af-sz" data-s="sm" style="font-size:.8rem">A</button>'
      +'<button class="af-sz" data-s="md" style="font-size:1rem">A</button>'
      +'<button class="af-sz" data-s="lg" style="font-size:1.3rem">A</button>'
      +'<button class="af-sz" data-s="xl" style="font-size:1.6rem">A</button></div>';
    ss.querySelectorAll('.af-sz').forEach(function(b){ b.addEventListener('click',function(){ setSize(b.getAttribute('data-s')); }); });
    tm.appendChild(ss);
    renderPicker();
  }
  function renderPicker(){
    var tm=document.getElementById('thememenu'); if(!tm||!tm.__ui2p) return;
    var mode=curTheme(), tone=curTone();
    tm.querySelectorAll('.tp-seg button').forEach(function(b){ b.classList.toggle('on', b.getAttribute('data-mode')===mode); });
    var est=document.getElementById('tp-est'); if(!est) return;
    est.innerHTML='';
    ESTILOS[mode].forEach(function(e){
      var b=document.createElement('button'); b.className='tp-e'+(e.id===tone?' on':'');
      var mini='<div class="tmini">'+e.cols.map(function(c){return '<i style="background:'+c+'"></i>';}).join('')+'</div>';
      b.innerHTML='<div class="tnm">'+e.nm+'</div><div class="tds">'+e.ds+'</div>'+mini;
      b.addEventListener('click',function(){ setTheme(mode, e.id); });
      est.appendChild(b);
    });
    markFonts(); markSize();
  }
  function setFont(f){ try{ localStorage.setItem('af_fuente',f); }catch(e){} if(f==='serif') document.documentElement.removeAttribute('data-font'); else document.documentElement.setAttribute('data-font',f); markFonts(); }
  function markFonts(){ var f=(function(){ try{return localStorage.getItem('af_fuente')||'serif';}catch(e){return 'serif';} })(); document.querySelectorAll('.af-font').forEach(function(b){ b.classList.toggle('on', b.getAttribute('data-f')===f); }); }
  try{ var f0=localStorage.getItem('af_fuente'); if(f0 && f0!=='serif') document.documentElement.setAttribute('data-font',f0); }catch(e){}

  /* ===== Tamaño del texto ===== */
  function setSize(s){ try{ localStorage.setItem('af_size',s); }catch(e){} if(s==='md') document.documentElement.removeAttribute('data-size'); else document.documentElement.setAttribute('data-size',s); markSize(); }
  function markSize(){ var s=(function(){ try{return localStorage.getItem('af_size')||'md';}catch(e){return 'md';} })(); document.querySelectorAll('.af-sz').forEach(function(b){ b.classList.toggle('on', b.getAttribute('data-s')===s); }); }
  try{ var s0=localStorage.getItem('af_size'); if(s0 && s0!=='md') document.documentElement.setAttribute('data-size',s0); }catch(e){}

  /* ===== Íconos de línea en el menú + zona secundaria ===== */
  var W='viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"';
  var IC={
    'index.html':'<svg '+W+'><path d="M3 9.5 12 3l9 6.5"/><path d="M5 10v10h14V10"/></svg>',
    'biblioteca.html':'<svg '+W+'><path d="M2 4h7a3 3 0 0 1 3 3v13a2.5 2.5 0 0 0-2.5-2.5H2z"/><path d="M22 4h-7a3 3 0 0 0-3 3v13a2.5 2.5 0 0 1 2.5-2.5H22z"/></svg>',
    'estudios.html':'<svg '+W+'><path d="M12 2 2 7l10 5 10-5-10-5z"/><path d="m2 17 10 5 10-5"/><path d="m2 12 10 5 10-5"/></svg>',
    'notas.html':'<svg '+W+'><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/></svg>',
    'comunidad.html':'<svg '+W+'><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4L3 21l1.1-3.2A8.4 8.4 0 1 1 21 11.5z"/></svg>',
    'sugerencias.html':'<svg '+W+'><path d="M22 12h-6l-2 3h-4l-2-3H2"/><path d="M5.5 5.5 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.5-6.5a2 2 0 0 0-1.8-1H7.3a2 2 0 0 0-1.8 1z"/></svg>'
  };
  var INST='<svg '+W+'><path d="M12 15V3"/><path d="m7 8 5-5 5 5"/><path d="M4 14v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4"/></svg>';
  function enhanceNav(){
    var nav=document.querySelector('.drawer-nav'); if(!nav) return; if(!nav.querySelector('.af-hoy')){ var hy=document.createElement('a'); hy.className='af-hoy'; hy.href='biblia.html'; hy.innerHTML='<span class="ic"><svg '+W+'><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg></span>Mi lectura de hoy'; hy.addEventListener('click',function(){ try{ localStorage.setItem('af_ir_hoy','1'); }catch(e){} }); nav.insertBefore(hy, nav.firstChild); }
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

  try{ new MutationObserver(function(){ renderPicker(); markFonts(); }).observe(document.documentElement,{attributes:true,attributeFilter:['data-theme','data-tone']}); }catch(e){}
  var n=0, iv=setInterval(function(){ enhanceNav(); buildPicker(); if(++n>20) clearInterval(iv); },300);
  if(document.readyState!=='loading'){ enhanceNav(); buildPicker(); } else document.addEventListener('DOMContentLoaded', function(){ enhanceNav(); buildPicker(); });
})();
