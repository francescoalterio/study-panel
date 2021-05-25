function cargarTecnologias () {
    const containerTecnologias = document.querySelector('.container-tecnologias')

    const tecnologias = [...database];

    let i = 0


    tecnologias.forEach(element => {

        if (localStorage.getItem('learning') === element.nombre) {
            const tecnologia = document.createElement('div');
            tecnologia.classList.add('tecnologia');
            tecnologia.innerHTML = `<img class="tech-img" src="assets/${element.img}" alt="" srcset="">
            <p class="title-tech fs-2 fw-bold">${element.nombre}</p>
            <div class="box-tech-btn">
                <button class="btn btn-dark" disabled>Learning</button>
            </div>`

            containerTecnologias.appendChild(tecnologia)

        } else if (localStorage.getItem('myList1') === element.nombre || localStorage.getItem('myList2') === element.nombre || localStorage.getItem('myList3') === element.nombre || localStorage.getItem('myList4') === element.nombre) {
            const tecnologia = document.createElement('div');
            tecnologia.classList.add('tecnologia');
            tecnologia.innerHTML = `<img class="tech-img" src="assets/${element.img}" alt="" srcset="">
            <p class="title-tech fs-2 fw-bold">${element.nombre}</p>
            <div class="box-tech-btn">
                <button class="btn btn-dark" disabled>In List</button>
            </div>`

            containerTecnologias.appendChild(tecnologia)

        } else if (JSON.parse( localStorage.getItem('dominated' ))[i]) {
            const tecnologia = document.createElement('div');
            tecnologia.classList.add('tecnologia');
            tecnologia.innerHTML = `<img class="tech-img" src="assets/${element.img}" alt="" srcset="">
            <p class="title-tech fs-2 fw-bold">${element.nombre}</p>
            <div class="box-tech-btn">
                <button class="btn btn-dark" disabled>Dominated</button>
            </div>`

            containerTecnologias.appendChild(tecnologia)

            i++
        } else { 
            const tecnologia = document.createElement('div');
            tecnologia.classList.add('tecnologia');
            tecnologia.innerHTML = `<img class="tech-img" src="assets/${element.img}" alt="" srcset="">
            <p class="title-tech fs-2 fw-bold">${element.nombre}</p>
            <div class="box-tech-btn">
                <button class="btn-add-list btn btn-primary">Add to list</button>
                <button class="btn-learn btn btn-success">Learn</button>
            </div>`

            containerTecnologias.appendChild(tecnologia)
        }
        
    });

    eventListenerInput()
}

function eventListenerInput () {
    const inputSearch = document.querySelector('.input-search')

    inputSearch.addEventListener('keyup', filterTech)
}

function filterTech () {
    const copiaDatabase = [...database];
    const inputSearchValue = document.querySelector('.input-search')

    const busqueda = copiaDatabase.filter( e => e.nombre.toLowerCase().includes(inputSearchValue.value.toLowerCase()) )

    console.log(busqueda)

    limpiarHTMLTecnologias()
    crearTecnologiasSearch(busqueda)
}

function crearTecnologiasSearch (busqueda) {

    const containerTecnologias = document.querySelector('.container-tecnologias')

    const copiaBusqueda = [...busqueda];

    let i = 0

    copiaBusqueda.forEach(element => {

        if (localStorage.getItem('learning') === element.nombre) {
            const tecnologia = document.createElement('div');
            tecnologia.classList.add('tecnologia');
            tecnologia.innerHTML = `<img class="tech-img" src="assets/${element.img}" alt="" srcset="">
            <p class="title-tech fs-2 fw-bold">${element.nombre}</p>
            <div class="box-tech-btn">
                <button class="btn btn-dark" disabled>Learning</button>
            </div>`

            containerTecnologias.appendChild(tecnologia)

        } else if (localStorage.getItem('myList1') === element.nombre || localStorage.getItem('myList2') === element.nombre || localStorage.getItem('myList3') === element.nombre || localStorage.getItem('myList4') === element.nombre) {
            const tecnologia = document.createElement('div');
            tecnologia.classList.add('tecnologia');
            tecnologia.innerHTML = `<img class="tech-img" src="assets/${element.img}" alt="" srcset="">
            <p class="title-tech fs-2 fw-bold">${element.nombre}</p>
            <div class="box-tech-btn">
                <button class="btn btn-dark" disabled>In List</button>
            </div>`

            containerTecnologias.appendChild(tecnologia)

        } else if (JSON.parse( localStorage.getItem('dominated' ))[i]) {
            const tecnologia = document.createElement('div');
            tecnologia.classList.add('tecnologia');
            tecnologia.innerHTML = `<img class="tech-img" src="assets/${element.img}" alt="" srcset="">
            <p class="title-tech fs-2 fw-bold">${element.nombre}</p>
            <div class="box-tech-btn">
                <button class="btn btn-dark" disabled>Dominated</button>
            </div>`

            containerTecnologias.appendChild(tecnologia)

            i++
        } else { 
            const tecnologia = document.createElement('div');
            tecnologia.classList.add('tecnologia');
            tecnologia.innerHTML = `<img class="tech-img" src="assets/${element.img}" alt="" srcset="">
            <p class="title-tech fs-2 fw-bold">${element.nombre}</p>
            <div class="box-tech-btn">
                <button class="btn-add-list btn btn-primary">Add to list</button>
                <button class="btn-learn btn btn-success">Learn</button>
            </div>`

            containerTecnologias.appendChild(tecnologia)
        }
    });
}

function limpiarHTMLTecnologias () {
    const containerTecnologias = document.querySelector('.container-tecnologias');
    containerTecnologias.innerHTML = ''
}