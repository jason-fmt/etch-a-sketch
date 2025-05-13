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
		square.style.background = getRandomColor()
	})
})

// Helper function to generate a random hex color
function getRandomColor() {
  const letters = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}