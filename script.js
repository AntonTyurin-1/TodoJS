let arrTasks = [		
]
/* 	-----------CREATE---------------------------------------------------------- */

function createListItem(task) {
   let li = document.createElement('li')
	li.classList.add('list__item')

   let input = document.createElement('input')
	input.type = 'checkbox'
	input.checked = task.complited
	input.classList.add('list__input')
	input.id = + new Date()

   let lable = document.createElement('lable') 
	lable.classList.add('list__text')
	lable.innerHTML = task.text
	lable.for = input.id
	/*  console.log(input.id) */
	
	
	let img = document.createElement('img')
	img.src = 'img/del.svg'
	img.alt = 'image'

	let div = document.createElement('div')
	div.append(img)
	div.addEventListener('click', delTask)

   li.append(input, lable, div)
	
	li.id = task.id
	
	/*  console.log()  */
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

	const maxId = + new Date()

	const newTask = { id: maxId, text: formInput.value, complited: false }

	arrTasks.push(newTask)

	renderTasks(arrTasks)
	/* console.log(arrTasks) */
}

const formButton = document.querySelector('.form__btn')
formButton.addEventListener('click', addTasks)

/* 	-----------DELETE----------------------------------------------------- */

function delTask(event) {
	let id = event.target.parentNode.parentNode.id
	let arrDel = arrTasks.filter(elem => elem.id != id)
	arrTasks = arrDel
	renderTasks(arrTasks)
	/* console.log(arrDel) */
}

/* 	-----------ALL----------------------------------------------------- */

function allTask() {
let all = arrTasks.filter(item => item.complited = true)

arrTasks = all
renderTasks(arrTasks)
console.log(arrTasks)

}const btn2 = document.querySelector('.btn2')
 btn2.addEventListener('click', allTask)