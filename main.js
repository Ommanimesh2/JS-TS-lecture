const dog=document.createElement('div');
const cat=document.querySelector('.cat')
dog.innerHTML='How are you'
cat.appendChild(dog);
console.log(cat)