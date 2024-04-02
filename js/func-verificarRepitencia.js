export function verificarRepitencia(Tarea) {

    let divsTareas = document.querySelectorAll('.contenedor-tareas');
    let verificar = true; 

    divsTareas.forEach((div) => {

        let contenidoDiv = div.textContent;

        if(contenidoDiv === Tarea){
            verificar = false;
        }

    });

    return verificar;
};