function mensajeDominatedMover (nameTech) {
    const mensajeDominated = document.querySelector('.mensaje-dominated')
    const mensajeCambiante = document.querySelector('.mensaje-cambiante')

    mensajeCambiante.textContent = `
    Congratulations, you have learned: ${nameTech}`

    mensajeDominated.classList.add('mensaje-dominated-agregar')

    mensajeDominated.addEventListener('click', e => {
        if (e.target.classList.contains('x') || e.target.classList.contains('fa-times')) {
            mensajeDominated.classList.remove('mensaje-dominated-agregar')
        }
    })
}

