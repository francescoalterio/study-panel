function cargarTecnologias () {
    const containerTecnologias = document.querySelector('.container-tecnologias')

    const tecnologias = [...database];


    tecnologias.forEach(element => {
        const tecnologia = document.createElement('div');
        tecnologia.classList.add('tecnologia');
        tecnologia.innerHTML = `<img class="tech-img" src="assets/${element.img}" alt="" srcset="">
        <p class="title-tech fs-2 fw-bold">${element.nombre}</p>
        <div class="box-tech-btn">
            <button class="btn-add-list btn btn-primary">Add to list</button>
            <button class="btn-learn btn btn-success">Learn</button>
        </div>`

        containerTecnologias.appendChild(tecnologia)
    });
}

