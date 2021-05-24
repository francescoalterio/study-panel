const main = document.querySelector('.box-main');

const btnHome = document.getElementById('btn-home');
const btnDominated = document.getElementById('btn-dominated');
const btnTech = document.getElementById('btn-tech');
const btnLab = document.getElementById('btn-lab');

document.addEventListener('DOMContentLoaded', () => {
    paginaHome()
    verificarLista()
    verificarMyListHome()
    verificarLearning()
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