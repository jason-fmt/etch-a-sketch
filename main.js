// Default size given by the instructions
const SIZE = 16

const container = document.querySelector('.container')

for (let row = 0; row < SIZE; row++) {
	const rowDiv = document.createElement('div')
	rowDiv.classList.add('row-div')

	for (let col = 0; col < SIZE; col++) {
		const squareDiv = document.createElement('div')
		squareDiv.classList.add('square-div')
		rowDiv.appendChild(squareDiv)
	}
	container.appendChild(rowDiv)
}

const squareDivs = document.querySelectorAll('.square-div')

squareDivs.forEach(square => {
	square.addEventListener('mouseover', () => {
		square.style.background = 'red'
	})

  square.addEventListener('mouseout', () => {
    square.style.background = ''
  })
})
