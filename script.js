let arrTasks = []	

/* 	-----------CREATE---------------------------------------------------------- */

function createListItem(task) {
   let li = document.createElement('li')
	li.classList.add('list__item')

   let input = document.createElement('input')
   
	input.type = 'checkbox'
	input.checked = task.complited
	input.classList.add('list__input')
	input.id = task.id
	

   let lable = document.createElement('lable') 
	lable.classList.add(`${task.complited ? 
	'.list__lable-textDecoration' : '.list__lable'}`)
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
	
	 console.log(task.text) 
	return li 	
} 

/* 	-----------RENDER----------------------------------------------------- */

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

	const newTask = { id: maxId, text: formInput.value, complited: false}

	arrTasks.push(newTask)

	renderTasks(arrTasks)

	localStorage.setItem(formInput.value, JSON.stringify(newTask))
   let newT = localStorage.getItem(formInput.value)
   let localS = JSON.parse(newT)
	
	
}

const formButton = document.querySelector('.form__btn')
formButton.addEventListener('click', addTasks)
formButton.addEventListener('keyup', function(event) {

	console.log(event.code) 
})
/* 	-----------CHECKED----------------------------------------------------- */

function checkInput(event) {
	let id = event.target.parentNode.id
	let newArr = arrTasks.map(elem => {
		if (elem.id = id) {
		return elem.complited = true
		}
	})

	arrTasks = newArr
	renderTasks(arrTasks)

}

/* 	-----------DELETE----------------------------------------------------- */

function delTask(event) {
	let id = event.target.parentNode.parentNode.id
	let arrDel = arrTasks.filter(elem => elem.id != id)
	arrTasks = arrDel
	renderTasks(arrTasks)
}

/* 	-----------ALL----------------------------------------------------- */

/* function checkedTask(item) {
	let all = arrTasks.filter(item => function () {
		if (item.complited == true) {
			let btn2 = document.querySelector('.btn2')
			btn2.addEventListener('click', checkedTask)
		}
		else if (item.complited !== true) {
			let btn3 = document.querySelector('.btn3')
			btn3.addEventListener('click', checkedTask)
		}
		let btn1 = document.querySelector('.btn1')
		btn1.addEventListener('click', checkedTask)
	})
	 arrTasks = all 
	renderTasks(arrTasks)
	console.log(arrTasks)
}
		 */




/* ------------------------- */

localStorage.setItem('task', JSON.stringify(arrTasks))
let newT = localStorage.getItem('task')
let localS = JSON.parse(newT)
