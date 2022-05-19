const arrTasks = [		
]
/* 	-----------CREATE---------------------------------------------------------- */

function createListItem(task) {
   const li = document.createElement('li')
	li.classList.add('list__item')

   const input = document.createElement('input')
	input.type = 'checkbox'
	input.classList.add('list__input')

   const p = document.createElement('p') 
	p.classList.add('list__text')
	p.innerHTML = task.text
	
	const img = document.createElement('img')
	
   img.src = 'img/del.svg'
	img.alt = 'image'

	let div = document.createElement('div')
	div.append(img)
	div.addEventListener('click', delTask)

   li.append(input, p, div)
	
	li.id = task.id
	
	/* console.log() */
	return li 	
} 


function renderTasks(tasks) {
	const ul = document.querySelector('ul')
	ul.innerHTML = ''
	tasks.forEach(item => {
		let li = createListItem(item)
		ul.prepend(li)
	})
}
renderTasks(arrTasks)

/* 	-----------ADD----------------------------------------------------- */

function addTasks() {
	const formInput = document.querySelector('.form__input')

	const maxId = new Date()

	const newTask = { id: + maxId, text: formInput.value, complited: false }

	arrTasks.push(newTask)

	renderTasks(arrTasks)
	/* console.log(arrTasks) */
}

const formButton = document.querySelector('.form__btn')
formButton.addEventListener('click', addTasks)

/* 	-----------DELETE----------------------------------------------------- */

function delTask(event) {
	let id = event.target.parentNode.parentNode.id
	const arrDel = arrTasks.filter(elem => elem.id != id)
	renderTasks(arrDel)
	console.log(event.target.parentNode.parentNode.id)
}



 
