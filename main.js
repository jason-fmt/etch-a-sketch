const container = document.querySelector('.container')

function generatePad(size) {
  container.innerHTML = ''

	for (let row = 0; row < size; row++) {
		const rowDiv = document.createElement('div')
		rowDiv.classList.add('row-div')

		for (let col = 0; col < size; col++) {
			const squareDiv = document.createElement('div')
			squareDiv.classList.add('square-div')
      squareDiv.style.width = `${800/size}px`
      squareDiv.style.height = `${800/size}px`
			rowDiv.appendChild(squareDiv)
		}
		container.appendChild(rowDiv)
	}

	const squareDivs = document.querySelectorAll('.square-div')

	squareDivs.forEach(square => {
		square.addEventListener('mouseover', () => {
			square.style.background = getRandomColor()
		})
	})
}

// Helper function to generate a random hex color
function getRandomColor() {
	const letters = '0123456789ABCDEF'
	let color = '#'
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)]
	}
	return color
}

const btn = document.querySelector('button')
btn.addEventListener('click', () => {
	let size = prompt('Please enter a number from 2 - 100')

	while (size < 2 || size > 100) {
		size = prompt('Please enter a valid number from 2 - 100')
	}

	generatePad(size)
})
