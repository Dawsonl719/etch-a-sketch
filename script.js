const grid = document.querySelector('.grid');

createGrid = () => {
  for (let i = 0; i < 256; i++) {
      const div = document.createElement('div');
      div.classList.add('cell');
      div.addEventListener('mouseover', function(event){
          event.target.style.backgroundColor = 'black';
      })
      grid.appendChild(div); 
  }
};

function removeAllChildNodes(parent){
  while(parent.firstChild){
      parent.removeChild(parent.firstChild);
  }
}

document.querySelector('#changeSize').addEventListener('click', function(){
  let newSize = prompt('Enter grid size (1-100)');
  removeAllChildNodes(grid);
  grid.setAttribute('style', `grid-template-columns: repeat(${newSize}, 2fr); grid-template-rows: repeat(${newSize}, 2fr);`);
  for (let i = 0; i < newSize*newSize; i++) {
    const div = document.createElement('div');
    div.classList.add('cell');
    div.addEventListener('mouseover', function(event){
        event.target.style.backgroundColor = 'black';
    })
    grid.appendChild(div); 
}
})

createGrid();
