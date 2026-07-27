/* ============================================================
   Ad Fontes Project — Ficha de estudio por documento
   Introducción histórica, línea de tiempo, autores, influencias
   y comparación. Los {{Libro C:V}} se convierten en enlaces.
   ============================================================ */

const DOSSIER = {

  lbc: {
    intro: [
      'La <strong>Segunda Confesión de Fe de los Bautistas de Londres</strong> nació entre los bautistas «particulares» —calvinistas, que creían en la redención particular— de la Inglaterra del siglo XVII. Vivían bajo persecución tras la Restauración de la monarquía (1660) y el Código de Clarendon, que castigaba el culto fuera de la iglesia oficial.',
      'Su propósito fue doble: <strong>mostrar su plena unidad con la fe reformada</strong> de presbiterianos y congregacionalistas —contra la acusación de ser peligrosos «anabautistas»— y a la vez <strong>declarar con claridad sus distintivos</strong>: el bautismo solo de creyentes y el gobierno congregacional de la iglesia.',
      'Se redactó y publicó primero de forma anónima en <strong>1677</strong>, en pleno tiempo de persecución. Tras el Acta de Tolerancia de 1689, una gran asamblea de iglesias la adoptó formalmente ese año, y de ahí toma su nombre. Los editores principales fueron probablemente <strong>Nehemiah Coxe</strong> y <strong>William Collins</strong>, pastores en Londres.'
    ],
    timeline: [
      { a: '1644', h: 'Primera Confesión de Londres: siete iglesias bautistas particulares se distinguen públicamente de los anabautistas.' },
      { a: '1646', h: 'Se completa la Confesión de Westminster, el gran referente presbiteriano.' },
      { a: '1658', h: 'Declaración de Saboya: los congregacionalistas adaptan a Westminster con un gobierno de iglesia independiente.' },
      { a: '1677', h: 'Se publica anónimamente la Segunda Confesión, tomando la estructura de Westminster y Saboya, en tiempo de persecución.' },
      { a: '1689', h: 'Tras el Acta de Tolerancia, una asamblea de más de cien iglesias en Londres la adopta formalmente. La firman Hanserd Knollys, William Kiffin, Benjamin Keach y otros.' },
      { a: '1742', h: 'Adoptada en América como la Confesión de Filadelfia, con capítulos añadidos sobre el canto y la imposición de manos.' }
    ],
    autores: [
      { n: 'Nehemiah Coxe', r: 'Probable editor principal. Erudito en lenguas bíblicas y pastor en Petty France (Londres); su obra sobre el pacto influye en el capítulo 7.' },
      { n: 'William Collins', r: 'Copastor con Coxe; probable coeditor de la confesión.' },
      { n: 'Hanserd Knollys', r: 'Anciano estadista de los bautistas, predicador veterano; firmante principal.' },
      { n: 'William Kiffin', r: 'Líder influyente y próspero comerciante de Londres; firmante y protector del movimiento.' },
      { n: 'Benjamin Keach', r: 'Pastor y escritor, defensor del canto congregacional. Firmante.' }
    ],
    influencias: [
      { t: 'Confesión de Westminster (1646)', d: 'De aquí toma su estructura y buena parte del texto, casi palabra por palabra, para mostrar unidad con la fe reformada.' },
      { t: 'Declaración de Saboya (1658)', d: 'De los congregacionalistas hereda el capítulo sobre la iglesia y su gobierno independiente.' },
      { t: 'Primera Confesión de Londres (1644)', d: 'La raíz bautista particular anterior, que ya la precedía en doctrina y distintivos.' }
    ],
    fuentes: [
      { n: 'Samuel E. Waldron — <em>A Modern Exposition of the 1689 Baptist Confession of Faith</em>', r: 'La exposición reformada bautista estándar, capítulo por capítulo.' },
      { n: 'James M. Renihan — <em>For the Vindication of the Truth</em> y estudios sobre el texto de 1677/89', r: 'El mayor especialista actual en la historia y la letra de la confesión.' },
      { n: 'Richard C. Barcellos — obras sobre la teología del pacto', r: 'Trasfondo pactual del capítulo 7, desde la tradición bautista reformada.' },
      { n: 'Michael A. G. Haykin — <em>Kiffin, Knollys and Keach</em>', r: 'Semblanzas históricas de los pastores y firmantes.' },
      { n: 'Tom J. Nettles — <em>By His Grace and For His Glory</em>', r: 'Historia de la identidad teológica bautista reformada.' },
      { n: 'Founders Ministries / Stan Reeves — edición con pruebas bíblicas', r: 'Texto de referencia para verificar las citas de la Escritura.' }
    ],
    comparacion: {
      con: 'la Confesión de Westminster',
      intro: 'La 1689 sigue a Westminster tan de cerca que en muchos capítulos el texto es casi idéntico. Las diferencias se concentran en unos pocos puntos, casi todos sobre el bautismo, la iglesia y la libertad de conciencia.',
      filas: [
        { tema: 'Estructura y Escritura', west: '33 capítulos; la Escritura como única regla infalible.', lbc: '32 capítulos; texto casi idéntico sobre la Escritura.' },
        { tema: 'Bautismo', west: 'Se bautiza también a los hijos pequeños de los creyentes (paidobautismo), por aspersión.', lbc: 'Solo a quienes profesan personalmente la fe (bautismo de creyentes), por inmersión.' },
        { tema: 'Gobierno de la iglesia', west: 'Presbiteriano: presbiterios y sínodos con autoridad sobre las iglesias.', lbc: 'Congregacional: cada iglesia local es autónoma bajo el gobierno de Cristo.' },
        { tema: 'El pacto de gracia (cap. 7)', west: 'Un solo pacto de gracia, administrado de distinto modo bajo el Antiguo y el Nuevo Testamento.', lbc: 'El pacto de gracia se revela progresivamente y queda plenamente formalizado y establecido en Cristo (matiz de Coxe).' },
        { tema: 'El magistrado civil', west: 'Concede al magistrado poder para convocar sínodos y velar por la iglesia.', lbc: 'Recorta ese poder: defiende la libertad de conciencia y separa la autoridad civil de la eclesiástica.' }
      ]
    }
  },

  west: {
    intro: [
      'La <strong>Confesión de Westminster</strong> fue redactada por la Asamblea de Westminster (1643–1649), un cuerpo de teólogos convocado por el Parlamento inglés durante la Guerra Civil para reformar la iglesia de Inglaterra según principios reformados.',
      'Es la confesión reformada de habla inglesa más influyente: norma doctrinal de las iglesias presbiterianas, y base de la que derivan tanto la Declaración de Saboya (congregacional) como la Confesión Bautista de 1689.'
    ],
    timeline: [
      { a: '1643', h: 'El Parlamento convoca la Asamblea de Westminster para reformar la iglesia.' },
      { a: '1646', h: 'Se completa la Confesión de Fe.' },
      { a: '1647', h: 'La Asamblea General de la Iglesia de Escocia la adopta.' },
      { a: '1648', h: 'Se aprueban los Catecismos Mayor y Menor que la acompañan.' }
    ],
    autores: [
      { n: 'William Twisse', r: 'Prolocutor (moderador) de la Asamblea en sus primeros años.' },
      { n: 'Samuel Rutherford', r: 'Comisionado escocés, teólogo del pacto y de la ley y el evangelio.' },
      { n: 'George Gillespie', r: 'Comisionado escocés, joven y brillante debatiente sobre el gobierno de la iglesia.' },
      { n: 'Alexander Henderson', r: 'Líder escocés, arquitecto de la Liga y Pacto Solemne entre Escocia e Inglaterra.' },
      { n: 'La Asamblea (121 teólogos)', r: 'Un cuerpo de pastores y eruditos ingleses, con comisionados escoceses, reunido más de mil veces.' }
    ],
    influencias: [
      { t: 'Los Artículos Irlandeses (1615)', d: 'Redactados por James Ussher, un antecedente calvinista directo en estructura y contenido.' },
      { t: 'La tradición reformada continental', d: 'Calvino, Bullinger y las confesiones reformadas del continente como trasfondo doctrinal.' },
      { t: 'Los 39 Artículos de Inglaterra', d: 'El punto de partida que la Asamblea buscaba profundizar y reformar.' }
    ],
    fuentes: [
      { n: 'A. A. Hodge — <em>The Confession of Faith</em>', r: 'Comentario presbiteriano clásico, claro y fiel.' },
      { n: 'G. I. Williamson — <em>The Westminster Confession of Faith for Study Classes</em>', r: 'Exposición sencilla para estudio, muy usada.' },
      { n: 'Chad Van Dixhoorn — <em>Confessing the Faith</em>', r: 'Comentario reformado moderno y estudio de las actas de la Asamblea.' },
      { n: 'Robert Letham — <em>The Westminster Assembly: Reading Its Theology in Historical Context</em>', r: 'Contexto histórico y teológico desde la tradición reformada.' }
    ]
  },

  apostoles: {
    intro: [
      'Su forma más antigua, el <strong>Antiguo Símbolo Romano</strong>, se usaba ya en los siglos II–III como confesión al bautizarse en la iglesia de Roma. El texto que recibimos hoy quedó fijado hacia el siglo VIII.',
      'La leyenda medieval de que cada apóstol aportó una frase no es histórica; el nombre expresa más bien que su contenido es apostólico, fiel a lo que los apóstoles enseñaron.'
    ],
    timeline: [
      { a: 's. II–III', h: 'El Antiguo Símbolo Romano se usa como confesión bautismal.' },
      { a: 's. VIII', h: 'Se fija la forma recibida (textus receptus) del credo.' }
    ],
    influencias: [
      { t: 'El Antiguo Símbolo Romano', d: 'Su forma matriz, más breve, sobre la que creció el texto actual.' },
      { t: 'La catequesis bautismal', d: 'Base del examen de fe de los que se bautizaban en Occidente.' },
      { t: 'El Catecismo de Heidelberg (1563)', d: 'La Reforma lo hereda y lo comenta como resumen de la fe cristiana.' }
    ],
    fuentes: [
      { n: 'Zacarías Ursino — <em>Comentario del Catecismo de Heidelberg</em>', r: 'Expone el Credo de los Apóstoles como resumen de la fe reformada.' },
      { n: 'Nick Needham — <em>2000 Years of Christ\'s Power</em>, vol. 1', r: 'Historiador bautista reformado; origen del símbolo bautismal.' },
      { n: 'Louis Berkhof — <em>Historia de las doctrinas cristianas</em>', r: 'Panorama reformado de la formación de los credos.' }
    ]
  },

  niceno: {
    intro: [
      'Surgió del <strong>Concilio de Nicea (325)</strong>, convocado por el emperador Constantino para responder a Arrio, que enseñaba que el Hijo era una criatura, inferior al Padre. El concilio confesó que el Hijo es «de la misma sustancia» (homoousios) que el Padre.',
      'El <strong>Concilio de Constantinopla (381)</strong> amplió el credo, sobre todo en la sección del Espíritu Santo. Siglos después la iglesia de Occidente añadió el «y del Hijo» (Filioque), apoyándose en textos como {{Juan 15:26}}, adición que aún distingue a Oriente y Occidente.'
    ],
    timeline: [
      { a: '325', h: 'Concilio de Nicea: se condena el arrianismo y se confiesa la deidad del Hijo.' },
      { a: '381', h: 'Concilio de Constantinopla: se amplía el credo, especialmente sobre el Espíritu Santo.' },
      { a: 's. VI–XI', h: 'La iglesia de Occidente añade progresivamente el «Filioque» (y del Hijo).' }
    ],
    autoresTit: '👤 Figuras clave',
    autores: [
      { n: 'Atanasio de Alejandría', r: 'El gran defensor de la plena deidad del Hijo frente al arrianismo, durante décadas y contra el mundo.' },
      { n: 'Arrio', r: 'El presbítero cuya enseñanza —el Hijo como criatura, inferior al Padre— condena el credo.' },
      { n: 'Constantino', r: 'El emperador que convocó el Concilio de Nicea en 325.' },
      { n: 'Los Padres Capadocios', r: 'Basilio y los dos Gregorios: decisivos en Constantinopla (381) y en la doctrina del Espíritu Santo.' }
    ],
    influencias: [
      { t: 'El Concilio de Nicea (325)', d: 'Su base directa; el credo de 381 lo amplía y completa.' },
      { t: 'La liturgia de la iglesia', d: 'Recibido por Oriente y Occidente, se recita en la celebración de la Cena.' },
      { t: 'Las confesiones reformadas', d: 'Fundamento de la doctrina trinitaria de Westminster, la 1689 y las demás.' }
    ],
    fuentes: [
      { n: 'B. B. Warfield — estudios sobre la Trinidad y los concilios', r: 'Insuperable sobre Nicea y la deidad del Hijo, desde Princeton.' },
      { n: 'Robert Letham — <em>The Holy Trinity</em>', r: 'Tratamiento reformado, sólido y actual, de Nicea y la Trinidad.' },
      { n: 'Nick Needham — <em>2000 Years of Christ\'s Power</em>, vol. 1', r: 'La crisis arriana narrada por un bautista reformado.' },
      { n: 'Louis Berkhof — <em>Teología sistemática</em> e <em>Historia de las doctrinas</em>', r: 'Síntesis reformada de la doctrina trinitaria.' }
    ]
  },

  atanasio: {
    intro: [
      'Aunque lleva el nombre de <strong>Atanasio</strong> —el gran defensor de Nicea—, no fue escrito por él: es un símbolo occidental y latino, compuesto probablemente en la Galia entre los siglos V y VI.',
      'Es el más preciso de los credos antiguos en la doctrina de la Trinidad y de las dos naturalezas de Cristo, y por eso se usó ampliamente en la enseñanza y la liturgia de Occidente.'
    ],
    timeline: [
      { a: 's. V–VI', h: 'Se compone en el occidente latino, probablemente en la Galia.' },
      { a: 'Edad Media', h: 'Amplio uso litúrgico y catequético; la Reforma lo conserva.' }
    ],
    autoresTit: '👤 Figuras clave',
    autores: [
      { n: 'Atanasio', r: 'Le da nombre por su fe trinitaria, aunque no fue su autor; vivió mucho antes de que se escribiera.' },
      { n: 'Agustín de Hipona', r: 'Su obra «Sobre la Trinidad» está detrás de la precisión de las formulaciones del credo.' }
    ],
    influencias: [
      { t: 'La fe de Nicea', d: 'Recoge y afila la doctrina trinitaria definida en los concilios anteriores.' },
      { t: 'La teología agustiniana', d: 'Su lenguaje sobre las personas y la sustancia refleja a Agustín.' },
      { t: 'El oficio divino de Occidente', d: 'Se rezaba en la liturgia; la Reforma lo mantuvo entre los tres credos ecuménicos.' }
    ],
    fuentes: [
      { n: 'B. B. Warfield — sobre la Trinidad y el Credo Atanasiano', r: 'Análisis reformado de su precisión trinitaria.' },
      { n: 'Nick Needham — <em>2000 Years of Christ\'s Power</em>, vols. 1–2', r: 'Contexto histórico desde la tradición bautista reformada.' },
      { n: 'Louis Berkhof — <em>Historia de las doctrinas cristianas</em>', r: 'La Trinidad y las dos naturalezas en clave reformada.' }
    ]
  },

  calcedonia: {
    intro: [
      'El <strong>Concilio de Calcedonia (451)</strong> respondió a dos errores opuestos sobre Cristo: el de Nestorio, que separaba en exceso sus dos naturalezas, y el de Eutiques, que las mezclaba en una sola.',
      'Frente a ambos, definió que en la única persona del Hijo se unen la naturaleza divina y la humana «sin confusión, sin cambio, sin división y sin separación». Es el fundamento de toda la cristología ortodoxa posterior.'
    ],
    timeline: [
      { a: '431', h: 'Concilio de Éfeso: se condena el nestorianismo y se afirma «Theotokos».' },
      { a: '449', h: 'El «Sínodo del Latrocinio» de Éfeso respalda a Eutiques; luego es rechazado.' },
      { a: '451', h: 'Concilio de Calcedonia: se define a Cristo como una persona en dos naturalezas.' }
    ],
    autoresTit: '👤 Figuras clave',
    autores: [
      { n: 'León I (León Magno)', r: 'Su «Tomo a Flaviano» fue el texto decisivo que el concilio hizo suyo.' },
      { n: 'Cirilo de Alejandría', r: 'Su cristología —una sola persona en Cristo— marcó el rumbo del concilio.' },
      { n: 'Nestorio', r: 'Cuyo error, separar en exceso las dos naturalezas, se rechaza.' },
      { n: 'Eutiques', r: 'Cuyo error opuesto, mezclarlas en una sola, también se rechaza.' }
    ],
    influencias: [
      { t: 'El Concilio de Éfeso (431)', d: 'Que ya había afirmado «Theotokos» y condenado a Nestorio.' },
      { t: 'El Tomo de León I', d: 'La carta que sirvió de texto base a la definición.' },
      { t: 'Toda la cristología posterior', d: 'Fundamento de Westminster (cap. 8) y de la 1689 (cap. 8) sobre Cristo el Mediador.' }
    ],
    fuentes: [
      { n: 'B. B. Warfield — <em>The Person of Christ</em> y estudios cristológicos', r: 'Las dos naturalezas en una persona, desde la teología reformada.' },
      { n: 'Robert Letham — obras sobre la persona de Cristo', r: 'Lectura reformada de Calcedonia, sobria y fiel.' },
      { n: 'Nick Needham — <em>2000 Years of Christ\'s Power</em>, vol. 1', r: 'Éfeso y Calcedonia narrados por un bautista reformado.' },
      { n: 'Louis Berkhof — <em>Teología sistemática</em> (cristología)', r: 'Síntesis reformada de la unión de las dos naturalezas.' }
    ]
  }

};
