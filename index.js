let a;
var b;
c=5;
console.log(c)
names="oasjodfodf"
d=2
console.log(names+d)

// const cat =document.querySelector('.cat')
// console.log(cat)

dothis(4)

function dothis(a){
    console.log(a)
}

const t=(a)=>{
console.log(a)
}

const newElem=document.querySelector('.dog')
const btn=document.querySelector('.btn')
const newElem3=document.querySelectorAll('.cat')
const newElem2=document.querySelector('#omm')
console.log(newElem3)
for(let i=0; i<newElem3.length;i++){
    newElem3[i].innerHTML='omm'
}
console.log(newElem3)
btn.addEventListener('click', async(e)=>{
   const users=await fetchUsers()
   users.users.forEach((user)=>{
       const userRow= document.createElement('div')
       userRow.innerHTML=user.firstName
       newElem.appendChild(userRow)
   })

})

setTimeout(() => {
    console.log(4+34)
    newElem3.forEach((e)=>{
        e.style.color="red"
    
    })
}, 5000);

setInterval(() => {
    console.log("interval")
}, 500);

fetch('https://dummyjson.com/users').then((e)=>console.log()).catch((e)=>{console.log("errror")})
async function fetchUsers(){
    const data= await fetch('https://dummyjson.com/users')
    const realdata = await data.json()
    console.log(realdata)
    return realdata

}

fetchUsers()