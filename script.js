var list = document.getElementById('list')
var toDoList = document.getElementById('to-do-list')
var markAsRead = document.getElementById('mark-as-read')

class ToDoList{

    constructor(messege){

        this.messege = messege
        this.div = document.createElement('div')
        this.markAsReadBtn = document.createElement('button')
        this.readSpan = document.createElement('span')
        this.deleteSpan = document.createElement('span')
        this.deleteBtn = document.createElement('button')
    }

    createList(){

        this.div.innerHTML = this.messege
        this.readSpan.innerText = 'Mark As Read'
        this.deleteSpan.innerText = 'Delete'
        this.readSpan.classList = ['show']
        this.deleteSpan.classList = ['show']
        this.markAsReadBtn.classList = ['mark-as-read-btn']
        this.deleteBtn.classList = ['delete-btn']
        this.markAsReadBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M9.55 17.85 3.975 12.3l1.175-1.175 4.4 4.4 9.35-9.35 1.175 1.175Z"/></svg>'
        this.deleteBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M7.525 20.8q-.975 0-1.625-.65t-.65-1.625V5.9h-1V4.25h4.7v-.975h6.15v.975h4.7V5.9h-1v12.625q0 .975-.65 1.625t-1.625.65ZM17.15 5.9H6.9v12.625q0 .25.188.437.187.188.437.188h9q.25 0 .438-.188.187-.187.187-.437ZM9.275 17.125h1.65v-9.2h-1.65Zm3.85 0h1.65v-9.2h-1.65ZM6.9 5.9v13.25-.625Z"/></svg>'
        this.markAsReadBtn.appendChild(this.readSpan)
        this.deleteBtn.appendChild(this.deleteSpan)
        this.div.appendChild(this.markAsReadBtn)
        this.div.appendChild(this.deleteBtn)
        this.div.classList = ['todo']
        toDoList.appendChild(this.div)

        this.markAsReadBtn.addEventListener('click', () => {

            this.div.classList = ['marked']
            markAsRead.appendChild(this.div)
        })

        this.deleteBtn.addEventListener('click', () => {

            if(markAsRead.contains(this.div)) markAsRead.removeChild(this.div)
            else toDoList.removeChild(this.div)
        })
    }
}

document.getElementById('btn').addEventListener('click', (e) => {

    e.preventDefault()

    if(!list.value) alert('give Input Values')
    else new ToDoList(list.value).createList()
    
    list.value = ''
})
