function guardarDivsEnLS() {

    const contenedorPrincipal = document.querySelector('#listatareas');
    const divsSecundarios = document.querySelectorAll('.contenedor-tareas');
    const arrayDivsSecundarios = [];

    divsSecundarios.forEach((div) => {

        const datosDelDiv = {
            id: div.id,
            contenido: div.querySelector('label').textContent,
            check: div.querySelector('input[type="checkbox"]').checked,
            checkId: div.querySelector('input[type="checkbox"]').id
        };

        arrayDivsSecundarios.push(datosDelDiv);
    });

    localStorage.setItem('divsSecundarios', JSON.stringify(arrayDivsSecundarios))

};

export {guardarDivsEnLS};