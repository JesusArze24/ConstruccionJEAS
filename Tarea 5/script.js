document.addEventListener('DOMContentLoaded', () => {
    const productos = document.querySelectorAll('.producto img');

    const imagenesAlternativas = [
        ['Imagenes/GymsharkXDavidLaidStringer1.png', 'Imagenes/GymsharkXDavidLaidStringer3.png'],
        ['Imagenes/BoldHoodieEveningBlue2.png', 'Imagenes/hoodie evening blue 2.jpg'],
        ['Imagenes/HeritageWashedHoodieGSOnyxGrey-ACIDWASHSMALLBALLA4A7J-GB8N-1424_1920x.jpg', 'Imagenes/HeritageWashedHoodieGSOnyxGrey-ACIDWASHSMALLBALLA4A7J-GB8N-1430_1920x.jpg'],
        ['Imagenes/MINIMALSPORTSBRA-GSMidnightBlue-1.png', 'Imagenes/MINIMALSPORTSBRA-GSMidnightBlue-2.png', 'Imagenes/MINIMALSPORTSBRA-GSMidnightBlue-3.png'],
        ['Imagenes/PowerT-Shirt-Black2.png', 'Imagenes/PowerT-Shirt-Black1.png']
    ];

    productos.forEach((img, index) => {
        let contador = 0;
        setInterval(() => {
            img.style.opacity = '0';

            setTimeout(() => {
                contador = (contador + 1) % imagenesAlternativas[index].length;
                img.src = imagenesAlternativas[index][contador];

                img.style.opacity = '1';
            }, 500);
        }, 3000);
    });
});

//---------------------------------modal-----------------------------------------------------//

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const imagenModal = document.getElementById('imagen-modal');
    const cerrarModal = document.querySelector('.cerrar');
    const imagenes = document.querySelectorAll('#productos .producto img');

    imagenes.forEach((imagen) => {
        imagen.addEventListener('click', () => {
            modal.style.display = 'flex';
            imagenModal.src = imagen.src;
        });
    });

    cerrarModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});