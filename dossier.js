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
    ]
  }

};
