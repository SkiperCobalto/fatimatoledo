// 1. La "Base de Datos" de tu galería (Aquí es donde agregas obras nuevas)
const obrasDeArte = [
    {
        titulo: "Pablo Honey",
        artista: "Radiohead",
        anio: "1993",
        imagen: "assets/img/pablo-honey.jpeg"
    },
    {
        titulo: "Reflejos del Alma",
        artista: "Carlos Ruiz",
        anio: "2022",
        imagen: "assets/img/obra2.jpg"
    },
    {
        titulo: "Esencias",
        artista: "Elena Gómez",
        anio: "2023",
        imagen: "assets/img/obra1.jpg"
    }
    // Para agregar una obra nueva, solo copia una de arriba y cambia los datos
];

// 2. Función para "dibujar" la galería en la pantalla
function cargarGaleria() {
    const contenedor = document.getElementById('art-gallery');
    
    // Limpiamos el contenedor por si acaso
    contenedor.innerHTML = "";

    // 3. Recorremos nuestra lista de obras una por una
    obrasDeArte.forEach(obra => {
        // Creamos el HTML de la tarjeta usando "Template Literals" (las comillas `)
        const tarjetaHTML = `
            <article class="art-card">
                <div class="art-image-wrapper">
                    <img src="${obra.imagen}" alt="${obra.titulo}" class="art-image">
                </div>
                <div class="art-info">
                    <h3 class="art-title">${obra.titulo}</h3>
                    <p class="art-artist">${obra.artista}</p>
                    <p class="art-year">${obra.anio}</p>
                </div>
            </article>
        `;
        
        // Inyectamos la tarjeta en el contenedor
        contenedor.innerHTML += tarjetaHTML;
    });
}

// 4. Ejecutamos la función cuando la página termine de cargar
document.addEventListener('DOMContentLoaded', cargarGaleria);
