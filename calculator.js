
function createButtons (num, texts){
const buttonsBox = document.getElementById('buttonsbox');

for (let i = 0; i <= num; i++) {
  const newBox = document.createElement('div');
  const display = document.getElementById('display');

  newBox.id = `btn ${i}`;
  newBox.classList.add('box')
  newBox.style.width =`24.3%`
  newBox.style.height = `19%`;
  newBox.style.margin = `2px`;
  newBox.style.borderRadius = `15px`
  newBox.style.backgroundColor =`#55ffff`
  newBox.style.display = `flex`;
  newBox.style.alignItems =`center`;
  newBox.style.justifyContent =`center`;
  newBox.style.fontSize = `30px`
  newBox.style.fontStyle = `Arial`
  newBox.textContent = texts[i];
  buttonsBox.appendChild(newBox);

  newBox.addEventListener('mouseover',()=>{
    newBox.style.backgroundColor = `#f22`;
    newBox.style.transform =`scale(1.1)`;
  })

  newBox.addEventListener('mouseout',()=>{
    newBox.style.backgroundColor = `#55ffff`;
    newBox.style.transform =`scale(1)`;
  })

  newBox.addEventListener('click',()=>{
    display.textContent = `${newBox.textContent}`
    
  })




}
}



const btnText = [
    '%', 'ce', 'c', '<=',7,8,9,'*',4,5,6,'+',1,2,3,
    '-','+/-',0,'.','='
]
createButtons(19,btnText);

