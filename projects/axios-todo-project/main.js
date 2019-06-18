function getRequst(){
    axios.get("https://api.vschool.io/moroniallred/todo")
    .then(response => {
        const todo = response.data
        createList(todo)
    })
    .catch(error =>{
        console.error(error); 
    })
}

function createList(todos){
    for(let i = 0; i < todos.length; i++){
        const div = document.createElement("div")
        const h1 = document.createElement("h1")
        const p1 = document.createElement("p")
        const img = document.createElement("img")
        h1.textContent = todos[i].title
        p1.textContent = todos[i].price
        // img.innerHTML = todos[i].imgUrl
        document.body.appendChild(div)
        document.body.appendChild(h1)
        document.body.appendChild(p1)
        document.body.appendChild(img)
   
        img.src= todos[i].imgUrl

        img.height = 
    }
}
getRequst()
