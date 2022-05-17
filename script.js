const arrTasks = [
	{ id: 0, text: 'Купить хлеб', complited: false },
	{ id: 1, text: 'Купить масло', complited: false },
]
	
function createListItem(renderTasks) {
   const li = document.createElement('li')
	li.classList.add('list__item')

   const input = document.createElement('input')
	input.type('checkbox')
	input.classList.add('list__input')

   const p = document.createElement('p') 
	p.classList.add('list__text')
	/* p.innerHTML = newTask.text */
	
	const img = document.createElement('img')
	img.src = 'img/del.svg'
	img.alt = 'image'
	let div =  document.createElement('div')
	div.append(img)

   li.prepend(input, p, div)
	const ul = document.querySelector('ul')
	ul.prepend(li)
	return li	
}


function renderTasks() {
	arrTasks.forEach(item => {
		createListItem(item)
	})			
}



function addTasks() {
	const formInput = document.querySelector('.form__input')

	const maxId = arrTasks.length

	const newTask = { id: maxId, text: formInput.value, complited: false }

	arrTasks.push(newTask)
	
	renderTasks()
}

const formButton = document.querySelector('.form__btn')
formButton.onclick = function() {
	createListItem()
}


