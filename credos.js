/* ============================================================
   Ad Fontes Project — Credos ecuménicos de la iglesia antigua
   Textos en español, con notas editoriales para las cláusulas
   históricamente discutidas. Orden histórico.
   ============================================================ */

const CREDOS = {

  apostoles: {
    titulo: 'El Credo de los Apóstoles',
    sub: 'Símbolo bautismal de la iglesia occidental · forma antigua (siglos II–III), texto recibido hacia el siglo VIII',
    intro: 'El más breve y antiguo de los símbolos de la fe. No fue escrito por los apóstoles, pero recoge con fidelidad su enseñanza; la iglesia lo usó desde muy temprano como confesión en el bautismo.',
    texto: [
      'Creo en Dios, Padre todopoderoso, Creador del cielo y de la tierra.',
      'Y en Jesucristo, su único Hijo, nuestro Señor; que fue concebido por obra del Espíritu Santo, nació de la virgen María; padeció bajo el poder de Poncio Pilato, fue crucificado, muerto y sepultado; descendió a los infiernos; al tercer día resucitó de entre los muertos; subió a los cielos y está sentado a la diestra de Dios, Padre todopoderoso; desde allí ha de venir a juzgar a los vivos y a los muertos.',
      'Creo en el Espíritu Santo; la santa iglesia universal; la comunión de los santos; el perdón de los pecados; la resurrección del cuerpo; y la vida eterna. Amén.'
    ],
    notas: [
      { t: '«la santa iglesia universal»', d: 'El texto latino dice «católica», que en su sentido original significa universal: la iglesia de todos los tiempos y lugares, el cuerpo entero de Cristo, no una institución en particular.' },
      { t: '«descendió a los infiernos»', d: 'Cláusula añadida más tarde y muy discutida. Calvino y la tradición reformada la entienden no de un lugar físico, sino de que Cristo cargó en la cruz el peso pleno de la ira y el abandono que merecían los pecadores. Otros la leen simplemente como que descendió al sepulcro, al estado de los muertos.' }
    ]
  },

  niceno: {
    titulo: 'El Credo Niceno-Constantinopolitano',
    sub: 'Concilios de Nicea (325) y Constantinopla (381) · la fe trinitaria de la iglesia universal',
    intro: 'Formulado frente a la herejía arriana, que negaba la plena deidad del Hijo. Confiesa que el Hijo es de la misma sustancia que el Padre — verdadero Dios de verdadero Dios.',
    texto: [
      'Creemos en un solo Dios, Padre todopoderoso, Creador del cielo y de la tierra, de todo lo visible y lo invisible.',
      'Y en un solo Señor, Jesucristo, Hijo unigénito de Dios, engendrado del Padre antes de todos los siglos: Dios de Dios, Luz de Luz, Dios verdadero de Dios verdadero; engendrado, no creado, de la misma sustancia que el Padre, por quien todas las cosas fueron hechas; que por nosotros los hombres y por nuestra salvación descendió de los cielos, y se encarnó por obra del Espíritu Santo, de la virgen María, y se hizo hombre; y por nosotros fue crucificado bajo el poder de Poncio Pilato; padeció y fue sepultado; y resucitó al tercer día, conforme a las Escrituras; y subió a los cielos, y está sentado a la diestra del Padre; y vendrá otra vez con gloria para juzgar a los vivos y a los muertos, y su reino no tendrá fin.',
      'Y creemos en el Espíritu Santo, Señor y dador de vida, que procede del Padre y del Hijo; que con el Padre y el Hijo juntamente es adorado y glorificado; que habló por los profetas.',
      'Y creemos en una sola iglesia, santa, universal y apostólica. Confesamos un solo bautismo para el perdón de los pecados. Esperamos la resurrección de los muertos, y la vida del siglo venidero. Amén.'
    ],
    notas: [
      { t: '«de la misma sustancia» (homoousios)', d: 'La palabra clave del concilio: el Hijo no es solo semejante al Padre ni inferior a Él, sino de la misma y única esencia divina. Con esto se refutó el arrianismo.' },
      { t: '«y del Hijo» (Filioque)', d: 'Añadido por la iglesia de Occidente; el texto original de 381 decía solo «procede del Padre». Las iglesias de la Reforma conservan el «y del Hijo», entendiendo que el Espíritu es enviado tanto por el Padre como por el Hijo (Juan 15:26).' },
      { t: '«universal»', d: 'De nuevo, el latín «católica» significa universal.' }
    ]
  },

  atanasio: {
    titulo: 'El Credo Atanasiano',
    sub: 'También llamado «Quicunque vult» · símbolo occidental sobre la Trinidad y la encarnación · siglos V–VI',
    intro: 'El más detallado de los credos antiguos. Aunque lleva el nombre de Atanasio, no fue escrito por él, pero expone con fidelidad su fe: la doctrina de la Trinidad y de las dos naturalezas de Cristo, cerrando las puertas a las herejías.',
    texto: [
      'Cualquiera que quiera salvarse, ante todas las cosas es necesario que guarde la fe universal. La cual, si alguno no la guardare íntegra e inviolada, sin duda perecerá para siempre.',
      'Y la fe universal es esta: que veneremos a un solo Dios en la Trinidad, y a la Trinidad en la unidad; sin confundir las personas, ni separar la sustancia. Porque una es la persona del Padre, otra la del Hijo, y otra la del Espíritu Santo; pero la divinidad del Padre, del Hijo y del Espíritu Santo es una sola, igual la gloria, y coeterna la majestad.',
      'Cual es el Padre, tal es el Hijo, tal el Espíritu Santo. Increado el Padre, increado el Hijo, increado el Espíritu Santo. Inmenso el Padre, inmenso el Hijo, inmenso el Espíritu Santo. Eterno el Padre, eterno el Hijo, eterno el Espíritu Santo; y, sin embargo, no son tres eternos, sino un solo eterno; como tampoco son tres increados, ni tres inmensos, sino un solo increado y un solo inmenso.',
      'Asimismo, todopoderoso el Padre, todopoderoso el Hijo, todopoderoso el Espíritu Santo; y, sin embargo, no son tres todopoderosos, sino un solo todopoderoso. Así, Dios el Padre, Dios el Hijo, Dios el Espíritu Santo; y, sin embargo, no son tres dioses, sino un solo Dios. Así, Señor el Padre, Señor el Hijo, Señor el Espíritu Santo; y, sin embargo, no son tres señores, sino un solo Señor.',
      'Porque así como la verdad cristiana nos obliga a confesar que cada persona en particular es Dios y Señor, así también la religión universal nos prohíbe decir que hay tres dioses o tres señores.',
      'El Padre por nadie fue hecho, ni creado, ni engendrado. El Hijo es del Padre solo: no hecho, ni creado, sino engendrado. El Espíritu Santo es del Padre y del Hijo: no hecho, ni creado, ni engendrado, sino procedente. Hay, pues, un solo Padre, no tres padres; un solo Hijo, no tres hijos; un solo Espíritu Santo, no tres espíritus santos.',
      'Y en esta Trinidad nada es antes o después, nada mayor o menor, sino que las tres personas son entre sí coeternas y coiguales; de suerte que en todo, como ya se ha dicho, se ha de venerar la unidad en la Trinidad, y la Trinidad en la unidad. El que quiera, pues, salvarse, así ha de sentir de la Trinidad.',
      'Pero es necesario para la salvación eterna que crea también fielmente en la encarnación de nuestro Señor Jesucristo. Es, pues, la fe recta que creamos y confesemos que nuestro Señor Jesucristo, Hijo de Dios, es Dios y hombre. Es Dios, de la sustancia del Padre, engendrado antes de los siglos; y es hombre, de la sustancia de su madre, nacido en el tiempo. Dios perfecto, hombre perfecto, subsistente de alma racional y de carne humana. Igual al Padre según la divinidad, menor que el Padre según la humanidad.',
      'El cual, aunque es Dios y hombre, no son dos, sino un solo Cristo. Uno, no por conversión de la divinidad en carne, sino por asunción de la humanidad en Dios. Uno del todo, no por confusión de sustancia, sino por unidad de persona. Porque así como el alma racional y la carne son un solo hombre, así Dios y hombre son un solo Cristo.',
      'El cual padeció por nuestra salvación, descendió a los infiernos, al tercer día resucitó de entre los muertos, subió a los cielos, está sentado a la diestra de Dios Padre todopoderoso, y de allí ha de venir a juzgar a los vivos y a los muertos. A su venida, todos los hombres han de resucitar con sus cuerpos, y darán cuenta de sus propios actos. Y los que hicieron el bien irán a la vida eterna; mas los que hicieron el mal, al fuego eterno.',
      'Esta es la fe universal; el que no la creyere fiel y firmemente, no podrá salvarse.'
    ],
    notas: [
      { t: '«Cualquiera que quiera salvarse…»', d: 'El credo abre y cierra con advertencias severas. No enseñan que la salvación se gane recitando una fórmula, sino que negar deliberadamente la Trinidad o la deidad y humanidad de Cristo es negar el evangelio mismo.' },
      { t: '«fe universal»', d: 'Traducción del latín «fides catholica»: la fe de toda la iglesia de todos los tiempos, no de un grupo.' },
      { t: '«descendió a los infiernos»', d: 'Véase la nota en el Credo de los Apóstoles.' }
    ]
  },

  calcedonia: {
    titulo: 'La Definición de Calcedonia',
    sub: 'Concilio de Calcedonia (451) · sobre la persona de Cristo, verdadero Dios y verdadero hombre',
    intro: 'Frente a quienes confundían o separaban las dos naturalezas de Cristo, el concilio definió que en la única persona del Hijo se unen, sin mezcla ni división, la naturaleza divina y la humana.',
    texto: [
      'Siguiendo, pues, a los santos Padres, todos a una voz enseñamos que se ha de confesar a uno solo y el mismo Hijo, nuestro Señor Jesucristo: el mismo perfecto en la divinidad y perfecto en la humanidad; verdaderamente Dios y verdaderamente hombre, de alma racional y cuerpo;',
      'consustancial con el Padre según la divinidad, y el mismo consustancial con nosotros según la humanidad, semejante a nosotros en todo, excepto en el pecado; engendrado del Padre antes de los siglos según la divinidad, y en los últimos días, por nosotros y por nuestra salvación, nacido de María la virgen, madre de Dios, según la humanidad;',
      'uno y el mismo Cristo, Hijo, Señor, unigénito, a quien se reconoce en dos naturalezas, sin confusión, sin cambio, sin división y sin separación; sin que la unión quite en modo alguno la diferencia de las naturalezas, sino conservándose más bien la propiedad de cada una, y concurriendo en una sola persona y en una sola hipóstasis;',
      'no partido ni dividido en dos personas, sino uno y el mismo Hijo unigénito, Dios Verbo, el Señor Jesucristo; como desde el principio lo anunciaron acerca de él los profetas, y el mismo Señor Jesucristo nos lo enseñó, y nos lo ha transmitido el símbolo de los Padres.'
    ],
    notas: [
      { t: '«madre de Dios» (Theotokos)', d: 'Término cristológico, no mariano: afirma que aquel que nació de María es verdaderamente Dios, una sola persona. No exalta a María, sino que protege la unión de las dos naturalezas en Cristo.' },
      { t: '«sin confusión, sin cambio, sin división, sin separación»', d: 'Las cuatro palabras que guardan el misterio: las dos naturalezas ni se mezclan en una tercera, ni se separan en dos Cristos. Una sola persona, dos naturalezas plenas.' },
      { t: '«consustancial»', d: 'De la misma sustancia: con el Padre en cuanto Dios, y con nosotros en cuanto hombre.' }
    ]
  }

};

const CREDOS_ORDEN = ['apostoles', 'niceno', 'atanasio', 'calcedonia'];
