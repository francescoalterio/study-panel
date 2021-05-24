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

        if ( localStorage.getItem('myList1') == '' ) {

        } else {
            myList.push(localStorage.getItem('myList1'))
        }

        if ( localStorage.getItem('myList2') == '' ) {

        } else {
            myList.push(localStorage.getItem('myList2'))
        }

        if ( localStorage.getItem('myList3') == '' ) {

        } else {
            myList.push(localStorage.getItem('myList3'))
        }

        if ( localStorage.getItem('myList4') == '' ) {

        } else {
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
        }
        
        agregarTechAList()
        console.log(myList)
    })
}


