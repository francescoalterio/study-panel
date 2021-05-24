function verificarLearning () {

    if (localStorage.getItem('learning') == null) {
        localStorage.setItem('learning', '')
    } else if ( localStorage.getItem('learning') == '' && localStorage.getItem('pagina') == 'home' ) {
        crearBoxNoLearn()
    } else if ( localStorage.getItem('learning') != '' && localStorage.getItem('pagina') == 'home' ) {
        crearBoxLearning()
    } else if ( localStorage.getItem('learning') == '') {
        addLearningALocal()
    } else if ( localStorage.getItem('learning') != '') {
        addLearningALocal()
    }
}

function crearBoxNoLearn () {
    const boxLearn = document.querySelector('.box-learn')

    const boxNoLearn = document.createElement('div')
    boxNoLearn.classList.add('box-no-learning')

    boxNoLearn.innerHTML = `<p class="sin-aprender">You are not learning any technology</p>
    <div class="box-learn-btn">
        <button class="learn btn-learn-home btn btn-success fw-bold fs-6 btn-lg">Learn a technology</button>
        <button class="learn btn btn-primary fw-bold fs-6 btn-lg">Create a project</button>
    </div>`

    boxLearn.appendChild(boxNoLearn)

    boxNoLearn.addEventListener('click', e => {
        if (e.target.classList.contains('btn-learn-home')) {
            paginaTecnologias()
            cargarTecnologias()
            clickBtnAddList()
        }
    })
}

function addLearningALocal () {
    const containerTecnologias = document.querySelector('.container-tecnologias')

    containerTecnologias.addEventListener('click', e => {

        
        if (e.target.classList.contains('btn-learn')) {
            
            const tecnologia = e.target.parentElement.parentElement.querySelector('.title-tech').textContent
            
            
            localStorage.setItem('learning', tecnologia)
        }
    })
}

function crearBoxLearning () {

    limpiarHTMLLearning()

    const copiaDatabase = [...database]

    const learning = copiaDatabase.filter( e => e.nombre === localStorage.getItem('learning'))

    crearHTMLLearning(learning)
}

function crearHTMLLearning (tech) {
    const boxLearn = document.querySelector('.box-learn')

    const boxTechLearning = document.createElement('div')
    boxTechLearning.classList.add('box-tech-learning')

    boxTechLearning.innerHTML = `
    <div>
        <img class="tech-learning-img" src="assets/${tech[0].img}" alt="" srcset="">
    </div>
    <div class="box-data-learning">
        <p class="title-learning-tech fs-1 fw-bold">${tech[0].nombre}</p>
        <div class="box-tech-btn">
            <button class="btn-completed-learning btn btn-success fw-bold fs-5">Completed</button>
            <button class="btn-remove-learning btn btn-danger fw-bold fs-5">Remove</button>
        </div>
    </div>
    `

    boxLearn.appendChild(boxTechLearning)

    listenersBtnsLearning()
}

function limpiarHTMLLearning () {
    const boxLearn = document.querySelector('.box-learn')
    boxLearn.innerHTML = ''
}

function listenersBtnsLearning () {
    const boxLearn = document.querySelector('.box-learn')

    boxLearn.addEventListener('click', e => {
        if ( e.target.classList.contains('btn-completed-learning')) {
            limpiarLearningLocal()
            limpiarHTMLLearning ()
            verificarLearning ()
        }
    })

    boxLearn.addEventListener('click', e => {
        if ( e.target.classList.contains('btn-remove-learning')) {
            limpiarLearningLocal()
            limpiarHTMLLearning ()
            verificarLearning ()
        }
    })
}

function limpiarLearningLocal () {
    localStorage.setItem('learning', '')
}