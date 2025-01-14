document.addEventListener('DOMContentLoaded', () => {
    const textarea = document.getElementById('nombres');
    const btnObtener = document.getElementById('btn-obtener');
    const resultado = document.getElementById('resultado');
    const modal = document.getElementById('modal');

    // Mostrar el modal de carga
    function mostrarModal() {
        modal.style.display = 'flex';
    }

    // Ocultar el modal de carga
    function ocultarModal() {
        modal.style.display = 'none';
    }

    // Obtener un nombre aleatorio
    function obtenerNombreAleatorio() {
        const nombres = textarea.value
            .split('\n') // Dividir los nombres por línea
            .map(nombre => nombre.trim()) // Quitar espacios extra
            .filter(nombre => nombre !== ''); // Eliminar entradas vacías

        if (nombres.length === 0) {
            resultado.innerHTML = '<p style="color: red;">Por favor, escribe al menos un nombre.</p>';
            return;
        }

        mostrarModal();

        setTimeout(() => {
            ocultarModal();
            const nombreAleatorio = nombres[Math.floor(Math.random() * nombres.length)];
            resultado.innerHTML = `<p>El nombre seleccionado es: <strong>${nombreAleatorio}</strong></p>`;
        }, 1000); // Simular un tiempo de espera de 1 segundo
    }

    btnObtener.addEventListener('click', obtenerNombreAleatorio);
});
