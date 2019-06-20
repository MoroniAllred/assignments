const todoForm = document.todoForm

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
    console.log(todos)
    for(let i = 0; i < todos.length; i++){
        const div = document.createElement("div")
        const finisedbox = document.createElement("input")
        const h1 = document.createElement("h1")
        const p1 = document.createElement("span")
        const img = document.createElement("img")
        const finised = document.createElement("span")
        const descrip = document.createElement("h3")
        const $$ = document.createElement("span")
        const deleteBut = document.createElement("button")

        finisedbox.type = "checkbox"
        h1.textContent = todos[i].title
        p1.textContent = todos[i].price
        descrip.textContent = todos[i].description
        deleteBut.textContent = "delete"
        finised.textContent = "finished:"
        finisedbox.checked = todos[i].completed
        $$.textContent = "$"
        if(finisedbox.checked === true){
        }
        finisedbox.addEventListener("click", function(event){
            h1.classList.add("strike")    
            axios.put("https://api.vschool.io/moroniallred/todo/" + todos[i]._id, {"completed": !todos[i].completed})
            .then()
            .catch(error =>{
                console.error(error);
                })  
        })
        deleteToDo(deleteBut, finisedbox, todos[i])
        img.src= todos[i].imgUrl
        div.classList.add("todo")
        div.appendChild(h1)
        div.appendChild(descrip)
        div.appendChild($$)
        div.appendChild(p1)
        div.appendChild(img)
        div.appendChild(finised)
        div.appendChild(finisedbox)
        div.appendChild(deleteBut)
        document.getElementById("appendParent").appendChild(div)
    }
}

function deleteToDo(button, checkedBox, todos){
    button.addEventListener("click", function(event){
      if(checkedBox.checked === true){
          axios.delete("https://api.vschool.io/moroniallred/todo/" + todos._id,)
         .then(function(){
            document.getElementById("appendParent").innerHTML = ""
            getRequst()
         })
         .catch(error => {
             console.error(error);
            })
        // getRequst()
        } 
    })
}

todoForm.addEventListener("submit", function (event){
    event.preventDefault()
     if(todoForm.title.value !== "" && !isNaN(todoForm.price.value)){
        axios.post("https://api.vschool.io/moroniallred/todo/", {
            title: todoForm.title.value,
            price: todoForm.price.value,
            description: todoForm.description.value,
            imgUrl: todoForm.image.value,
        })
        .then(function(){
            document.getElementById("appendParent").innerHTML = ""
            getRequst()
        
        })
        .catch()
        todoForm.title.value = ""
        todoForm.price.value = ""
        todoForm.description.value = ""
        todoForm.image.value = ""
    }
})

getRequst()