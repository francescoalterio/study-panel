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
    clickCompletedTask ()
    clickEditTaks ()
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
    } else if (taskName.value.indexOf('<') > -1 || taskName.value.indexOf('>') > -1 || taskName.value.indexOf('/') > -1 || taskDescription.value.indexOf('<') > -1 || taskDescription.value.indexOf('>') > -1 || taskDescription.value.indexOf('/') > -1) {
        console.error('Caracteres no validos')
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
            EliminarTask(e.target.parentNode.parentNode.getAttribute('id'), e.target.parentNode.parentNode.querySelector('.name-task').textContent)
        } else if ( e.target.classList.contains('fa-trash-alt') ) {
            EliminarTask(e.target.parentNode.parentNode.parentNode.getAttribute('id'), e.target.parentNode.parentNode.parentNode.querySelector('.name-task').textContent)
        }
    })
}

function eliminarDelLocalTask (idEliminar, nameEliminar) {
    console.log(idEliminar)
    const copiaTaskLocal = JSON.parse(localStorage.getItem('task'))

    const copiaTaskEliminated = copiaTaskLocal.filter( e => e.currentId !== idEliminar && e.name !== nameEliminar)

    console.log(copiaTaskEliminated)

    localStorage.setItem('task', JSON.stringify(copiaTaskEliminated) )
}

function EliminarTask (id, name) {
    const taskEliminar = document.querySelectorAll('.task')

    taskEliminar.forEach( element => {
        if (element.querySelector('.name-task').textContent == name && element.getAttribute('id') == id) {
            element.remove()
            eliminarDelLocalTask (id, name)
        }
    })
    
}

function clickCompletedTask () {
    const containerTask = document.querySelector('.container-task')

    containerTask.addEventListener('click', e => {
        if (e.target.classList.contains('btn-completed-task')) {
            verificacionTaskCompleted(e.target.parentNode.parentNode)
            EliminarTask(e.target.parentNode.parentNode.getAttribute('id'), e.target.parentNode.parentNode.querySelector('.name-task').textContent)
            
        } else if (e.target.classList.contains('fa-check')) {
            verificacionTaskCompleted(e.target.parentNode.parentNode.parentNode)
            EliminarTask(e.target.parentNode.parentNode.parentNode.getAttribute('id'), e.target.parentNode.parentNode.parentNode.querySelector('.name-task').textContent)
        }
    })
}

function verificacionTaskCompleted (target) {
    const taskCompleted = {
        name: target.querySelector('.name-task').textContent,
        description: target.querySelector('.description-task').textContent,
        completed:true,
    }
    
    if (localStorage.getItem('taskCompleted') === null) {
        localStorage.setItem('taskCompleted', JSON.stringify([]))

        const copiaTaskCompletedLocal = JSON.parse(localStorage.getItem('taskCompleted'))

        copiaTaskCompletedLocal.push(taskCompleted)
        localStorage.setItem('taskCompleted', JSON.stringify([]))
        localStorage.setItem('taskCompleted', JSON.stringify(copiaTaskCompletedLocal))

    } else if (localStorage.getItem('task') !== null) {
        const copiaTaskCompletedLocal = JSON.parse(localStorage.getItem('taskCompleted'))

        copiaTaskCompletedLocal.push(taskCompleted)
        localStorage.setItem('taskCompleted', JSON.stringify([]))
        localStorage.setItem('taskCompleted', JSON.stringify(copiaTaskCompletedLocal))

    }
}

function clickEditTaks () {
    const containerTask = document.querySelector('.container-task')

    containerTask.addEventListener('click', e => {
        if (e.target.classList.contains('btn-edit-task')) {
            
            crearVentanaEdit(e.target.parentNode.parentNode.querySelector('.name-task').textContent,e.target.parentNode.parentNode.querySelector('.description-task').textContent, e.target.parentNode.parentNode.getAttribute('id'))

        } else if ( e.target.classList.contains('fa-edit') ) {
            crearVentanaEdit(e.target.parentNode.parentNode.parentNode.querySelector('.name-task').textContent,e.target.parentNode.parentNode.parentNode.querySelector('.description-task').textContent, e.target.parentNode.parentNode.parentNode.getAttribute('id'))
        }
    })
}

function crearVentanaEdit (name, desc, id) {
    const containerPadre = document.querySelector('.container-padre')
    const ventanaEdit = document.createElement('div')
    ventanaEdit.classList.add('fondo-edit')
    ventanaEdit.innerHTML = `
    <div class="box-forms">
        <p class="fw-bold fs-3">Edit Task</p>
        <div class="box-name">
            <p class="name-edit fw-bold">Name:</p>
            <input type="text" class="edit-name-task">
        </div>
        <div class="box-desc">
            <p class="desc-edit fw-bold">Description:</p>
            <input type="text" class="edit-description-task">
        </div>
        <button class="edit-task btn btn-success">Edit</button>
    </div>`

    containerPadre.appendChild(ventanaEdit)

    const inputEditName = document.querySelector('.edit-name-task');
    const inputEditDesc = document.querySelector('.edit-description-task');
    const btnEdit = document.querySelector('.edit-task')

    inputEditName.setAttribute('placeholder', name)
    inputEditDesc.setAttribute('placeholder', desc)

    btnEdit.addEventListener('click', () => {

        if (inputEditName.value == '' || inputEditDesc.value == '') {
            console.error('campos obligatorios')
        } else {

            if (inputEditName.value.indexOf('<') > -1 || inputEditName.value.indexOf('>') > -1 || inputEditName.value.indexOf('/') > -1 || inputEditDesc.value.indexOf('<') > -1 || inputEditDesc.value.indexOf('>') > -1 || inputEditDesc.value.indexOf('/') > -1) {
                console.error('caracteres no validos')
            } else {
                editTaskLocal(name, desc, id, inputEditName.value, inputEditDesc.value) 
                ventanaEdit.remove()
            }
        }    
    })

}

function editTaskLocal (nameV, descV, id, nameN, descN) {
    const copiaTaskLocal = JSON.parse(localStorage.getItem('task'))

    const arregloMapeado = copiaTaskLocal.map( element => {
        if (element.name == nameV && element.currentId == id) {
            const newTask = {
                currentId:id,
                name:nameN,
                description: descN,
                completed: false
            }

            return newTask
        } else {
            return element
        }
    })

    localStorage.setItem('task', JSON.stringify([]))
    localStorage.setItem('task', JSON.stringify(arregloMapeado))

    limpiarHTMLTask()
    CrearTaskHTML()
}