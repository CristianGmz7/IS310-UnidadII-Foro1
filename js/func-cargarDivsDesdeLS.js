import { actualizarEstadisticas  } from './func-actualizarEstadisticas.js';

function cargarDivsDesdeLS() {
    const divsEnJSON = localStorage.getItem('divsSecundarios');

    if(divsEnJSON !== null){       

        const arrayDivsSecundarios = JSON.parse(divsEnJSON);

        const contenedorPrincipal = document.querySelector('#listatareas')

        arrayDivsSecundarios.forEach((div) => {

            const tareaEnDiv = document.createElement('div');
            tareaEnDiv.id = div.id;
            tareaEnDiv.classList.add('contenedor-tareas');

            const label = document.createElement('label');
            const checkbox = document.createElement('input');
            checkbox.classList.add('tarea-hecha');      
            checkbox.id = div.checkId;                  
            checkbox.type = 'checkbox';
            checkbox.checked = div.check; 

            label.appendChild(checkbox);
            label.appendChild(document.createTextNode(div.contenido))

            const imagen = document.createElement('img');
            imagen.src = '/assets/images/basura.png';  
            imagen.classList.add('cerrar-boton');

            tareaEnDiv.appendChild(label);
            tareaEnDiv.appendChild(imagen);

            contenedorPrincipal.appendChild(tareaEnDiv);

            actualizarEstadisticas();
        });

    }

};

export {cargarDivsDesdeLS};