let myList = []

function verificarLista () {

    if ( localStorage.getItem('myList1' ) == null) {
        localStorage.setItem('myList1', '')
        localStorage.setItem('myList2', '')
        localStorage.setItem('myList3', '')
        localStorage.setItem('myList4', '')
    } 
    
}

function agregarTechAList () {
    myList = []

        if ( localStorage.getItem('myList1') !== '' ) {
            myList.push(localStorage.getItem('myList1'))
        } 
        if ( localStorage.getItem('myList2') !== '' ) {
            myList.push(localStorage.getItem('myList2'))
        }
        if ( localStorage.getItem('myList3') !== '' ) {
            myList.push(localStorage.getItem('myList3'))
        } 
        if ( localStorage.getItem('myList4') !== '' ) {
            myList.push(localStorage.getItem('myList4'))
        } 

}

function agregarTechALocal (tech) {
    if (localStorage.getItem('myList1') === '') {
        localStorage.setItem('myList1', `${tech}`)
    }  else if (localStorage.getItem('myList2') === '') {
        localStorage.setItem('myList2', `${tech}`)
    } else if (localStorage.getItem('myList3') === '') {
        localStorage.setItem('myList3', `${tech}`)
    } else if (localStorage.getItem('myList4') === '') {
        localStorage.setItem('myList4', `${tech}`)
    } 
    
}

function clickBtnAddList () {
    const containerTecnologias = document.querySelector('.container-tecnologias')

    containerTecnologias.addEventListener('click', e => {
        if (e.target.classList.contains('btn-add-list')) {

            if (localStorage.getItem('myList1') !== e.target.parentElement.parentElement.querySelector('.title-tech').textContent && localStorage.getItem('myList2') !== e.target.parentElement.parentElement.querySelector('.title-tech').textContent && localStorage.getItem('myList3') !== e.target.parentElement.parentElement.querySelector('.title-tech').textContent && localStorage.getItem('myList4') !== e.target.parentElement.parentElement.querySelector('.title-tech').textContent) {
                agregarTechALocal(e.target.parentElement.parentElement.querySelector('.title-tech').textContent) 
                agregarTechAList()
            }
        }
    })
}

function buscarEnDatabase () {
    agregarTechAList()

    const copiaMyList = [...myList]
    const copiaDatabase = [...database]
    let myListCompleted = []

    copiaMyList.forEach( eL => {
        const techRecorriendo = copiaDatabase.filter( (eD) => eL == eD.nombre);
        myListCompleted.push(techRecorriendo[0])
        
    })

    cargarTechMyList(myListCompleted)
}

function cargarTechMyList (listMyTech) {
    const boxMyTechZone = document.querySelector('.my-tech-zone')

    listMyTech.forEach(element => {
        const tecnologia = document.createElement('div');
        tecnologia.classList.add('tecnologia');
        tecnologia.innerHTML = `<img class="tech-img" src="assets/${element.img}" alt="" srcset="">
        <p class="title-tech fs-2 fw-bold">${element.nombre}</p>
        <div class="box-tech-btn">
            <button class="btn-tech-learn btn btn-success">Learn</button>
            <button class="btn-list-remove btn btn-danger">Remove</button>
        </div>`

        boxMyTechZone.appendChild(tecnologia)
    });

    removerTechMyList()
    addTechLearning ()
}

function myListVacia () {
    const boxMyTechZone = document.querySelector('.my-tech-zone')

    const sinTech = document.createElement('div')
    sinTech.classList.add('box-sin-tech')
    sinTech.innerHTML = `
    <div class="box-agregar-tecnologia">
        <p class="sin-tech fs-4 fw-bold">You don't have technologies on your list</p>
        <div class="box-sin-tech-btn">
            <button class="btn-agregar-tech btn btn-outline-danger btn-lg fs-6">Add technology</button>
        </div>
    </div>`

    boxMyTechZone.appendChild(sinTech)

    sinTech.addEventListener('click', e => {
        if (e.target.classList.contains('btn-agregar-tech')) {
            paginaTecnologias()
            cargarTecnologias()
            clickBtnAddList()
        }
    })
}


function verificarMyListHome () {

    if (localStorage.getItem('myList1') === '' && localStorage.getItem('myList2') === '' && localStorage.getItem('myList3') === '' && localStorage.getItem('myList4') === '') {
        myListVacia()
    } else {
        buscarEnDatabase()
    }

}

function removerTechMyList () {
    const boxMyTechZone = document.querySelector('.my-tech-zone');

    boxMyTechZone.addEventListener('click', e => {
        if (e.target.classList.contains('btn-list-remove')) {
            const techRemove = e.target.parentElement.parentElement.querySelector('.title-tech').textContent;

            removerTechMyListWithClick (techRemove)
        }
    })
}

function removerTechMyListWithClick (eTarget) {

            if ( localStorage.getItem('myList1') === eTarget ) {
                localStorage.setItem('myList1', '')
            } else if ( localStorage.getItem('myList2') === eTarget ) {
                localStorage.setItem('myList2', '')
            } else if ( localStorage.getItem('myList3') === eTarget ) {
                localStorage.setItem('myList3', '')
            } else if ( localStorage.getItem('myList4') === eTarget ) {
                localStorage.setItem('myList4', '')
            }

            agregarTechAList()
            limpiarHTMLMyList()
            verificarMyListHome()
}

function addTechLearning () {
    const boxMyTechZone = document.querySelector('.my-tech-zone');

    boxMyTechZone.addEventListener('click', e => {
        if (e.target.classList.contains('btn-tech-learn')) {
            const techToLearn = e.target.parentElement.parentElement.querySelector('.title-tech').textContent;

            localStorage.setItem('learning', techToLearn)
            verificarLearning()
            
            removerTechMyListWithClick(techToLearn)
        }
    })
}

function limpiarHTMLMyList () {
    const boxMyTechZone = document.querySelector('.my-tech-zone');
    boxMyTechZone.innerHTML = ''
}