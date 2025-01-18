document.addEventListener("DOMContentLoaded", () => {
    const textarea = document.getElementById("nombres");
    const btnObtener = document.getElementById("btn-obtener");
    const btnLimpiar = document.createElement("button");
    const btnCopiar = document.createElement("button");
    const resultado = document.getElementById("resultado");
    const modal = document.getElementById("modal");
    const counter = document.createElement("div");
    
    counter.className = "counter";
    btnLimpiar.textContent = "Limpiar";
    btnCopiar.textContent = "Copiar";
    btnCopiar.className = "copy-btn";
  
    document.querySelector(".container").appendChild(counter);
    document.querySelector(".container").appendChild(btnLimpiar);
    document.querySelector(".container").appendChild(btnCopiar);
  
    function mostrarModal() {
      modal.style.display = "flex";
    }
  
    function ocultarModal() {
      modal.style.display = "none";
    }
  
    function actualizarContador() {
      const nombres = textarea.value
        .split("\n")
        .map((nombre) => nombre.trim())
        .filter((nombre) => nombre !== "");
      counter.textContent = `Nombres ingresados: ${nombres.length}`;
    }
  
    function obtenerNombreAleatorio() {
      const nombres = textarea.value
        .split("\n")
        .map((nombre) => nombre.trim())
        .filter((nombre) => nombre !== "");
  
      if (nombres.length < 2) {
        resultado.innerHTML =
          '<p style="color: red;">Por favor, escribe al menos 2 nombres.</p>';
        return;
      }
  
      mostrarModal();
  
      setTimeout(() => {
        ocultarModal();
        const nombreAleatorio =
          nombres[Math.floor(Math.random() * nombres.length)];
        resultado.innerHTML = `<p>El nombre seleccionado es: <strong>${nombreAleatorio}</strong></p>`;
      }, 1000);
    }
  
    function limpiarTextarea() {
      textarea.value = "";
      resultado.innerHTML = "";
      actualizarContador();
    }
  
    function copiarNombre() {
      const texto = resultado.innerText;
      if (texto) {
        navigator.clipboard.writeText(texto.replace("El nombre seleccionado es: ", ""));
        alert("Nombre copiado al portapapeles");
      }
    }
  
    textarea.addEventListener("input", actualizarContador);
    btnObtener.addEventListener("click", obtenerNombreAleatorio);
    btnLimpiar.addEventListener("click", limpiarTextarea);
    btnCopiar.addEventListener("click", copiarNombre);
  
    actualizarContador();
  });
  