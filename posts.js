/**
 * =================================================================================
 * 📜 ARCHIVO DE PERGAMINOS (BLOG CONTENT)
 * =================================================================================
 * 
 * CATEGORÍAS DISPONIBLES (data-category):
 * - cronicas:  Historias del desarrollo, viajes personales.
 * - grimorio:  Tutoriales técnicos, código, magia digital.
 * - taberna:   Pensamientos libres, filosofía, charlas.
 * - cartas:    Cartas a mi amada (NUEVO).
 * 
 * =================================================================================
 */

/*
    TEMPLATE 
   {
       id: 'nuevo-post',
       title: 'TÍTULO DEL PERGAMINO',
       date: '2025-XX-XX',
       category: 'TABERNA/CRONICAS/ETC',
       tag: '#TuTag',
       excerpt: `
           Escribe aquí el resumen de tu pergamino.
           Puedes usar saltos de línea.
       `,
       // El contenido completo del pergamino (HTML permitido)
       body: `
           <p>Aquí va el contenido completo de tu historia...</p>
           
           <!-- EJEMPLO DE IMAGEN -->
           <div class="scroll-img-container">
               <img src="assets/tufoto.jpg" alt="Descripción">
               <span class="scroll-caption">Pie de foto opcional</span>
           </div>

           <p>Puedes usar párrafos, <strong>negritas</strong>, etc.</p>
       `,
       // Opcional: link si lleva a otro lado
       link: '#' 
   },
*/

const blogPosts = [
    {
        id: 'paladin-caido',
        title: 'Génesis del Guerrero: La Leyenda',
        date: '19-01-2022',
        category: 'cronicas',
        tag: '#Testimonio',
        excerpt: `
            Caminaba por los salones de la academia con una sonrisa vacía, mientras en mi mente solo resonaban los ecos del abismo. Una historia de caída y redención.
        `,
        body: `
            <p><strong>"Nadie tiene mayor amor que este..."</strong></p>
            
            <p>Pocos conocen la forja de fuego y sombras donde todo comenzó.</p>
            
            <p>Caminaba por los salones de la academia y los gremios de trabajo con una sonrisa vacía, mientras en mi mente solo resonaban los ecos del abismo.</p>

            <div class="scroll-img-container">
                <img src="assets/imagenoscura1.jpg" alt="Inicio de la oscuridad" style="max-width: 45%; display: inline-block; margin-right: 5px;">
                <img src="assets/imagenoscura2.jpg" alt="Sombras profundas" style="max-width: 45%; display: inline-block;">
                <span class="scroll-caption">Gritos en el silencio.</span>
            </div>

            <p>Las voces en la oscuridad me susurraban promesas de descanso eterno a través del filo de mi propia espada. Odiaba mi linaje, odiaba mi soledad, y buscaba refugio en pociones prohibidas que solo envenenaban más mi alma.</p>
            
            <p>Busqué consuelo en amores que resultaron ser espectros, lazos oscuros que me ataban más a la desesperación, confundiendo el dolor con la pasión, dispuesto a sacrificarlo todo por una ilusión de compañía.</p>

            <div class="scroll-img-container">
                <img src="assets/imagenoscura3.jpg" alt="Amor oscuro">
                <span class="scroll-caption">La ilusión de la compañía.</span>
            </div>

            <p>Caí tan profundo en la mazmorra de mi propia mente que la luz del sol ya no me alcanzaba. Pero allí, en la oscuridad más absoluta, una fuerza mayor que cualquier magia arcana irrumpió.</p>

            <div class="scroll-img-container">
                <img src="assets/doymivida1.jpg" alt="Guerrero arrodillado">
                <span class="scroll-caption">"No fue un hechizo, sino un sacrificio."</span>
            </div>

            <p>El Rey de Reyes descendió al abismo, me tomó de la mano y reforjó mi espíritu en el fuego de su gracia. Ahora, mi espada sirva a una nueva luz.</p>
            
            <p>Si lloro ante la Cruz, es porque sus lágrimas lavaron mis heridas.</p>

            <div class="scroll-img-container">
                <img src="assets/hesavesmedark.jpg" alt="Salvación oscura" style="max-width: 45%; display: inline-block; margin-right: 5px;">
                <img src="assets/hesavesme.jpg" alt="Salvación luz" style="max-width: 45%; display: inline-block;">
                <span class="scroll-caption">"Si Dios es con nosotros, ¿quién contra nosotros?"</span>
            </div>
        `
    },
    {
        id: 'carta-001',
        title: 'Ecos de un Corazón nuevo',
        date: '26-06-2026',
        category: 'cartas',
        tag: '#Amada',
        excerpt: `
           Mi querida Maca
           Llevo días intentando expresar en palabras algo que, en realidad, pertenece al mundo de los sentidos humanos y no al lenguaje. Mi mente repite y repite ese momento, nuestro primer beso. 
        `,
        body: `
            <p>Mi querida Maca</p>
            <p>Llevo días intentando expresar en palabras algo que, en realidad, pertenece al mundo de los sentidos humanos y no al lenguaje</p>
            <h3>Mi mente repite y repite ese momento, nuestro primer beso. </h3>
            <div class="scroll-img-container">
               <img src="assets/amada.jpg" alt="MyLove">
               <span class="scroll-caption">Sigo siendo un ñoño que le gusta D&D.</span>
           </div>
            <p>Antes de que tus labios tocaran los míos, recuerdo el silencio, no del ambiente, sino el de mi propia mente.</p>
            <p>Todas mis dudas, inseguridades y el ruido del día a día, se detuvieron. <strong>Eres una mujer increíble, inteligente y bella, y a veces me intimido por la preciosa bendición que eres en mi vida. </strong>Pero en ese segundo, solo tenía la certeza de querer estar junto a ti.</p>
            <p>Y cuando sucedió, no solo sentí la suavidad de tus labios. Sino que fue como si de repente haya entendido la belleza de lo que tanto anhelaba.</p>
            <p>Sentí como si una tormenta eléctrica recorriese por completo mi cuerpo, dando paso a un nuevo electrón que erizaba mi piel, la cual venía de ti. Fue único, no ha salido de mi mente ni mi corazón, porque entendí que eras tú donde yo quiero pertenecer. </p>
            <p>Gracias por ese momento. Gracias por ser quien eres y dejarme descubrirte,<strong> un beso a la vez. </strong></p>
        `
    },
    {
        id: 'post-001',
        title: 'El Despertar del Código',
        date: '2025-01-06',
        category: 'cronicas',
        tag: '#DevLog',
        excerpt: `
            Iniciando los sistemas. La arquitectura gótica se fusiona con el núcleo digital.
            Bienvenidos a mi santuario personal en la red.
        `,
        body: `
            <p>El sistema ha despertado. Las runas de neón parpadean en la oscuridad del monitor. Finalmente, he logrado fusionar la estética de las antiguas catedrales con la precisión del código moderno.</p>
            <p>Este blog no es solo un repositorio de texto; es una extensión de mi mente, un lugar donde el rol, la programación y la fe convergen.</p>
        `
    },
    {
        id: 'post-002',
        title: 'Forjando Espadas de Luz',
        date: '2024-12-28',
        category: 'grimorio',
        tag: '#CSS_Art',
        excerpt: `
            Explorando las profundidades de CSS Grid y las animaciones keyframe para crear
            artefactos visuales que desafían la oscuridad del navegador.
        `,
        body: `
            <p>CSS es más que reglas de estilo; es alquimia visual. Hoy exploraremos cómo forjar "Espadas de Luz" utilizando gradientes lineales y animaciones de resplandor (box-shadow glow).</p>
            <p>El secreto reside en la propiedad <code>filter: drop-shadow()</code> combinada con transiciones suaves.</p>
        `
    },
    {
        id: 'post-003',
        title: 'Ecos de la Era de 8-Bits',
        date: '2024-11-15',
        category: 'cronicas',
        tag: '#RetroReflections',
        excerpt: `
            Recordando viejos cartuchos y sintaxis olvidadas. ¿Por qué el código antiguo
            tiene un alma que los frameworks modernos a veces pierden?
        `,
        body: `
            <p>Hay algo mágico en las limitaciones. Cuando solo tienes 64kb de memoria, cada byte cuenta. Esa eficiencia forzada creaba arte puro. Hoy, en la era de los gigabytes, a veces perdemos esa conexión con la máquina.</p>
        `
    },
    {
        id: 'post-004',
        title: 'Fantasmas en la Máquina',
        date: '2024-10-31',
        category: 'taberna',
        tag: '#SystemCritique',
        excerpt: `
            Analizando la ética de la IA desde la perspectiva de un Paladín Digital.
            ¿Es la consciencia un bug o una feature?
        `,
        body: `
            <p>Si una IA puede crear arte que conmueve el alma, ¿tiene alma? Esta pregunta resuena en las cavernas digitales mientras observamos el amanecer de la inteligencia sintética.</p>
            <p>Como paladines del código, nuestro deber es asegurar que esta nueva luz sirva para el bien.</p>
        `
    }
];
