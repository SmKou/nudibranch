import '../styles.css'
import toggleSelect from './toggle-select'

toggleSelect({
    select: document.querySelector('.select'),
    toggle: document.querySelector('#toggle-select'),
    arrow: document.querySelector('#toggle-select span')
})