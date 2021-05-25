function crearNuevoDominated () {
    if ( localStorage.getItem('dominated') === null) {
        localStorage.setItem('dominated', JSON.stringify([]))
    }
}

function crearArrayDominated () {

    if ( localStorage.getItem('dominated') !== null) {
        const arregloDominated = JSON.parse( localStorage.getItem('dominated') )
        cargarDominated(arregloDominated)
    }

    cargarListenersDominated ()
}

function cargarDominated (dominated) {
    const containerDominated = document.querySelector('.container-dominated')

    dominated.forEach(element => {
        const tecnologia = document.createElement('div');
        tecnologia.classList.add('tecnologia');
        tecnologia.innerHTML = `<img class="tech-img" src="assets/${element.img}" alt="" srcset="">
        <p class="title-tech fs-2 fw-bold">${element.nombre}</p>
        <div class="box-tech-btn">
            <button class="btn-remove-dominated btn btn-danger">Remove</button>
        </div>`

        containerDominated.appendChild(tecnologia)

        
    });
}

function añadirDominatedALocal (tech) {
    const arregloDominated = JSON.parse(localStorage.getItem('dominated'))
    
    const nuevoArregloDominated = [...arregloDominated]
    nuevoArregloDominated.push(tech)

    const JsonArreglo = JSON.stringify(nuevoArregloDominated)

    localStorage.setItem( 'dominated',  JsonArreglo)
}

function clickCompleted (nombreT) {
    const copiaDatabase = [...database]

    const techCompleted = copiaDatabase.filter( e => e.nombre === nombreT)
    const soloObject = techCompleted[0]



    añadirDominatedALocal(soloObject)
}

function eliminarTechDominated (techEliminar) {
    const copiaDominated = JSON.parse( localStorage.getItem('dominated') ) 

    const dominatedEliminated = copiaDominated.filter( e => e.nombre !== techEliminar)

    const JsonArreglo = JSON.stringify(dominatedEliminated)

    localStorage.setItem( 'dominated',  JsonArreglo)

    limpiarHTMLDominated ()
    crearArrayDominated()
}


function cargarListenersDominated () {
    const containerDominated = document.querySelector('.container-dominated')

    containerDominated.addEventListener('click', e => {
        console.log('click')
        if (e.target.classList.contains('btn-remove-dominated')) {
          
            const techAEliminar = e.target.parentElement.parentElement.querySelector('.title-tech').textContent

            eliminarTechDominated (techAEliminar)
        }
    })
}

function limpiarHTMLDominated () {
    const containerDominated = document.querySelector('.container-dominated')

    containerDominated.innerHTML = ''
}

function noAgregarRepetido (nombreT) {

    const copiaComprobarDominated = JSON.parse( localStorage.getItem('dominated') )
    console.log(copiaComprobarDominated)

    const arregloRepetido = copiaComprobarDominated.filter( e => e.nombre == nombreT)
    console.log(arregloRepetido)

    const objectExtraido = arregloRepetido[0]
    console.log(objectExtraido);

    if ( objectExtraido === undefined) {
        clickCompleted (nombreT)
    } else if (objectExtraido.nombre !== nombreT){
        clickCompleted (nombreT)
    }
}