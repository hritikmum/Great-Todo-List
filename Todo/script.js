// const formEl = document.querySelector(".form")

const inputElement =document.querySelector(".input")
console.log(inputElement.value)

const ulistElement= document.querySelector(".list")


const addBtn = document.querySelector(".btn");
// formEl.addEventListener("submit",(event)=>{
//     event.preventDefault();
//     // console.log(inputElement.value)
   
// }) 
addBtn.addEventListener("click",(event)=>{
    console.log(inputElement.value)
    toDolist()
    
})




const toDolist=()=>{
    let newTask = inputElement.value;
    const listElement = document.createElement("li")
    listElement.innerText = newTask;
    ulistElement.appendChild(listElement)
    inputElement.value=""
    
    const checkBox =document.createElement("div");
    checkBox.innerHTML = `<i class="fa-solid fa-square-check"></i>`;
    listElement.appendChild(checkBox)
    const trash = document.createElement("div")
    trash.innerHTML = `<i class="fa-solid fa-trash-can "></i>`;
    listElement.appendChild(trash)

    checkBox.addEventListener("click",()=>{
        listElement.classList.toggle("checked")
    })
    trash.addEventListener("click",()=>{
        listElement.remove()
    })

}