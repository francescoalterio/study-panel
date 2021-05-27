const main = document.querySelector('.box-main');

const btnHome = document.getElementById('btn-home');
const btnDominated = document.getElementById('btn-dominated');
const btnTech = document.getElementById('btn-tech');
const btnTask = document.getElementById('btn-task');
const btnTaskCompleted = document.getElementById('btn-task-completed');

document.addEventListener('DOMContentLoaded', () => {
    paginaHome()
    verificarLista()
    verificarMyListHome()
    verificarLearning()
    crearNuevoDominated()
})

cargarListeners()
function cargarListeners () {
    btnHome.addEventListener('click', () => {
        paginaHome()
        verificarMyListHome()
        verificarLearning()
    })

    btnTech.addEventListener('click', () => {
        paginaTecnologias()
        cargarTecnologias()
        clickBtnAddList()
        verificarLearning()
    })

    btnDominated.addEventListener('click', () => {
        paginaDominated()
        crearArrayDominated()
    })

    btnTask.addEventListener('click', () => {
        paginaTask()
        verificarTaskLocal ()
    })

    btnTaskCompleted.addEventListener('click', () => {
        paginaTaskCompleted()
        CrearTaskCompletedHTML()
    })
}


function paginaHome () {
    main.innerHTML = `<!-- Home -->
    <div class="box-home vh-100 container-fluid bg-light">
        <div class="container-fluid box-learn">
           
        </div>
        <div class="container-fluid box-my-tech">
            <h2 class="title-my-tech fs-1 fw-bold mt-2">My list</h2>
            <div class="my-tech-zone"></div>
        </div>
    </div>`

    localStorage.setItem('pagina', 'home')

}

function paginaTecnologias () {
    main.innerHTML = `<!-- Tecnologias -->
    <div class="vh-100 container-fluid bg-light box-tecnologias">
        <nav class="navbar navbar-dark bg-dark">
            <div class="container-fluid">
            <a class="navbar-brand">Technologies</a>
            <form class="d-flex">
                <input class="input-search form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-light" type="submit">Search</button>
            </form>
            </div>
        </nav>
        <div class="container-tecnologias">
                    
        </div>
    </div>`

    localStorage.setItem('pagina', 'tecnologias')

    
}

function paginaDominated () {
    main.innerHTML = `<!-- Dominated -->
    <div class="vh-100 container-fluid bg-light box-dominated">
        <h2 class="p-3 fs-1 fw-bold title-dominated">Dominated</h2>
        <div class="container-dominated">       
        </div>
    </div>`

    localStorage.setItem('pagina', 'dominated')

    
}

function paginaTask () {
    main.innerHTML = `<!-- Task -->
    <div class="vh-100 container-fluid bg-light box-task">
        <nav class="navbar navbar-dark bg-dark">
            <div class="container-fluid">
            <a class="navbar-brand">Tasks</a>
            <form class="d-flex">
                <input class="input-search form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-light" type="submit">Search</button>
            </form>
            </div>
        </nav>
        <div class="container-form-task">
            <div class="box-input">
                <p class="name-input-task fw-bold">Name:</p>
                <input type="text" id="input-name">
            </div>
            <div class="box-input">
                <p class="description-input-task fw-bold">Description:</p>
                <input type="text" id="input-description">
            </div>
            <div class="box-btn-add">   
                <button class="btn-add-task btn btn-primary">Add</button>
            </div>
        </div>
        <hr class="bg-success hr-task">
        <div class="container-titles-task">  
            <p class="title-name fs-6 fw-bold">Name</p>
            <p class="title-description fs-6 fw-bold">Description</p>
            <div class="box-task-title-btn">
                <p class="title-description fs-6 fw-bold">Buttons</p>
            </div>
        </div>
        <hr class="bg-success hr-task">
        <div class="container-task">       
        </div>
    </div>`

    localStorage.setItem('pagina', 'task')
}

function paginaTaskCompleted () {
    main.innerHTML = `<!-- Task -->
    <div class="vh-100 container-fluid bg-light box-dominated">
        <h2 class="p-3 fs-1 fw-bold title-dominated">Completed Tasks</h2>
        <div class="container-titles-task completed">  
            <p class="title-name fs-6 fw-bold">Name</p>
            <p class="title-description fs-6 fw-bold">Description</p>
            <div class="box-task-title-btn">
                <p class="title-description fs-6 fw-bold">Buttons</p>
            </div>
        </div>
        <hr class="hr-completed">
        <div class="container-task-completed">       
        </div>
    </div>`

    localStorage.setItem('pagina', 'completed-tasks')

    
}