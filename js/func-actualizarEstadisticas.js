const estadisticas = document.querySelector('#estadisticas');

function actualizarEstadisticas() {
    
    const numeroElementos = document.querySelectorAll('.contenedor-tareas');
    const checkboxPresionado = document.querySelectorAll('#listatareas input[type="checkbox"]:checked')

    estadisticas.innerHTML = `
    <p>Tareas pendientes ${numeroElementos.length - checkboxPresionado.length} Tareas Completadas ${checkboxPresionado.length}</p>
    `
}

export {actualizarEstadisticas};