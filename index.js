let selectedColor = 'blue'
const painting = document.querySelector('.painting')
const choice = document.querySelector('.palette')

choice.addEventListener('mouseover', function(e){
    selectedColor = e.target.id
})

painting.addEventListener('click', function(e){
    e.target.style.backgroundColor = selectedColor
})