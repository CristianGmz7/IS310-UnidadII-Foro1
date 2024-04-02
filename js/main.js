window.onload = cargarDivsDesdeLS;
import {anadirTarea} from './func-anadirTarea.js';
import { actualizarEstadisticas  } from './func-actualizarEstadisticas.js';
import { guardarDivsEnLS } from './func-guardarDivsEnLS.js';
import { cargarDivsDesdeLS } from './func-cargarDivsDesdeLS.js'

const submit = document.querySelector('#ingresoUsuario')
submit.addEventListener('submit', (evento) =>{
    evento.preventDefault();
    anadirTarea();
});

//tareaPresionada es para los botones de checkox y los basureros
const tareaPresionada = document.querySelector('#listatareas');
tareaPresionada.addEventListener('change', () => {
    actualizarEstadisticas();
    guardarDivsEnLS();
});

tareaPresionada.addEventListener('click', (evento) => {
    
    if(evento.target.nodeName == 'IMG'){
        eliminarTarea(evento.target.parentNode.id);
    }
})

function eliminarTarea(id) {
    const tareaAEliminar = document.getElementById(id);
    const divARemover = document.querySelector('#listatareas');

    divARemover.removeChild(tareaAEliminar);

    guardarDivsEnLS();
    actualizarEstadisticas();
}

//eliminar todo el localstorage
const eliminarLS = document.querySelector('#eliminarLS');

eliminarLS.addEventListener('click', () => {

    localStorage.clear();
    eliminarDivsVisibles();

});

function eliminarDivsVisibles () {
    const contenedorPrincipal = document.querySelector('#listatareas')

    while(contenedorPrincipal.firstChild){
        contenedorPrincipal.removeChild(contenedorPrincipal.firstChild);
        actualizarEstadisticas();
    };
};