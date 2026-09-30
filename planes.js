/* ============================================================
   Ad Fontes Project — Planes de lectura
   El plan cronológico (365 días) vive en plan.js como PLAN.
   Aquí se generan los planes adicionales y el registro común.
   ============================================================ */

const CAPS = {
  'Génesis':50,'Éxodo':40,'Levítico':27,'Números':36,'Deuteronomio':34,'Josué':24,'Jueces':21,'Rut':4,
  '1 Samuel':31,'2 Samuel':24,'1 Reyes':22,'2 Reyes':25,'1 Crónicas':29,'2 Crónicas':36,'Esdras':10,
  'Nehemías':13,'Ester':10,'Job':42,'Salmos':150,'Proverbios':31,'Eclesiastés':12,'Cantares':8,
  'Isaías':66,'Jeremías':52,'Lamentaciones':5,'Ezequiel':48,'Daniel':12,'Oseas':14,'Joel':3,'Amós':9,
  'Abdías':1,'Jonás':4,'Miqueas':7,'Nahúm':3,'Habacuc':3,'Sofonías':3,'Hageo':2,'Zacarías':14,'Malaquías':4,
  'Mateo':28,'Marcos':16,'Lucas':24,'Juan':21,'Hechos':28,'Romanos':16,'1 Corintios':16,'2 Corintios':13,
  'Gálatas':6,'Efesios':6,'Filipenses':4,'Colosenses':4,'1 Tesalonicenses':5,'2 Tesalonicenses':3,
  '1 Timoteo':6,'2 Timoteo':4,'Tito':3,'Filemón':1,'Hebreos':13,'Santiago':5,'1 Pedro':5,'2 Pedro':3,
  '1 Juan':5,'2 Juan':1,'3 Juan':1,'Judas':1,'Apocalipsis':22
};

/* Versículos por capítulo — validado (31.102 en total) */
const VERSOS = {
'Génesis':'31,25,24,26,32,22,24,22,29,32,32,20,18,24,21,16,27,33,38,18,34,24,20,67,34,35,46,22,35,43,55,32,20,31,29,43,36,30,23,23,57,38,34,34,28,34,31,22,33,26',
'Éxodo':'22,25,22,31,23,30,25,32,35,29,10,51,22,31,27,36,16,27,25,26,36,31,33,18,40,37,21,43,46,38,18,35,23,35,35,38,29,31,43,38',
'Levítico':'17,16,17,35,19,30,38,36,24,20,47,8,59,57,33,34,16,30,37,27,24,33,44,23,55,46,34',
'Números':'54,34,51,49,31,27,89,26,23,36,35,16,33,45,41,50,13,32,22,29,35,41,30,25,18,65,23,31,40,16,54,42,56,29,34,13',
'Deuteronomio':'46,37,29,49,33,25,26,20,29,22,32,32,18,29,23,22,20,22,21,20,23,30,25,22,19,19,26,68,29,20,30,52,29,12',
'Josué':'18,24,17,24,15,27,26,35,27,43,23,24,33,15,63,10,18,28,51,9,45,34,16,33',
'Jueces':'36,23,31,24,31,40,25,35,57,18,40,15,25,20,20,31,13,31,30,48,25',
'Rut':'22,23,18,22',
'1 Samuel':'28,36,21,22,12,21,17,22,27,27,15,25,23,52,35,23,58,30,24,42,15,23,29,22,44,25,12,25,11,31,13',
'2 Samuel':'27,32,39,12,25,23,29,18,13,19,27,31,39,33,37,23,29,33,43,26,22,51,39,25',
'1 Reyes':'53,46,28,34,18,38,51,66,28,29,43,33,34,31,34,34,24,46,21,43,29,53',
'2 Reyes':'18,25,27,44,27,33,20,29,37,36,21,21,25,29,38,20,41,37,37,21,26,20,37,20,30',
'1 Crónicas':'54,55,24,43,26,81,40,40,44,14,47,40,14,17,29,43,27,17,19,8,30,19,32,31,31,32,34,21,30',
'2 Crónicas':'17,18,17,22,14,42,22,18,31,19,23,16,22,15,19,14,19,34,11,37,20,12,21,27,28,23,9,27,36,27,21,33,25,33,27,23',
'Esdras':'11,70,13,24,17,22,28,36,15,44',
'Nehemías':'11,20,32,23,19,19,73,18,38,39,36,47,31',
'Ester':'22,23,15,17,14,14,10,17,32,3',
'Job':'22,13,26,21,27,30,21,22,35,22,20,25,28,22,35,22,16,21,29,29,34,30,17,25,6,14,23,28,25,31,40,22,33,37,16,33,24,41,30,24,34,17',
'Salmos':'6,12,8,8,12,10,17,9,20,18,7,8,6,7,5,11,15,50,14,9,13,31,6,10,22,12,14,9,11,12,24,11,22,22,28,12,40,22,13,17,13,11,5,26,17,11,9,14,20,23,19,9,6,7,23,13,11,11,17,12,8,12,11,10,13,20,7,35,36,5,24,20,28,23,10,12,20,72,13,19,16,8,18,12,13,17,7,18,52,17,16,15,5,23,11,13,12,9,9,5,8,28,22,35,45,48,43,13,31,7,10,10,9,8,18,19,2,29,176,7,8,9,4,8,5,6,5,6,8,8,3,18,3,3,21,26,9,8,24,13,10,7,12,15,21,10,20,14,9,6',
'Proverbios':'33,22,35,27,23,35,27,36,18,32,31,28,25,35,33,33,28,24,29,30,31,29,35,34,28,28,27,28,27,33,31',
'Eclesiastés':'18,26,22,16,20,12,29,17,18,20,10,14',
'Cantares':'17,17,11,16,16,13,13,14',
'Isaías':'31,22,26,6,30,13,25,22,21,34,16,6,22,32,9,14,14,7,25,6,17,25,18,23,12,21,13,29,24,33,9,20,24,17,10,22,38,22,8,31,29,25,28,28,25,13,15,22,26,11,23,15,12,17,13,12,21,14,21,22,11,12,19,12,25,24',
'Jeremías':'19,37,25,31,31,30,34,22,26,25,23,17,27,22,21,21,27,23,15,18,14,30,40,10,38,24,22,17,32,24,40,44,26,22,19,32,21,28,18,16,18,22,13,30,5,28,7,47,39,46,64,34',
'Lamentaciones':'22,22,66,22,22',
'Ezequiel':'28,10,27,17,17,14,27,18,11,22,25,28,23,23,8,63,24,32,14,49,32,31,49,27,17,21,36,26,21,26,18,32,33,31,15,38,28,23,29,49,26,20,27,31,25,24,23,35',
'Daniel':'21,49,30,37,31,28,28,27,27,21,45,13',
'Oseas':'11,23,5,19,15,11,16,14,17,15,12,14,16,9',
'Joel':'20,32,21','Amós':'15,16,15,13,27,14,17,14,15','Abdías':'21','Jonás':'17,10,10,11',
'Miqueas':'16,13,12,13,15,16,20','Nahúm':'15,13,19','Habacuc':'17,20,19','Sofonías':'18,15,20','Hageo':'15,23',
'Zacarías':'21,13,10,14,11,15,14,23,17,12,17,14,9,21','Malaquías':'14,17,18,6',
'Mateo':'25,23,17,25,48,34,29,34,38,42,30,50,58,36,39,28,27,35,30,34,46,46,39,51,46,75,66,20',
'Marcos':'45,28,35,41,43,56,37,38,50,52,33,44,37,72,47,20',
'Lucas':'80,52,38,44,39,49,50,56,62,42,54,59,35,35,32,31,37,43,48,47,38,71,56,53',
'Juan':'51,25,36,54,47,71,53,59,41,42,57,50,38,31,27,33,26,40,42,31,25',
'Hechos':'26,47,26,37,42,15,60,40,43,48,30,25,52,28,41,40,34,28,41,38,40,30,35,27,27,32,44,31',
'Romanos':'32,29,31,25,21,23,25,39,33,21,36,21,14,23,33,27',
'1 Corintios':'31,16,23,21,13,20,40,13,27,33,34,31,13,40,58,24',
'2 Corintios':'24,17,18,18,21,18,16,24,15,18,33,21,14',
'Gálatas':'24,21,29,31,26,18','Efesios':'23,22,21,32,33,24','Filipenses':'30,30,21,23','Colosenses':'29,23,25,18',
'1 Tesalonicenses':'10,20,13,18,28','2 Tesalonicenses':'12,17,18','1 Timoteo':'20,15,16,16,25,21','2 Timoteo':'18,26,17,22',
'Tito':'16,15,15','Filemón':'25','Hebreos':'14,18,19,16,14,20,28,13,28,39,40,29,25','Santiago':'27,26,18,17,20',
'1 Pedro':'25,25,22,19,14','2 Pedro':'21,22,18','1 Juan':'10,29,24,21,21','2 Juan':'13','3 Juan':'14','Judas':'25',
'Apocalipsis':'20,29,22,11,14,17,17,13,21,11,19,17,18,20,8,21,18,24,21,15,27,21'
};

/* Etapas por libro — dan sentido narrativo a cada día */
const ETAPA_LIBRO = {
  'Génesis':'Los orígenes y los patriarcas','Éxodo':'Redención y pacto en el Sinaí',
  'Levítico':'La santidad y el sacrificio','Números':'El desierto y la prueba',
  'Deuteronomio':'La renovación del pacto','Josué':'La conquista de la tierra','Jueces':'Cuando no había rey',
  'Rut':'Cuando no había rey','1 Samuel':'El reino se levanta','2 Samuel':'El pacto con David',
  '1 Reyes':'Gloria y división del reino','2 Reyes':'El juicio y el exilio',
  '1 Crónicas':'La historia vista desde el templo','2 Crónicas':'La historia vista desde el templo',
  'Esdras':'El regreso del exilio','Nehemías':'El regreso del exilio','Ester':'La providencia escondida',
  'Job':'Sabiduría en el sufrimiento','Salmos':'El corazón orando la Escritura','Proverbios':'La sabiduría que teme a Dios',
  'Eclesiastés':'La vanidad bajo el sol','Cantares':'El amor del pacto',
  'Isaías':'El Siervo y el consuelo','Jeremías':'El nuevo pacto anunciado','Lamentaciones':'El llanto sobre Sion',
  'Ezequiel':'La gloria que vuelve','Daniel':'El reino que no será destruido',
  'Oseas':'Los profetas menores','Joel':'Los profetas menores','Amós':'Los profetas menores',
  'Abdías':'Los profetas menores','Jonás':'Los profetas menores','Miqueas':'Los profetas menores',
  'Nahúm':'Los profetas menores','Habacuc':'Los profetas menores','Sofonías':'Los profetas menores',
  'Hageo':'Los profetas menores','Zacarías':'Los profetas menores','Malaquías':'Los profetas menores',
  'Mateo':'El Rey prometido','Marcos':'El Siervo que sirve','Lucas':'El Hijo del Hombre',
  'Juan':'El Verbo hecho carne','Hechos':'La iglesia y el Espíritu',
  'Romanos':'El evangelio explicado','1 Corintios':'Cartas a las iglesias','2 Corintios':'Cartas a las iglesias',
  'Gálatas':'Cartas a las iglesias','Efesios':'Cartas de la prisión','Filipenses':'Cartas de la prisión',
  'Colosenses':'Cartas de la prisión','1 Tesalonicenses':'Cartas a las iglesias','2 Tesalonicenses':'Cartas a las iglesias',
  '1 Timoteo':'Cartas pastorales','2 Timoteo':'Cartas pastorales','Tito':'Cartas pastorales','Filemón':'Cartas de la prisión',
  'Hebreos':'El mejor pacto','Santiago':'Cartas generales','1 Pedro':'Cartas generales','2 Pedro':'Cartas generales',
  '1 Juan':'Cartas generales','2 Juan':'Cartas generales','3 Juan':'Cartas generales','Judas':'Cartas generales',
  'Apocalipsis':'La consumación'
};

/* Reparte una lista de libros en N días, agrupando capítulos consecutivos */
function repartir(libros, dias){
  const uni = [];
  libros.forEach(b => { for(let c = 1; c <= CAPS[b]; c++) uni.push([b, c]); });
  const total = uni.length, out = [];
  let i = 0;
  for(let d = 1; d <= dias; d++){
    const fin = Math.round(total * d / dias);
    const bloque = uni.slice(i, fin);
    i = fin;
    /* agrupar por libro y comprimir rangos */
    const lect = [];
    bloque.forEach(([b, c]) => {
      const u = lect[lect.length - 1];
      if(u && u.b === b && u.f === c - 1) u.f = c;
      else lect.push({ b: b, i: c, f: c });
    });
    out.push({
      d: d,
      etapa: ETAPA_LIBRO[bloque.length ? bloque[0][0] : 'Génesis'] || '',
      lecturas: lect.map(x => x.b + ' ' + (x.i === x.f ? x.i : x.i + '-' + x.f))
    });
  }
  return out;
}

const AT = ['Génesis','Éxodo','Levítico','Números','Deuteronomio','Josué','Jueces','Rut','1 Samuel','2 Samuel','1 Reyes','2 Reyes','1 Crónicas','2 Crónicas','Esdras','Nehemías','Ester','Job','Salmos','Proverbios','Eclesiastés','Cantares','Isaías','Jeremías','Lamentaciones','Ezequiel','Daniel','Oseas','Joel','Amós','Abdías','Jonás','Miqueas','Nahúm','Habacuc','Sofonías','Hageo','Zacarías','Malaquías'];
const NT = ['Mateo','Marcos','Lucas','Juan','Hechos','Romanos','1 Corintios','2 Corintios','Gálatas','Efesios','Filipenses','Colosenses','1 Tesalonicenses','2 Tesalonicenses','1 Timoteo','2 Timoteo','Tito','Filemón','Hebreos','Santiago','1 Pedro','2 Pedro','1 Juan','2 Juan','3 Juan','Judas','Apocalipsis'];

/* Salmos y Proverbios — un salmo al día, un proverbio que rota cada mes */
function planSalPro(){
  const out = [];
  for(let d = 1; d <= 150; d++){
    out.push({
      d: d,
      etapa: 'Oración y sabiduría',
      lecturas: ['Salmos ' + d, 'Proverbios ' + (((d - 1) % 31) + 1)]
    });
  }
  return out;
}

/* Para mamás — poco cada día; largos solos, cortos juntos (tope ~38 versículos) */
function planMamas(){
  const orden = AT.concat(NT), BUD = 38, dias = []; let buf = [], vs = 0;
  const flush = () => { if(!buf.length) return; const lect = []; buf.forEach(([b,c]) => { const u = lect[lect.length-1]; if(u && u.b === b && u.f === c-1) u.f = c; else lect.push({ b:b, i:c, f:c }); }); dias.push({ d: dias.length+1, etapa: ETAPA_LIBRO[buf[0][0]] || '', lecturas: lect.map(x => x.b + ' ' + (x.i === x.f ? x.i : x.i + '-' + x.f)) }); buf = []; vs = 0; };
  orden.forEach(b => { const vc = VERSOS[b].split(',').map(Number); for(let c = 1; c <= vc.length; c++){ const v = vc[c-1]; if(buf.length && vs + v > BUD) flush(); buf.push([b,c]); vs += v; if(vs >= BUD) flush(); } });
  flush(); return dias;
}

/* Registro de planes. El cronológico usa PLAN (plan.js) y las claves
   originales de almacenamiento, para no perder el progreso de nadie. */
const PLANES = [
  {
    id: 'cronologico',
    nombre: 'Cronológico',
    sub: 'Toda la Biblia en 365 días',
    desc: 'La Escritura en el orden en que ocurrieron los hechos: Job entre los patriarcas, los salmos junto a la vida de David, los profetas dentro de la historia de los reyes. Incluye el estudio diario completo.',
    dias: 365,
    estudio: true,
    principal: true,
    dias_arr: null   /* se llena con PLAN al arrancar */
  },
  {
    id: 'canonico',
    nombre: 'Canónico',
    sub: 'Génesis a Apocalipsis en 365 días',
    desc: 'El orden tradicional de los libros, de principio a fin, sin saltar entre ellos. Unos tres capítulos y medio al día.',
    dias: 365,
    estudio: false,
    gen: () => repartir(AT.concat(NT), 365)
  },
  {
    id: 'nt90',
    nombre: 'Nuevo Testamento',
    sub: 'Mateo a Apocalipsis en 90 días',
    desc: 'Todo el Nuevo Testamento en tres meses, cerca de tres capítulos diarios. Un buen primer plan, y un buen plan para volver a empezar.',
    dias: 90,
    estudio: false,
    gen: () => repartir(NT, 90)
  },
  {
    id: 'salpro',
    nombre: 'Salmos y Proverbios',
    sub: 'Un salmo y un proverbio · 150 días',
    desc: 'Un salmo cada día en orden, y un capítulo de Proverbios que rota cada mes. Pensado para acompañar otro plan, no para reemplazarlo.',
    dias: 150,
    estudio: false,
    gen: planSalPro
  },
  {
    id: 'mamas',
    nombre: 'Para mamás',
    sub: 'Poco cada día · toda la Biblia',
    desc: 'Para temporadas ocupadas: si el capítulo es largo, uno basta ese día; si son cortos, se juntan dos o tres. De Génesis a Apocalipsis, sin prisa y sin culpa — cerca de 38 versículos al día.',
    dias: 975,
    estudio: false,
    gen: planMamas
  }
];

const PLANES_IDX = {};
PLANES.forEach(p => PLANES_IDX[p.id] = p);

/* Devuelve el arreglo de días de un plan, generándolo la primera vez */
function diasDe(id){
  const p = PLANES_IDX[id] || PLANES_IDX['cronologico'];
  if(!p.dias_arr) p.dias_arr = p.gen ? p.gen() : (typeof PLAN !== 'undefined' ? PLAN : []);
  return p.dias_arr;
}

/* Claves de almacenamiento — el cronológico conserva las originales */
function claveP(id, k){
  return id === 'cronologico' ? 'biblia365_' + k : 'af_' + id + '_' + k;
}
