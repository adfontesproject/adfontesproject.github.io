/* pasajes.js — Lectura "por pasajes" (pericopas)
   Divide cada libro en unidades narrativas/temáticas completas.
   El plan "por pasajes" agrupa estas pericopas a un ritmo, SIN partirlas.
   Depende de VERSOS, ETAPA_LIBRO, AT y NT definidos en planes.js (cargado antes).
   Estado: Génesis codificado (piloto). Resto de libros en progreso por lotes. */

const PASAJES = {
  'Génesis': [
    { t:'La creación de los cielos y la tierra', ac:1, av:1, bc:2, bv:3 },
    { t:'El huerto del Edén', ac:2, av:4, bc:2, bv:25 },
    { t:'La caída', ac:3, av:1, bc:3, bv:24 },
    { t:'Caín y Abel', ac:4, av:1, bc:4, bv:16 },
    { t:'La descendencia de Caín', ac:4, av:17, bc:4, bv:26 },
    { t:'De Adán a Noé', ac:5, av:1, bc:5, bv:32 },
    { t:'La maldad del hombre y el arca', ac:6, av:1, bc:6, bv:22 },
    { t:'El diluvio', ac:7, av:1, bc:7, bv:24 },
    { t:'Las aguas se retiran', ac:8, av:1, bc:8, bv:22 },
    { t:'El pacto con Noé', ac:9, av:1, bc:9, bv:17 },
    { t:'Noé y sus hijos', ac:9, av:18, bc:9, bv:29 },
    { t:'Las naciones de la tierra', ac:10, av:1, bc:10, bv:32 },
    { t:'La torre de Babel', ac:11, av:1, bc:11, bv:9 },
    { t:'De Sem a Abram', ac:11, av:10, bc:11, bv:32 },
    { t:'El llamado de Abram', ac:12, av:1, bc:12, bv:9 },
    { t:'Abram en Egipto', ac:12, av:10, bc:12, bv:20 },
    { t:'Abram y Lot se separan', ac:13, av:1, bc:13, bv:18 },
    { t:'Abram rescata a Lot', ac:14, av:1, bc:14, bv:24 },
    { t:'El pacto de Dios con Abram', ac:15, av:1, bc:15, bv:21 },
    { t:'Agar e Ismael', ac:16, av:1, bc:16, bv:16 },
    { t:'El pacto y la circuncisión', ac:17, av:1, bc:17, bv:27 },
    { t:'La promesa de Isaac en Mamre', ac:18, av:1, bc:18, bv:15 },
    { t:'Abraham intercede por Sodoma', ac:18, av:16, bc:18, bv:33 },
    { t:'La destrucción de Sodoma', ac:19, av:1, bc:19, bv:29 },
    { t:'Lot y sus hijas', ac:19, av:30, bc:19, bv:38 },
    { t:'Abraham y Abimelec', ac:20, av:1, bc:20, bv:18 },
    { t:'El nacimiento de Isaac', ac:21, av:1, bc:21, bv:21 },
    { t:'El pacto con Abimelec', ac:21, av:22, bc:21, bv:34 },
    { t:'El sacrificio de Isaac', ac:22, av:1, bc:22, bv:19 },
    { t:'La descendencia de Nacor', ac:22, av:20, bc:22, bv:24 },
    { t:'Muerte y sepultura de Sara', ac:23, av:1, bc:23, bv:20 },
    { t:'Una esposa para Isaac', ac:24, av:1, bc:24, bv:67 },
    { t:'La descendencia de Abraham; su muerte', ac:25, av:1, bc:25, bv:18 },
    { t:'Jacob y Esaú', ac:25, av:19, bc:25, bv:34 },
    { t:'Isaac y Abimelec', ac:26, av:1, bc:26, bv:35 },
    { t:'Jacob recibe la bendición', ac:27, av:1, bc:27, bv:46 },
    { t:'La escalera de Jacob en Betel', ac:28, av:1, bc:28, bv:22 },
    { t:'Jacob, Lea y Raquel', ac:29, av:1, bc:29, bv:30 },
    { t:'Los hijos de Jacob', ac:29, av:31, bc:30, bv:24 },
    { t:'Jacob prospera', ac:30, av:25, bc:30, bv:43 },
    { t:'Jacob huye de Labán', ac:31, av:1, bc:31, bv:55 },
    { t:'Jacob se prepara para encontrar a Esaú', ac:32, av:1, bc:32, bv:21 },
    { t:'Jacob lucha con Dios en Peniel', ac:32, av:22, bc:32, bv:32 },
    { t:'Jacob y Esaú se reconcilian', ac:33, av:1, bc:33, bv:20 },
    { t:'Dina y Siquem', ac:34, av:1, bc:34, bv:31 },
    { t:'Dios bendice a Jacob en Betel', ac:35, av:1, bc:35, bv:29 },
    { t:'La descendencia de Esaú', ac:36, av:1, bc:36, bv:43 },
    { t:'José y sus sueños', ac:37, av:1, bc:37, bv:36 },
    { t:'Judá y Tamar', ac:38, av:1, bc:38, bv:30 },
    { t:'José en casa de Potifar', ac:39, av:1, bc:39, bv:23 },
    { t:'El copero y el panadero', ac:40, av:1, bc:40, bv:23 },
    { t:'Los sueños de Faraón', ac:41, av:1, bc:41, bv:57 },
    { t:'Los hermanos de José viajan a Egipto', ac:42, av:1, bc:42, bv:38 },
    { t:'El segundo viaje a Egipto', ac:43, av:1, bc:43, bv:34 },
    { t:'La copa de José', ac:44, av:1, bc:44, bv:34 },
    { t:'José se da a conocer', ac:45, av:1, bc:45, bv:28 },
    { t:'Jacob baja a Egipto', ac:46, av:1, bc:46, bv:34 },
    { t:'Jacob y los suyos ante Faraón', ac:47, av:1, bc:47, bv:31 },
    { t:'Jacob bendice a Efraín y Manasés', ac:48, av:1, bc:48, bv:22 },
    { t:'Jacob bendice a sus hijos', ac:49, av:1, bc:49, bv:28 },
    { t:'La muerte de Jacob', ac:49, av:29, bc:50, bv:14 },
    { t:'José consuela a sus hermanos; su muerte', ac:50, av:15, bc:50, bv:26 }
  ]
};

/* ---- Utilidades de pericopas (usan VERSOS de planes.js) ---- */
function _vcap(b){ return (typeof VERSOS!=='undefined' && VERSOS[b]) ? VERSOS[b].split(',').map(Number) : []; }

function versosPericopa(p){
  const a=_vcap(p.b); if(!a.length) return 0; let v=0;
  for(let c=p.ac;c<=p.bc;c++){ const ini=(c===p.ac)?p.av:1; const fin=(c===p.bc)?p.bv:a[c-1]; v+=(fin-ini+1); }
  return v;
}

function refPericopa(p){
  return p.b+' '+(p.ac===p.bc ? p.ac+':'+p.av+'-'+p.bv : p.ac+':'+p.av+'-'+p.bc+':'+p.bv);
}

/* Libros que YA tienen pericopas codificadas, en orden canónico */
function librosConPasajes(){
  const orden=(typeof AT!=='undefined'?AT:[]).concat(typeof NT!=='undefined'?NT:[]);
  return orden.filter(b=>PASAJES[b] && PASAJES[b].length);
}

/* Agrupa pericopas a un ritmo (sin partirlas) para alcanzar ~dias jornadas.
   Asignación por fracción acumulada de versículos: respeta la meta de días. */
function agruparPasajes(libros, dias){
  const seq=[]; libros.forEach(b=>{ (PASAJES[b]||[]).forEach(p=>seq.push(Object.assign({}, p, {b:b}))); });
  if(!seq.length) return [];
  const sizes=seq.map(versosPericopa); const total=sizes.reduce((a,b)=>a+b,0)||1;
  const dayOf=[]; let cum=0;
  for(let i=0;i<seq.length;i++){ cum+=sizes[i]; let d=Math.ceil(cum/total*dias); if(d<1)d=1; if(d>dias)d=dias; dayOf[i]=d; }
  for(let i=1;i<dayOf.length;i++) if(dayOf[i]<dayOf[i-1]) dayOf[i]=dayOf[i-1];
  const buckets={}; for(let i=0;i<seq.length;i++){ (buckets[dayOf[i]]=buckets[dayOf[i]]||[]).push(seq[i]); }
  const out=[];
  Object.keys(buckets).map(Number).sort((a,b)=>a-b).forEach(d=>{
    const buf=buckets[d];
    out.push({
      d: out.length+1,
      etapa: (typeof ETAPA_LIBRO!=='undefined' && ETAPA_LIBRO[buf[0].b]) ? ETAPA_LIBRO[buf[0].b] : '',
      lecturas: buf.map(refPericopa),
      titulos: buf.map(x=>x.t)
    });
  });
  return out;
}

/* Configuración del plan "por pasajes" (duración, guardada por el configurador) */
function pasajesConfig(){
  try { return JSON.parse(localStorage.getItem('af_pas_plan')||'null') || {dias:912}; }
  catch(e){ return {dias:912}; }
}

/* Generador del plan por pasajes, sobre los libros ya codificados */
function planPasajes(){
  const cfg=pasajesConfig();
  return agruparPasajes(librosConPasajes(), cfg.dias||912);
}
