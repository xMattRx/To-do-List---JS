let element = document.getElementsByTagName('button')[0]
element.addEventListener('click', adicionar)
let lista = document.getElementsByTagName('ul')[0]

function adicionar(e){
  e.preventDefault()
  let input = document.getElementsByTagName('input')[0]
  let value = input.value;
  let li = document.createElement('li');
  let item = `<input type="checkbox">${value}`;
  li.innerHTML = item
  lista.appendChild(li)
  input.value = ""
}