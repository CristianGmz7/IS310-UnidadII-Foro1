import { verificarRepitencia } from "./func-verificarRepitencia.js";
import { guardarDivsEnLS } from "./func-guardarDivsEnLS.js";
import { actualizarEstadisticas } from './func-actualizarEstadisticas.js';

const contenidoTarea = document.querySelector('input[type="text"]');
let contadorId = 0;

function anadirTarea() {

    if(contenidoTarea.value !== ''){

        if(verificarRepitencia(contenidoTarea.value)){

            if(contenidoTarea.value.length > 29){
                alert('Tarea demasiado larga')
            }
            else{
                
                let ultimoId = localStorage.getItem('ultimoId');  

                if(ultimoId !== null){
                    contadorId = ultimoId;
                }
    
                contadorId++; 
        
                //Este sera la tarea en si, tendra la opcion de marcar, el texto y la opcion de eliminar
                const tarea = document.getElementById('listatareas');
        
                //crear el div que contendrá todos los elementos, inputs, texto, imagen,
                //primer debe añadirsele su clase y id respectivo
                const nuevoDiv = document.createElement('div');
                nuevoDiv.classList.add('contenedor-tareas');
                nuevoDiv.id = contadorId;
        
                //el label que contendra el input y el texto
                const nuevoLabel = document.createElement('label');
        
                //creacion del input y especificar de que tipo sera
                const nuevoInput = document.createElement('input');
                nuevoInput.type = 'checkbox';
                nuevoInput.classList.add('tarea-hecha');       
                nuevoInput.id = `checkbox ${contadorId}`;      
        
                //creacion del texto por medio de lo que el usuario ingrese cuando de submit
                const nuevoTexto = document.createTextNode(contenidoTarea.value);
        
                //añadir input y texto al label
                nuevoLabel.appendChild(nuevoInput);
                nuevoLabel.appendChild(nuevoTexto);
        
                //crear la imagen, declarar su fuente asi como la clase
                const nuevaImagen = document.createElement('img');
                nuevaImagen.src = '/assets/images/basura.png';
                nuevaImagen.classList.add('cerrar-boton');
        
                //añadir al div el label y la imagen
                nuevoDiv.appendChild(nuevoLabel);
                nuevoDiv.appendChild(nuevaImagen);
        
                //añadir todo el div a la tarea
                tarea.appendChild(nuevoDiv);
        
                //reiniciar contenido
                contenidoTarea.value = '';
    
                //esto es para que se guarde el ultimo ID
                localStorage.setItem('ultimoId', JSON.stringify(contadorId));
    
                guardarDivsEnLS();
                actualizarEstadisticas();

            }

        } else{
            alert('Esta tarea ya existe')
        }
    }else{
        alert('No hay ninguna tarea ingresada')
    }
    
}

export{anadirTarea};