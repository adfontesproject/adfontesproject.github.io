/* ============================================================
   Ad Fontes Project — Historia de la Iglesia
   Artículos narrativos. Más relatos por venir.
   Bloques: {t:'p'|'h'|'sub'|'cita'|'nota', x, autor, p, refs}
   ============================================================ */

const HISTORIA = {

  worms: {
    titulo: 'La Dieta de Worms',
    sub: 'Historia de la Iglesia · 1521',
    icono: '⚖️',
    resumen: 'Lutero ante el emperador: «aquí estoy; no puedo hacer otra cosa».',
    ficha: [
      { k: 'Fecha', v: 'Enero–mayo de 1521' },
      { k: 'Lugar', v: 'Worms, Sacro Imperio Romano Germánico' },
      { k: 'Protagonista', v: 'Martín Lutero ante el emperador Carlos V' },
      { k: 'Resultado', v: 'Edicto de Worms: Lutero declarado hereje y proscrito' }
    ],
    fuente: 'Relato histórico. Las referencias entre paréntesis remiten a la Escritura; tócalas para leerlas.',
    cuerpo: [
      { t: 'p', x: 'En abril de 1521, un monje agustino compareció ante el emperador Carlos V y los príncipes del Sacro Imperio Romano Germánico. La «dieta» (en alemán, <em>Reichstag</em>) era la asamblea imperial —una especie de parlamento—; y aquella, reunida en la ciudad alemana de Worms, se convirtió en una de las grandes bisagras de la historia de la Iglesia.' },
      { t: 'h', x: 'El camino hasta Worms' },
      { t: 'p', x: 'Lutero había publicado sus 95 tesis en 1517 y, en los años siguientes, escribió tratados que cuestionaban de raíz doctrinas y prácticas de la Iglesia de Roma. Sus libros corrían por toda Europa gracias a la imprenta. Roma terminó excomulgándolo, y el Imperio lo citó a comparecer para dar cuenta de sus escritos.' },
      { t: 'h', x: '«¿Te retractas?»' },
      { t: 'p', x: 'En Worms se le exigieron dos cosas: reconocer que los libros amontonados sobre la mesa eran suyos, y retractarse de su contenido. Lo primero lo admitió sin dudar. Para lo segundo pidió un día de plazo, y se retiró a orar.' },
      { t: 'h', x: 'La respuesta que cambió la historia' },
      { t: 'p', x: 'Al día siguiente, negándose a retractarse a menos que lo convencieran por el testimonio de la Escritura o por la razón evidente —pues, dijo, ni los papas ni los concilios son de fiar, ya que se han contradicho unos a otros—, pronunció las palabras que la memoria protestante ha guardado:' },
      { t: 'cita', x: 'Mi conciencia está cautiva de la Palabra de Dios. No puedo ni quiero retractarme de nada, pues obrar contra la conciencia no es seguro ni honesto. Aquí estoy; no puedo hacer otra cosa. Que Dios me ayude. Amén.', autor: 'Martín Lutero · Worms, 1521' },
      { t: 'nota', x: 'Los historiadores discuten si pronunció exactamente la frase «Aquí estoy» (Hier stehe ich); pero el sentido de su declaración —una conciencia atada a la Escritura— está bien atestiguado.' },
      { t: 'h', x: 'El Edicto de Worms' },
      { t: 'p', x: 'El emperador lo declaró hereje y proscrito: sus escritos fueron prohibidos y cualquiera podía apresarlo sin castigo. Pero Federico el Sabio, príncipe de Sajonia, organizó un «secuestro» protector y lo escondió en el castillo de Wartburg. Allí, lejos del peligro, Lutero tradujo el Nuevo Testamento al alemán, poniendo la Palabra de Dios en la lengua del pueblo.' },
      { t: 'h', x: 'Por qué importa a la fe reformada' },
      { t: 'sub', x: 'Sola Scriptura', p: 'La autoridad final es la Escritura, por encima de concilios y tradiciones humanas.', refs: ['2 Ti 3:16-17','Hch 17:11','Is 8:20'] },
      { t: 'sub', x: 'La conciencia cautiva de la Palabra', p: 'La conciencia del creyente se somete a Dios y a su Palabra, y no a autoridades humanas cuando estas contradicen la Escritura.', refs: ['Hch 5:29','Ro 14:23','Stg 4:12'] },
      { t: 'sub', x: 'El inicio visible de la Reforma', p: 'Aunque la Reforma ya había comenzado, en Worms el conflicto se hizo público, imperial e irreversible.', refs: [] },
      { t: 'h', x: 'La bisagra' },
      { t: 'p', x: 'Imagina el salón imperial a la luz de las antorchas. De un lado, el emperador, los príncipes, los obispos y los juristas; del otro, un monje solo, con una mesa cargada de libros. La verdadera pregunta no era «¿te retractas?», sino: ¿qué tiene la última palabra, la autoridad de la Iglesia o la Palabra de Dios?' },
      { t: 'p', x: 'Lutero no salió de Worms con poder político; salió con algo que él tenía por más fuerte: una conciencia atada a la Escritura. Por eso, para tantos protestantes, Worms es una bisagra de la historia: la puerta de la Reforma ya no pudo volver a cerrarse.' }
    ]
  }

};
