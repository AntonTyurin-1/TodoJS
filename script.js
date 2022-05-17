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
	let div =  document.createElement('div')
	div.append(img)

   li.append(input, p, div)
	const ul = document.querySelector('ul')
	ul.prepend(li)
	return li 	
} 


function renderTasks(tasks) {
	tasks.forEach(item => {
		createListItem(item)
	})			
}
renderTasks(arrTasks)



function addTasks() {
	const formInput = document.querySelector('.form__input')

	const maxId = arrTasks.length

	const newTask = { id: maxId, text: formInput.value, complited: false }

	arrTasks.push(newTask)

	renderTasks(arrTasks)
	/* console.log(arrTasks) */
}

const formButton = document.querySelector('.form__btn')
formButton.addEventListener('click', addTasks)

/* 	-----------DELETE----------------------------------------------------- */

function delTask(id) {
	const arrDel = arrTasks.filter(elem => elem.id != id)
	renderTasks(arrDel)
}

const imgDel = document.querySelector('img')
imgDel.addEventListener('click', delTask)

