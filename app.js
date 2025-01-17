document.addEventListener('DOMContentLoaded', () => {
    const textarea = document.getElementById('nombres');
    const btnObtener = document.getElementById('btn-obtener');
    const resultado = document.getElementById('resultado');
    const modal = document.getElementById('modal');

    function mostrarModal() {
        modal.style.display = 'flex';
    }

    function ocultarModal() {
        modal.style.display = 'none';
    }

    function obtenerNombreAleatorio() {
        const nombres = textarea.value
            .split('\n') 
            .map(nombre => nombre.trim()) 
            .filter(nombre => nombre !== ''); 

        if (nombres.length === 0) {
            resultado.innerHTML = '<p style="color: red;">Por favor, escribe al menos un nombre.</p>';
            return;
        }

        mostrarModal(); 

        setTimeout(() => {
            ocultarModal(); 
            const nombreAleatorio = nombres[Math.floor(Math.random() * nombres.length)];
            resultado.innerHTML = `<p>El nombre seleccionado es: <strong>${nombreAleatorio}</strong></p>`;
        }, 1000);
    }

    btnObtener.addEventListener('click', obtenerNombreAleatorio);
});
