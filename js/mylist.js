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
            agregarTechALocal(e.target.parentElement.parentElement.querySelector('.title-tech').textContent) 

            agregarTechAList()
            console.log(myList)

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
            <button class="btn-learn btn btn-success">Learn</button>
            <button class="btn-add-list btn btn-danger">Remove</button>
        </div>`

        boxMyTechZone.appendChild(tecnologia)
    });
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
}


function verificarMyListHome () {

    if (localStorage.getItem('myList1') === '' && localStorage.getItem('myList2') === '' && localStorage.getItem('myList3') === '' && localStorage.getItem('myList4') === '') {
        myListVacia()
    } else {
        buscarEnDatabase()
    }

}

