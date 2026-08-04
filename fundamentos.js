/* ============================================================
   Ad Fontes Project — Fundamentos
   Síntesis doctrinales de la fe reformada. Más materiales por venir.
   Las referencias se convierten en enlaces a la Biblia.
   ============================================================ */

const FUNDAMENTOS = {

  gracia: {
    titulo: 'Doctrinas de la Gracia',
    sub: 'Síntesis reformada · TULIP',
    icono: '✝️',
    resumen: 'Los cinco puntos del calvinismo: la salvación, obra de la gracia soberana de Dios.',
    intro: 'Comúnmente resumidas con el acróstico inglés TULIP y formuladas por el Sínodo de Dort (1618-1619) frente a los cinco artículos de los arminianos (Remonstrantes). No son un sistema añadido a la Escritura, sino un resumen de lo que la Biblia enseña: que la salvación es, de principio a fin, obra de la gracia soberana de Dios.',
    fuente: 'Síntesis conforme a los Cánones de Dort (1619) y a la tradición reformada. Toca una referencia para leerla en la Biblia.',
    puntos: [
      {
        t: 'Depravación total',
        verso: '«Estabais muertos en vuestros delitos y pecados»',
        versoRef: 'Ef 2:1',
        d: [
          'La caída no dejó al hombre herido, sino muerto. El pecado no manchó un rincón de su ser: alcanzó la mente, la voluntad y los afectos, como una gota de tinta que tiñe el vaso entero de agua. No significa que cada persona sea tan mala como podría ser, sino que no hay parte de ella que el pecado no haya tocado.',
          'Por eso, dejado a sí mismo, el hombre ni quiere ni puede venir a Dios. No es un enfermo que aún puede llamar al médico; es un cadáver en la tumba. Y los muertos no cooperan con su propia resurrección.'
        ],
        verlo: 'Piensa en Lázaro, cuatro días en el sepulcro. Cristo no le da consejos ni le tiende la mano para que se ayude a sí mismo: lo <em>llama</em>, y el muerto vive. Así es la conversión: la voz que resucita no espera permiso del sepulcro.',
        vida: 'Esta verdad mata el orgullo y a la vez consuela. Mata el orgullo, porque no traes nada tuyo a la salvación. Consuela, porque si Dios da vida a los muertos, tu salvación no descansa en tu fuerza, sino en la suya. Deja de mirarte y mira a Cristo.',
        refs: ['Gn 6:5','Jer 17:9','Ro 3:10-12','Ro 8:7-8','1 Co 2:14','Ef 2:1-3','Jn 6:44']
      },
      {
        t: 'Elección incondicional',
        verso: '«Nos escogió en él antes de la fundación del mundo»',
        versoRef: 'Ef 1:4',
        d: [
          'Antes de que existiera el tiempo, antes de que hubiera un solo mérito o pecado que mirar, Dios puso su amor sobre un pueblo y lo escogió en Cristo para salvación. No los eligió por prever en ellos fe, obras o bondad, sino por su pura voluntad y beneplácito, para alabanza de su gloria.',
          '«Incondicional» quiere decir exactamente eso: la causa de la elección no está en la criatura, sino en Dios. No fuimos escogidos porque fuéramos deseables; somos deseables porque fuimos escogidos.'
        ],
        verlo: 'Imagina a Jacob y Esaú aún en el vientre, sin haber hecho bien ni mal, y Dios diciendo «a Jacob amé» (Ro 9:11-13). No había todavía nada que recomendara al uno sobre el otro. El amor eligió primero; la respuesta vino después.',
        vida: 'Si tu salvación dependiera de algo en ti, podrías perderla el día que ese algo fallara. Pero fue decidida en Dios antes de que nacieras, y lo que Él decide, nadie lo deshace. Aquí descansa el alma cansada de sostenerse a sí misma.',
        refs: ['Ef 1:4-5','Ro 9:11-16','2 Ti 1:9','Jn 15:16','Hch 13:48','Ro 8:29-30']
      },
      {
        t: 'Redención particular',
        verso: '«El buen pastor su vida da por las ovejas»',
        versoRef: 'Jn 10:11',
        d: [
          'En la cruz, Cristo no hizo la salvación meramente posible: la compró. No pagó un rescate general que quizá nadie use, sino un precio real por un pueblo real —sus ovejas, su esposa, los que el Padre le dio—, y aseguró de hecho su salvación.',
          'Su muerte no solo abre una puerta; salva. Reconcilió, justificó y redimió efectivamente a todos aquellos por quienes murió. La cruz no fracasa: cada uno por quien Cristo derramó su sangre será suyo.'
        ],
        verlo: 'Un pastor no muere por ovejas anónimas «en general». Muere por <em>estas</em>, a las que conoce por nombre y llama una a una. La cruz tiene rostros concretos; tu nombre puede ser uno de ellos.',
        vida: 'Esto llena la cruz de amor personal. Cristo no murió por una masa abstracta, sino por pecadores concretos que confían en Él. Cuando dudes de tu valor ante Dios, mira el precio que pagó: no regatea por lo que ama.',
        refs: ['Jn 10:11,14-15','Jn 17:9','Mt 1:21','Hch 20:28','Ef 5:25','Is 53:10-11','He 9:12']
      },
      {
        t: 'Gracia eficaz',
        verso: '«Todo lo que el Padre me da, vendrá a mí»',
        versoRef: 'Jn 6:37',
        d: [
          'Cuando Dios llama a los suyos, su gracia no se queda tocando la puerta a la espera de que el hombre muerto abra. El Espíritu entra, quita el corazón de piedra, pone uno de carne, y lo que antes era imposible se vuelve cierto: el pecador viene a Cristo, libre y gozosamente.',
          'Se llama «eficaz» porque logra lo que se propone. La gracia común puede resistirse; la gracia salvadora, cuando Dios la ejerce sobre un elegido, vence dulcemente la rebeldía y no fracasa jamás.'
        ],
        verlo: 'A Lidia, «el Señor le abrió el corazón para que estuviese atenta» (Hch 16:14). No fue forzada como una cerradura rota; fue abierta como una flor al sol. La gracia no violenta la voluntad: la renueva, de modo que ahora quiere lo que antes rechazaba.',
        vida: '¿Viniste a Cristo? Entonces no te felicites como quien tomó una decisión más sabia que otros: adora, porque Dios te dio el querer. Y si oras por un ser querido perdido, ora con esperanza: el mismo Dios que te abrió el corazón puede abrir el suyo.',
        refs: ['Jn 6:37,44-45','Ez 36:26-27','Hch 16:14','Ro 8:30','Jn 3:5-8','Fil 2:13','Tit 3:5']
      },
      {
        t: 'Perseverancia de los santos',
        verso: '«Yo les doy vida eterna; y no perecerán jamás»',
        versoRef: 'Jn 10:28',
        d: [
          'A los que Dios justifica, los guarda. Los verdaderamente regenerados no caerán total ni finalmente de la gracia, sino que serán preservados por el poder de Dios, mediante la fe, hasta la salvación final. La obra que Él comienza, Él la termina.',
          'No es que el creyente sea tan fuerte que nunca tropiece; es que la mano que lo sostiene nunca se cansa. Perseveramos porque somos preservados. La seguridad no está en nuestro puño cerrado sobre Dios, sino en el suyo sobre nosotros.'
        ],
        verlo: 'Un niño pequeño cruza la calle de la mano de su padre. Si dependiera de la fuerza de sus deditos, se soltaría al primer distraído; pero es el padre quien lo agarra. Así nos lleva Dios: la fuerza que nos guarda no es la nuestra.',
        vida: 'Esto no es licencia para pecar, sino fuerza para pelear. Si Dios te sostiene, puedes levantarte de cada caída, porque tu perseverancia no cuelga de un hilo tuyo. Descansa esta noche: el que te guarda no se adormece (Sal 121:4).',
        refs: ['Jn 10:28-29','Ro 8:38-39','Fil 1:6','1 P 1:5','Jn 6:39','Jud 24']
      }
    ]
  }

};
