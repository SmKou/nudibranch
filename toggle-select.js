const toggleSelect = ({ select, toggle, arrow}) => {
    toggle.addEventListener('click', () => {
        const isExpanded = select.classList.contains('expand')

        arrow.classList.remove(isExpanded ? 'open' : 'closed')
        arrow.classList.add(isExpanded ? 'closed' : 'open')

        if (isExpanded)
            select.classList.remove('expand')
        else
            select.classList.add('expand')
    })

    select.addEventListener('mouseleave', () => {
        select.classList.remove('expand')

        arrow.classList.remove('open')
        arrow.classList.add('closed')
    })
}

export default toggleSelect