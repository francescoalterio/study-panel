function CrearTaskCompletedHTML () {
    const containerTask = document.querySelector('.container-task-completed')
    const arregloTaskCompletedLocal = JSON.parse( localStorage.getItem('taskCompleted') ) 
    let i = 1
    let iL = 1

    arregloTaskCompletedLocal.forEach(element => {
        const task = document.createElement('div');
        const hr = document.createElement('hr')
        hr.classList.add('hr-completed')
        
        task.setAttribute('id', i++)
        task.classList.add('task');
        task.innerHTML = `
        <p class="name-task-completed fs-6 fw-bold">${element.name}</p>
        <p class="description-task-completed fs-6 fw-bold">${element.description}</p>
        <div class="box-task-btn">
            <button class="btn-task-remove btn btn-danger btn-task"><i class="fas fa-trash-alt"></i></button>
        </div>`

        containerTask.appendChild(task)
        containerTask.appendChild(hr)
    });


    arregloTaskCompletedLocal.forEach( element => {
        console.log('erwe')
        const copiaCompletedTask = JSON.parse(localStorage.getItem('taskCompleted'))
        copiaCompletedTask.shift()
        element.currentId = iL++
        copiaCompletedTask.push(element)
        localStorage.setItem('taskCompleted', JSON.stringify(copiaCompletedTask))
    })

    clickRemoveCompletedTask ()
}

function clickRemoveCompletedTask () {
    const containerTaskCompleted = document.querySelector('.container-task-completed')
    

    containerTaskCompleted.addEventListener('click', e => {
        if (e.target.classList.contains('btn-task-remove')) {
            eliminarTaskCompleted(e.target.parentNode.parentNode.getAttribute('id'))
            console.log(e.target)
        } else if ( e.target.classList.contains('fa-trash-alt') ) {
            eliminarTaskCompleted(e.target.parentNode.parentNode.parentNode.getAttribute('id'))
            console.log(e.target)
        }
    })
}

function eliminarTaskCompleted (id) {
    const taskEliminar = document.querySelectorAll('.task')

    taskEliminar.forEach( element => {
        if (element.getAttribute('id') == id) {
            element.remove()
            eliminarDelLocalTaskCompleted (id)
        }
    })
    
}

function eliminarDelLocalTaskCompleted (idEliminar) {
    console.log(idEliminar)
    const copiaTaskLocal = JSON.parse(localStorage.getItem('taskCompleted'))

    const copiaTaskEliminated = copiaTaskLocal.filter( e => e.currentId != idEliminar)

    localStorage.setItem('taskCompleted', JSON.stringify(copiaTaskEliminated) )
}