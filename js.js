const menu = document.querySelectorAll('.tab-links button')
const content = document.querySelectorAll('.tab-content section')
content[0].classList.add('ativo')

function activeTab(index) {
    content.forEach((section) => {
        section.classList.remove('ativo')
    })
    content[index].classList.add('ativo')
}

menu.forEach((item, index) => {
    item.addEventListener('click', () => {
        activeTab(index)
    })
})

