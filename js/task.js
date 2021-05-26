function verificarTaskLocal () {
    if (localStorage.getItem('task') === null) {
        localStorage.setItem('task', JSON.stringify([]))
        cargarListenersTask()
    } else if (localStorage.getItem('task') !== null) {
        cargarListenersTask()
        CrearTaskHTML ()
    }
}

function cargarListenersTask () {
    const btnAddTask = document.querySelector('.btn-add-task');

    btnAddTask.addEventListener('click', e => {
        getInputsValue()
    })

    clickRemoveTask ()
}

function getInputsValue () {
    const taskName = document.getElementById('input-name')
    const taskDescription = document.getElementById('input-description')

    const taskObject = {
        currentId: JSON.parse(localStorage.getItem('task')).lenght + 1,
        name: taskName.value,
        description: taskDescription.value,
        completed: false,
    }

    if (taskName.value === '' || taskDescription.value === '') {
        console.error('todos los campos son requeridos')
    } else {

        const arregloTask = JSON.parse( localStorage.getItem('task') )
        const filtradoArreglo= arregloTask.filter( e => e.currentId === e.currentId)
        const objectSeguro = filtradoArreglo[0]

        if (objectSeguro !== undefined) {

            taskObject.currentId = 

            arregloTask.push(taskObject)

            localStorage.setItem('task', JSON.stringify([]))
            localStorage.setItem('task', JSON.stringify(arregloTask))

            taskName.value = ''
            taskDescription.value = ''

            limpiarHTMLTask()
            CrearTaskHTML()
        } else {
            console.log('erwe')

            taskObject.currentId = 1
        
            const arregloTask = JSON.parse( localStorage.getItem('task') )

            arregloTask.push(taskObject)

            localStorage.setItem('task', JSON.stringify([]))
            localStorage.setItem('task', JSON.stringify(arregloTask))

            taskName.value = ''
            taskDescription.value = ''

            limpiarHTMLTask()
            CrearTaskHTML()
        }

    }

    

}

function CrearTaskHTML () {
    const containerTask = document.querySelector('.container-task')
    const arregloTaskLocal = JSON.parse( localStorage.getItem('task') ) 

    arregloTaskLocal.forEach(element => {
        const task = document.createElement('div');
        task.setAttribute('id', element.currentId)
        task.classList.add('task');
        task.innerHTML = `
        <p class="name-task fs-6 fw-bold">${element.name}</p>
        <p class="description-task fs-6 fw-bold">${element.description}</p>
        <div class="box-task-btn">
            <button class="btn-completed-task btn btn-primary btn-task"><i class="fas fa-check"></i></button>
            <button class="btn-edit-task btn btn-success btn-task"><i class="fas fa-edit"></i></button>
            <button class="btn-task-remove btn btn-danger btn-task"><i class="fas fa-trash-alt"></i></button>
        </div>`

        containerTask.appendChild(task)
    });
}

function limpiarHTMLTask () {
    const containerTask = document.querySelector('.container-task')
    containerTask.innerHTML = ''
}

function clickRemoveTask () {
    const containerTask = document.querySelector('.container-task')
    

    containerTask.addEventListener('click', e => {
        if (e.target.classList.contains('btn-task-remove')) {
            EliminarTask(e.target.parentNode.parentNode.getAttribute('id'))
        } else if ( e.target.classList.contains('fa-trash-alt') ) {
            EliminarTask(e.target.parentNode.parentNode.parentNode.getAttribute('id'))
        }
    })
}

function eliminarDelLocalTask (idEliminar) {
    console.log(idEliminar)
    const copiaTaskLocal = JSON.parse(localStorage.getItem('task'))

    const copiaTaskEliminated = copiaTaskLocal.filter( e => e.currentId != idEliminar)

    localStorage.setItem('task', JSON.stringify(copiaTaskEliminated) )
}

function EliminarTask (id) {
    const taskEliminar = document.getElementById(id)

    taskEliminar.remove()

    eliminarDelLocalTask (id)
}



