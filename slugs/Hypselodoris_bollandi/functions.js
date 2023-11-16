import './styles.css'

const toggleVersion = ({ toggle, main }) => {
    let version = false
    toggle.addEventListener('click', () => {
        main.classList.remove('version' + (version + 1))
        version = !version
        main.classList.add('version' + (version + 1))
        toggle.innerHTML = `${version + 1}`
    })
}

toggleVersion({
    toggle: document.getElementById('toggle-version'),
    main: document.querySelector('main')
})