// Función para mostrar el menú en pantallas pequeñas
function toggleMenu() {
    const menu = document.querySelector('.menu');   // Selecciona el elemento del menú utilizando su clase
    menu.classList.toggle('show'); // Agrega o quita la clase show al menú, alternando su visibilidad
}

// Función para cambiar el contenido según el menú seleccionado
function showContent(section) {
    const content = document.getElementById('content');      // Selecciona el elemento con el ID 'content'
    let html = '';              // Inicializa una variable para almacenar el HTML que se generará

    if (section === 'inicio') {
        html = '<h1>GALERIA</h1><p>UNIDAD 3: Programacion del lado del cliente.</p>' +
               '<div class="gallery">' +
               createGalleryImages() +                // Llama a una función que genera las imágenes de la galería
               '</div>';
    } else if (section === 'servicios') {
        // se da comienzo a crear el contenido para la sección de servicios
        html = '<h1>SERVICIOS</h1><p>Estos son los servicios que ofrecemos.</p>' +
               '<div class="servicios">' +
               '<div class="servicio">' +
               '<img src="https://i.postimg.cc/d3rcySzf/servicio1.jpg" alt="Servicio 1">' +
               '<h2>MAQUILLAJE</h2>' +
               '<p>Todos nuestros productos a tu servicio</p>' +
               '</div>' +
               '<div class="servicio">' +
               '<img src="https://i.postimg.cc/bYthWssR/servicio2.png" alt="Servicio 2">' +
               '<h2>PEINADO</h2>' +
               '<p>La mejor calidad de productos a tu alcance.</p>' +
               '</div>' +
               '<div class="servicio">' +
               '<img src="https://i.postimg.cc/Ls5dTscL/servicio3.jpg" alt="Servicio 3">' +
               '<h2>FACIALES</h2>' +
               '<p>Cuidado personal para tu piel.</p>' +
               '</div>' +
               '<div class="servicio">' +
               '<img src="https://i.postimg.cc/8C9YmmBg/servicio4.jpg" alt="Servicio 4">' +
               '<h2>UÑAS</h2>' +
               '<p>LO MEJOR EN TENDENCIA.</p>' +
               '</div>' +
               '</div>';
            } else if (section === 'sobre-mi') {
                // se da comienzo a crear el contenido para la sección de sobre mi
                html = `
                    <h1>SOBRE MI</h1>
                    <p>Soy una diseñadora matehualense que lo más importante en la vida es crear e innovar, te invito a conocer cada rasgo de mi y de poder dar inicio a algo realmente bello.  La historia comenzó con un boceto y termino en arte. Comencemos a diseñar cada parte de ti formando estilo y esencia en todo momento que necesites.</p>
                    <div class="sobre-mi">
                        <div class="foto">
                            <img src="imagen1.jpg" alt="Sobre mí" />
                            <h2>Jazmín Hernández </h2>
                        </div>
                        <div class="info">
                            <h2>ESSENCE</h2>
                            <p>La belleza es una expresión única que reside en cada uno de nosotros. No se trata solo de lo que vemos en el espejo, sino de la confianza y la autenticidad que reflejamos en el mundo. Con cada pincelada de maquillaje, celebramos nuestra individualidad, resaltando lo mejor de nosotros mismos. La verdadera belleza radica en la pasión por cuidarnos y en la alegría de ser quienes somos. Recuerda, cada día es una nueva oportunidad para brillar..</p>
                        </div>
                    </div>`;
                } else if (section === 'contacto') {
                    // se da comienzo a crear el contenido para la sección de contacto
                    html = `
                        <h1>CONTACTO</h1>
                        <p>Puedes contactarnos aquí.</p>
                        <div class="contacto">
                            <div class="contacto-recuadro hoverable">
                                <img src="imagen2.png" alt="imagen2">
                                <h2>Correo</h2>
                                <div class="hover-box">
                                    <h2>CORREO</h2>
                                    <p>essence@outlook.com.</p>
                                </div>
                            </div>
                            <div class="contacto-recuadro hoverable">
                                <img src="imagen3.png" alt="imagen3">
                                <h2>TELEFONO</h2>
                                <div class="hover-box">
                                    <h2>TELEFONO</h2>
                                    <p>488-881-23-45.</p>
                                </div>
                            </div>
                            <div class="contacto-recuadro hoverable">
                                <img src="imagen4.png" alt="imagen4">
                                <h2>DIRECCION</h2>
                                <div class="hover-box">
                                    <h2>DIRECCION</h2>
                                    <p>MATEHUALA SAN LUIS POTOSI, COL. REPUBLICA </p>
                                </div>
                            </div>
                        </div>`;
                }
                
                    
// Actualiza el contenido del elemento 'content' con el HTML generado
    content.innerHTML = html;

    // Agregar eventos a las imágenes de la galería
    const images = document.querySelectorAll('.gallery img');   // Selecciona todas las imágenes dentro del contenedor con la clase "gallery"
    images.forEach((img, index) => {              // Itera sobre cada imagen seleccionada
        img.addEventListener('click', () => openModal(index));     // Agrega un evento de clic a cada imagen
    });
}

// Función para generar las imágenes de la galería, 
function createGalleryImages() {                  //Esta función se puede invocar para crear o devolver una galería de imágenes.
    const images = [                                 //Las URLs apuntan a imágenes almacenadas en un servicio de imágenes (PostImg). Hay un total de 17 imágenes en este arreglo.
        "https://i.postimg.cc/pL1Xf3mG/actividad1.jpg",
        "https://i.postimg.cc/QMF8hX6h/actividad2.jpg",
        "https://i.postimg.cc/yNg6vn9V/actividad3.jpg",
        "https://i.postimg.cc/NMdNF8JH/actividad4.jpg",
        "https://i.postimg.cc/y8W78nLF/actividad5.jpg",
        "https://i.postimg.cc/wvWpzmDW/actividad6.jpg",
        "https://i.postimg.cc/prptLLZP/actividad7.jpg",
        "https://i.postimg.cc/kXJnk78Y/actividad8.jpg",
        "https://i.postimg.cc/CLs4xsRL/actividad9.jpg",
        "https://i.postimg.cc/xjyfxXkb/actividad10.jpg",
        "https://i.postimg.cc/gJjVMCsx/actividad11.jpg",
        "https://i.postimg.cc/RZx2jRjS/actividad12.jpg",
        "https://i.postimg.cc/3NVQ4QSm/actividad13.jpg",
        "https://i.postimg.cc/13p1tTpV/actividad14.jpg",
        "https://i.postimg.cc/4NWJGjQf/actividad15.jpg",
        "https://i.postimg.cc/fbGzFXjY/actividad16.jpg",
        "https://i.postimg.cc/jjcV673s/actividad17.jpg"
    ];

    let imagesHtml = '';             //una variable llamada imagesHtml que se inicializa como una cadena vacía. Esta variable se utilizará para acumular el HTML que se generará en el bucle.
    images.forEach((imgSrc, index) => {
        imagesHtml += `<div class="gallery-item">
                           <img src="${imgSrc}" alt="Actividad ${index + 1}">
                           <p>Actividad ${index + 1}</p>
                       </div>`;   
    });

    return imagesHtml;           //Después de completar el bucle, la función devuelve la cadena imagesHtml, que contiene el HTML completo de todos los elementos de la galería.
}

// Función para abrir el modal con el contenido
function openModal(index) {            //se declara una función llamada openModal que recibe un parámetro index, que representa la posición de la imagen seleccionada en la galería.
    const links = [                         //Almacenar las URLs de las actividades que se abrirán en el modal, permitiendo acceder a ellas mediante el índice.
        "https://l21660178.github.io/ACTIVIDAD-1/",             //son cada uno de los links que contienen las actividades realizadas 
        "https://l21660178.github.io/ACTIVIDAD-2/",
        "https://l21660178.github.io/ACTIVIDAD-3/",
        "https://l21660178.github.io/ACTIVIDAD-4/",
        "https://l21660178.github.io/ACTIVIDAD-5/",
        "https://l21660178.github.io/ACTIVIDAD-6/",
        "https://l21660178.github.io/ACTIVIDAD-7/",
        "https://l21660178.github.io/ACTIVIDAD-8/",
        "https://l21660178.github.io/ACTIVIDAD-9/",
        "https://l21660178.github.io/ACTIVIDAD-10/",
        "https://l21660178.github.io/ACTIVIDAD-11/",
        "https://l21660178.github.io/ACTIVIDAD-12/",
        "https://l21660178.github.io/ACTIVIDAD-13/",
        "https://l21660178.github.io/ACTIVIDAD-14/",
        "https://l21660178.github.io/ACTIVIDAD-15/",
        "https://l21660178.github.io/ACTIVIDAD-16/",
        "https://l21660178.github.io/ACTIVIDAD-17/"
    ];

    const modal = document.getElementById('modal');              //Obtiene el elemento del DOM con el ID modal, que se espera que sea el contenedor del modal donde se mostrará el contenido.
    const modalFrame = document.getElementById('modal-frame');   //Obtiene el elemento del DOM con el ID modal-frame, que se asume que es un <iframe> o un contenedor donde se cargará la URL de la actividad seleccionada.
    modalFrame.src = links[index];    //Esto carga la URL específica de la actividad en el marco del modal.
    modal.style.display = 'block';  //Cambia el estilo de visualización del modal a block, lo que hace que el modal sea visible en la página

    // Cerrar el modal al hacer clic en la "X"
    const closeModalBtn = document.querySelector('.close');  //Este elemento generalmente representa un botón o un icono que el usuario puede hacer clic para cerrar el modal.
    closeModalBtn.onclick = function () {   //Esta función se ejecutará cada vez que el botón de cierre sea clicado.
        modal.style.display = 'none';  //Cambia el estilo de visualización del modal a none, lo que oculta el modal de la vista en la página. Esto es comúnmente utilizado para cerrar modales.
        modalFrame.src = ''; // Limpiar el iframe
    };

    // Cerrar el modal al presionar "Esc"
    window.onkeydown = function (event) {  // Esto significa que cada vez que una tecla es presionada mientras la ventana está activa, la función se ejecutará.
        if (event.key === 'Escape') {   //Evalúa si la tecla presionada es la tecla "Escape". event.key contiene el valor de la tecla que fue presionada.
            modal.style.display = 'none';      //Cambia el estilo de visualización del modal a none, ocultándolo de la vista en la página.
            modalFrame.src = ''; // Limpiar el iframe
        }
    };
}

// Cerrar el modal si se hace clic fuera del contenido del modal
window.onclick = function (event) {  //Cada vez que se hace clic en cualquier parte de la ventana, la función se ejecuta.
    const modal = document.getElementById('modal');   //Selecciona el elemento del DOM que representa el modal utilizando su ID (modal).
    const modalFrame = document.getElementById('modal-frame');  // Permitir la manipulación del iframe (limpiar su contenido) dentro de la función.
    if (event.target === modal) {   //Asegurarse de que solo se cierre el modal si se hace clic en el área oscura que rodea el contenido, lo que indica que el usuario quiere cerrarlo.
        modal.style.display = 'none';  //Cambia el estilo de visualización del modal a none, ocultándolo de la vista en la página.
        modalFrame.src = ''; // Limpiar el iframe
    }
}
